오후 4:17:25: Executing ':new_GoPlanV1Application.main()'...

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

2025-09-29 16:17:37.890  INFO 9028 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 9028 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-09-29 16:17:37.896 DEBUG 9028 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-09-29 16:17:37.897  INFO 9028 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-09-29 16:17:49.310  INFO 9028 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-09-29 16:17:49.312  INFO 9028 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-09-29 16:17:51.044  INFO 9028 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 15.243 seconds (JVM running for 16.79)
한글 테스트 Start
2025-09-29 16:18:27.222  INFO 9028 --- [actor-tcp-nio-2] com.gogofnd.kb.Kb.service.KbService      : ======================================= 13번 api 호출 ================================
2025-09-29 16:18:27.227  INFO 9028 --- [actor-tcp-nio-2] com.gogofnd.kb.Kb.service.KbService      : date : 2025-09-29 04:07:08.546
2025-09-29 16:18:27.231  INFO 9028 --- [actor-tcp-nio-2] com.gogofnd.kb.Kb.service.KbService      : balance : 2501453
2025-09-29 16:18:27.231  INFO 9028 --- [actor-tcp-nio-2] com.gogofnd.kb.Kb.service.KbService      : cmpcd : G05
2025-09-29 16:18:27.232  INFO 9028 --- [actor-tcp-nio-2] com.gogofnd.kb.Kb.service.KbService      : useAmt : 0
2025-09-29 16:18:27.341 ERROR 9028 --- [nio-8888-exec-5] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.time.format.DateTimeParseException: Text '2025--0-9-29 04:07:08.546 16:18:27.241' could not be parsed at index 5
	at java.base/java.time.format.DateTimeFormatter.parseResolved0(DateTimeFormatter.java:2046)
	at java.base/java.time.format.DateTimeFormatter.parse(DateTimeFormatter.java:1948)
	at java.base/java.time.LocalDateTime.parse(LocalDateTime.java:492)
	at com.gogofnd.kb.Kb.entity.InsuranceBalanceHistory.create(InsuranceBalanceHistory.java:41)
	at com.gogofnd.kb.Kb.service.KbService.lambda$balanceListTotal$0(KbService.java:47)
	at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)
	at java.base/java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1655)
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)
	at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
	at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)
	at com.gogofnd.kb.Kb.service.KbService.balanceListTotal(KbService.java:48)
	at com.gogofnd.kb.Kb.service.KbService$$FastClassBySpringCGLIB$$27e87f36.invoke(<generated>)
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

2025-09-29 16:18:27.380 ERROR 9028 --- [nio-8888-exec-5] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.time.format.DateTimeParseException: Text '2025--0-9-29 04:07:08.546 16:18:27.241' could not be parsed at index 5] with root cause

java.time.format.DateTimeParseException: Text '2025--0-9-29 04:07:08.546 16:18:27.241' could not be parsed at index 5
	at java.base/java.time.format.DateTimeFormatter.parseResolved0(DateTimeFormatter.java:2046)
	at java.base/java.time.format.DateTimeFormatter.parse(DateTimeFormatter.java:1948)
	at java.base/java.time.LocalDateTime.parse(LocalDateTime.java:492)
	at com.gogofnd.kb.Kb.entity.InsuranceBalanceHistory.create(InsuranceBalanceHistory.java:41)
	at com.gogofnd.kb.Kb.service.KbService.lambda$balanceListTotal$0(KbService.java:47)
	at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)
	at java.base/java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1655)
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)
	at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
	at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)
	at com.gogofnd.kb.Kb.service.KbService.balanceListTotal(KbService.java:48)
	at com.gogofnd.kb.Kb.service.KbService$$FastClassBySpringCGLIB$$27e87f36.invoke(<generated>)
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


스웨거에서 테스트 중인데 입력한 날짜 형식이 문제가 있다는 거 같은데 

[
  {
    "balance": "2501453",
    "date": "2025-09-29 04:07:08.546",
    "proxy_driv_coorp_cmpcd": "G05",
    "use_amt": "0"
  }
]

이렇게 테스트 중인데 뭐가 문제야?
