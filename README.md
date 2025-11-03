    public Mono<InsuranceStatusRes> getRiderInsuranceStatus(String loginId, String sellerCode, String apiKey) throws Exception {
        //복호화 . sellecode랑 비교
        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}", decryptedApiKey);
        if (!sellerCode.equals(decryptedApiKey)) {
            throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
        }

        Map<String, Object> rider = businessRiderInfoRepository.findByLoginId(loginId).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));

        String status = (String) rider.get("ri_insu_status");

        String st = status.substring(1, 2);
        log.info("st", st);
        String resultProgress = null;

        String resultCode = status.substring(status.length() - 1);

        String resultMessage = "요청 진행중";

        HashMap<String, Object> param = new HashMap<>();
        param.put("riId", rider.get("ri_id"));
        param.put("rrRejectState", status);

        if (st.equals("1")) {
            resultProgress = "가입동의";
        }
        if (st.equals("2") || st.equals("3")) {
            resultProgress = "언더라이팅";
        }
        if (st.equals("4")) {
            resultProgress = "계약체결이해동의";
        }
        if (st.equals("5")) {
            resultProgress = "기명대기";
        }
        if (st.equals("6")) {
            resultProgress = "기명요청";
        }
        if (st.equals("7") || st.equals("8")) {
            resultProgress = "기명취소";
        }
        if (resultCode.equals("3") || resultCode.equals("4")) {

            String rejectCode = String.valueOf(historyMapper.findByRiderAndStatusOrderCrd(param));

            resultMessage = String.valueOf(rejectReasonMapper.findByCciCode(rejectCode));
        }
        if (resultCode.equals("2")) {
            resultMessage = "성공";
        }
        if (st.equals("9") && resultCode.equals("9")) {
            resultProgress = "증권만료";
            resultMessage = "증권이 만료된 기사 혹은 갱신 거절자";
        }
        return new InsuranceStatusRes(resultProgress, resultCode, resultMessage);
    }
