    public Mono<String> updateInsureDate(UpdateInsureDateReq req) throws BusinessException {
        Mono<Integer> resUpdRiderInfo = null;

        Mono<String> insuType = riderInfoRepository.findInsuTypeByDriverId(req.getDriverId()).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)));

        if (Objects.equals(insuType, "D")) {
            resUpdRiderInfo = riderInfoRepository.updateRiderForOneDayInsurance(req).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.DB_UPDATE_FAIL)));
        }

        return resUpdRiderInfo.then(Mono.just("OK"));
    }

        public Mono<Integer> updateRiderForOneDayInsurance(UpdateInsureDateReq req) {

        StringBuffer sb = new StringBuffer();
        sb.append(" UPDATE rider_info SET ");
        sb.append(" ri_insu_startdate = :effectiveStartDate, ");
        sb.append(" ri_insu_enddate = :effectiveEndDate, ");
        sb.append(" ri_pay_status = 'Y', ");
        sb.append(" ri_upd_time = NOW() ");
        sb.append(" WHERE ri_driver_id = :driverId ");
        sb.append(" AND ri_state = 1 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("effectiveStartDate", req.getEffectiveStartDate())
                .bind("effectiveEndDate", req.getEffectiveEndDate())
                .bind("driverId", req.getDriverId())
                .fetch()
                .rowsUpdated();
    }

    오후 12:15:11: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-15 12:15:29.234  INFO 8500 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 8500 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-15 12:15:29.245 DEBUG 8500 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-15 12:15:29.252  INFO 8500 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-15 12:15:44.575  INFO 8500 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-15 12:15:44.578  INFO 8500 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-15 12:15:48.146  INFO 8500 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 21.247 seconds (JVM running for 23.031)
한글 테스트 Start
2025-12-15 12:16:09.475  INFO 8500 --- [actor-tcp-nio-2] c.g.kb.Business.service.BusinessService  : 1. MonoSwitchIfEmpty
2025-12-15 12:16:09.532  INFO 8500 --- [actor-tcp-nio-2] c.g.kb.Business.service.BusinessService  : 3. null
2025-12-15 12:16:09.647 ERROR 8500 --- [nio-8888-exec-1] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.lang.NullPointerException: null
	at com.gogofnd.kb.Business.service.BusinessService.updateInsureDate(BusinessService.java:90)
	at com.gogofnd.kb.Business.service.BusinessService$$FastClassBySpringCGLIB$$2814c416.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport$ReactiveTransactionSupport.lambda$null$0(TransactionAspectSupport.java:918)
	at reactor.core.publisher.MonoUsingWhen.deriveMonoFromResource(MonoUsingWhen.java:114)
	at reactor.core.publisher.MonoUsingWhen.subscribe(MonoUsingWhen.java:79)
	at reactor.core.publisher.InternalMonoOperator.subscribe(InternalMonoOperator.java:64)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:157)
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

2025-12-15 12:16:09.659 ERROR 8500 --- [nio-8888-exec-1] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.NullPointerException] with root cause

java.lang.NullPointerException: null
	at com.gogofnd.kb.Business.service.BusinessService.updateInsureDate(BusinessService.java:90)
	at com.gogofnd.kb.Business.service.BusinessService$$FastClassBySpringCGLIB$$2814c416.invoke(<generated>)
	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:793)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.transaction.interceptor.TransactionInterceptor$1.proceedWithInvocation(TransactionInterceptor.java:123)
	at org.springframework.transaction.interceptor.TransactionAspectSupport$ReactiveTransactionSupport.lambda$null$0(TransactionAspectSupport.java:918)
	at reactor.core.publisher.MonoUsingWhen.deriveMonoFromResource(MonoUsingWhen.java:114)
	at reactor.core.publisher.MonoUsingWhen.subscribe(MonoUsingWhen.java:79)
	at reactor.core.publisher.InternalMonoOperator.subscribe(InternalMonoOperator.java:64)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:157)
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

