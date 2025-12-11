오전 11:49:46: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Accident\service\AccidentService.java uses unchecked or unsafe operations.
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

2025-12-11 11:49:58.434  INFO 448 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 448 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-11 11:49:58.443 DEBUG 448 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-11 11:49:58.446  INFO 448 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-11 11:50:14.596  INFO 448 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-11 11:50:14.612  INFO 448 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-11 11:50:21.352  INFO 448 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 25.42 seconds (JVM running for 26.848)
한글 테스트 Start
2025-12-11 11:50:25.176  INFO 448 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : dto -> AccidentCreate(proxy_driv_coorp_cmpcd=G02, call_id=GR20250904-33128-0003, claim_number=20230816040474, claim_time=2025090407350, accident_time=20250904063503)
2025-12-11 11:50:25.455 ERROR 448 --- [io-8888-exec-10] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.lang.IllegalStateException: block()/blockFirst()/blockLast() are blocking, which is not supported in thread reactor-tcp-nio-2
	at reactor.core.publisher.BlockingSingleSubscriber.blockingGet(BlockingSingleSubscriber.java:83)
	at reactor.core.publisher.Mono.block(Mono.java:1742)
	at com.gogofnd.kb.Accident.service.AccidentService.findAccidents(AccidentService.java:59)
	at com.gogofnd.kb.Accident.service.AccidentService$$FastClassBySpringCGLIB$$bd7b2036.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport$ReactiveTransactionSupport.lambda$null$5(TransactionAspectSupport.java:948)
	at reactor.core.publisher.FluxUsingWhen.deriveFluxFromResource(FluxUsingWhen.java:120)
	at reactor.core.publisher.FluxUsingWhen.subscribe(FluxUsingWhen.java:86)
	at reactor.core.publisher.Flux.subscribe(Flux.java:8642)
	at reactor.core.publisher.MonoFlatMapMany$FlatMapManyMain.onNext(MonoFlatMapMany.java:195)
	at reactor.core.publisher.FluxSwitchIfEmpty$SwitchIfEmptySubscriber.onNext(FluxSwitchIfEmpty.java:74)
	at reactor.core.publisher.FluxMapFuseable$MapFuseableSubscriber.onNext(FluxMapFuseable.java:129)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.complete(MonoIgnoreThen.java:292)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onNext(MonoIgnoreThen.java:187)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:236)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoPeekTerminal$MonoTerminalPeekSubscriber.onComplete(MonoPeekTerminal.java:299)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1840)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.complete(MonoIgnoreThen.java:292)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onNext(MonoIgnoreThen.java:187)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:236)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoPeekTerminal$MonoTerminalPeekSubscriber.onComplete(MonoPeekTerminal.java:299)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:209)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:238)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoPeekTerminal$MonoTerminalPeekSubscriber.onComplete(MonoPeekTerminal.java:299)
	at reactor.core.publisher.FluxPeekFuseable$PeekConditionalSubscriber.onComplete(FluxPeekFuseable.java:940)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.FluxHandle$HandleSubscriber.onComplete(FluxHandle.java:220)
	at reactor.core.publisher.FluxCreate$BaseSink.complete(FluxCreate.java:460)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.drain(FluxCreate.java:805)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.complete(FluxCreate.java:753)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.drainLoop(FluxCreate.java:247)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.drain(FluxCreate.java:213)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.complete(FluxCreate.java:204)
	at org.mariadb.r2dbc.client.MariadbPacketDecoder.handleBuffer(MariadbPacketDecoder.java:104)
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

2025-12-11 11:50:25.499 ERROR 448 --- [io-8888-exec-10] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.IllegalStateException: block()/blockFirst()/blockLast() are blocking, which is not supported in thread reactor-tcp-nio-2] with root cause

