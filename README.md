//@Scheduled(cron = "00 45 20 * * *") //초 분 시 일 월 요일
    public Mono<Void> signUpRequest() {

        Flux<RiderInfoDto> riders = riderMapper.findRequestsRiderByInsuranceStatusYesterday("051");

        List<KbSignUpReq> signUpRequests = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();

        return riders
                .flatMap(r -> {
                    log.info("1");
                    // 증권번호가 있는 경우만 처리(추가 : 2025-04-18)
                    if (r.getSiPolicyNumber() != null ||!r.getSiPolicyNumber().isEmpty()) {
                        // 보험 상태 업데이트
                        Mono<RiderInsuranceDto> insuranceMono = riderInsuranceHistoryMapper.findByRiderId(r.getRiId(), r.getRiState())
                                .flatMap(riderInsurancedto -> {
                                    log.info("2");

                                    if(riderInsurancedto != null) {
                                        riderInsurancedto.updateEndorsementRequestTime();

                                        if (r.getRiState() == 4) {
                                            insuranceHistoriesRenew.add(riderInsurancedto);
                                        } else {
                                            log.info("3");
                                            insuranceHistories.add(riderInsurancedto);
                                        }
                                    }
                                   return Mono.just(riderInsurancedto);
                                });

                        log.info("4");
                        // 암호화 시작
                        KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                        String ssn = kbSignUpReq.getSsn();
                        String rawSsn = "";
                        try {
                            rawSsn = ssnDecode(ssn);
                            String encodeSsn = kbSsnEncode(rawSsn);
                            kbSignUpReq.updateSsn(encodeSsn);
                            signUpRequests.add(kbSignUpReq);
                        } catch (Exception e) {
                            Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                        }
                    }
                    return Mono.empty();
                })
                .then(
                        Mono.defer(() -> {

                            log.info("기명등재 요청 대상 명단 : {}", signUpRequests);
                            log.info("기명등재 요청 대상 인원 : {}", signUpRequests.size());

/*                            KBRetrofitConfig<KbSignUpReq> KBRetrofitConfig = new KBRetrofitConfig<>();

                            try {
                                KBRetrofitConfig.create(KbSendApi.class).kbApi5Retrofit(signUpRequests).execute().body();
                            } catch (IOException e) {
                                Mono.error(new RuntimeException(e));
                            }*/

                            log.info(insuranceHistories.toString());
                            Mono<Void> normal =
                                    insuranceHistories.isEmpty()
                                            ? Mono.empty()
                                            // 기명 요청시간 update
                                            : riderInsuranceHistoryMapper.riderInsuranceHistoryEndoUpdateAll(insuranceHistories).then();

                            Mono<Void> renew =
                                    insuranceHistoriesRenew.isEmpty()
                                            ? Mono.empty()
                                            // 기명 요청시간 update
                                            : riderInsuranceHistoryMapper.riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew).then();

                            return Mono.when(normal, renew);
                        })
                );
    }

로그를 이렇게 찍었는데

오후 1:54:38: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\global\batch\service\BatchService.java uses unchecked or unsafe operations.
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

2025-12-17 13:54:53.082  INFO 10600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 10600 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-17 13:54:53.090 DEBUG 10600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-17 13:54:53.092  INFO 10600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-17 13:55:09.136  INFO 10600 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-17 13:55:09.195  INFO 10600 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-17 13:55:12.889  INFO 10600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 22.414 seconds (JVM running for 23.926)
한글 테스트 Start
2025-12-17 13:55:17.482  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 1
2025-12-17 13:55:17.501  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 4
2025-12-17 13:55:17.590  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 1
2025-12-17 13:55:17.591  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 4
2025-12-17 13:55:17.598  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 1
2025-12-17 13:55:17.602  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 4
2025-12-17 13:55:17.628  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 기명등재 요청 대상 명단 : [KbSignUpReq(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, name=양성필, ssn=dbOaFhOTb28q319YhCDrjQ==, policy_number=20252732953), KbSignUpReq(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=경북영천나8304, name=이규호, ssn=JMTfjtHWpysTste+s98JLw==, policy_number=20252732953), KbSignUpReq(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=부산수영라8800, name=김현범, ssn=HK9xht15dzkm9qO5VDtohQ==, policy_number=20252724146)]
2025-12-17 13:55:17.698  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 기명등재 요청 대상 인원 : 3
2025-12-17 13:55:17.699  INFO 10600 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : []


이렇게 떠



    
