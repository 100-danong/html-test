오후 5:19:18: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.

> Task :processResources
> Task :classes

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.7.18)

2025-07-21 17:19:30.923  INFO 12912 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 12912 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-07-21 17:19:30.932 DEBUG 12912 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.18, Spring v5.3.31
2025-07-21 17:19:30.933  INFO 12912 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-07-21 17:19:42.968  INFO 12912 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-07-21 17:19:42.970  INFO 12912 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-07-21 17:19:44.649  INFO 12912 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 15.674 seconds (JVM running for 16.965)
한글 테스트 Start
2025-07-21 17:20:29.378 ERROR 12912 --- [actor-tcp-nio-2] r.n.channel.ChannelOperationsHandler     : [ec75526a, L:/127.0.0.1:61424 - R:localhost/127.0.0.1:3306] Error was received while reading the incoming data. The connection will be closed.

java.lang.AbstractMethodError: Receiver class org.mariadb.r2dbc.client.MariadbRowMetadata does not define or inherit an implementation of the resolved method 'abstract java.util.Collection getColumnNames()' of interface io.r2dbc.spi.RowMetadata.
	at org.springframework.r2dbc.core.ColumnMapRowMapper.apply(ColumnMapRowMapper.java:57)
	at org.springframework.data.r2dbc.convert.ColumnMapRowMapper.apply(ColumnMapRowMapper.java:50)
	at org.springframework.data.r2dbc.convert.ColumnMapRowMapper.apply(ColumnMapRowMapper.java:44)
	at org.mariadb.r2dbc.client.MariadbResult.lambda$map$2(MariadbResult.java:198)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onNext(FluxHandleFuseable.java:176)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drainRegular(FluxWindowPredicate.java:668)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drain(FluxWindowPredicate.java:746)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.onNext(FluxWindowPredicate.java:788)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.onNext(FluxWindowPredicate.java:266)
	at reactor.core.publisher.FluxContextWrite$ContextWriteSubscriber.onNext(FluxContextWrite.java:107)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.drain(FluxCreate.java:878)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.next(FluxCreate.java:803)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.next(FluxCreate.java:161)
	at org.mariadb.r2dbc.client.Exchange.emit(Exchange.java:66)
	at org.mariadb.r2dbc.client.SimpleClient$ServerMessageSubscriber.onNext(SimpleClient.java:646)
	at org.mariadb.r2dbc.client.SimpleClient$ServerMessageSubscriber.onNext(SimpleClient.java:589)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:122)
	at reactor.netty.channel.FluxReceive.drainReceiver(FluxReceive.java:294)
	at reactor.netty.channel.FluxReceive.onInboundNext(FluxReceive.java:403)
	at reactor.netty.channel.ChannelOperations.onInboundNext(ChannelOperations.java:419)
	at reactor.netty.channel.ChannelOperationsHandler.channelRead(ChannelOperationsHandler.java:114)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:444)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelRead(AbstractChannelHandlerContext.java:420)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelRead(AbstractChannelHandlerContext.java:412)
	at io.netty.handler.codec.ByteToMessageDecoder.fireChannelRead(ByteToMessageDecoder.java:346)
	at io.netty.handler.codec.ByteToMessageDecoder.fireChannelRead(ByteToMessageDecoder.java:333)
	at io.netty.handler.codec.ByteToMessageDecoder.callDecode(ByteToMessageDecoder.java:454)
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

