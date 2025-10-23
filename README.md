    @PostMapping("/service/balance")
    @ApiOperation(value = "지점 포인트 조회", notes = "지점의 예납금을 조회합니다")
    public Mono<BalanceRes> getBalance(@RequestBody BalanceSearch balanceSearch,
                                       @RequestHeader("apiKey") String apiKey) throws Exception {
        return new BalanceRes(sellerService.getBalanceOfSeller(balanceSearch.getSeller_code(),apiKey));
    }
