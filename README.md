오후 1:41:47: Executing ':new_GoPlanV1Application.main()'...

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
 :: Spring Boot ::        (v2.3.9.RELEASE)

2025-07-21 13:42:01.564  INFO 5164 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application on Gogofnd002 with PID 5164 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-07-21 13:42:01.571 DEBUG 5164 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-07-21 13:42:01.573  INFO 5164 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following profiles are active: dev
2025-07-21 13:42:15.167  INFO 5164 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-07-21 13:42:15.170  INFO 5164 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-07-21 13:42:16.459  INFO 5164 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 17.083 seconds (JVM running for 18.488)
한글 테스트 Start
2025-07-21 13:42:31.698 ERROR 5164 --- [actor-tcp-nio-1] reactor.core.publisher.Operators         : Operator called default onErrorDropped

java.lang.NoClassDefFoundError: reactor/core/publisher/Sinks
	at org.mariadb.r2dbc.client.SimpleClient.<init>(SimpleClient.java:57)
	at org.mariadb.r2dbc.client.SimpleClient.lambda$connect$2(SimpleClient.java:157)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:118)
	at reactor.core.publisher.MonoCreate$DefaultMonoSink.success(MonoCreate.java:156)
	at reactor.netty.resources.NewConnectionProvider$NewConnectionObserver.onStateChange(NewConnectionProvider.java:199)
	at reactor.netty.channel.ChannelOperationsHandler.channelActive(ChannelOperationsHandler.java:65)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelActive(AbstractChannelHandlerContext.java:230)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelActive(AbstractChannelHandlerContext.java:216)
	at io.netty.channel.AbstractChannelHandlerContext.fireChannelActive(AbstractChannelHandlerContext.java:209)
	at io.netty.channel.DefaultChannelPipeline$HeadContext.channelActive(DefaultChannelPipeline.java:1398)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelActive(AbstractChannelHandlerContext.java:230)
	at io.netty.channel.AbstractChannelHandlerContext.invokeChannelActive(AbstractChannelHandlerContext.java:216)
	at io.netty.channel.DefaultChannelPipeline.fireChannelActive(DefaultChannelPipeline.java:895)
	at io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.fulfillConnectPromise(AbstractNioChannel.java:305)
	at io.netty.channel.nio.AbstractNioChannel$AbstractNioUnsafe.finishConnect(AbstractNioChannel.java:335)
	at io.netty.channel.nio.NioEventLoop.processSelectedKey(NioEventLoop.java:707)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeysOptimized(NioEventLoop.java:655)
	at io.netty.channel.nio.NioEventLoop.processSelectedKeys(NioEventLoop.java:581)
	at io.netty.channel.nio.NioEventLoop.run(NioEventLoop.java:493)
	at io.netty.util.concurrent.SingleThreadEventExecutor$4.run(SingleThreadEventExecutor.java:989)
	at io.netty.util.internal.ThreadExecutorMap$2.run(ThreadExecutorMap.java:74)
	at io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)
	at java.base/java.lang.Thread.run(Thread.java:829)
Caused by: java.lang.ClassNotFoundException: reactor.core.publisher.Sinks
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	... 23 common frames omitted

