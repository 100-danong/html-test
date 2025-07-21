오후 4:48:08: Executing ':new_GoPlanV1Application.main()'...

Download https://repo.maven.apache.org/maven2/io/projectreactor/netty/reactor-netty/1.1.22/reactor-netty-1.1.22.pom, took 73 ms (2.74 kB)
Download https://repo.maven.apache.org/maven2/io/projectreactor/reactor-core/3.6.9/reactor-core-3.6.9.pom, took 90 ms (2.15 kB)
Download https://repo.maven.apache.org/maven2/io/projectreactor/reactor-core/3.6.9/reactor-core-3.6.9.module, took 7 ms (2.31 kB)
Download https://repo.maven.apache.org/maven2/io/projectreactor/netty/incubator/reactor-netty-incubator-quic/0.1.22/reactor-netty-incubator-quic-0.1.22.pom, took 6 ms (2.47 kB)
Download https://repo.maven.apache.org/maven2/io/netty/incubator/netty-incubator-codec-native-quic/0.0.66.Final/netty-incubator-codec-native-quic-0.0.66.Final.pom, took 10 ms (59.17 kB)
Download https://repo.maven.apache.org/maven2/io/netty/incubator/netty-incubator-codec-parent-quic/0.0.66.Final/netty-incubator-codec-parent-quic-0.0.66.Final.pom, took 7 ms (16.72 kB)
Download https://repo.maven.apache.org/maven2/io/netty/incubator/netty-incubator-codec-classes-quic/0.0.66.Final/netty-incubator-codec-classes-quic-0.0.66.Final.pom, took 8 ms (3.38 kB)
Download https://repo.maven.apache.org/maven2/io/projectreactor/reactor-core/3.6.9/reactor-core-3.6.9.jar, took 216 ms (1.88 MB)

> Task :compileJava
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.

> Task :processResources UP-TO-DATE
> Task :classes
Download https://repo.maven.apache.org/maven2/io/projectreactor/netty/incubator/reactor-netty-incubator-quic/0.1.22/reactor-netty-incubator-quic-0.1.22.jar, took 19 ms (66.97 kB)
Download https://repo.maven.apache.org/maven2/io/netty/incubator/netty-incubator-codec-native-quic/0.0.66.Final/netty-incubator-codec-native-quic-0.0.66.Final-linux-x86_64.jar, took 122 ms (2.69 MB)
Download https://repo.maven.apache.org/maven2/io/netty/incubator/netty-incubator-codec-classes-quic/0.0.66.Final/netty-incubator-codec-classes-quic-0.0.66.Final.jar, took 15 ms (250.35 kB)

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.7.18)

2025-07-21 16:48:23.089  INFO 14524 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 14524 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-07-21 16:48:23.099 DEBUG 14524 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.18, Spring v5.3.31
2025-07-21 16:48:23.100  INFO 14524 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-07-21 16:48:34.081  INFO 14524 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-07-21 16:48:34.086  INFO 14524 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-07-21 16:48:35.682  INFO 14524 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 14.834 seconds (JVM running for 16.196)
한글 테스트 Start
2025-07-21 16:48:54.789 ERROR 14524 --- [actor-tcp-nio-2] r.n.channel.ChannelOperationsHandler     : [293b063d, L:/127.0.0.1:60537 - R:localhost/127.0.0.1:3306] Error was received while reading the incoming data. The connection will be closed.

java.lang.AbstractMethodError: Receiver class org.mariadb.r2dbc.client.MariadbRowMetadata does not define or inherit an implementation of the resolved method 'abstract java.util.Collection getColumnNames()' of interface io.r2dbc.spi.RowMetadata.
	at org.springframework.r2dbc.core.ColumnMapRowMapper.apply(ColumnMapRowMapper.java:57)
	at org.springframework.data.r2dbc.convert.ColumnMapRowMapper.apply(ColumnMapRowMapper.java:50)
	at org.springframework.data.r2dbc.convert.ColumnMapRowMapper.apply(ColumnMapRowMapper.java:44)
	at org.mariadb.r2dbc.client.MariadbResult.lambda$map$2(MariadbResult.java:198)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onNext(FluxHandleFuseable.java:179)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drainRegular(FluxWindowPredicate.java:670)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.drain(FluxWindowPredicate.java:748)
	at reactor.core.publisher.FluxWindowPredicate$WindowFlux.onNext(FluxWindowPredicate.java:790)
	at reactor.core.publisher.FluxWindowPredicate$WindowPredicateMain.onNext(FluxWindowPredicate.java:268)
	at reactor.core.publisher.FluxContextWrite$ContextWriteSubscriber.onNext(FluxContextWrite.java:107)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.drain(FluxCreate.java:880)
	at reactor.core.publisher.FluxCreate$BufferAsyncSink.next(FluxCreate.java:805)
	at reactor.core.publisher.FluxCreate$SerializedFluxSink.next(FluxCreate.java:163)
	at org.mariadb.r2dbc.client.Exchange.emit(Exchange.java:66)
	at org.mariadb.r2dbc.client.SimpleClient$ServerMessageSubscriber.onNext(SimpleClient.java:648)
	at org.mariadb.r2dbc.client.SimpleClient$ServerMessageSubscriber.onNext(SimpleClient.java:591)
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

