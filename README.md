    public Mono<Void> signUpRequest() {
        Flux<RiderInfoDto> riders = riderMapper.findRequestsRiderByInsuranceStatusYesterday("051");

        List<KbSignUpReq> signUpRequests = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();

        return riders
                .flatMap(r -> {

                    log.info("1");

                    if (!r.getSiPolicyNumber().isEmpty()) {

                        return riderInsuranceHistoryMapper.findByRiderId(r.getRiId(), r.getRiState())
                                .flatMap(riderInsurancedto -> {

                                    log.info("2");

                                    riderInsurancedto.updateEndorsementRequestTime();

                                    if (r.getRiState() == 4) {
                                        insuranceHistoriesRenew.add(riderInsurancedto);
                                    } else {
                                        log.info("3");
                                        insuranceHistories.add(riderInsurancedto);
                                    }

                                    log.info("4");

                                    KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                                    try {
                                        String rawSsn = ssnDecode(kbSignUpReq.getSsn());
                                        kbSignUpReq.updateSsn(kbSsnEncode(rawSsn));
                                        signUpRequests.add(kbSignUpReq);
                                    } catch (Exception e) {
                                        return Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                                    }
                                    return Mono.empty();
                                });
                    }
                    return Mono.empty();
                })
                .then(
                        log.info("기명등재 요청 대상 명단 : {}", signUpRequests);
                        log.info("기명등재 요청 대상 인원 : {}", signUpRequests.size());

                        if (insuranceHistories.isEmpty()) {
                            log.info("(정규)기명요청신청 건 없음");
                        } else {
                            // 기명 요청시간 update
                            return riderInsuranceHistoryMapper.riderInsuranceHistoryEndoUpdateAll(insuranceHistories).then();
                        }

                        if (insuranceHistoriesRenew.isEmpty()) {
                            log.info("(갱신)기명요청신청 건 없음");
                        } else {
                            // 기명 요청시간 update
                            return riderInsuranceHistoryMapper.riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew).then();
                        }
                        
                );
    }
