    public Mono<Void> updateAllUnderComp(List<HistoriesSaveDto> list) {

        StringBuffer sb = new StringBuffer();

        for (HistoriesSaveDto r : list) {
            sb.append("UPDATE rider_insurance_history SET ");
            sb.append("rih_under_complete_time = '").append(r.getRihUnderCompleteTime()).append("', ");
            sb.append("rih_upd_time = '").append(r.getIhUpdTime()).append("' ");
            sb.append("WHERE ri_id = ").append(r.getRiId()).append("; ");
        }

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .then(); // 실행 후 결과 반환 없음 (Mono<Void>)
    }

	오전 11:28:29: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-18 11:29:00.076  INFO 7804 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 7804 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 11:29:00.108 DEBUG 7804 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 11:29:00.117  INFO 7804 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 11:29:16.413  INFO 7804 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 11:29:16.423  INFO 7804 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 11:29:20.674  INFO 7804 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 23.97 seconds (JVM running for 25.86)
한글 테스트 Start
2025-12-18 11:29:22.884  INFO 7804 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiUnderWritingResult(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=accepted, until=1773154800)]
2025-12-18 11:29:22.923  INFO 7804 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : service size : 1
2025-12-18 11:29:24.761  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 시작 Result --> accepted
2025-12-18 11:29:25.018  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 심사 승인 34041
2025-12-18 11:29:25.072  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 끝 Result --> GG0000034041
2025-12-18 11:29:25.076  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> [com.gogofnd.kb.Insurance.dto.HistoriesSaveDto@1f8e89f7]
2025-12-18 11:29:25.079  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : historiesRenew --> []
2025-12-18 11:32:50.368  INFO 7804 --- [nio-8888-exec-4] c.g.k.I.service.InsuranceService         : dto --> [KbApiUnderWritingResult(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=accepted, until=1773154800), KbApiUnderWritingResult(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=accepted, until=1773154800), KbApiUnderWritingResult(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=insure_needed, until=1773154800)]
2025-12-18 11:32:50.376  INFO 7804 --- [nio-8888-exec-4] c.g.k.I.service.InsuranceService         : service size : 3
2025-12-18 11:32:50.441  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 시작 Result --> accepted
2025-12-18 11:32:50.447  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 시작 Result --> insure_needed
2025-12-18 11:32:50.452  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 시작 Result --> accepted
2025-12-18 11:32:50.458  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 심사 승인 34041
2025-12-18 11:32:50.465  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 심사 승인 34043
2025-12-18 11:32:50.478  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 심사 거절 34042
2025-12-18 11:32:50.478  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 끝 Result --> GG0000034042
2025-12-18 11:32:50.487  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 끝 Result --> GG0000034041
2025-12-18 11:32:50.490  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 언더라이팅 결과 끝 Result --> GG0000034043
2025-12-18 11:32:50.491  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> [com.gogofnd.kb.Insurance.dto.HistoriesSaveDto@6ea5603c, com.gogofnd.kb.Insurance.dto.HistoriesSaveDto@30ed4d73, com.gogofnd.kb.Insurance.dto.HistoriesSaveDto@7ddfa297]
2025-12-18 11:32:50.491  INFO 7804 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : historiesRenew --> []
2025-12-18 11:32:50.593 ERROR 7804 --- [nio-8888-exec-5] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

io.r2dbc.spi.R2dbcBadGrammarException: Incorrect datetime value: 'null' for column `goplanV1`.`rider_insurance_history`.`rih_under_complete_time` at row 1
	at org.mariadb.r2dbc.ExceptionFactory.createException(ExceptionFactory.java:44)
	at org.mariadb.r2dbc.ExceptionFactory.createException(ExceptionFactory.java:25)
	at org.mariadb.r2dbc.ExceptionFactory.from(ExceptionFactory.java:65)
	at org.mariadb.r2dbc.MariadbResult.lambda$getRowsUpdated$0(MariadbResult.java:63)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onNext(FluxHandleFuseable.java:176)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drainRegular(FluxWindowPredicate.java:668)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drain(FluxWindowPredicate.java:746)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.onNext(FluxWindowPredicate.java:788)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.onNext(FluxWindowPredicate.java:266)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.drain(FluxCreate.java:814)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.next(FluxCreate.java:739)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.next(FluxCreate.java:161)
	at org.mariadb.r2dbc.client.MariadbPacketDecoder.handleBuffer(MariadbPacketDecoder.java:98)
	at org.mariadb.r2dbc.client.MariadbPacketDecoder.decode(MariadbPacketDecoder.java:79)
	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:529)
	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:468)
	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)
	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)
	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
	at java.base/java.lang.Thread.run(Thread.java:829)

2025-12-18 11:32:50.600 ERROR 7804 --- [nio-8888-exec-5] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is org.springframework.r2dbc.BadSqlGrammarException: execute; bad SQL grammar [UPDATE rider_insurance_history SET rih_under_complete_time = 'null', rih_upd_time = '2025-12-18T11:32:50.478738600' WHERE ri_id = 34042; UPDATE rider_insurance_history SET rih_under_complete_time = '2025-12-18T11:32:50.487740100', rih_upd_time = '2025-12-18T11:32:50.487740100' WHERE ri_id = 34041; UPDATE rider_insurance_history SET rih_under_complete_time = '2025-12-18T11:32:50.490739900', rih_upd_time = '2025-12-18T11:32:50.490739900' WHERE ri_id = 34043; ]; nested exception is io.r2dbc.spi.R2dbcBadGrammarException: [1292] [22007] Incorrect datetime value: 'null' for column `goplanV1`.`rider_insurance_history`.`rih_under_complete_time` at row 1] with root cause

io.r2dbc.spi.R2dbcBadGrammarException: Incorrect datetime value: 'null' for column `goplanV1`.`rider_insurance_history`.`rih_under_complete_time` at row 1
	at org.mariadb.r2dbc.ExceptionFactory.createException(ExceptionFactory.java:44)
	at org.mariadb.r2dbc.ExceptionFactory.createException(ExceptionFactory.java:25)
	at org.mariadb.r2dbc.ExceptionFactory.from(ExceptionFactory.java:65)
	at org.mariadb.r2dbc.MariadbResult.lambda$getRowsUpdated$0(MariadbResult.java:63)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onNext(FluxHandleFuseable.java:176)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drainRegular(FluxWindowPredicate.java:668)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drain(FluxWindowPredicate.java:746)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.onNext(FluxWindowPredicate.java:788)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.onNext(FluxWindowPredicate.java:266)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.drain(FluxCreate.java:814)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.next(FluxCreate.java:739)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.next(FluxCreate.java:161)
	at org.mariadb.r2dbc.client.MariadbPacketDecoder.handleBuffer(MariadbPacketDecoder.java:98)
	at org.mariadb.r2dbc.client.MariadbPacketDecoder.decode(MariadbPacketDecoder.java:79)
	at io.netty.handler.codec.ByteToMessageDecoder.decodeRemovalReentryProtection(ByteToMessageDecoder.java:529)
	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:468)
	at io.netty.handler.codec.ByteToMessageDecoder.channelRead(ByteToMessageDecoder.java:290)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelRead(DefaultChannelPipeline.java:1410)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:440)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.DefaultChannelPipeline.fireChannelRead(DefaultChannelPipeline.java:919)
	at io.netty.channel.nio.AbstractNioByteChannel$NioByteUnsafe.read(AbstractNioByteChannel.java:166)
	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:788)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:724)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:650)
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:562)
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:997)
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
	at java.base/java.lang.Thread.run(Thread.java:829)

