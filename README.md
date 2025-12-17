.then(
        Mono.defer(() -> {

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
