오후 1:42:41: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: Some input files use or override a deprecated API.
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

2025-12-11 13:43:15.541  INFO 1844 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 1844 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-11 13:43:15.551 DEBUG 1844 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-11 13:43:15.555  INFO 1844 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-11 13:43:28.581  INFO 1844 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-11 13:43:28.589  INFO 1844 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-11 13:43:32.100  INFO 1844 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 19.203 seconds (JVM running for 21.049)
한글 테스트 Start
2025-12-11 13:44:01.339  INFO 1844 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : dto -> AccidentCreate(proxy_driv_coorp_cmpcd=G02, call_id=GR20250904-33128-0003, claim_number=20230816040474, claim_time=2025090407350, accident_time=20250904063503)
2025-12-11 13:44:01.389  INFO 1844 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : =============================== 사고접수 api호출 ===================================
2025-12-11 13:44:01.394  INFO 1844 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 MonoFlatMapMany
2025-12-11 13:44:01.663 ERROR 1844 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.lang.IllegalArgumentException: Value for parameter endTime must not be null. Use bindNull(…) instead.
	at org.springframework.util.Assert.notNull(Assert.java:219)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.bind(DefaultDatabaseClient.java:274)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.bind(DefaultDatabaseClient.java:216)
	at com.gogofnd.kb.Accident.repository.CallInfoRepository.findCallsByAppointTimeForAccident(CallInfoRepository.java:45)
	at com.gogofnd.kb.Accident.repository.CallInfoRepository$$FastClassBySpringCGLIB$$5a7afb03.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:137)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:708)
	at com.gogofnd.kb.Accident.repository.CallInfoRepository$$EnhancerBySpringCGLIB$$50b70502.findCallsByAppointTimeForAccident(<generated>)
	at com.gogofnd.kb.Accident.service.AccidentService.lambda$findAccidents$3(AccidentService.java:78)
	at reactor.core.publisher.MonoFlatMapMany$FlatMapManyMain.onNext(MonoFlatMapMany.java:163)
	at reactor.core.publisher.MonoNext$NextSubscriber.onNext(MonoNext.java:82)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.tryEmitScalar(FluxFlatMap.java:489)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.onNext(FluxFlatMap.java:422)
	at reactor.core.publisher.FluxBuffer$BufferExactSubscriber.onComplete(FluxBuffer.java:185)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.deferredComplete(FluxUsingWhen.java:392)
	at reactor.core.publisher.FluxUsingWhen$CommitInner.onComplete(FluxUsingWhen.java:527)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.FluxMap$MapSubscriber.onComplete(FluxMap.java:144)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.onComplete(FluxFilter.java:166)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.onComplete(FluxFilter.java:300)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.onComplete(FluxMap.java:275)
	at reactor.core.publisher.Operators$ScalarSubscription.request(Operators.java:2402)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.request(FluxMap.java:295)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.request(FluxFilter.java:321)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.request(FluxFilter.java:186)
	at reactor.core.publisher.FluxMap$MapSubscriber.request(FluxMap.java:164)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onSubscribe(MonoIgnoreElements.java:72)
	at reactor.core.publisher.FluxMap$MapSubscriber.onSubscribe(FluxMap.java:92)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.onSubscribe(FluxFilter.java:85)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.onSubscribe(FluxFilter.java:219)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.onSubscribe(FluxMap.java:194)
	at reactor.core.publisher.MonoJust.subscribe(MonoJust.java:55)
	at reactor.core.publisher.MonoDeferContextual.subscribe(MonoDeferContextual.java:55)
	at reactor.core.publisher.InternalMonoOperator.subscribe(InternalMonoOperator.java:64)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.onComplete(FluxUsingWhen.java:384)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.checkTerminated(FluxFlatMap.java:847)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.drainLoop(FluxFlatMap.java:609)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.drain(FluxFlatMap.java:589)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.onComplete(FluxFlatMap.java:466)
	at reactor.core.publisher.FluxOnAssembly$OnAssemblySubscriber.onComplete(FluxOnAssembly.java:549)
	at reactor.core.publisher.FluxMapFuseable$MapFuseableSubscriber.onComplete(FluxMapFuseable.java:152)
	at reactor.core.publisher.FluxContextWrite$ContextWriteSubscriber.onComplete(FluxContextWrite.java:126)
	at reactor.core.publisher.FluxConcatArray$ConcatArraySubscriber.onComplete(FluxConcatArray.java:230)
	at reactor.core.publisher.FluxMapFuseable$MapFuseableSubscriber.onComplete(FluxMapFuseable.java:152)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.checkTerminated(FluxWindowPredicate.java:538)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.drainLoop(FluxWindowPredicate.java:486)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.drain(FluxWindowPredicate.java:430)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.onComplete(FluxWindowPredicate.java:310)
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

2025-12-11 13:44:01.716 ERROR 1844 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.IllegalArgumentException: Value for parameter endTime must not be null. Use bindNull(…) instead.] with root cause

