    public static AccidentHistory create(AccidentCreate dto, String ah_call_id){
        return AccidentHistory.builder()
                .ahAccidentTime(LocalDateTime.ofInstant(Instant.ofEpochSecond(dto.getAccident_time()), TimeZone.getDefault().toZoneId()))
                .ahClaimNumber(dto.getClaim_number())
                .ahClaimTime(LocalDateTime.ofInstant(Instant.ofEpochSecond(dto.getClaim_time()), TimeZone.getDefault().toZoneId()))
                .ahCallId(ah_call_id)
                .ahInsTime(LocalDateTime.now())
                .ahUpdTime(LocalDateTime.now())
                .ahState(0)
                .build();
    }

	이렇게 값 처리하고 

	DTO는

	@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AccidentCreate {
    private String proxy_driv_coorp_cmpcd; //si_cmp_code
    @NotEmpty
    private String call_id; //ci_insu_call_id
    private String claim_number; //20230816040474 -> 일시 값
    private Long claim_time; // 타임 스탬프 값
    private Long accident_time; //타임 스탬프 값
}

이거인데 내가 파라미터를 스웨거에서

{
  "accident_time": 2025090405082,
  "call_id": "GR20250903-32814-0031",
  "claim_number": "20250904050826",
  "claim_time": 2025090405082,
  "proxy_driv_coorp_cmpcd": "G02"
}

이렇게 줬는데 뭐가 문제인걸까?

오후 2:14:58: Executing ':new_GoPlanV1Application.main()'...

> Task :compileJava
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

2025-12-11 14:15:08.707  INFO 6444 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 6444 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-11 14:15:08.716 DEBUG 6444 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-11 14:15:08.718  INFO 6444 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-11 14:15:22.749  INFO 6444 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-11 14:15:22.791  INFO 6444 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-11 14:15:26.232  INFO 6444 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 19.877 seconds (JVM running for 21.329)
한글 테스트 Start
2025-12-11 14:17:14.665  INFO 6444 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : dto -> AccidentCreate(proxy_driv_coorp_cmpcd=G02, call_id=GR20250903-32814-0031, claim_number=20250904050826, claim_time=2025090405082, accident_time=2025090405082)
2025-12-11 14:17:14.729  INFO 6444 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : =============================== 사고접수 api호출 ===================================
2025-12-11 14:17:14.737  INFO 6444 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 MonoFlatMapMany
2025-12-11 14:17:14.853  INFO 6444 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 뭐지..?
2025-12-11 14:17:14.915  INFO 6444 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 com.gogofnd.kb.Accident.dto.CallInfoDto@5c436e28
2025-12-11 14:17:14.917  INFO 6444 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 com.gogofnd.kb.Accident.dto.CallInfoDto@59e00b58
2025-12-11 14:17:15.050 ERROR 6444 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

io.r2dbc.spi.R2dbcBadGrammarException: Incorrect datetime value: '+66142-07-24 17:31:22' for column `goplanV1`.`accident_history`.`ah_accident_time` at row 1
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

2025-12-11 14:17:15.062 ERROR 6444 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is org.springframework.r2dbc.BadSqlGrammarException: execute; bad SQL grammar [ INSERT INTO accident_history  (ah_accident_time, ah_claim_number, ah_claim_time, ah_call_id, ah_ins_time, ah_upd_time)  VALUES  (:ahAccidentTime, :ahClaimNumber, :ahClaimTime, :ahCallId, NOW(), NOW()) ]; nested exception is io.r2dbc.spi.R2dbcBadGrammarException: [1292] [22007] Incorrect datetime value: '+66142-07-24 17:31:22' for column `goplanV1`.`accident_history`.`ah_accident_time` at row 1] with root cause

io.r2dbc.spi.R2dbcBadGrammarException: Incorrect datetime value: '+66142-07-24 17:31:22' for column `goplanV1`.`accident_history`.`ah_accident_time` at row 1
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

