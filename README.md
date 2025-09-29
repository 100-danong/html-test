public Mono<ResultDto> balanceListTotal(List<BalanceInsureReq> balanceInsureReqList){

    List<InsuranceBalanceHistory> kbBalancesHistories = balanceInsureReqList.stream()
        .map(balanceInsureReq -> {
            if(balanceInsureReq.getBalance().isBlank()){
                balanceInsureReq.setBalance("0");
            }
            if(balanceInsureReq.getUse_amt().isBlank()){
                balanceInsureReq.setUse_amt("0");
            }
            String convertDate = convertDate(balanceInsureReq.getDate());
            return KbBalancesHistoryDto.create(balanceInsureReq, convertDate).toEntity();
        })
        .collect(Collectors.toList());

    return insuranceBalanceHistoryService.saveAll(kbBalancesHistories)
        .flatMap(count -> {
            if(count <= 0){
                return Mono.error(new BusinessException(ErrorCode.DB_INSERT_FAIL));
            }
            return Mono.just(new ResultDto("ok"));
        });
}
