오후 3:00:22: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Insurance\controller\InsuranceApi.java uses unchecked or unsafe operations.
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

2025-12-18 15:00:38.330  INFO 5952 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 5952 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 15:00:38.342 DEBUG 5952 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 15:00:38.343  INFO 5952 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 15:00:51.961  INFO 5952 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 15:00:51.965  INFO 5952 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 15:00:55.674  INFO 5952 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 20.101 seconds (JVM running for 21.761)
한글 테스트 Start
2025-12-18 15:00:59.616  INFO 5952 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 15:01:01.369  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 15:01:01.398  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 15:01:01.405  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 15:01:01.409  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:01:01.410  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:01:01.426  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:01:01.428  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:01:01.476  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 15:01:01.476  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034042
2025-12-18 15:01:01.477  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:01:01.489  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:01:01.490  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:01:01.490  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:01:01.491  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G03
2025-12-18 15:01:01.492  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034043
2025-12-18 15:01:01.493  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:01:01.501  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:01:01.505  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:01:01.508  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:01:01.571  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 15:01:01.591  INFO 5952 --- [actor-tcp-nio-2] c.g.k.I.r.SellerPolicyNumberRepository   : 흠냐룽
2025-12-18 15:01:01.723 ERROR 5952 --- [nio-8888-exec-3] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.lang.NullPointerException: defaultValue
	at java.base/java.util.Objects.requireNonNull(Objects.java:246)
	at reactor.core.publisher.MonoDefaultIfEmpty.<init>(MonoDefaultIfEmpty.java:32)
	at reactor.core.publisher.Mono.defaultIfEmpty(Mono.java:2368)
	at com.gogofnd.kb.Insurance.service.InsuranceService.lambda$signUpResult$28(InsuranceService.java:888)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:125)
	at reactor.core.publisher.MonoNext$NextSubscriber.onNext(MonoNext.java:82)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.tryEmitScalar(FluxFlatMap.java:489)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.onNext(FluxFlatMap.java:422)
	at reactor.core.publisher.FluxBuffer$BufferExactSubscriber.onComplete(FluxBuffer.java:185)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.deferredComplete(FluxUsingWhen.java:392)
	at reactor.core.publisher.FluxUsingWhen$CommitInner.onComplete(FluxUsingWhen.java:527)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.FluxPeek$PeekSubscriber.onComplete(FluxPeek.java:260)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:209)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:209)
	at reactor.pool.SimpleDequePool.maybeRecycleAndDrain(SimpleDequePool.java:533)
	at reactor.pool.SimpleDequePool$QueuePoolRecyclerInner.onComplete(SimpleDequePool.java:765)
	at reactor.core.publisher.Operators.complete(Operators.java:137)
	at reactor.core.publisher.MonoEmpty.subscribe(MonoEmpty.java:46)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.pool.SimpleDequePool$QueuePoolRecyclerMono.subscribe(SimpleDequePool.java:877)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:240)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.FluxPeek$PeekSubscriber.onComplete(FluxPeek.java:260)
	at reactor.core.publisher.Operators.complete(Operators.java:137)
	at reactor.core.publisher.MonoEmpty.subscribe(MonoEmpty.java:46)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:263)
	at reactor.core.publisher.MonoIgnoreThen.subscribe(MonoIgnoreThen.java:51)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:240)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onComplete(FluxHandleFuseable.java:236)
	at reactor.core.publisher.Operators$ScalarSubscription.request(Operators.java:2402)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.request(FluxHandleFuseable.java:257)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onSubscribe(MonoIgnoreElements.java:72)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onSubscribe(FluxHandleFuseable.java:161)
	at reactor.core.publisher.FluxJust.subscribe(FluxJust.java:68)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:263)
	at reactor.core.publisher.MonoIgnoreThen.subscribe(MonoIgnoreThen.java:51)
	at reactor.core.publisher.InternalMonoOperator.subscribe(InternalMonoOperator.java:64)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onError(FluxOnErrorResume.java:103)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onError(MonoIgnoreElements.java:84)
	at reactor.core.publisher.FluxMap$MapSubscriber.onError(FluxMap.java:134)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.onError(FluxFilter.java:157)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.onError(FluxFilter.java:291)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.onError(FluxMap.java:265)
	at reactor.core.publisher.Operators.error(Operators.java:198)
	at reactor.core.publisher.MonoError.subscribe(MonoError.java:53)
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

