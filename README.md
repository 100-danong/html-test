public Mono<CountDto> kbApi8th(List<KbApi8thReq> dto) {
    log.info("dto --> " + dto);
    List<String> driverIds = dto.stream().map(KbApi8thReq::getDriver_id).collect(Collectors.toList());

    return riderInfoRepository.findAllByDriverIdForCancel(driverIds)
        .collectList()
        .flatMap(riders -> {
            List<HistoriesSaveDto> histories = new ArrayList<>();
            List<HistoriesSaveDto> historiesRenew = new ArrayList<>();

            // 기존 로직 그대로
            for (RiderInfo e : riders) {
                for (KbApi8thReq d : dto) {
                    if (d.getDriver_id().equals(e.getRi_driver_id()) && Objects.equals(e.getRi_insu_status(), "071")) {
                        log.info("Proxy_driv_coorp_cmpcd : {}", d.getProxy_driv_coorp_cmpcd());
                        // ... 기존 로그들 동일

                        // block() 대신 collectList로 모든 데이터 먼저 모으기
                        return processAllRiders(riders, dto)
                            .flatMap(processed -> {
                                histories.addAll(processed.get("histories"));
                                historiesRenew.addAll(processed.get("historiesRenew"));
                                
                                // 기존 배치 로직 그대로
                                return historyMapper.updateAll(histories)
                                    .then(historyMapper.saveAllStateHistory(histories))
                                    .then(riderInfoRepository.updateRiderInsurStatusAndApplyDateAll(histories))
                                    .then(riderInsuranceHistoryMapper.updateAllWithDrawComp(histories))
                                    .then(historiesRenew.isEmpty() ? 
                                        Mono.empty() : 
                                        historyMapper.updateAllRenew(historiesRenew)
                                            .then(historyMapper.saveAllStateHistoryRenew(historiesRenew))
                                            .then(riderInfoRepository.updateRiderInsurStatusAndApplyDateAllRenew(historiesRenew))
                                            .then(riderInsuranceHistoryMapper.updateAllWithDrawCompRenew(historiesRenew))
                                    )
                                    .then(Mono.just(new CountDto(riders.size())));
                            });
                    }
                }
            }
            return Mono.just(new CountDto(0));
        });
}
