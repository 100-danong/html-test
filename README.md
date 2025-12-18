public Mono<CountDto> signUpResult(List<KbApiSignResultDto> dto) {
        log.info("dto --> " + dto);

        List<String> driverIds = dto.stream().map(KbApiSignResultDto::getDriver_id).distinct().collect(Collectors.toList());

        return riderInfoRepository.findAllByDriverId(driverIds)
                .collectList()
                .flatMap(riders -> {
                    log.info("조회된 라이더들 " + riders);

                    List<HistoriesSaveDto> histories = new ArrayList<>();
                    List<HistoriesSaveDto> historiesRenew = new ArrayList<>();
                    String id = "";

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
                                                                            .map(sellerPolicyNumber -> {
                                                                                if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                    historiesRenew.add(update);
                                                                                } else {
                                                                                    histories.add(update);
                                                                                }
                                                                                return histories;
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
                                                                            .map(sellerPolicyNumber -> {
                                                                                if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                    historiesRenew.add(update);
                                                                                } else {
                                                                                    histories.add(update);
                                                                                }
                                                                                return histories;
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
                                                                        .map(riderInsuranceDto -> {
                                                                            if (riderInsuranceDto != null) {
                                                                                log.info("여기 들옴?");
                                                                                update.updateEndoCompl();
                                                                            }
                                                                            update.updateTime();
                                                                            update.updateIshInsTime();
                                                                            return histories;
                                                                        })
                                                                        .then(sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                                                                                .map(sellerPolicyNumber -> {
                                                                                    log.info("여기는??");
                                                                                    log.info("PolicyNumbar -> {}", d.getPolicy_number());
                                                                                    log.info("PolicyNumbar -> {}", sellerPolicyNumber.getSpnPolicyNumber());
                                                                                    log.info(sellerPolicyNumber.toString());
                                                                                    if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                        historiesRenew.add(update);
                                                                                    } else {
                                                                                        histories.add(update);
                                                                                    }
                                                                                    return histories;
                                                                                })
                                                                                .then());
                                                            });
                                                }
                                            })
                            )
                            .then(Mono.defer(() -> {
                                log.info("histories --> {}", histories.toString());

                                Mono<Void> normal = histories.isEmpty() ? Mono.empty() : batchUpdateHistories(histories);

                                Mono<Void> renew = historiesRenew.isEmpty() ? Mono.empty() : batchUpdateHistoriesRenew(historiesRenew);
                                return Mono.when(normal, renew).then(Mono.just(new CountDto(riders.size())));
                            }));
                });
    }

오후 2:38:54: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Insurance\controller\InsuranceApi.java uses unchecked or unsafe operations.
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

2025-12-18 14:39:14.092  INFO 11560 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 11560 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 14:39:14.110 DEBUG 11560 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 14:39:14.112  INFO 11560 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 14:39:27.309  INFO 11560 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 14:39:27.317  INFO 11560 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 14:39:30.631  INFO 11560 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 20.287 seconds (JVM running for 22.898)
한글 테스트 Start
2025-12-18 14:39:38.789  INFO 11560 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 14:39:40.246  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:39:40.272  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:39:40.381  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:39:40.418  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 14:39:40.419  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:39:40.422  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:39:40.423  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:39:40.424  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:39:40.469  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:39:40.469  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034042
2025-12-18 14:39:40.472  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:39:40.473  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:39:40.473  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:39:40.474  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:39:40.475  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G03
2025-12-18 14:39:40.476  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034043
2025-12-18 14:39:40.480  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:39:40.495  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:39:40.496  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:39:40.496  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:39:40.525  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 14:39:40.565  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34042
2025-12-18 14:39:40.607  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34043
2025-12-18 14:39:40.620  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 여기 들옴?
2025-12-18 14:39:40.672  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 여기 들옴?
2025-12-18 14:39:40.693  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 여기 들옴?
2025-12-18 14:39:40.702  INFO 11560 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> []




    
