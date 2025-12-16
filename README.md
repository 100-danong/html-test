public Mono<String> sellerWithDrawRider(String loginId, String sellerCode, String apiKey) throws Exception {

        /*DriverIdReq driverIdReq = new DriverIdReq(loginId, sellerCode);*/

        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}", decryptedApiKey);
        if (!sellerCode.equals(decryptedApiKey)) {
            return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
        }

        return businessRiderInfoRepository.findByLoginIdAndSellerCode(loginId, sellerCode)
                .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
                .flatMap(rider -> {
                    rider.setRi_state(1);

                    insuranceValidationCheck(rider);

                    return historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                            .flatMap(update -> {
                                log.info("insurance_history 데이터 쌓기");

                                update.setIhInsuState("071");
                                update.setRiId(rider.getRi_id());
                                update.updateTime();

                                return historyMapper.update(update)
                                        .then(historyMapper.saveStateHistory(update))
                                        .thenReturn("ok");
                            });
                });
    }
