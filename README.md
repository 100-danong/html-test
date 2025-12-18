public Mono<CountDto> underWritingResult(List<KbApiUnderWritingResult> dto) {

    log.info("dto --> {}", dto);
    log.info("service size : {}", dto.size());

    List<String> riderIds = dto.stream()
            .map(KbApiUnderWritingResult::getDriver_id)
            .collect(Collectors.toList());

    if (riderIds.isEmpty()) {
        return Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER));
    }

    return riderInfoRepository.findAllByDriverId(riderIds)
            .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
            .collectList()  // List<RiderInfo>
            .flatMap(riders -> {

                List<HistoriesSaveDto> histories = new ArrayList<>();
                List<HistoriesSaveDto> historiesRenew = new ArrayList<>();

                // 기존 forEach 2중 루프를 그대로 살리되, DB 조회만 Mono 체인으로
                return Flux.fromIterable(riders)
                        .flatMap(rider -> {

                            log.info("언더라이팅 결과 시작 driverId={}", rider.getRi_driver_id());

                            return Flux.fromIterable(dto)
                                    .filter(d -> d.getDriver_id().equals(rider.getRi_driver_id())
                                                 && "021".equals(rider.getRi_insu_status()))
                                    .flatMap(d -> {

                                        LocalDateTime untilTime =
                                                LocalDateTime.ofEpochSecond(
                                                        d.getUntil(), 0,
                                                        ZoneOffset.ofTotalSeconds(60 * 60 * 9));

                                        log.info("언더라이팅 결과 시작 Result --> {}", d.getResult());

                                        // 공통: history 조회
                                        Mono<HistoriesSaveDto> historyMono =
                                                historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state());

                                        // 공통: riderInsurance 조회 (필요할 때만)
                                        Mono<RiderInsuranceDto> riderInsMono =
                                                riderInsuranceHistoryMapper.findByRiderId(rider.getRi_id(), rider.getRi_state());

                                        String result = d.getResult();

                                        // 승인 아님
                                        if (!"accepted".equals(result)) {

                                            if ("in_review".equals(result) || "accepted_noinsure".equals(result)) {
                                                // in_review / accepted_noinsure
                                                return historyMono
                                                        .flatMap(update -> {
                                                            log.info("in_review 또는 accepted_noinsure {}", rider.getRi_id());

                                                            update.setIhInsuState("034");
                                                            update.updateTime();
                                                            update.updateIshInsTime();
                                                            update.updateRejectCode(result);
                                                            update.setRiId(rider.getRi_id());
                                                            update.updateUntil(untilTime);

                                                            if (rider.getRi_state() == 4) {
                                                                historiesRenew.add(update);
                                                            } else {
                                                                update.setRiState(1);
                                                                histories.add(update);
                                                            }

                                                            return Mono.empty();
                                                        });

                                            } else if ("accepted_endorsed".equals(result)) {
                                                // 자동기명등재 대상
                                                return historyMono
                                                        .flatMap(update -> {
                                                            log.info("자동기명등재 대상 {}", rider.getRi_id());

                                                            update.setIhInsuState("052");

                                                            return riderInsMono
                                                                    .doOnNext(rIns -> {
                                                                        if (rIns != null) {
                                                                            update.updateUnderCompl();
                                                                        }
                                                                    })
                                                                    .defaultIfEmpty(null)
                                                                    .then(Mono.fromCallable(() -> {
                                                                        update.updateTime();
                                                                        update.updateIshInsTime();
                                                                        update.updateRejectCode(result);
                                                                        update.setRiId(rider.getRi_id());
                                                                        update.updateUntil(untilTime);

                                                                        if (rider.getRi_state() == 4) {
                                                                            historiesRenew.add(update);
                                                                        } else {
                                                                            update.setRiState(1);
                                                                            histories.add(update);
                                                                        }
                                                                        return (Void) null;
                                                                    }));
                                                        });

                                            } else {
                                                // 심사 거절
                                                return historyMono
                                                        .flatMap(update -> {
                                                            log.info("언더라이팅 심사 거절 {}", rider.getRi_id());

                                                            update.setIhInsuState("033");
                                                            update.updateTime();
                                                            update.updateIshInsTime();
                                                            update.updateRejectCode(result);
                                                            update.setRiId(rider.getRi_id());
                                                            update.updateUntil(untilTime);

                                                            if (rider.getRi_state() == 4) {
                                                                historiesRenew.add(update);
                                                            } else {
                                                                update.setRiState(1);
                                                                histories.add(update);
                                                            }
                                                            return Mono.empty();
                                                        });
                                            }

                                        } else {
                                            // 승인된 경우 accepted
                                            return historyMono
                                                    .flatMap(update -> {
                                                        log.info("언더라이팅 심사 승인 {}", rider.getRi_id());

                                                        update.setIhInsuState("032");

                                                        return riderInsMono
                                                                .doOnNext(rIns -> {
                                                                    if (rIns != null) {
                                                                        update.updateUnderCompl();
                                                                    }
                                                                })
                                                                .defaultIfEmpty(null)
                                                                .then(Mono.fromCallable(() -> {
                                                                    update.updateTime();
                                                                    update.updateIshInsTime();
                                                                    update.updateRejectCode(result);
                                                                    update.setRiId(rider.getRi_id());
                                                                    update.updateUntil(untilTime);

                                                                    if (rider.getRi_state() == 4) {
                                                                        historiesRenew.add(update);
                                                                    } else {
                                                                        update.setRiState(1);
                                                                        histories.add(update);
                                                                    }
                                                                    return (Void) null;
                                                                }));
                                                    });
                                        }
                                    })
                                    .then(Mono.fromRunnable(() ->
                                            log.info("언더라이팅 결과 끝 Result --> {}", rider.getRi_driver_id())
                                    ));
                        })
                        .then(Mono.defer(() -> {
                            log.info("histories --> {}", histories);
                            log.info("historiesRenew --> {}", historiesRenew);

                            // 기존 batchUpdateHistories 호출을 리액티브로 감싸기
                            Mono<Void> normal =
                                    histories.isEmpty()
                                            ? Mono.empty()
                                            : batchUpdateHistories(histories);

                            Mono<Void> renew =
                                    historiesRenew.isEmpty()
                                            ? Mono.empty()
                                            : batchUpdateHistoriesRenew(historiesRenew);

                            return Mono.when(normal, renew)
                                    .then(Mono.just(new CountDto(riders.size())));
                        }));
            });
}
