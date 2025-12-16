public Mono<CountDto> kbApi8th(List<KbApi8thReq> dto) {
    log.info("dto --> " + dto);

    List<String> driverIds = dto.stream().map(KbApi8thReq::getDriver_id).collect(Collectors.toList());

    return riderInfoRepository.findAllByDriverIdForCancel(driverIds)  // Mono<List<RiderInfo>>
        .flatMap(riders -> {
            List<HistoriesSaveDto> histories = new ArrayList<>();
            List<HistoriesSaveDto> historiesRenew = new ArrayList<>();

            // 기존 forEach 로직 그대로 (동기지만 Mono 안에서 안전)
            riders.forEach(e -> {
                dto.forEach(d -> {
                    if (d.getDriver_id().equals(e.getRi_driver_id()) && Objects.equals(e.getRi_insu_status(), "071")) {
                        log.info("Proxy_driv_coorp_cmpcd : {}", d.getProxy_driv_coorp_cmpcd());
                        log.info("Driver_id : {}", d.getDriver_id());
                        log.info("result : {}", d.getResult());
                        log.info("Policy_number : {}", d.getPolicy_number());
                        log.info("Effective_time : {}", d.getEffective_time());
                        log.info("Auto_cancel : {}", d.getAuto_cancel());

                        // historyMapper.findForUpdateById를 Mono 체인으로
                        historyMapper.findForUpdateById(e.getRi_id(), e.getRi_state())
                            .subscribe(update -> {  // 비동기 처리
                                if (!d.getResult().equals("canceled")) {
                                    // 기명취소 거부
                                    log.info("기명취소 거부" + e.getRi_id());
                                    update.setIhInsuState("083");
                                    update.setIhAgeYn("-");
                                    update.updateTime();
                                    update.updateIshInsTime();
                                    update.updateRejectCode(d.getResult());
                                    update.setRiId(e.getRi_id());

                                    if (e.getRi_state() == 2) {
                                        historiesRenew.add(update);
                                    } else {
                                        histories.add(update);
                                    }
                                } else {
                                    // 기명취소 승인
                                    log.info("기명취소 " + e.getRi_id());
                                    update.setIhEffectStartdate(convertDate(d.getEffective_time().get(0)));
                                    update.setIhEffectEnddate(convertDate(d.getEffective_time().get(1)));
                                    update.setIhInsuState("082");
                                    update.setIhAgeYn("-");
                                    update.setIhApplyState("N");
                                    update.setRiState(9);
                                    update.setRiId(e.getRi_id());

                                    riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state())
                                        .subscribe(riderInsuranceDto -> {
                                            if (riderInsuranceDto != null) {
                                                update.updateWithdrawCompl();
                                            }
                                            update.updateTime();
                                            update.updateIshInsTime();

                                            if (e.getRi_state() == 2) {
                                                historiesRenew.add(update);
                                            } else {
                                                histories.add(update);
                                            }
                                        });
                                }
                            });
                    }
                });
            });

            // DB 배치 작업들 체인으로
            return Flux.merge(
                Mono.just(histories).then(historyMapper.updateAll(histories)),
                Mono.just(histories).then(historyMapper.saveAllStateHistory(histories)),
                Mono.just(histories).then(riderInfoRepository.updateRiderInsurStatusAndApplyDateAll(histories)),
                Mono.just(histories).then(riderInsuranceHistoryMapper.updateAllWithDrawComp(histories)),
                historiesRenew.isEmpty() ? Mono.empty() :
                Flux.merge(
                    historyMapper.updateAllRenew(historiesRenew),
                    historyMapper.saveAllStateHistoryRenew(historiesRenew),
                    riderInfoRepository.updateRiderInsurStatusAndApplyDateAllRenew(historiesRenew),
                    riderInsuranceHistoryMapper.updateAllWithDrawCompRenew(historiesRenew)
                )
            ).then(Mono.just(new CountDto(riders.size())));
        });
}
