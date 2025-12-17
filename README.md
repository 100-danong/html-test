public Mono<Void> signUpRequest() {

    return riderMapper
            .findRequestsRiderByInsuranceStatusYesterday("051")
            .collectList()
            .flatMap(riders -> {

                List<KbSignUpReq> signUpRequests = new ArrayList<>();
                List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
                List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();

                for (RiderInfoDto r : riders) {

                    if (r.getSiPolicyNumber() == null || r.getSiPolicyNumber().isEmpty()) {
                        continue;
                    }

                    RiderInsuranceDto riderInsurancedto =
                            riderInsuranceHistoryMapper
                                    .findByRiderId(r.getRiId(), r.getRiState())
                                    .block();

                    if (riderInsurancedto == null) {
                        continue;
                    }

                    riderInsurancedto.updateEndorsementRequestTime();

                    if (r.getRiState() == 4) {
                        insuranceHistoriesRenew.add(riderInsurancedto);
                    } else {
                        insuranceHistories.add(riderInsurancedto);
                    }

                    try {
                        KbSignUpReq kbSignUpReq = new KbSignUpReq(r);
                        String rawSsn = ssnDecode(kbSignUpReq.getSsn());
                        kbSignUpReq.updateSsn(kbSsnEncode(rawSsn));
                        signUpRequests.add(kbSignUpReq);
                    } catch (Exception e) {
                        return Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                    }
                }

                log.info("기명등재 요청 대상 명단 : {}", signUpRequests);
                log.info("기명등재 요청 대상 인원 : {}", signUpRequests.size());

                if (!insuranceHistories.isEmpty() && !insuranceHistoriesRenew.isEmpty()) {
                    return Mono.when(
                            riderInsuranceHistoryMapper
                                    .riderInsuranceHistoryEndoUpdateAll(insuranceHistories),
                            riderInsuranceHistoryMapper
                                    .riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew)
                    ).then();
                }

                if (!insuranceHistories.isEmpty()) {
                    return riderInsuranceHistoryMapper
                            .riderInsuranceHistoryEndoUpdateAll(insuranceHistories)
                            .then();
                }

                if (!insuranceHistoriesRenew.isEmpty()) {
                    return riderInsuranceHistoryMapper
                            .riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew)
                            .then();
                }

                return Mono.empty();
            });
}
