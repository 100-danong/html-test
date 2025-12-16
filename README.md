오후 12:44:18: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-16 12:44:33.511  INFO 10680 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 10680 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-16 12:44:33.518 DEBUG 10680 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-16 12:44:33.519  INFO 10680 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-16 12:44:48.444  INFO 10680 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-16 12:44:48.477  INFO 10680 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-16 12:44:52.482  INFO 10680 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 21.702 seconds (JVM running for 23.625)
한글 테스트 Start
2025-12-16 12:46:13.397  INFO 10680 --- [actor-tcp-nio-2] c.g.kb.Business.service.RiderService     : decrypt : c1f15172d8a
2025-12-16 12:46:13.734  INFO 10680 --- [actor-tcp-nio-2] c.g.kb.Business.service.RiderService     : insurance_history 데이터 쌓기
2025-12-16 12:46:14.000 ERROR 10680 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

io.r2dbc.spi.R2dbcBadGrammarException: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'UPDATE rider_info SET      ri_insu_status = '071',      ri_upd_time = '2025-1...' at line 1
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

2025-12-16 12:46:14.038 ERROR 10680 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is org.springframework.r2dbc.BadSqlGrammarException: execute; bad SQL grammar [ UPDATE insurance_history SET      ih_insu_state = :ihInsuState,      ih_effect_startdate = :ihEffectStartdate,      ih_effect_enddate = :ihEffectEnddate,      ih_until = :ihUntil,      ih_upd_time = :ihUpdTime,      ih_age_yn = :ihAgeYn,      ih_apply_state = :ihApplyState  WHERE ih_id = :ihId  UPDATE rider_info SET      ri_insu_status = :ihInsuState,      ri_upd_time = :ihUpdTime  WHERE ri_id = :riId  AND ri_state = 1 ]; nested exception is io.r2dbc.spi.R2dbcBadGrammarException: [1064] [42000] You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'UPDATE rider_info SET      ri_insu_status = '071',      ri_upd_time = '2025-1...' at line 1] with root cause

io.r2dbc.spi.R2dbcBadGrammarException: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'UPDATE rider_info SET      ri_insu_status = '071',      ri_upd_time = '2025-1...' at line 1
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