java.lang.IllegalStateException: block()/blockFirst()/blockLast() are blocking, which is not supported in thread reactor-tcp-nio-2
	at reactor.core.publisher.BlockingSingleSubscriber.blockingGet(BlockingSingleSubscriber.java:83)
	at reactor.core.publisher.Mono.block(Mono.java:1742)
	at com.gogofnd.kb.Accident.service.AccidentService.findAccidents(AccidentService.java:59)
	at com.gogofnd.kb.Accident.service.AccidentService$$FastClassBySpringCGLIB$$bd7b2036.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport$ReactiveTransactionSupport.lambda$null$5(TransactionAspectSupport.java:948)
	at reactor.core.publisher.FluxUsingWhen.deriveFluxFromResource(FluxUsingWhen.java:120)
	at reactor.core.publisher.FluxUsingWhen.subscribe(FluxUsingWhen.java:86)
	at reactor.core.publisher.Flux.subscribe(Flux.java:8642)
	at reactor.core.publisher.MonoFlatMapMany$FlatMapManyMain.onNext(MonoFlatMapMany.java:195)
	at reactor.core.publisher.FluxSwitchIfEmpty$SwitchIfEmptySubscriber.onNext(FluxSwitchIfEmpty.java:74)
	at reactor.core.publisher.FluxMapFuseable$MapFuseableSubscriber.onNext(FluxMapFuseable.java:129)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.complete(MonoIgnoreThen.java:292)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onNext(MonoIgnoreThen.java:187)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:236)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoPeekTerminal$MonoTerminalPeekSubscriber.onComplete(MonoPeekTerminal.java:299)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1840)
	at reactor.core.publisher.MonoFlatMap$FlatMapInner.onNext(MonoFlatMap.java:249)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.complete(MonoIgnoreThen.java:292)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onNext(MonoIgnoreThen.java:187)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:236)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoPeekTerminal$MonoTerminalPeekSubscriber.onComplete(MonoPeekTerminal.java:299)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:209)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:238)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoPeekTerminal$MonoTerminalPeekSubscriber.onComplete(MonoPeekTerminal.java:299)
	at reactor.core.publisher.FluxPeekFuseable$PeekConditionalSubscriber.onComplete(FluxPeekFuseable.java:940)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.FluxHandle$HandleSubscriber.onComplete(FluxHandle.java:220)
	at reactor.core.publisher.FluxCreate$BaseSink.complete(FluxCreate.java:460)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.drain(FluxCreate.java:805)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.complete(FluxCreate.java:753)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.drainLoop(FluxCreate.java:247)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.drain(FluxCreate.java:213)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.complete(FluxCreate.java:204)
	at org.mariadb.r2dbc.client.MariadbPacketDecoder.handleBuffer(MariadbPacketDecoder.java:104)
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

public Flux<DeliveryInsureAccidentResponseDto> findAccidents(AccidentCreate dto){

        log.info("dto -> " + dto.toString());
        String callCheck = dto.getCall_id().substring(0,1);

        AccidentSearch search = null;
        String saveCallId = "";

        if(callCheck.equals("G")) {
            //gci_groupid로 groupcall_info 조회
            search = accidentRepository.findByGroupCallIdForAccident(dto.getCall_id()).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND))).block();
        }else {
            //insu_call_id로 call_info 조회
            search = accidentRepository.findByInsuCallIdForAccident(dto.getCall_id()).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND))).block();
        }

        //사고 접수 값 db에 저장
        AccidentHistory history = accidentRepository.findAccident(dto.getClaim_number()).switchIfEmpty(Mono.just(AccidentHistory.create(dto, search.getCallId()))).block();

        if(history.getAhState() == 0) {
            accidentRepository.insertAccident(history);
        } else {
            accidentRepository.updateAccident(history);
        }

        LocalDateTime endDate = LocalDateTime.of(LocalDate.now(), LocalTime.of(23,59,59));

        search.setEndTime(endDate);

        List<CallInfoDto> callList = (List<CallInfoDto>) callInfoRepository.findCallsByAppointTimeForAccident(search).blockLast();
        List<DeliveryInsureAccidentResponseDto> callResList = new ArrayList<>();

        callList.forEach(call -> {
            DeliveryInsureAccidentResponseDto responseDto = new DeliveryInsureAccidentResponseDto(call);
            callResList.add(responseDto);
        });

        log.info("=============================== 사고접수 api호출 ===================================");
        log.info("사고접수 " + callList);

        callResList.forEach(System.out::println);

        return (Flux<DeliveryInsureAccidentResponseDto>) callResList;
    }

