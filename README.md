    public CountDto signUpResult(List<KbApiSignResultDto> dto){

        log.info("dto --> " + dto);

        // dto 값에서 드라이버 아이디 추출해서 리스트로 만듬
        List<String> driverIds = dto.stream().map(KbApiSignResultDto::getDriver_id).distinct().collect(Collectors.toList());

        //라이더들 다 찾아옴
        List<RiderInfo> riders = (List<RiderInfo>) riderInfoRepository.findAllByDriverId(driverIds);

        log.info("조회된 라이더들 " + riders);

        List<HistoriesSaveDto> histories = new ArrayList<>();
        List<HistoriesSaveDto> historiesRenew = new ArrayList<>();
        String id = "";

        //라이더 별로
        riders.forEach(e->{
            dto.forEach(d->{
                // ri_driver_id와 증권번호가 KB수신값과 같고 상태값이 051,052인 라이더들
                if((d.getDriver_id().equals(e.getRi_driver_id()) && d.getPolicy_number().equals(e.getSi_policy_number()))
                        && (e.getRi_insu_status().equals("051") || e.getRi_insu_status().equals("052"))) {
                    log.info("proxy_driv_coorp_cmpcd : {}",d.getProxy_driv_coorp_cmpcd());
                    log.info("driver_id : {}",d.getDriver_id());
                    log.info("Vcno_hngl_nm : {}",d.getVcno_hngl_nm());
                    log.info("result : {}",d.getResult());
                    log.info("effective_time : {}",d.getEffective_time());
                    log.info("underwriting_after : {}",d.getUnderwriting_after());

                    // 기명 요청이 승인되지 않았을경우
                    if (!d.getResult().equals("endorsed")) {
                        if(d.getResult().equals("already_endorsed_driver_id")) {
                            //////////// updateAll
//                            HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRiId(), e.getRiState());
                            HistoriesSaveDto update = historyMapper.findForUpdateByPolicyNumber(e.getRi_id(), d.getPolicy_number()).block();

                            log.info("기명등재 ri_id 값 = " + e.getRi_id());

                            update.setIhInsuState("062");

                            update.setIhApplyState("Y");

                            update.setRiState(1);

                            update.updateRejectCode(d.getResult());

                            update.setRiId(e.getRi_id());

                            // 심사 유효기간
                            LocalDateTime changedTime = LocalDateTime.ofEpochSecond(d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                            update.setIhUntil(changedTime);

                            update.updateTime();

                            update.updateIshInsTime();

                            log.info(d.getResult());

                            SellerPolicyNumber sellerPolicyNumber = sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W").defaultIfEmpty(new SellerPolicyNumber()).block();

                            // KB에서 반환한 결과의 값 중 증권번호가 갱신증권과 동일하면 갱신테이블 저장
                            if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                historiesRenew.add(update);
                            } else {
                                histories.add(update);
                            }

                        }
                        else {
                            //////////// updateAll
//                            HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRiId(), e.getRiState());
                            HistoriesSaveDto update = historyMapper.findForUpdateByPolicyNumber(e.getRi_id(), d.getPolicy_number()).block();

                            log.info("기명등재 거부 ri_id 값 = " + e.getRi_id());

                            update.setIhInsuState("063");

                            // 심사 유효기간
                            LocalDateTime changedTime = LocalDateTime.ofEpochSecond(d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                            update.setIhUntil(changedTime);

                            update.updateTime();

                            update.updateIshInsTime();

                            update.updateRejectCode(d.getResult());

                            update.setRiId(e.getRi_id());

                            SellerPolicyNumber sellerPolicyNumber = sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W").defaultIfEmpty(new SellerPolicyNumber()).block();

//                            // KB에서 반환한 결과의 값 중 증권번호가 갱신증권과 동일하면 갱신테이블 저장
                            if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                historiesRenew.add(update);
                            } else {
                                histories.add(update);
                            }
                        }
                    }
                    // 승인된 경우
                    else {
                        //////////// updateAll
//                        HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRiId(), e.getRiState());
                        HistoriesSaveDto update = historyMapper.findForUpdateByPolicyNumber(e.getRi_id(), d.getPolicy_number()).block();

                        log.info("기명등재b ri_id 값 = " + e.getRi_id());

                        update.setIhInsuState("062");

                        update.setIhApplyState("Y");

                        update.setRiState(1);

                        update.updateRejectCode(d.getResult());

                        update.setRiId(e.getRi_id());

                        // 보험적용 유효기간, 심사 유효기간
                        LocalDateTime changedTime = LocalDateTime.ofEpochSecond(d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                        update.updateEffectTime(convertDate(d.getEffective_time().get(0)), convertDate(d.getEffective_time().get(1)), changedTime);

                        RiderInsuranceDto riderInsuranceDto = riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state()).block();

                        if(riderInsuranceDto != null){
                            update.updateEndoCompl();
                        }
                        update.updateTime();

                        update.updateIshInsTime();

                        SellerPolicyNumber sellerPolicyNumber = sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W").defaultIfEmpty(new SellerPolicyNumber()).block();

//                        // KB에서 반환한 결과의 값 중 증권번호가 갱신증권과 동일하면 갱신테이블 저장
                        if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                            historiesRenew.add(update);
                        } else {
                            histories.add(update);
                        }
                    }
                }
            });
        });

        batchUpdateHistories(histories);
        batchUpdateHistoriesRenew(historiesRenew);

        return new CountDto(riders.size());
    }
