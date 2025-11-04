public Mono<InsuranceStatusRes> getRiderInsuranceStatus(String loginId, String sellerCode, String apiKey) throws Exception {
    // 1️⃣ apiKey 복호화 및 검증
    String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
    log.info("decrypt : {}", decryptedApiKey);

    if (!sellerCode.equals(decryptedApiKey)) {
        return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
    }

    // 2️⃣ 라이더 조회
    return businessRiderInfoRepository.findByLoginId(loginId)
            .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
            .flatMap(rider -> {
                String status = (String) rider.get("ri_insu_status");
                String st = status.substring(1, 2);
                String resultCode = status.substring(status.length() - 1);
                String resultProgress = null;
                String resultMessage = "요청 진행중";

                // 상태 코드별 진행 단계 지정
                switch (st) {
                    case "1": resultProgress = "가입동의"; break;
                    case "2":
                    case "3": resultProgress = "언더라이팅"; break;
                    case "4": resultProgress = "계약체결이해동의"; break;
                    case "5": resultProgress = "기명대기"; break;
                    case "6": resultProgress = "기명요청"; break;
                    case "7":
                    case "8": resultProgress = "기명취소"; break;
                    case "9": resultProgress = "증권만료"; break;
                }

                HashMap<String, Object> param = new HashMap<>();
                param.put("riId", rider.get("ri_id"));
                param.put("rrRejectState", status);

                // 3️⃣ 반려 코드 관련 처리
                if (resultCode.equals("3") || resultCode.equals("4")) {
                    return historyMapper.findByRiderAndStatusOrderCrd(param)
                            .flatMap(rejectCode ->
                                rejectReasonMapper.findByCciCode(rejectCode)
                                    .map(rejectMsg -> new InsuranceStatusRes(resultProgress, resultCode, rejectMsg))
                            );
                }

                // 4️⃣ 성공 상태
                if (resultCode.equals("2")) {
                    resultMessage = "성공";
                }

                // 5️⃣ 증권만료 상태
                if (st.equals("9") && resultCode.equals("9")) {
                    resultMessage = "증권이 만료된 기사 혹은 갱신 거절자";
                }

                // 기본 리턴
                return Mono.just(new InsuranceStatusRes(resultProgress, resultCode, resultMessage));
            });
}
