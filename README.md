오전 10:20:33: Executing ':new_GoPlanV1Application.main()'...

Starting Gradle Daemon...
Gradle Daemon started in 3 s 800 ms
> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Insurance\repository\HistoryRepository.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
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

2025-12-16 10:21:33.774  INFO 980 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 980 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-16 10:21:33.827 DEBUG 980 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-16 10:21:33.830  INFO 980 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-16 10:21:47.361  INFO 980 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-16 10:21:47.372  INFO 980 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-16 10:21:52.956  INFO 980 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 23.208 seconds (JVM running for 24.987)
한글 테스트 Start
2025-12-16 10:23:45.503  INFO 980 --- [actor-tcp-nio-2] c.g.kb.Business.service.RiderService     : decrypt : c1f15172d8a
2025-12-16 10:23:45.687  INFO 980 --- [actor-tcp-nio-2] c.g.kb.Business.service.RiderService     : insurance_history 데이터 쌓기

Daemon will be stopped at the end of the build stop command received


    public Mono<String> sellerWithDrawRider(String loginId, String sellerCode, String apiKey) throws Exception {

        DriverIdReq driverIdReq = new DriverIdReq(loginId, sellerCode);

        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}", decryptedApiKey);
        if (!sellerCode.equals(decryptedApiKey)) {
            return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
        }

        return businessRiderInfoRepository.findByLoginIdAndSellerCode(loginId, sellerCode)
                .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
                .flatMap(rider -> {
                    rider.setRi_state(1);

                    insuranceValidationCheck(rider);

                    return historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                            .flatMap(update -> {
                                log.info("insurance_history 데이터 쌓기");

                                update.setIhInsuState("071");
                                update.setRiId(rider.getRi_id());
                                update.updateTime();

                                return Mono.fromRunnable(() -> {
                                            historyMapper.update(update);
                                            historyMapper.saveStateHistory(update);
                                        })
                                        .thenReturn("ok");

                            });
                });
    }
