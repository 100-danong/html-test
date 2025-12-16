오후 2:17:50: Executing ':new_GoPlanV1Application.main()'...

> Task :compileJava UP-TO-DATE
> Task :processResources UP-TO-DATE
> Task :classes UP-TO-DATE

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.7.10)

2025-12-15 14:18:02.250  INFO 9600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 9600 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-15 14:18:02.276 DEBUG 9600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-15 14:18:02.280  INFO 9600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-15 14:18:18.153  INFO 9600 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-15 14:18:18.159  INFO 9600 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-15 14:18:22.094  INFO 9600 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 22.796 seconds (JVM running for 24.402)
한글 테스트 Start
2025-12-15 14:18:35.051 ERROR 9600 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

javax.crypto.BadPaddingException: Given final block not properly padded. Such issues can arise if a bad key is used during decryption.
	at java.base/com.sun.crypto.provider.CipherCore.unpad(CipherCore.java:975)
	at java.base/com.sun.crypto.provider.CipherCore.fillOutputBuffer(CipherCore.java:1056)
	at java.base/com.sun.crypto.provider.CipherCore.doFinal(CipherCore.java:853)
	at java.base/com.sun.crypto.provider.AESCipher.engineDoFinal(AESCipher.java:446)
	at java.base/javax.crypto.Cipher.doFinal(Cipher.java:2202)
	at com.gogofnd.kb.global.provider.AES256.AES256_DECRYPT(AES256.java:41)
	at com.gogofnd.kb.Business.service.RiderService.aes256Decode(RiderService.java:239)
	at com.gogofnd.kb.Business.service.RiderService.getRiderInsuranceStatus(RiderService.java:202)
	at com.gogofnd.kb.Business.service.RiderService$$FastClassBySpringCGLIB$$4ee4dd3a.invoke(<generated>)
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

2025-12-15 14:18:35.059 ERROR 9600 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is javax.crypto.BadPaddingException: Given final block not properly padded. Such issues can arise if a bad key is used during decryption.] with root cause

javax.crypto.BadPaddingException: Given final block not properly padded. Such issues can arise if a bad key is used during decryption.
	at java.base/com.sun.crypto.provider.CipherCore.unpad(CipherCore.java:975)
	at java.base/com.sun.crypto.provider.CipherCore.fillOutputBuffer(CipherCore.java:1056)
	at java.base/com.sun.crypto.provider.CipherCore.doFinal(CipherCore.java:853)
	at java.base/com.sun.crypto.provider.AESCipher.engineDoFinal(AESCipher.java:446)
	at java.base/javax.crypto.Cipher.doFinal(Cipher.java:2202)
	at com.gogofnd.kb.global.provider.AES256.AES256_DECRYPT(AES256.java:41)
	at com.gogofnd.kb.Business.service.RiderService.aes256Decode(RiderService.java:239)
	at com.gogofnd.kb.Business.service.RiderService.getRiderInsuranceStatus(RiderService.java:202)
	at com.gogofnd.kb.Business.service.RiderService$$FastClassBySpringCGLIB$$4ee4dd3a.invoke(<generated>)
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


Daemon will be stopped at the end of the build stop command received

> Task :new_GoPlanV1Application.main()
2025-12-15 15:02:53.229  INFO 9600 --- [actor-tcp-nio-3] c.g.kb.Business.service.RiderService     : decrypt : c1f15172d8a
2025-12-15 15:02:53.410 ERROR 9600 --- [nio-8888-exec-7] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.lang.ClassCastException: class java.lang.Byte cannot be cast to class java.lang.Integer (java.lang.Byte and java.lang.Integer are in module java.base of loader 'bootstrap')
	at com.gogofnd.kb.Insurance.dto.HistoriesSaveDto.from(HistoriesSaveDto.java:77)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:106)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.onNext(FluxUsingWhen.java:345)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.tryEmit(FluxFlatMap.java:544)
	at reactor.core.publisher.FluxFlatMap$FlatMapInner.onNext(FluxFlatMap.java:985)
	at reactor.core.publisher.FluxHandle$HandleSubscriber.onNext(FluxHandle.java:126)
	at reactor.core.publisher.FluxTakeUntil$TakeUntilPredicateSubscriber.onNext(FluxTakeUntil.java:84)
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

2025-12-15 15:02:53.441 ERROR 9600 --- [nio-8888-exec-7] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.ClassCastException: class java.lang.Byte cannot be cast to class java.lang.Integer (java.lang.Byte and java.lang.Integer are in module java.base of loader 'bootstrap')] with root cause

