// 운행시작
public Mono<DrivingStartRes> kb10th(Kb10thRequest dto, String apiKey) {
    drivingStart.info("운행시작 파라미터 값 " + dto.toString());

    return Mono.fromCallable(() -> SellerAES_Encryption.decrypt(apiKey))
            .flatMap(decryptedApiKey -> {
                if(!dto.getSeller_code().equals(decryptedApiKey)){
                    throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
                }
                return callMapper.findByDriveridAndSellerID(dto.getDriver_id(), dto.getSeller_code())
                        .next()
                        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)));
            })
            .flatMap(riderInfo -> {
                InsuranceStatusRes resRiderInsurance = insuranceStatusRes(riderInfo.getRi_id(), riderInfo.getRi_insu_status(), "S");
                
                return callMapper.findByCallIdForDupl(dto.getCall_id())
                        .cast(Integer.class)
                        .hasElement()
                        .flatMap(hasDupl -> {
                            if(hasDupl){
                                throw new BusinessException(ErrorCode.DUPE_CALL_ID);
                            }
                            return Mono.just(riderInfo).zipWith(Mono.just(resRiderInsurance));
                        })
                        .flatMap(tuple -> {
                            RiderInfo ri = tuple.getT1();
                            InsuranceStatusRes res = tuple.getT2();
                            
                            if (ri.getRi_pay_status().equals("N")) {
                                throw new BusinessException(ErrorCode.No_MONEY);
                            } else if (ri.getRi_state() == 9) {
                                throw new BusinessException(ErrorCode.STOP_DELIVERY);
                            }
                            return Mono.just(ri).zipWith(Mono.just(res));
                        });
            })
            .flatMap(tuple -> {
                RiderInfo riderInfo = tuple.getT1();
                InsuranceStatusRes resRiderInsurance = tuple.getT2();
                
                return sellerMapper.findBySellerCode(tuple.getT1().getSeller_code())
                        .map(sellerInfo -> new Tuple2<>(riderInfo, resRiderInsurance))
                        .zipWith(Mono.just(sellerInfo));
            })
            .flatMap(tuple -> {
                RiderInfo riderInfo = ((Tuple2<RiderInfo, InsuranceStatusRes>) tuple.getT1()).getT1();
                InsuranceStatusRes resRiderInsurance = ((Tuple2<RiderInfo, InsuranceStatusRes>) tuple.getT1()).getT2();
                SellerInfo sellerInfo = tuple.getT2();
                
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

                if(dto.getSeller_code().equals("194ea163e38") && dto.getCall_appointtime().substring(0, 10).equals(String.valueOf(yesterday))) {
                    callInfo.updateCallAppointtime(dto.getCall_appointtime());

                    return groupCallMapper.findGroupCallByriIdAndTime(riderInfo.getRi_id(), callInfo.getCi_appoint_time())
                            .defaultIfEmpty(new GroupCallInfo("0"))
                            .flatMap(groupcallInfo -> {
                                if(groupcallInfo.getGciGroupid().equals("0")) {
                                    String groupCallId = getGroupId(yesterday, riderInfo.getRi_id());
                                    callInfo.updateGroupId(groupCallId);
                                } else {
                                    callInfo.updateGroupId(groupcallInfo.getGciGroupid());
                                }
                                return Mono.just(callInfo);
                            });
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

                    return Mono.fromCallable(() -> getCallCountStart(groupNow, riderInfo.getRi_id(), dto.getCall_id(), sellerInfo.getSi_id()))
                            .flatMap(callCountInfo -> {
                                return callMapper.findRunDeliveryByDriverId(dto.getDriver_id(), groupNow)
                                        .cast(Integer.class)
                                        .hasElement()
                                        .doOnNext(chkCompleteCall -> drivingStart.info("end time check : {}", chkCompleteCall))
                                        .then(Mono.just(callCountInfo));
                            })
                            .map(callCountInfo -> getGroupIdNowTest(callCountInfo))
                            .doOnNext(groupCallId -> callInfo.updateGroupId(groupCallId))
                            .then(Mono.just(callInfo))
                            .doOnNext(ci -> {
                                if(Objects.isNull(dto.getCall_appointtime())){
                                    callInfo.updateCallAppointtime();
                                }else{
                                    callInfo.updateCallAppointtime(dto.getCall_appointtime());
                                }
                            });
                }
            })
            .doOnNext(callInfo -> {
                if (dto.getGroup_id() != null) {
                    callInfo.updateRecvGroupId(dto.getGroup_id());
                }
                callInfo.updateDelivery_status("배차");
            })
            .flatMap(callInfo -> 
                callMapper.InsertCallInfoWhenDeliveryStart(callInfo)
                    .cast(Integer.class)
                    .handle((resInstCallInfo, sink) -> {
                        if(resInstCallInfo <= 0){
                            sink.error(new BusinessException(ErrorCode.DB_INSERT_FAIL));
                        } else {
                            sink.next(resInstCallInfo);
                        }
                    })
            )
            .flatMap(ciId -> {
                CallInfo callInfo = /* 이전 컨텍스트에서 가져와야 함 - 상태 유지 필요 */
                String padId = "C" + padLeft(ciId, 15);
                callInfo.createKbCallId(padId);
                return callMapper.updateKbCallId(callInfo).then(Mono.just(callInfo));
            })
            .map(callInfo -> {
                /*KbApi10thReq request = new KbApi10thReq(callInfo);
                KBRetrofitConfig<KbApi10thReq> KBRetrofitConfig = new KBRetrofitConfig<>();

                KBRetrofitConfig.create(KbSendApi.class).kbApi10Retrofit(request).execute().body();*/
                return new DrivingStartRes("ok",resRiderInsurance.getDriver_status(),resRiderInsurance.getDriver_message());
            })
            .onErrorResume(BusinessException.class, e -> {
                CallInfoFailStart start = CallInfoFailStart.create(dto,e.getErrorCode());
                return callFailMapper.InsertCallFailStart(start)
                        .then(Mono.fromCallable(() -> {
                            DrivingStartRes startRes = new DrivingStartRes();
                            startRes.UpdateExceptionResponse(e.getErrorCode().getMessage(),e.getErrorCode().getStatus() ,e.getErrorCode().getCode());
                            return startRes;
                        }));
            });
}
