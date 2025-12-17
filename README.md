//@Scheduled(cron = "00 45 20 * * *") //초 분 시 일 월 요일
public Mono<Void> signUpRequest() {

    Flux<RiderInfoDto> riders =
            riderMapper.findRequestsRiderByInsuranceStatusYesterday("051");

    return riders
            .filter(r -> r.getSiPolicyNumber() != null && !r.getSiPolicyNumber().isEmpty())
            .flatMap(r -> {

                // 보험 상태 업데이트
                Mono<RiderInsuranceDto> insuranceMono =
                        riderInsuranceHistoryMapper.findByRiderId(r.getRiId(), r.getRiState())
                                .map(dto -> {
                                    dto.updateEndorsementRequestTime();
                                    return dto;
                                });

                // 암호화 시작
                Mono<KbSignUpReq> signUpReqMono = Mono.fromCallable(() -> {
                    KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                    String ssn = kbSignUpReq.getSsn();
                    String rawSsn = ssnDecode(ssn);
                    String encodeSsn = kbSsnEncode(rawSsn);

                    kbSignUpReq.updateSsn(encodeSsn);
                    return kbSignUpReq;
                });

                return Mono.zip(insuranceMono.defaultIfEmpty(null), signUpReqMono)
                        .map(tuple -> new Object[] {
                                r.getRiState(),
                                tuple.getT1(),
                                tuple.getT2()
                        });
            })
            .collectList()
            .flatMap(list -> {

                List<KbSignUpReq> signUpRequests = new ArrayList<>();
                List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
                List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();

                for (Object[] obj : list) {
                    Integer riState = (Integer) obj[0];
                    RiderInsuranceDto insuranceDto = (RiderInsuranceDto) obj[1];
                    KbSignUpReq signUpReq = (KbSignUpReq) obj[2];

                    signUpRequests.add(signUpReq);

                    if (insuranceDto != null) {
                        if (riState == 4) {
                            insuranceHistoriesRenew.add(insuranceDto);
                        } else {
                            insuranceHistories.add(insuranceDto);
                        }
                    }
                }

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

                return Mono.empty();
            });
}
