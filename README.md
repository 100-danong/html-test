public Mono<RegistrationStatusRes> getRiderInsuranceStatus(RegistrationStatusReq req, String apiKey) {

    // 1. apiKey 검증 (동기)
    String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
    if (!req.getSeller_code().equals(decryptedApiKey)) {
        return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
    }

    // 2. 주민번호 복호화 + 형식 체크 (동기)
    String rawSsn = aes256Decode(req.getDriver_ssn());
    ssnCheck(rawSsn);  // 형식 맞지 않으면 여기서 예외 발생

    String aes128Ssn = aesEncode(rawSsn);
    log.info("rawSsn = {}, aes128Ssn = {}", rawSsn, aes128Ssn);

    // 3. 리액티브하게 rider 조회 + 주민번호 매칭
    return businessRiderInfoRepository.findByRiderSsn(req.getName())        // Flux<Map<String,Object>>
        .flatMap(rider -> {
            // 각 row의 주민번호 복호화 후 비교
            String enc = (String) rider.get("ri_ss_number");
            try {
                String decoded = aesDecode(enc);
                if (decoded.equals(rawSsn)) {
                    return Mono.just(rider);
                } else {
                    return Mono.empty();
                }
            } catch (Exception e) {
                return Mono.error(e);
            }
        })
        .next()  // 첫 매칭만 사용
        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
        .map(rider -> {
            String rider_loginId = (String) rider.get("ri_userid");
            String rider_sellerName = (String) rider.get("si_name");
            return new RegistrationStatusRes(rider_loginId, rider_sellerName);
        });
}
