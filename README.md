    public Mono<CountDto> underWritingResult(List<KbApiUnderWritingResult> dto){

        log.info("dto --> " + dto);
        log.info("service size : " + dto.size());

        List<String> riderIds = dto.stream().map(KbApiUnderWritingResult::getDriver_id).collect(Collectors.toList());

        if (riderIds.isEmpty()){
            throw new BusinessException(ErrorCode.NOT_FOUND_USER);
        };
        
        Flux<RiderInfo> riderList = riderInfoRepository.findAllByDriverId(riderIds).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)));

        List<HistoriesSaveDto> histories = new ArrayList<>();
        List<HistoriesSaveDto> historiesRenew = new ArrayList<>();

        riderList.forEach(e->{
            dto.forEach(d->{
                LocalDateTime untilTime = LocalDateTime.ofEpochSecond(d.getUntil(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                if(d.getDriver_id().equals(e.getRi_driver_id()) && e.getRi_insu_status().equals("021")) {
                    log.info("언더라이팅 결과 시작 Result --> " + d.getResult());
                    // 승인이 아닌경우
                    if (!d.getResult().equals("accepted")) {
                        // 리뷰중이거나, 조건부 승인인경우
                        if(d.getResult().equals("in_review") || d.getResult().equals("accepted_noinsure")){

                            HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state()).block();

                            log.info("in_review 또는 accepted_noinsure " + e.getRi_id());

                            update.setIhInsuState("034");

                            update.updateTime();

                            update.updateIshInsTime();

                            update.updateRejectCode(d.getResult());

                            update.setRiId(e.getRi_id());

                            update.updateUntil(untilTime);

                            if(e.getRi_state() == 4) {
                                historiesRenew.add(update);
                            } else {
                                update.setRiState(1);
                                histories.add(update);
                            }
                        }
                        // 승인 - 자동기명등재요청 대상 일 경우
                        else if (d.getResult().equals("accepted_endorsed")) {
                            HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state()).block();

                            log.info("자동기명등재 대상 " + e.getRi_id());

                            update.setIhInsuState("052");

                            //마이바티스 수정 SJY
                            RiderInsuranceDto riderInsuranceDto = riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state()).block();

                            if(riderInsuranceDto != null){
                                update.updateUnderCompl();
                            }

                            update.updateTime();

                            update.updateIshInsTime();

                            update.updateRejectCode(d.getResult());

                            update.setRiId(e.getRi_id());

                            update.updateUntil(untilTime);

                            if(e.getRi_state() == 4) {
                                historiesRenew.add(update);
                            } else {
                                update.setRiState(1);
                                histories.add(update);
                            }

                        }else{
                            // 승인이 거절당한경우
                            HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state()).block();

                            log.info("언더라이팅 심사 거절 " + e.getRi_id());

                            update.setIhInsuState("033");

                            update.updateTime();

                            update.updateIshInsTime();

                            update.updateRejectCode(d.getResult());

                            update.setRiId(e.getRi_id());

                            update.updateUntil(untilTime);

                            if(e.getRi_state() == 4) {
                                historiesRenew.add(update);
                            } else {
                                update.setRiState(1);
                                histories.add(update);
                            }
                        }
                    }
                    //승인된 경우
                    else {
                        HistoriesSaveDto update = historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state()).block();

                        log.info("언더라이팅 심사 승인 " + e.getRi_id());

                        update.setIhInsuState("032");

                        RiderInsuranceDto riderInsuranceDto = riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state()).block();

                        if(riderInsuranceDto != null){
                            update.updateUnderCompl();
                        }

                        update.updateTime();

                        update.updateIshInsTime();

                        update.updateRejectCode(d.getResult());

                        update.setRiId(e.getRi_id());

                        update.updateUntil(untilTime);

                        if(e.getRi_state() == 4) {
                            historiesRenew.add(update);
                        } else {
                            update.setRiState(1);
                            histories.add(update);
                        }
                    }
                }
            });
            log.info("언더라이팅 결과 끝 Result --> " + e.getRi_driver_id());
        });

        log.info("histories --> " + histories);
        log.info("historiesRenew --> " + historiesRenew);

        batchUpdateHistories(histories);
        batchUpdateHistoriesRenew(historiesRenew);

        return new CountDto(riderList.size());
    }
