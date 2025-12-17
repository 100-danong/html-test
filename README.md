return riders
    .flatMap(r -> {

        log.info("1");

        if (r.getSiPolicyNumber() != null && !r.getSiPolicyNumber().isEmpty()) {

            return riderInsuranceHistoryMapper
                .findByRiderId(r.getRiId(), r.getRiState())
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
        Mono.defer(() -> {

            log.info("기명등재 요청 대상 명단 : {}", signUpRequests);
            log.info("기명등재 요청 대상 인원 : {}", signUpRequests.size());

            Mono<Void> normal =
                insuranceHistories.isEmpty()
                    ? Mono.empty()
                    : riderInsuranceHistoryMapper
                        .riderInsuranceHistoryEndoUpdateAll(insuranceHistories)
                        .then();

            Mono<Void> renew =
                insuranceHistoriesRenew.isEmpty()
                    ? Mono.empty()
                    : riderInsuranceHistoryMapper
                        .riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew)
                        .then();

            return Mono.when(normal, renew);
        })
    );