java.lang.IllegalArgumentException: Value for parameter endTime must not be null. Use bindNull(…) instead.
	at org.springframework.util.Assert.notNull(Assert.java:219)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.bind(DefaultDatabaseClient.java:274)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.bind(DefaultDatabaseClient.java:216)
	at com.gogofnd.kb.Accident.repository.CallInfoRepository.findCallsByAppointTimeForAccident(CallInfoRepository.java:45)
	at com.gogofnd.kb.Accident.repository.CallInfoRepository$$FastClassBySpringCGLIB$$5a7afb03.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:137)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:708)
	at com.gogofnd.kb.Accident.repository.CallInfoRepository$$EnhancerBySpringCGLIB$$50b70502.findCallsByAppointTimeForAccident(<generated>)
	at com.gogofnd.kb.Accident.service.AccidentService.lambda$findAccidents$3(AccidentService.java:78)
	at reactor.core.publisher.MonoFlatMapMany$FlatMapManyMain.onNext(MonoFlatMapMany.java:163)
	at reactor.core.publisher.MonoNext$NextSubscriber.onNext(MonoNext.java:82)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.tryEmitScalar(FluxFlatMap.java:489)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.onNext(FluxFlatMap.java:422)
	at reactor.core.publisher.FluxBuffer$BufferExactSubscriber.onComplete(FluxBuffer.java:185)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.deferredComplete(FluxUsingWhen.java:392)
	at reactor.core.publisher.FluxUsingWhen$CommitInner.onComplete(FluxUsingWhen.java:527)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.FluxMap$MapSubscriber.onComplete(FluxMap.java:144)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.onComplete(FluxFilter.java:166)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.onComplete(FluxFilter.java:300)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.onComplete(FluxMap.java:275)
	at reactor.core.publisher.Operators$ScalarSubscription.request(Operators.java:2402)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.request(FluxMap.java:295)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.request(FluxFilter.java:321)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.request(FluxFilter.java:186)
	at reactor.core.publisher.FluxMap$MapSubscriber.request(FluxMap.java:164)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onSubscribe(MonoIgnoreElements.java:72)
	at reactor.core.publisher.FluxMap$MapSubscriber.onSubscribe(FluxMap.java:92)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.onSubscribe(FluxFilter.java:85)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.onSubscribe(FluxFilter.java:219)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.onSubscribe(FluxMap.java:194)
	at reactor.core.publisher.MonoJust.subscribe(MonoJust.java:55)
	at reactor.core.publisher.MonoDeferContextual.subscribe(MonoDeferContextual.java:55)
	at reactor.core.publisher.InternalMonoOperator.subscribe(InternalMonoOperator.java:64)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.onComplete(FluxUsingWhen.java:384)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.checkTerminated(FluxFlatMap.java:847)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.drainLoop(FluxFlatMap.java:609)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.drain(FluxFlatMap.java:589)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.onComplete(FluxFlatMap.java:466)
	at reactor.core.publisher.FluxOnAssembly$OnAssemblySubscriber.onComplete(FluxOnAssembly.java:549)
	at reactor.core.publisher.FluxMapFuseable$MapFuseableSubscriber.onComplete(FluxMapFuseable.java:152)
	at reactor.core.publisher.FluxContextWrite$ContextWriteSubscriber.onComplete(FluxContextWrite.java:126)
	at reactor.core.publisher.FluxConcatArray$ConcatArraySubscriber.onComplete(FluxConcatArray.java:230)
	at reactor.core.publisher.FluxMapFuseable$MapFuseableSubscriber.onComplete(FluxMapFuseable.java:152)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.checkTerminated(FluxWindowPredicate.java:538)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.drainLoop(FluxWindowPredicate.java:486)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.drain(FluxWindowPredicate.java:430)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.onComplete(FluxWindowPredicate.java:310)
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

        Mono<AccidentSearch> searchMono = callCheck.equals("G") ? accidentRepository.findByGroupCallIdForAccident(dto.getCall_id()) : accidentRepository.findByInsuCallIdForAccident(dto.getCall_id()).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));

        Mono<AccidentHistory> historyMono = searchMono
                .map(search -> {
                    LocalDateTime endDate = LocalDateTime.of(LocalDate.now(), LocalTime.of(23,59,59));
                    search.setEndTime(endDate);
                    return search;
                })
                .flatMap(search ->
                        accidentRepository.findAccident(dto.getClaim_number())
                                .switchIfEmpty(Mono.just(AccidentHistory.create(dto, search.getCallId())))
                );

        historyMono.flatMap(history -> {
            if (history.getAhState() == 0) {
                return accidentRepository.insertAccident(history);
            } else {
                return accidentRepository.updateAccident(history);
            }
        }).then();

        Flux<CallInfoDto> callList = searchMono
                .flatMapMany(search -> {
                    return callInfoRepository.findCallsByAppointTimeForAccident(search);
                });

        Flux<DeliveryInsureAccidentResponseDto> callResList = searchMono  // endTime 세팅된 search 재사용
                .flatMapMany(search ->
                        callList.map(call -> new DeliveryInsureAccidentResponseDto(call))
                );

        log.info("=============================== 사고접수 api호출 ===================================");
        log.info("사고접수 " + callList); 

        return callResList;
    }

