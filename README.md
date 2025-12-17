public Mono<Void> withDrawRiderBatch() {
    // 기명 취소한 내역 다 조회해온 다음에 내역 기반으로 라이더 조회해서 리스트로 만듬
    Flux<RiderInfoDto> riders =
            riderMapper.findRequestsRiderByInsuranceStatusYesterday("071");

    return riders
            .flatMap(r -> {
                // 라이더 기명취소 시간 업데이트
                Mono<RiderInsuranceDto> riderInsuranceDto;

                if (r.getRiState() == 2) {
                    riderInsuranceDto = riderInsuranceHistoryMapper.findByIdRenew(r.getRiId());
                } else {
                    riderInsuranceDto = riderInsuranceHistoryMapper.findById(r.getRiId());
                }

                return riderInsuranceDto
                        .doOnNext(RiderInsuranceDto::updateWithdrawRequestTime)
                        .map(dto -> {
                            KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                            // kb에 보낼 dto 만들어서 리스트에 저장
                            String ssn = kbSignUpReq.getSsn();
                            try {
                                String rawSsn = ssnDecode(ssn);
                                String encodeSsn = kbSsnEncode(rawSsn);
                                kbSignUpReq.updateSsn(encodeSsn);
                            } catch (Exception e) {
                                throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
                            }

                            if (r.getRiState() == 2) {
                                riderInsuranceHistoryMapper
                                        .riderInsuranceHistoryWithdrawUpdateRenew(dto);
                            } else {
                                riderInsuranceHistoryMapper
                                        .riderInsuranceHistoryWithdrawUpdate(dto);
                            }

                            return kbSignUpReq;
                        });
            })
            .collectList()
            .doOnNext(signUpRequests -> {
                log.info("기명등재 취소 요청 명단 : {}", signUpRequests);
                log.info("기명등재 취소 요청 인원 : {}", signUpRequests.size());

                //레트로핏으로 kb 측으로 전달
                /*KBRetrofitConfig<KbSignUpReq> KBRetrofitConfig = new KBRetrofitConfig<>();

                KBRetrofitConfig.create(KbSendApi.class)
                        .kbApi7Retrofit(signUpRequests)
                        .execute()
                        .body();*/
            })
            .then();
}
