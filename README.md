public Mono<CountDto> signUpResult(List<KbApiSignResultDto> dto) {
    log.info("dto --> {}", dto);
    
    List<String> driverIds = dto.stream()
        .map(KbApiSignResultDto::getDriver_id)
        .distinct()
        .collect(Collectors.toList());

    return riderInfoRepository.findAllByDriverId(driverIds)
        .filter(rider -> "051".equals(rider.getRi_insu_status()) || "052".equals(rider.getRi_insu_status()))
        .flatMap(rider -> 
            // DTO 매칭 (filter + next로 O(n) 처리)
            Flux.fromIterable(dto)
                .filter(d -> d.getDriver_id().equals(rider.getRi_driver_id()) 
                          && d.getPolicy_number().equals(rider.getSi_policy_number()))
                .next()
                .flatMap(d -> processSignUpResult(rider, d))
        )
        .collectList()
        .flatMap(processedHistories -> {
            List<HistoriesSaveDto> histories = processedHistories.stream()
                .filter(h -> h.getRiState() != 4).collect(Collectors.toList());  // 기존 로직
            List<HistoriesSaveDto> historiesRenew = processedHistories.stream()
                .filter(h -> h.getRiState() == 4).collect(Collectors.toList());

            log.info("histories size: {}, historiesRenew size: {}", histories.size(), historiesRenew.size());

            return Mono.when(
                batchUpdateHistories(histories),
                batchUpdateHistoriesRenew(historiesRenew)
            ).then(Mono.just(new CountDto(processedHistories.size())));
        });
}

// 각 rider + dto 처리 로직 분리
private Mono<HistoriesSaveDto> processSignUpResult(RiderInfo rider, KbApiSignResultDto d) {
    log.info("proxy_driv_coorp_cmpcd: {}, driver_id: {}, result: {}", 
             d.getProxy_driv_coorp_cmpcd(), d.getDriver_id(), d.getResult());

    // history 조회
    return historyMapper.findForUpdateByPolicyNumber(rider.getRi_id(), d.getPolicy_number())
        .flatMap(update -> {
            LocalDateTime changedTime = LocalDateTime.ofEpochSecond(
                d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
            
            String result = d.getResult();
            
            if (!"endorsed".equals(result)) {
                if ("already_endorsed_driver_id".equals(result)) {
                    log.info("기명등재 ri_id = {}", rider.getRi_id());
                    update.setIhInsuState("062");
                    update.setIhApplyState("Y");
                    update.setRiState(1);
                    update.updateRejectCode(result);
                    update.setRiId(rider.getRi_id());
                    update.setIhUntil(changedTime);
                } else {
                    log.info("기명등재 거부 ri_id = {}", rider.getRi_id());
                    update.setIhInsuState("063");
                    update.setIhUntil(changedTime);
                    update.updateRejectCode(result);
                    update.setRiId(rider.getRi_id());
                }
                update.updateTime();
                update.updateIshInsTime();
                
            } else {
                log.info("기명등재 승인 ri_id = {}", rider.getRi_id());
                update.setIhInsuState("062");
                update.setIhApplyState("Y");
                update.setRiState(1);
                update.updateRejectCode(result);
                update.setRiId(rider.getRi_id());
                
                // 보험적용 유효기간 등
                update.updateEffectTime(
                    convertDate(d.getEffective_time().get(0)), 
                    convertDate(d.getEffective_time().get(1)), 
                    changedTime
                );
                
                return riderInsuranceHistoryMapper.findByRiderId(rider.getRi_id(), rider.getRi_state())
                    .doOnNext(rIns -> {
                        if (rIns != null) update.updateEndoCompl();
                    })
                    .switchIfEmpty(Mono.empty())
                    .then(Mono.just(update));
            }
            
            update.updateTime();
            update.updateIshInsTime();
            return Mono.just(update);
        })
        .flatMap(update -> 
            // sellerPolicyNumber 조회
            sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                .defaultIfEmpty(new SellerPolicyNumber())
                .map(sellerPolicy -> {
                    // 기존 분기 로직 그대로
                    if (d.getPolicy_number().equals(sellerPolicy.getSpnPolicyNumber())) {
                        update.setRiState(4);  // historiesRenew용
                    } else {
                        update.setRiState(1);  // histories용
                    }
                    return update;
                })
        );
}
