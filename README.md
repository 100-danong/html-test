// Service
@Transactional(readOnly = true)
public Mono<Integer> getBalanceOfSeller(String sellerCode, String apiKey) {
    String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);

    if (!sellerCode.equals(decryptedApiKey)) {
        return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
    }

    return sellerMapper.findBySellerCode(sellerCode)   // Mono<SellerInfo>
        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)))
        .map(sellerInfo -> Long.valueOf(sellerInfo.getSi_balance()).intValue());
}

// Controller
@PostMapping("/service/balance")
@ApiOperation(value = "지점 포인트 조회", notes = "지점의 예납금을 조회합니다")
public Mono<BalanceRes> getBalance(@RequestBody BalanceSearch balanceSearch,
                                   @RequestHeader("apiKey") String apiKey) {
    return sellerService.getBalanceOfSeller(balanceSearch.getSeller_code(), apiKey)
            .map(BalanceRes::new);
}
