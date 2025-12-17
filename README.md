    public Mono<Void> withDrawRiderBatch() {
        // 기명 취소한 내역 다 조회해온 다음에 내역 기반으로 라이더 조회해서 리스트로 만듬
        Flux<RiderInfoDto> riders = riderMapper.findRequestsRiderByInsuranceStatusYesterday("071");

        return riders
                .flatMap(r -> {
                    // 라이더 기명취소 시간 업데이트
                    Mono<RiderInsuranceDto> riderInsuranceDto;

                    if (r.getRiState() == 2) {
                        riderInsuranceDto = riderInsuranceHistoryMapper.findByIdRenew(r.getRiId());
                    } else {
                        riderInsuranceDto = riderInsuranceHistoryMapper.findById(r.getRiId());
                    }

                    return riderInsuranceDto
                            .doOnNext(RiderInsuranceDto::updateWithdrawRequestTime)
                            .map(dto -> {

                                KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                                // kb에 보낼 dto 만들어서 리스트에 저장
                                String ssn = kbSignUpReq.getSsn();
                                try {
                                    String rawSsn = ssnDecode(ssn);
                                    String encodeSsn = kbSsnEncode(rawSsn);
                                    kbSignUpReq.updateSsn(encodeSsn);
                                } catch (Exception e) {
                                    return Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                                }

                                Mono<Integer> updateMono;
                                if (r.getRiState() == 2) {
                                    updateMono =
                                            riderInsuranceHistoryMapper.riderInsuranceHistoryWithdrawUpdateRenew(dto);
                                } else {
                                    updateMono =
                                            riderInsuranceHistoryMapper.riderInsuranceHistoryWithdrawUpdate(dto);
                                }

                                return updateMono.thenReturn(new KbSignUpReq(r));

                            });
                })
                .collectList()
                .doOnNext(signUpRequests -> {
                    log.info("기명등재 취소 요청 명단 : {}", signUpRequests);
                    log.info("기명등재 취소 요청 인원 : {}", signUpRequests.size());

                //레트로핏으로 kb 측으로 전달
                /*KBRetrofitConfig<KbSignUpReq> KBRetrofitConfig = new KBRetrofitConfig<>();

                KBRetrofitConfig.create(KbSendApi.class).kbApi7Retrofit(signUpRequests).execute().body();*/
                })
                .then();
    }

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

    오후 4:32:54: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-17 16:33:23.421  INFO 8144 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 8144 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-17 16:33:23.427 DEBUG 8144 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-17 16:33:23.429  INFO 8144 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-17 16:33:40.979  INFO 8144 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-17 16:33:40.984  INFO 8144 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-17 16:33:44.461  INFO 8144 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 23.779 seconds (JVM running for 25.366)
한글 테스트 Start
2025-12-17 16:33:51.765  INFO 8144 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : 여기 안 오지?
2025-12-17 16:33:51.777  INFO 8144 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : 여기 안 오지?
2025-12-17 16:33:51.787  INFO 8144 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : 여기 안 오지?
2025-12-17 16:33:51.788  INFO 8144 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 기명등재 취소 요청 명단 : [MonoIgnoreThen, MonoIgnoreThen, MonoIgnoreThen]
2025-12-17 16:33:51.799  INFO 8144 --- [actor-tcp-nio-2] c.g.k.global.batch.service.BatchService  : 기명등재 취소 요청 인원 : 3
