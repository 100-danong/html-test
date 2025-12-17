//@Scheduled(cron = "00 45 20 * * *") //초 분 시 일 월 요일
public Mono<Void> signUpRequest() {

    Flux<RiderInfoDto> riders =
            riderMapper.findRequestsRiderByInsuranceStatusYesterday("051");

    // 🔴 기존 위치 그대로 유지
    List<KbSignUpReq> signUpRequests = new ArrayList<>();
    List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
    List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();

    return riders
            .flatMap(r -> {

                // 증권번호가 있는 경우만 처리(추가 : 2025-04-18)
                if (r.getSiPolicyNumber() == null || r.getSiPolicyNumber().isEmpty()) {
                    return Mono.empty();
                }

                // 보험 상태 업데이트
                Mono<RiderInsuranceDto> insuranceMono =
                        riderInsuranceHistoryMapper.findByRiderId(r.getRiId(), r.getRiState())
                                .doOnNext(dto -> {
                                    dto.updateEndorsementRequestTime();

                                    if (r.getRiState() == 4) {
                                        insuranceHistoriesRenew.add(dto);
                                    } else {
                                        insuranceHistories.add(dto);
                                    }
                                });

                // 암호화 시작
                Mono<Void> signUpMono = Mono.fromRunnable(() -> {
                    KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                    String ssn = kbSignUpReq.getSsn();
                    try {
                        String rawSsn = ssnDecode(ssn);
                        String encodeSsn = kbSsnEncode(rawSsn);
                        kbSignUpReq.updateSsn(encodeSsn);
                        signUpRequests.add(kbSignUpReq);
                    } catch (Exception e) {
                        throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
                    }
                });

                // 🔴 기존 흐름 그대로: 보험 → 암호화
                return insuranceMono.then(signUpMono);
            })
            .then(Mono.fromRunnable(() -> {

                // 🔴 이후 로직 위치 / 순서 그대로
                log.info("기명등재 요청 대상 명단 : {}", signUpRequests);
                log.info("기명등재 요청 대상 인원 : {}", signUpRequests.size());

                /*KBRetrofitConfig<KbSignUpReq> KBRetrofitConfig = new KBRetrofitConfig<>();

                KBRetrofitConfig
                        .create(KbSendApi.class)
                        .kbApi5Retrofit(signUpRequests)
                        .execute()
                        .body();*/

                if (insuranceHistories.isEmpty()) {
                    log.info("(정규)기명요청신청 건 없음");
                } else {
                    riderInsuranceHistoryMapper
                            .riderInsuranceHistoryEndoUpdateAll(insuranceHistories);
                }

                if (insuranceHistoriesRenew.isEmpty()) {
                    log.info("(갱신)기명요청신청 건 없음");
                } else {
                    riderInsuranceHistoryMapper
                            .riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew);
                }
            }));
}
