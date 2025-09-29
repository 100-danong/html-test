return insuranceBalanceHistoryService.saveAll(kbBalancesHistories)
        .then(Mono.just(new ResultDto("ok")))  // 성공 시
        .onErrorMap(e -> new BusinessException(ErrorCode.DB_INSERT_FAIL, e));
