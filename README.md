    @ApiOperation(value = "api4(계약체결동의) 리턴 url", notes = "계약체결 이행 동의가 완료된 라이더의 경우, kb에서 이 url로 리턴을 해줍니다.")
    @GetMapping("/4/return&tel={tel}")
    public Mono<ModelAndView> api4Return(@PathVariable String tel){

        String[] params = tel.split("&");

        String phone = params[0];

        log.info("뭐임 로그 안 찍힘?");
        riderService.api4Return(phone);
        log.info("에반데?");

        ModelAndView view = new ModelAndView();

        view.setViewName("api4Success.html");

        return Mono.just(view);
    }

	public Mono<String> api4Return(String phone){
        log.info("계약체결동의 요청 Phone " + phone);

        //갱신 라이더가 있는지 조회
        return businessRiderInfoRepository.findByPhoneRenew(phone)
                //만약 갱신 라이더가 없다면 일반 조회
                .switchIfEmpty(businessRiderInfoRepository.findByPhone(phone)
                        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER))))
                .flatMap(rider -> {
                    log.info("계약체결동의 완료 {}", rider.getRi_id());

                    return historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                            .flatMap(update -> {
                                update.setIhInsuState("051");
                                update.setRiId(rider.getRi_id());
                                update.updateTime();

                                if (rider.getRi_state() == 4) {
                                    log.info("갱신임?");
                                    return historyMapper.updateRenew(update)
                                            .then(historyMapper.saveStateHistoryRenew(update))
                                            .then(businessRiderInfoRepository.updateRiInsuStateRenew(update))
                                            .then(Mono.just("Y"));
                                } else {
                                    log.info("왜 업뎃 안 되지..?");
                                    return historyMapper.update(update)
                                            .then(historyMapper.saveStateHistory(update))
                                            .then(businessRiderInfoRepository.updateRiInsuState(update))
                                            .then(Mono.just("Y"));
                                }
                            });
                });
    }

	오전 11:17:10: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-16 11:17:23.441  INFO 10992 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 10992 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-16 11:17:23.448 DEBUG 10992 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-16 11:17:23.466  INFO 10992 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-16 11:17:38.464  INFO 10992 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-16 11:17:38.472  INFO 10992 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-16 11:17:42.760  INFO 10992 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 21.945 seconds (JVM running for 23.543)
한글 테스트 Start
2025-12-16 11:17:51.445  INFO 10992 --- [nio-8888-exec-1] c.g.k.Insurance.controller.InsuranceApi  : 뭐임 로그 안 찍힘?
2025-12-16 11:17:51.632  INFO 10992 --- [nio-8888-exec-1] c.g.k.Insurance.controller.InsuranceApi  : 에반데?
