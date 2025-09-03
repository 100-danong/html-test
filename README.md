public DrivingEndRes kb11th(Kb11thRequest kb11thRequest, String apiKey) throws Exception {

        drivingEnd.info("운행종료 파라미터 값 " + kb11thRequest.toString());

        CallInfo callInfo = null;

        //운행 완료 시간과 테이블 수정 시간 데이터 생성
        LocalDateTime callCompleteTime = null;

        RiderInfo riderInfo = null;
        InsuranceStatusRes resRiderInsurance = null;

        try {
            //apiKey 복호화, seller_code와 검증
            String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
            if (!kb11thRequest.getSeller_code().equals(decryptedApiKey)) {
                throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
            }

            //라이더의 보험 상태, 라이더ID, 운영사ID 조회
            riderInfo = callMapper.findByDriveridAndSellerID(kb11thRequest.getDriver_id(), kb11thRequest.getSeller_code()).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));            ;

            //라이더의 보험가입 진행상태에 따라 상태 메시지와 상태 코드, 거절 시 거절에 따른 거절 사유 반환
            resRiderInsurance = insuranceStatusRes(riderInfo.getRiId(), riderInfo.getRiInsuStatus(), "E");

            if (kb11thRequest.getDriver_enddate() != null) {
                callInfo = getCallInfoWithCallExistence(kb11thRequest.getCall_id(), kb11thRequest.getDriver_id());

                callCompleteTime = convertDate(kb11thRequest.getDriver_enddate());
            }
        } catch (BusinessException e) {
            CallInfoFailStart start = callFailMapper.findFailCallStart(kb11thRequest.getCall_id()).orElse(new CallInfoFailStart("0"));

            ErrorCode errorCode = null;

            // 운행시작 실패 테이블에 데이터가 없을 때
            if (start.getCifsCallId().equals("0")) {
                errorCode = e.getErrorCode();
            } else {
                errorCode = ErrorCode.valueOf(start.getCifsErrorCode());
            }

            if (kb11thRequest.getSeller_code().equals("194ea163e38") && errorCode.name().equals("ALREADY_COMPLETE") || kb11thRequest.getSeller_code().equals("c1f15172d8a") && errorCode.name().equals("ALREADY_COMPLETE")) {
                errorCode = e.getErrorCode();
            }

            CallInfoFailEnd end = CallInfoFailEnd.create(kb11thRequest, errorCode);

            callFailMapper.InsertCallFailEnd(end);

            DrivingEndRes endRes = new DrivingEndRes();

            if (start.getCifsCallId().equals("0")) {
                endRes.UpdateExceptionResponse(e.getErrorCode().getMessage(), e.getErrorCode().getStatus(), e.getErrorCode().getCode());
            } else {
                endRes.UpdateExceptionResponse(errorCode.getMessage(), errorCode.getStatus(), errorCode.getCode());
            }
            return endRes;
        }
