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
                                                Mono<SellerPolicyNumber> sellerMono = sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W");

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

                                                                    return sellerMono
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

                                                                    return sellerMono
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
                                                                                update.updateEndoCompl();
                                                                            }
                                                                            update.updateTime();
                                                                            update.updateIshInsTime();
                                                                            return histories;
                                                                        })
                                                                        .switchIfEmpty(Mono.empty())
                                                                        .then(sellerMono
                                                                                .map(sellerPolicyNumber -> {
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

    오후 2:29:56: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-18 14:30:19.871  INFO 2828 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 2828 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 14:30:19.896 DEBUG 2828 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 14:30:19.898  INFO 2828 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 14:30:37.943  INFO 2828 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 14:30:37.955  INFO 2828 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 14:30:42.032  INFO 2828 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 26.807 seconds (JVM running for 29.188)
한글 테스트 Start
2025-12-18 14:30:46.288  INFO 2828 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 14:30:48.209  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:30:48.246  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:30:48.265  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:30:48.274  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 14:30:48.275  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:30:48.278  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:30:48.279  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:30:48.280  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:30:48.309  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:30:48.342  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034042
2025-12-18 14:30:48.343  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:30:48.343  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:30:48.343  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:30:48.344  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:30:48.345  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G03
2025-12-18 14:30:48.346  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034043
2025-12-18 14:30:48.348  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:30:48.354  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:30:48.355  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:30:48.356  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:30:48.396  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 14:30:48.454  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34042
2025-12-18 14:30:48.496  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34043
2025-12-18 14:30:48.561  INFO 2828 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> []
