    public Mono<CountDto> underWritingResult(List<KbApiUnderWritingResult> dto) {

        log.info("dto --> {}", dto);
        log.info("service size : {}", dto.size());

        List<String> riderIds = dto.stream().map(KbApiUnderWritingResult::getDriver_id).collect(Collectors.toList());

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
                                return Flux.fromIterable(dto)
                                        .filter(d -> d.getDriver_id().equals(rider.getRi_driver_id()) && rider.getRi_insu_status().equals("021"))
                                        .flatMap(d -> {

                                            LocalDateTime untilTime = LocalDateTime.ofEpochSecond(d.getUntil(), 0, ZoneOffset.ofTotalSeconds(60 * 60 * 9));

                                            log.info("언더라이팅 결과 시작 Result --> {}", d.getResult());

                                            Mono<HistoriesSaveDto> historyMono = historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state());

                                            String result = d.getResult();

                                            // 승인 아닌 경우
                                            if (!result.equals("accepted")) {
                                                // 리뷰중이거나, 조건부 승인인경우
                                                if (result.equals("in_review") || result.equals("accepted_noinsure")) {
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
                                                // 승인 - 자동기명등재요청 대상 일 경우
                                                } else if (result.equals("accepted_endorsed")) {
                                                    return historyMono
                                                            .flatMap(update -> {
                                                                log.info("자동기명등재 대상 {}", rider.getRi_id());

                                                                update.setIhInsuState("052");

                                                                return riderInsuranceHistoryMapper.findByRiderId(rider.getRi_id(), rider.getRi_state())
                                                                        .doOnNext(rIns -> {
                                                                            if (rIns != null) {
                                                                                update.updateUnderCompl();
                                                                            }
                                                                        })
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
                                                    // 승인이 거절당한경우
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
                                                // 승인된 경우
                                                return historyMono
                                                        .flatMap(update -> {
                                                            log.info("언더라이팅 심사 승인 {}", rider.getRi_id());

                                                            update.setIhInsuState("032");

                                                            return riderInsuranceHistoryMapper.findByRiderId(rider.getRi_id(), rider.getRi_state())
                                                                    .doOnNext(rIns -> {
                                                                        if (rIns != null) {
                                                                            update.updateUnderCompl();
                                                                        }
                                                                    })
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
                                                                        return Mono.empty();
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

                                Mono<Void> normal = histories.isEmpty() ? Mono.empty() : batchUpdateHistories(histories);

                                Mono<Void> renew = historiesRenew.isEmpty() ? Mono.empty() : batchUpdateHistoriesRenew(historiesRenew);

                                return Mono.when(normal, renew).then(Mono.just(new CountDto(riders.size())));
                            }));
                });
    }

    이 코드에서

    오전 10:59:57: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.

> Task :processResources UP-TO-DATE
> Task :classes

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.7.10)

2025-12-18 11:00:23.693  INFO 8864 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 8864 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 11:00:23.706 DEBUG 8864 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 11:00:23.708  INFO 8864 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 11:00:52.635  INFO 8864 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 11:00:52.693  INFO 8864 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 11:00:57.227  INFO 8864 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 36.395 seconds (JVM running for 38.049)
한글 테스트 Start
2025-12-18 11:05:45.499  INFO 8864 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiUnderWritingResult(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=accepted, until=1773154800)]
2025-12-18 11:05:45.574  INFO 8864 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : service size : 1


이 로그가 나왔는데 스웨거에서 리스폰스 바디에서는

	
Response body
Download
{
  "scanAvailable": true
}

이렇게 떠

    
