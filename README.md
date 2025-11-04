public Mono<String> sellerWithDrawRider(String loginId, String sellerCode, String apiKey) {

    DriverIdReq driverIdReq = new DriverIdReq(loginId, sellerCode);

    String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
    log.info("decrypt : {}", decryptedApiKey);
    if (!sellerCode.equals(decryptedApiKey)) {
        return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
    }

    return businessRiderInfoRepository.findByLoginIdAndSellerCode(loginId, sellerCode)
            .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
            .flatMap(rider -> {
                rider.setRi_state(1);

                // 유효성 검사 (void 메서드면 Mono.just로 감싸기)
                insuranceValidationCheck(rider);

                // 히스토리 조회
                return historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                        .flatMap(update -> {
                            log.info("insurance_history 데이터 쌓기");

                            update.setIhInsuState("071");
                            update.setRiId(rider.getRi_id());
                            update.updateTime();

                            // update / saveStateHistory 둘 다 Mono 기반이면 zip으로 합치기
                            return insuranceHistoryRepository.update(update)
                                    .then(insuranceHistoryRepository.saveStateHistory(update))
                                    .thenReturn("ok");
                        });
            });
}
