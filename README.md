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
        log.info("rawSsn = {}", rawSsn);
        String aes128Ssn = aesEncode(rawSsn);
        log.info("aes128Ssn = {}", aes128Ssn);

        log.info("{} :: {} :: {}",rawSsn ,aesEncode(rawSsn) , req.getDriver_ssn());

        List<Map<String, Object>> riderList = (List<Map<String, Object>>) businessRiderInfoRepository.findByRiderSsn(req.getName());
        if (riderList.isEmpty()) {
            throw new BusinessException(ErrorCode.NOT_FOUND_USER);
        }
        Map<String, Object> rider = checkSsn(riderList, rawSsn);

        String rider_loginId = "";
        rider_loginId = (String) rider.get("ri_userid");

        String rider_sellerName = "";
        rider_sellerName = (String) rider.get("si_name");

        return Mono.just(new RegistrationStatusRes(rider_loginId, rider_sellerName));
    }

        public Map<String, Object> checkSsn(List<Map<String, Object>> riderList, String ssn) {
        for (Map<String, Object> rider: riderList) {
            try {
                String decode_ssn = aesDecode((String) rider.get("ri_ss_number"));
                System.out.println("decode_ssn" + decode_ssn);
                if (decode_ssn.equals(ssn)) {
                    return rider;
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        throw new BusinessException(ErrorCode.NOT_FOUND_USER);
    }
