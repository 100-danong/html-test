    public String sellerWithDrawRider(String loginId, String sellerCode, String apiKey) throws Exception {

        DriverIdReq driverIdReq = new DriverIdReq(loginId, sellerCode);

        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}", decryptedApiKey);
        if (!sellerCode.equals(decryptedApiKey)) {
            throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
        }

        RiderInfo rider = businessRiderInfoRepository.findByLoginIdAndSellerCode(loginId,sellerCode).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
        rider.setRi_state(1);

        insuranceValidationCheck(rider);

        HistoriesSaveDto update = historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state()).block();

        log.info("insurance_history 데이터 쌓기");

        update.setIhInsuState("071");
        update.setRiId(rider.getRi_id());
        update.updateTime();

        insuranceHistoryRepository.update(update);

        insuranceHistoryRepository.saveStateHistory(update);

        return "ok";
    }
