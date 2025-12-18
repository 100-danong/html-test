public Mono<CountDto> signUpResult(List<KbApiSignResultDto> dto) {
        log.info("dto --> " + dto);

        List<String> driverIds = dto.stream().map(KbApiSignResultDto::getDriver_id).distinct().collect(Collectors.toList());

        return riderInfoRepository.findAllByDriverId(driverIds)
                .collectList()
                .flatMap(riders -> {
                    log.info("조회된 라이더들 " + riders);

                    AtomicReference<List<HistoriesSaveDto>> histories = new AtomicReference<>(new ArrayList<>());
                    AtomicReference<List<HistoriesSaveDto>> historiesRenew = new AtomicReference<>(new ArrayList<>());

                    log.info(riders.toString());

                    return Flux.fromIterable(riders)
                            .flatMap(e ->
                                    Flux.fromIterable(dto)
                                            .filter(d -> (d.getDriver_id().equals(e.getRi_driver_id()) && d.getPolicy_number().equals(e.getSi_policy_number()) && (e.getRi_insu_status().equals("051") || e.getRi_insu_status().equals("052"))))
                                            .flatMap(d -> {
                                                log.info("proxy_driv_coorp_cmpcd : {}", d.getProxy_driv_coorp_cmpcd());
                                                log.info("driver_id : {}", d.getDriver_id());
                                                log.info("Vcno_hngl_nm : {}", d.getVcno_hngl_nm());
                                                log.info("result : {}", d.getResult());
                                                log.info("effective_time : {}", d.getEffective_time());
                                                log.info("underwriting_after : {}", d.getUnderwriting_after());

                                                Mono<HistoriesSaveDto> historyMono = historyMapper.findForUpdateByPolicyNumber(e.getRi_id(), d.getPolicy_number());

                                                // 기명 요청이 승인되지 않았을경우
                                                if (!d.getResult().equals("endorsed")) {
                                                    if (d.getResult().equals("already_endorsed_driver_id")) {
                                                        return historyMono
                                                                .flatMap(update -> {
                                                                    log.info("기명등재 ri_id 값 = " + e.getRi_id());

                                                                    update.setIhInsuState("062");
                                                                    update.setIhApplyState("Y");
                                                                    update.setRiState(1);
                                                                    update.updateRejectCode(d.getResult());
                                                                    update.setRiId(e.getRi_id());

                                                                    LocalDateTime changedTime = LocalDateTime.ofEpochSecond(d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                                                                    update.setIhUntil(changedTime);
                                                                    update.updateTime();
                                                                    update.updateIshInsTime();

                                                                    log.info(d.getResult());

                                                                    return sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                                                                            .doOnNext(sellerPolicyNumber -> {
                                                                                if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                    historiesRenew.get().add(update);
                                                                                } else {
                                                                                    histories.get().add(update);
                                                                                }
                                                                            })
                                                                            .then();
                                                                });
                                                    } else {
                                                        return historyMono
                                                                .flatMap(update -> {
                                                                    log.info("기명등재 거부 ri_id 값 = " + e.getRi_id());

                                                                    update.setIhInsuState("063");
                                                                    // 심사 유효기간
                                                                    LocalDateTime changedTime = LocalDateTime.ofEpochSecond(d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                                                                    update.setIhUntil(changedTime);
                                                                    update.updateTime();
                                                                    update.updateIshInsTime();
                                                                    update.updateRejectCode(d.getResult());
                                                                    update.setRiId(e.getRi_id());

                                                                    return sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                                                                            .doOnNext(sellerPolicyNumber -> {
                                                                                if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                    historiesRenew.get().add(update);
                                                                                } else {
                                                                                    histories.get().add(update);
                                                                                }
                                                                            })
                                                                            .then();
                                                                });
                                                    }
                                                // 승인된 경우
                                                } else {
                                                    return historyMono
                                                            .flatMap(update -> {
                                                                log.info("기명등재b ri_id 값 = " + e.getRi_id());

                                                                update.setIhInsuState("062");
                                                                update.setIhApplyState("Y");
                                                                update.setRiState(1);
                                                                update.updateRejectCode(d.getResult());
                                                                update.setRiId(e.getRi_id());

                                                                LocalDateTime changedTime = LocalDateTime.ofEpochSecond(d.getUnderwriting_after(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));
                                                                update.updateEffectTime(convertDate(d.getEffective_time().get(0)), convertDate(d.getEffective_time().get(1)), changedTime);

                                                                return riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state())
                                                                        .doOnNext(riderInsuranceDto -> {
                                                                            if (riderInsuranceDto != null) {
                                                                                log.info("여기 들옴?");
                                                                                update.updateEndoCompl();
                                                                            }
                                                                            update.updateTime();
                                                                            update.updateIshInsTime();
                                                                        })
                                                                        .then(sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                                                                                .doOnNext(sellerPolicyNumber -> {
                                                                                    log.info("여기는??");
                                                                                    log.info("PolicyNumbar -> {}", d.getPolicy_number());
                                                                                    log.info("PolicyNumbar -> {}", sellerPolicyNumber.getSpnPolicyNumber());
                                                                                    log.info(sellerPolicyNumber.toString());
                                                                                    if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                        historiesRenew.get().add(update);
                                                                                    } else {
                                                                                        histories.get().add(update);
                                                                                    }
                                                                                })
                                                                                .then());
                                                            });
                                                }
                                            })
                            )
                            .then(Mono.defer(() -> {
                                log.info("histories --> {}", histories.get().toString());

                                Mono<Void> normal = histories.get().isEmpty() ? Mono.empty() : batchUpdateHistories(histories.get());

                                Mono<Void> renew = historiesRenew.get().isEmpty() ? Mono.empty() : batchUpdateHistoriesRenew(historiesRenew.get());
                                return Mono.when(normal, renew).then(Mono.just(new CountDto(riders.size())));
                            }));
                });
    }
