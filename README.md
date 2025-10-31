    public Mono<RegistrationStatusRes> getRiderInsuranceStatus(RegistrationStatusReq req, String apiKey) throws Exception {
        //복호화 . sellecode랑 비교
        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}", decryptedApiKey);
        if (!req.getSeller_code().equals(decryptedApiKey)) {
            throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
        }

        // 주민등록번호 형태 체크 (13자리인지. 하이픈 없는지)
        String rawSsn = aes256Decode(req.getDriver_ssn());
        ssnCheck(rawSsn);

        log.debug("rawSsn : {}", rawSsn);
        System.out.println("rawSsn = " + rawSsn);
        String aes128Ssn = aesEncode(rawSsn);
        System.out.println("aes128Ssn = " + aes128Ssn);

        System.out.println(rawSsn + " :: " + aesEncode(rawSsn) + " :: " + req.getDriver_ssn());

        List<Map<String, Object>> riderList = (List<Map<String, Object>>) businessRiderInfoRepository.findByRiderSsn(req.getName());
        if (riderList.isEmpty()) {
            throw new BusinessException(ErrorCode.NOT_FOUND_USER);
        }
        Map<String, Object> rider = checkSsn(riderList, rawSsn);

        String rider_loginId = "";
        rider_loginId = (String) rider.get("ri_userid");

        String rider_sellerName = "";
        rider_sellerName = (String) rider.get("si_name");

        return new RegistrationStatusRes(rider_loginId, rider_sellerName);
    }
