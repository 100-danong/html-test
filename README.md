public Mono<CountDto> kbApi8th(List<KbApi8thReq> dto){

        log.info("dto --> " + dto);

        List<String> driverIds = dto.stream().map(KbApi8thReq::getDriver_id).collect(Collectors.toList());

        List<RiderInfo> riders = (List<RiderInfo>) riderInfoRepository.findAllByDriverIdForCancel(driverIds);

        List<HistoriesSaveDto> histories = new ArrayList<>();
        List<HistoriesSaveDto> historiesRenew = new ArrayList<>();

        riders.forEach(e->{
            dto.forEach(d->{
                if(d.getDriver_id().equals(e.getRi_driver_id()) && Objects.equals(e.getRi_insu_status(), "071")) {
                    log.info("Proxy_driv_coorp_cmpcd : {}",d.getProxy_driv_coorp_cmpcd());
                    log.info("Driver_id : {}",d.getDriver_id());
                    log.info("result : {}",d.getResult());
                    log.info("Policy_number : {}",d.getPolicy_number());
                    log.info("Effective_time : {}",d.getEffective_time());
                    log.info("Auto_cancel : {}",d.getAuto_cancel());

                    // 기명취소가 승인된게 아니면
                    if (!d.getResult().equals("canceled")) {
                        //////////// updateAll
                        HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state()).block();

                        log.info("기명취소 거부" + e.getRi_id());

                        update.setIhInsuState("083");

                        update.setIhAgeYn("-");

                        update.updateTime();

                        update.updateIshInsTime();

                        update.updateRejectCode(d.getResult());

                        update.setRiId(e.getRi_id());

                        if(e.getRi_state() == 2) {
                            historiesRenew.add(update);
                        } else {
                            histories.add(update);
                        }

                        //기명 취소가 승인되었으면
                    } else {
                        HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state()).block();

                        log.info("기명취소 " + e.getRi_id());

                        update.setIhEffectStartdate(convertDate(d.getEffective_time().get(0)));
                        update.setIhEffectEnddate(convertDate(d.getEffective_time().get(1)));

                        update.setIhInsuState("082");
                        update.setIhAgeYn("-");
                        update.setIhApplyState("N");
                        update.setRiState(9);
                        update.setRiId(e.getRi_id());

                        RiderInsuranceDto riderInsuranceDto = riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state()).block();

                        if(riderInsuranceDto != null){
                            update.updateWithdrawCompl();
                        }

                        update.updateTime();

                        update.updateIshInsTime();

                        if(e.getRi_state() == 2) {
                            historiesRenew.add(update);
                        } else {
                            histories.add(update);
                        }
                    }
                }
            });
        });

        //리스트들 db에 저장
        historyMapper.updateAll(histories);
        historyMapper.saveAllStateHistory(histories);
        riderInfoRepository.updateRiderInsurStatusAndApplyDateAll(histories);
        riderInsuranceHistoryMapper.updateAllWithDrawComp(histories);

        if (!historiesRenew.isEmpty()) {
            historyMapper.updateAllRenew(historiesRenew);
            historyMapper.saveAllStateHistoryRenew(historiesRenew);
            riderInfoRepository.updateRiderInsurStatusAndApplyDateAllRenew(historiesRenew);
            riderInsuranceHistoryMapper.updateAllWithDrawCompRenew(historiesRenew);
        }

        return Mono.just(new CountDto(riders.size()));
    }
