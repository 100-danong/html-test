    public Mono<Integer> riderInsuranceHistoryWithdrawUpdate(RiderInsuranceDto dto) {

        log.info("여기 안 오지?");

        StringBuffer sql = new StringBuffer();
        sql.append("UPDATE rider_insurance_history SET ");
        sql.append("    rih_withdraw_request_time = :rihWithdrawRequestTime, ");
        sql.append("    rih_upd_time = :rihUpdTime ");
        sql.append("WHERE rih_id = :rihId");

        return databaseClient.sql(sql.toString())
                .bind("rihWithdrawRequestTime", dto.getRihWithdrawRequestTime())
                .bind("rihUpdTime", dto.getRihUpdTime())
                .bind("rihId", dto.getRihId())
                .fetch()
                .rowsUpdated()
                .doOnNext(count -> log.info("rihId={} rowsUpdated={}", dto.getRihId(), count));
    }

    이렇게 실행 시켰을 때

    오후 4:26:55: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-17 16:27:09.470  INFO 3964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 3964 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-17 16:27:09.477 DEBUG 3964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-17 16:27:09.479  INFO 3964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-17 16:27:24.797  INFO 3964 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-17 16:27:24.804  INFO 3964 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-17 16:27:28.612  INFO 3964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 21.511 seconds (JVM running for 23.413)
한글 테스트 Start
2025-12-17 16:27:32.639  INFO 3964 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : 여기 안 오지?
2025-12-17 16:27:32.647  INFO 3964 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : 여기 안 오지?
2025-12-17 16:27:32.659  INFO 3964 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : 여기 안 오지?
2025-12-17 16:27:32.661  INFO 3964 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 기명등재 취소 요청 명단 : [MonoPeek, MonoPeek, MonoPeek]
2025-12-17 16:27:32.670  INFO 3964 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 기명등재 취소 요청 인원 : 3


이렇게 뜨고 DB에는 업데이트 안 되어 있어
