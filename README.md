// 운행시작
    public Mono<DrivingStartRes> kb10th(Kb10thRequest dto, String apiKey) throws Exception {

        // 다른 플랫폼에서 보내준 콜 아이디,온나에서 보내준 단일 콜아이디 -> ci_call_id
        // 온나에서 보내준 그룹 콜아이디 -> ci_recv_call_id
        // 우리가 채번한 그룹핑 아이디 -> gci_groupid
        drivingStart.info("운행시작 파라미터 값 " + dto.toString());

        RiderInfo riderInfo = null;
        InsuranceStatusRes resRiderInsurance = null;

        try {
            //api key 복호화
            String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
            if(!dto.getSeller_code().equals(decryptedApiKey)){
                throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
            }

            riderInfo = callMapper.findByDriveridAndSellerID(dto.getDriver_id(), dto.getSeller_code()).blockOptional().orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));

            //라이더의 보험가입 진행상태에 따라 상태 메시지와 상태 코드, 거절 시 거절에 따른 거절 사유 반환
            resRiderInsurance = insuranceStatusRes(riderInfo.getRi_id(), riderInfo.getRi_insu_status(), "S");

            //신규 운행인데 같은 ci_call_id가 있을 시 예외 발생
            int duplCount = callMapper.findByCallIdForDupl(dto.getCall_id()).block();

            if(duplCount != 0){
                throw new BusinessException(ErrorCode.DUPE_CALL_ID);
            }

            //라이더의 보험 상태, 라이더ID, 운영사ID 조회
            if (riderInfo.getRi_pay_status().equals("N")) {
                throw new BusinessException(ErrorCode.No_MONEY);
            } else if (riderInfo.getRi_state() == 9) {
                throw new BusinessException(ErrorCode.STOP_DELIVERY);
            }

        } catch (BusinessException e) {
            CallInfoFailStart start = CallInfoFailStart.create(dto,e.getErrorCode());
            callFailMapper.InsertCallFailStart(start);

            DrivingStartRes startRes = new DrivingStartRes();
            startRes.UpdateExceptionResponse(e.getErrorCode().getMessage(),e.getErrorCode().getStatus() ,e.getErrorCode().getCode());

            return Mono.just(startRes);
        }
        SellerInfo sellerInfo = sellerMapper.findBySellerCode(dto.getSeller_code()).block();

        //요청 dto에서 요청시간과 픽업시간이 넘어오지 않은 경우 현재시간으로 설정한다
        CallInfo callInfo = CallInfo.create(riderInfo.getRi_id(), dto, riderInfo.getRi_driver_id(), sellerInfo.getSi_cmp_code(), sellerInfo.getSi_policy_number());

        if(Optional.ofNullable((dto.getCall_requesttime())).isEmpty()) callInfo.setCi_req_delivery_time(LocalDateTime.now());
        if(Optional.ofNullable((dto.getPickup_time())).isEmpty()) callInfo.setCi_pickup_time(LocalDateTime.now());

        LocalDate yesterday = LocalDate.now().minusDays(1);

        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        LocalTime sales_time = sellerInfo.getSales_time();
        LocalDateTime now = LocalDateTime.parse(dto.getCall_appointtime(), format);
        LocalDate groupNow = now.toLocalDate();
        LocalDateTime sales_date = LocalDateTime.of(groupNow, sales_time);

        if (now.isBefore(sales_date)){
            groupNow = groupNow.minusDays(1);
        }

        callInfo.setSales_date(groupNow);

        // 온나 요청사항 20240217(테스트 필요), 운행 다음 날 전송시 체크
        if(dto.getSeller_code().equals("194ea163e38") && dto.getCall_appointtime().substring(0, 10).equals(String.valueOf(yesterday))) {
            // ri_user_id, call_appoint_time으로 마지막 묶음배송 검색
            callInfo.updateCallAppointtime(dto.getCall_appointtime());

            GroupCallInfo groupcallInfo = groupCallMapper.findGroupCallByriIdAndTime(riderInfo.getRi_id(), callInfo.getCi_appoint_time()).blockOptional().orElse(new GroupCallInfo("0"));
            // 묶음배송 유무 체크
            if(groupcallInfo.getGciGroupid().equals("0")) {
                // 없으면 어제 날짜로 채번
                String groupCallId = getGroupId(yesterday, riderInfo.getRi_id());

                callInfo.updateGroupId(groupCallId);
            } else {
                // 있으면 조회한 groupId 업데이트
                callInfo.updateGroupId(groupcallInfo.getGciGroupid());
            }
        } else {
/*            if (dto.getSeller_code().equals("1444432576f")) {
                List<String> leftOutCalls = callMapper.findNullCompleteTimeCallId(riderInfo.getRiDriverId());

                log.info("부릉 누락 건 : " + leftOutCalls);
                if(!leftOutCalls.isEmpty()){
                    String noCompleteTimeCiIds = String.join(",", leftOutCalls);
                    log.info(" incomplete data search start! ");
                    updateCompleteTime(noCompleteTimeCiIds, riderInfo.getRiId());
                }
            }*/

            CallCountInfo callCountInfo = getCallCountStart(groupNow, riderInfo.getRi_id(), dto.getCall_id(), sellerInfo.getSi_id());

            //진행중인 배송 조회하여 유무에 따라 그룹아이디 추출 및 그룹아이디 생성
            int chkCompleteCall = callMapper.findRunDeliveryByDriverId(dto.getDriver_id(), groupNow).block();
            drivingStart.info("end time check : {}", chkCompleteCall);

            String groupCallId = getGroupIdNowTest(callCountInfo);

            callInfo.updateGroupId(groupCallId);

            if(Objects.isNull(dto.getCall_appointtime())){
                callInfo.updateCallAppointtime();
            }else{
                callInfo.updateCallAppointtime(dto.getCall_appointtime());
            }
        }

        // 온나 그룹 콜 아이디 저장
        if (dto.getGroup_id() != null) {
            callInfo.updateRecvGroupId(dto.getGroup_id());
        }

        callInfo.updateDelivery_status("배차");

        //운행정보 테이블 데이터 insert
        Integer resInstCallInfo = callMapper.InsertCallInfoWhenDeliveryStart(callInfo).block();
        if(resInstCallInfo <= 0){
            throw new BusinessException(ErrorCode.DB_INSERT_FAIL);
        }

        //보험사 반환 용도 운행 번호 생성 (ex : "C000000000000001")
        int ciId = callInfo.getCi_id();
        String padId = "C" + padLeft(ciId, 15);
        callInfo.createKbCallId(padId);

        callMapper.updateKbCallId(callInfo);

        /*KbApi10thReq request = new KbApi10thReq(callInfo);
        KBRetrofitConfig<KbApi10thReq> KBRetrofitConfig = new KBRetrofitConfig<>();

        KBRetrofitConfig.create(KbSendApi.class).kbApi10Retrofit(request).execute().body();*/
        return Mono.just(new DrivingStartRes("ok",resRiderInsurance.getDriver_status(),resRiderInsurance.getDriver_message()));
    }
