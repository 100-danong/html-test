public Mono<CountDto> kbApi8th(List<KbApi8thReq> dto) {

    log.info("dto --> {}", dto);

    List<String> driverIds = dto.stream()
            .map(KbApi8thReq::getDriver_id)
            .collect(Collectors.toList());

    return riderInfoRepository.findAllByDriverIdForCancel(driverIds)
            .collectList()
            .flatMapMany(riders -> Flux.fromIterable(riders))
            .flatMap(rider ->
                Flux.fromIterable(dto)
                    .filter(d ->
                        d.getDriver_id().equals(rider.getRi_driver_id())
                        && Objects.equals(rider.getRi_insu_status(), "071")
                    )
                    .flatMap(d ->
                        historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                            .flatMap(update -> {

                                log.info("Driver_id : {}", d.getDriver_id());
                                log.info("result : {}", d.getResult());

                                // 기명취소 거부
                                if (!"canceled".equals(d.getResult())) {

                                    log.info("기명취소 거부 {}", rider.getRi_id());

                                    update.setIhInsuState("083");
                                    update.setIhAgeYn("-");
                                    update.updateRejectCode(d.getResult());

                                // 기명취소 승인
                                } else {

                                    log.info("기명취소 승인 {}", rider.getRi_id());

                                    update.setIhEffectStartdate(convertDate(d.getEffective_time().get(0)));
                                    update.setIhEffectEnddate(convertDate(d.getEffective_time().get(1)));
                                    update.setIhInsuState("082");
                                    update.setIhAgeYn("-");
                                    update.setIhApplyState("N");
                                    update.setRiState(9);

                                    return riderInsuranceHistoryMapper
                                            .findByRiderId(rider.getRi_id(), rider.getRi_state())
                                            .flatMap(ins -> update.updateWithdrawCompl())
                                            .switchIfEmpty(update.updateWithdrawCompl())
                                            .thenReturn(update);
                                }

                                update.updateTime();
                                update.updateIshInsTime();
                                update.setRiId(rider.getRi_id());

                                return Mono.just(update);
                            })
                    )
            )
            .collectList()
            .flatMap(updates -> {

                List<HistoriesSaveDto> histories = new ArrayList<>();
                List<HistoriesSaveDto> historiesRenew = new ArrayList<>();

                for (HistoriesSaveDto h : updates) {
                    if (h.getRiState() == 2) {
                        historiesRenew.add(h);
                    } else {
                        histories.add(h);
                    }
                }

                Mono<Void> normalFlow =
                        Mono.when(
                            historyMapper.updateAll(histories),
                            historyMapper.saveAllStateHistory(histories),
                            riderInfoRepository.updateRiderInsurStatusAndApplyDateAll(histories),
                            riderInsuranceHistoryMapper.updateAllWithDrawComp(histories)
                        );

                Mono<Void> renewFlow =
                        historiesRenew.isEmpty()
                            ? Mono.empty()
                            : Mono.when(
                                historyMapper.updateAllRenew(historiesRenew),
                                historyMapper.saveAllStateHistoryRenew(historiesRenew),
                                riderInfoRepository.updateRiderInsurStatusAndApplyDateAllRenew(historiesRenew),
                                riderInsuranceHistoryMapper.updateAllWithDrawCompRenew(historiesRenew)
                              );

                return Mono.when(normalFlow, renewFlow)
                        .thenReturn(new CountDto(updates.size()));
            });
}
