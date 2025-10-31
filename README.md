public Mono<RegistrationStatusRes> getRiderInsuranceStatus(RegistrationStatusReq req, String apiKey) throws Exception {
    // 복호화 및 seller_code 검증
    String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
    log.info("decrypt : {}", decryptedApiKey);
    if (!req.getSeller_code().equals(decryptedApiKey)) {
        throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
    }

    // 주민등록번호 형태 체크
    String rawSsn = aes256Decode(req.getDriver_ssn());
    ssnCheck(rawSsn);

    log.debug("rawSsn : {}", rawSsn);
    String aes128Ssn = aesEncode(rawSsn);
    System.out.println(rawSsn + " :: " + aes128Ssn + " :: " + req.getDriver_ssn());

    // DB 조회 (동기)
    List<Map<String, Object>> riderList = (List<Map<String, Object>>) businessRiderInfoRepository.findByRiderSsn(req.getName());
    if (riderList.isEmpty()) {
        throw new BusinessException(ErrorCode.NOT_FOUND_USER);
    }
    Map<String, Object> rider = checkSsn(riderList, rawSsn);

    String rider_loginId = (String) rider.get("ri_userid");
    String rider_sellerName = (String) rider.get("si_name");

    // ✅ 리액티브 타입으로 감싸서 리턴
    return Mono.just(new RegistrationStatusRes(rider_loginId, rider_sellerName));
}