2025-12-18 15:01:01.740 ERROR 5952 --- [nio-8888-exec-3] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.NullPointerException: defaultValue] with root cause

java.lang.NullPointerException: defaultValue
	at java.base/java.util.Objects.requireNonNull(Objects.java:246)
	at reactor.core.publisher.MonoDefaultIfEmpty.<init>(MonoDefaultIfEmpty.java:32)
	at reactor.core.publisher.Mono.defaultIfEmpty(Mono.java:2368)
	at com.gogofnd.kb.Insurance.service.InsuranceService.lambda$signUpResult$28(InsuranceService.java:888)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:125)
	at reactor.core.publisher.MonoNext$NextSubscriber.onNext(MonoNext.java:82)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.tryEmitScalar(FluxFlatMap.java:489)
	at reactor.core.publisher.FluxFlatMap$FlatMapMain.onNext(FluxFlatMap.java:422)
	at reactor.core.publisher.FluxBuffer$BufferExactSubscriber.onComplete(FluxBuffer.java:185)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.FluxUsingWhen$UsingWhenSubscriber.deferredComplete(FluxUsingWhen.java:392)
	at reactor.core.publisher.FluxUsingWhen$CommitInner.onComplete(FluxUsingWhen.java:527)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.FluxPeek$PeekSubscriber.onComplete(FluxPeek.java:260)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:209)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:209)
	at reactor.pool.SimpleDequePool.maybeRecycleAndDrain(SimpleDequePool.java:533)
	at reactor.pool.SimpleDequePool$QueuePoolRecyclerInner.onComplete(SimpleDequePool.java:765)
	at reactor.core.publisher.Operators.complete(Operators.java:137)
	at reactor.core.publisher.MonoEmpty.subscribe(MonoEmpty.java:46)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.pool.SimpleDequePool$QueuePoolRecyclerMono.subscribe(SimpleDequePool.java:877)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:240)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.FluxPeek$PeekSubscriber.onComplete(FluxPeek.java:260)
	at reactor.core.publisher.Operators.complete(Operators.java:137)
	at reactor.core.publisher.MonoEmpty.subscribe(MonoEmpty.java:46)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:263)
	at reactor.core.publisher.MonoIgnoreThen.subscribe(MonoIgnoreThen.java:51)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:240)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onComplete(MonoIgnoreElements.java:89)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onComplete(FluxHandleFuseable.java:236)
	at reactor.core.publisher.Operators$ScalarSubscription.request(Operators.java:2402)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.request(FluxHandleFuseable.java:257)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onSubscribe(MonoIgnoreElements.java:72)
	at reactor.core.publisher.FluxHandleFuseable$HandleFuseableSubscriber.onSubscribe(FluxHandleFuseable.java:161)
	at reactor.core.publisher.FluxJust.subscribe(FluxJust.java:68)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:263)
	at reactor.core.publisher.MonoIgnoreThen.subscribe(MonoIgnoreThen.java:51)
	at reactor.core.publisher.InternalMonoOperator.subscribe(InternalMonoOperator.java:64)
	at reactor.core.publisher.MonoDefer.subscribe(MonoDefer.java:52)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onError(FluxOnErrorResume.java:103)
	at reactor.core.publisher.MonoIgnoreElements$IgnoreElementsSubscriber.onError(MonoIgnoreElements.java:84)
	at reactor.core.publisher.FluxMap$MapSubscriber.onError(FluxMap.java:134)
	at reactor.core.publisher.FluxFilter$FilterSubscriber.onError(FluxFilter.java:157)
	at reactor.core.publisher.FluxFilter$FilterConditionalSubscriber.onError(FluxFilter.java:291)
	at reactor.core.publisher.FluxMap$MapConditionalSubscriber.onError(FluxMap.java:265)
	at reactor.core.publisher.Operators.error(Operators.java:198)
	at reactor.core.publisher.MonoError.subscribe(MonoError.java:53)
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