java.lang.ClassCastException: class java.lang.Byte cannot be cast to class java.lang.Integer (java.lang.Byte and java.lang.Integer are in module java.base of loader 'bootstrap')
	at com.gogofnd.kb.Insurance.dto.HistoriesSaveDto.from(HistoriesSaveDto.java:77)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:106)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.onNext(FluxUsingWhen.java:345)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.tryEmit(FluxFlatMap.java:544)
	at reactor.core.publisher.FluxFlatMap$FlatMapInner.onNext(FluxFlatMap.java:985)
	at reactor.core.publisher.FluxHandle$HandleSubscriber.onNext(FluxHandle.java:126)
	at reactor.core.publisher.FluxTakeUntil$TakeUntilPredicateSubscriber.onNext(FluxTakeUntil.java:84)
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

    public Mono<HistoriesSaveDto> findForUpdateById(Long ri_id, int ri_state) {

        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT ih.*, ri.ri_state ");
        sb.append(" FROM insurance_history ih ");
        sb.append(" INNER JOIN rider_info ri ");
        sb.append(" ON ih.ri_id = ri.ri_id ");
        sb.append(" WHERE ih.ri_id = :riId ");
        sb.append(" AND ri.ri_state = :riState ");
        sb.append(" UNION ALL ");
        sb.append(" SELECT ih.*, ri.ri_state ");
        sb.append(" FROM insurance_renew_history ih ");
        sb.append(" INNER JOIN rider_info_renew ri ");
        sb.append(" ON ih.ri_id = ri.ri_id ");
        sb.append(" WHERE ih.ri_id = :riId ");
        sb.append(" AND ri.ri_state = :riState ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("riId", ri_id)
                .bind("riState", ri_state)
                .fetch()
                .all()
                .map(HistoriesSaveDto::from)
                .next();
    }

	package com.gogofnd.kb.Insurance.dto;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.util.Map;

import static java.time.LocalDateTime.now;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class HistoriesSaveDto {

    @Id
    private Long ihId;

    private Long riId;

    private Long siId;

    private String ihInsuState;

    private String ihPolicyNumber;

    private String ihApplicationNumber;

    private LocalDateTime ihEffectStartdate;
    private LocalDateTime ihEffectEnddate;
    private LocalDateTime ihUntil;

    private String ihAgeYn;

    private String ihApplyState; // 적용(Y), 만료(N), 대기(W)

    private LocalDateTime ihInsTime;
    private LocalDateTime ihUpdTime;

    private LocalDateTime ishInsTime;

    private String riTotalWebviewUrl;

    private LocalDateTime rihWithdrawCompleteTime;

    private LocalDateTime rihUnderCompleteTime;

    private LocalDateTime rihEndoCompleteTime;

    // insurance_state_history 테이블 데이터 추가
    private String ihRejectCode;

    // 증권 갱신 시 필요
    private Integer riState;

    private Long pastRiId;

    public static HistoriesSaveDto from(Map<String, Object> row) {
        HistoriesSaveDto dto = new HistoriesSaveDto();

        dto.ihId = row.get("ih_id") != null ? ((Number) row.get("ih_id")).longValue() : null;
        dto.riId = (Long) row.get("ri_id");
        dto.siId = (Long) row.get("si_id");
        dto.ihInsuState = (String) row.get("ih_insu_state");
        dto.ihPolicyNumber = (String) row.get("ih_policy_number");
        dto.ihApplicationNumber = (String) row.get("ih_application_number");
        dto.ihEffectStartdate = (LocalDateTime) row.get("ih_effect_startdate");
        dto.ihEffectEnddate = (LocalDateTime) row.get("ih_effect_enddate");
        dto.ihUntil = (LocalDateTime) row.get("ih_until");
        dto.ihAgeYn = (String) row.get("ih_age_yn");
        dto.ihApplyState = (String) row.get("ih_apply_state");
        dto.ihInsTime = (LocalDateTime) row.get("ih_ins_time");
        dto.ihUpdTime = (LocalDateTime) row.get("ih_upd_time");
        dto.riState = (Integer) row.get("ri_state");

        return dto;
    }


    public void updateEndoCompl() {
        this.rihEndoCompleteTime = now();
    }

    public void updateWithdrawCompl() {
        this.rihWithdrawCompleteTime = now();
    }

    public void updateUnderCompl() {
        this.rihUnderCompleteTime = now();

    }

    public void updateTime() {
        this.ihUpdTime = now();
    }

    public void updateIshInsTime() {this.ishInsTime = now();}

    public void updateRejectCode(String ihRejectCode) {this.ihRejectCode = ihRejectCode;}

    public void updateUntil(LocalDateTime ihUntil) {this.ihUntil = ihUntil;}

    public void updateEffectTime(LocalDateTime ihEffectStartdate, LocalDateTime ihEffectEnddate, LocalDateTime ihUntil) {
        this.ihEffectStartdate = ihEffectStartdate;
        this.ihEffectEnddate = ihEffectEnddate;
    }

    public void updateIhId(Long ihId) {
        this.ihId = ihId;
    }

    public static HistoriesSaveDto create(Long riId, Long siId, String ihInsuState, String ihPolicyNumber, String ihApplicationNumber, String ihAgeYn, String riTotalWebviewUrl) {
        return HistoriesSaveDto.builder()
                .riId(riId)
                .siId(siId)
                .ihInsuState(ihInsuState)
                .ihPolicyNumber(ihPolicyNumber)
                .ihApplicationNumber(ihApplicationNumber)
                .ihAgeYn(ihAgeYn)
                .ihApplyState("W") // 적용(Y), 만료(N), 대기(W)
                .ihInsTime(now())
                .ihUpdTime(now())
                .ishInsTime(now())
                .riTotalWebviewUrl(riTotalWebviewUrl)
                .build();
    }

}
