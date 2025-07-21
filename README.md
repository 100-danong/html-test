오후 1:48:01: Executing ':new_GoPlanV1Application.main()'...

Download https://repo.maven.apache.org/maven2/io/projectreactor/reactor-core/3.4.0/reactor-core-3.4.0.jar, took 481 ms (1.63 MB)
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

2025-07-21 13:48:13.294  INFO 6232 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application on Gogofnd002 with PID 6232 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-07-21 13:48:13.301 DEBUG 6232 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-07-21 13:48:13.312  INFO 6232 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following profiles are active: dev
2025-07-21 13:48:23.001  INFO 6232 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-07-21 13:48:23.003  INFO 6232 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-07-21 13:48:24.266  INFO 6232 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 12.612 seconds (JVM running for 14.119)
한글 테스트 Start
2025-07-21 13:48:37.831 ERROR 6232 --- [actor-tcp-nio-1] reactor.core.publisher.Operators         : Operator called default onErrorDropped

java.lang.NoClassDefFoundError: io/r2dbc/spi/OutParameterMetadata
	at java.base/java.lang.ClassLoader.defineClass1(Native Method)
	at java.base/java.lang.ClassLoader.defineClass(ClassLoader.java:1017)
	at java.base/java.security.SecureClassLoader.defineClass(SecureClassLoader.java:174)
	at java.base/jdk.internal.loader.BuiltinClassLoader.defineClass(BuiltinClassLoader.java:800)
	at java.base/jdk.internal.loader.BuiltinClassLoader.findClassOnClassPathOrNull(BuiltinClassLoader.java:698)
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClassOrNull(BuiltinClassLoader.java:621)
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:579)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	at java.base/java.lang.Class.getDeclaredMethods0(Native Method)
	at java.base/java.lang.Class.privateGetDeclaredMethods(Class.java:3166)
	at java.base/java.lang.Class.getMethodsRecursive(Class.java:3307)
	at java.base/java.lang.Class.getMethod0(Class.java:3293)
	at java.base/java.lang.Class.getMethod(Class.java:2106)
	at io.netty.channel.ChannelHandlerMask$2.run(ChannelHandlerMask.java:174)
	at io.netty.channel.ChannelHandlerMask$2.run(ChannelHandlerMask.java:169)
	at java.base/java.security.AccessController.doPrivileged(Native Method)
	at io.netty.channel.ChannelHandlerMask.isSkippable(ChannelHandlerMask.java:169)
	at io.netty.channel.ChannelHandlerMask.mask0(ChannelHandlerMask.java:97)
	at io.netty.channel.ChannelHandlerMask.mask(ChannelHandlerMask.java:82)
	at io.netty.channel.AbstractChannelHandlerContext.<init>(AbstractChannelHandlerContext.java:109)
	at io.netty.channel.DefaultChannelHandlerContext.<init>(DefaultChannelHandlerContext.java:26)
	at io.netty.channel.DefaultChannelPipeline.newContext(DefaultChannelPipeline.java:120)
	at io.netty.channel.DefaultChannelPipeline.addFirst(DefaultChannelPipeline.java:162)
	at io.netty.channel.DefaultChannelPipeline.addFirst(DefaultChannelPipeline.java:152)
	at reactor.netty.ReactorNetty.addHandlerAfterReactorCodecs(ReactorNetty.java:342)
	at reactor.netty.Connection.addHandlerFirst(Connection.java:198)
	at reactor.netty.Connection.addHandlerFirst(Connection.java:177)
	at org.mariadb.r2dbc.client.SimpleClient.<init>(SimpleClient.java:98)
	at org.mariadb.r2dbc.client.SimpleClient.lambda$connect$2(SimpleClient.java:157)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:125)
	at reactor.core.publisher.MonoCreate$DefaultMonoSink.success(MonoCreate.java:160)
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
Caused by: java.lang.ClassNotFoundException: io.r2dbc.spi.OutParameterMetadata
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	... 51 common frames omitted

