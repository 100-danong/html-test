public Mono<Integer> update(HistoriesSaveDto dto) {

        StringBuffer InsuranceSQL = new StringBuffer();
        InsuranceSQL.append(" UPDATE insurance_history SET ");
        InsuranceSQL.append("     ih_insu_state = :ihInsuState, ");
        InsuranceSQL.append("     ih_effect_startdate = :ihEffectStartdate, ");
        InsuranceSQL.append("     ih_effect_enddate = :ihEffectEnddate, ");
        InsuranceSQL.append("     ih_until = :ihUntil, ");
        InsuranceSQL.append("     ih_upd_time = :ihUpdTime, ");
        InsuranceSQL.append("     ih_age_yn = :ihAgeYn, ");
        InsuranceSQL.append("     ih_apply_state = :ihApplyState ");
        InsuranceSQL.append(" WHERE ih_id = :ihId; ");

        StringBuffer RiderSQL = new StringBuffer();
        RiderSQL.append(" UPDATE rider_info SET ");
        RiderSQL.append("     ri_insu_status = :ihInsuState, ");
        RiderSQL.append("     ri_upd_time = :ihUpdTime ");
        RiderSQL.append(" WHERE ri_id = :riId ");
        RiderSQL.append(" AND ri_state = 1; ");


        return databaseClient.sql(InsuranceSQL.toString())
                .bind("ihInsuState", dto.getIhInsuState())
                .bind("ihEffectStartdate", dto.getIhEffectStartdate())
                .bind("ihEffectEnddate", dto.getIhEffectEnddate())
                .bind("ihUntil", dto.getIhUntil())
                .bind("ihUpdTime", dto.getIhUpdTime())
                .bind("ihAgeYn", dto.getIhAgeYn())
                .bind("ihApplyState", dto.getIhApplyState())
                .bind("ihId", dto.getIhId())
                .fetch()
                .rowsUpdated()
                .flatMap(rows ->
                    databaseClient.sql(RiderSQL.toString())
                            .bind("ihInsuState", dto.getIhInsuState())
                            .bind("ihUpdTime", dto.getIhUpdTime())
                            .bind("riId", dto.getRiId())
                            .fetch()
                            .rowsUpdated()
                );
    }

	오후 12:03:38: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Insurance\repository\HistoryRepository.java uses or overrides a deprecated API.
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

2025-12-16 12:03:59.017  INFO 6800 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 6800 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-16 12:03:59.026 DEBUG 6800 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-16 12:03:59.027  INFO 6800 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-16 12:04:12.913  INFO 6800 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-16 12:04:12.927  INFO 6800 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-16 12:04:16.396  INFO 6800 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 20.079 seconds (JVM running for 22.117)
한글 테스트 Start
2025-12-16 12:04:55.140  INFO 6800 --- [actor-tcp-nio-2] c.g.kb.Business.service.RiderService     : 계약체결동의 요청 Phone 01097591397
2025-12-16 12:04:55.423  INFO 6800 --- [actor-tcp-nio-2] c.g.kb.Business.service.RiderService     : 계약체결동의 완료 34023
2025-12-16 12:04:55.649 ERROR 6800 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

java.lang.IllegalArgumentException: No parameter with name 'ihUpdTime' found (possible values [null, null])
	at org.mariadb.r2dbc.MariadbClientParameterizedQueryStatement.getColumn(MariadbClientParameterizedQueryStatement.java:114)
	at org.mariadb.r2dbc.MariadbClientParameterizedQueryStatement.bind(MariadbClientParameterizedQueryStatement.java:63)
	at org.mariadb.r2dbc.MariadbClientParameterizedQueryStatement.bind(MariadbClientParameterizedQueryStatement.java:22)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.lambda$bindByName$4(DefaultDatabaseClient.java:426)
	at java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:684)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.bindByName(DefaultDatabaseClient.java:423)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.lambda$getResultFunction$2(DefaultDatabaseClient.java:355)
	at org.springframework.r2dbc.core.ResultFunction.apply(ResultFunction.java:64)
	at org.springframework.r2dbc.core.ResultFunction.apply(ResultFunction.java:42)
	at org.springframework.r2dbc.core.DefaultDatabaseClient.sumRowsUpdated(DefaultDatabaseClient.java:191)
	at org.springframework.r2dbc.core.DefaultDatabaseClient.access$100(DefaultDatabaseClient.java:66)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.lambda$execute$3(DefaultDatabaseClient.java:378)
	at org.springframework.r2dbc.core.DelegateConnectionFunction.apply(DelegateConnectionFunction.java:48)
	at org.springframework.r2dbc.core.DelegateConnectionFunction.apply(DelegateConnectionFunction.java:33)
	at org.springframework.r2dbc.core.DefaultDatabaseClient.lambda$inConnection$2(DefaultDatabaseClient.java:117)
	at reactor.core.publisher.MonoUsingWhen.deriveMonoFromResource(MonoUsingWhen.java:114)
	at reactor.core.publisher.MonoUsingWhen.access$000(MonoUsingWhen.java:46)
	at reactor.core.publisher.MonoUsingWhen$ResourceSubscriber.onNext(MonoUsingWhen.java:181)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:122)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:151)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:122)
	at reactor.core.publisher.Operators$ScalarSubscription.request(Operators.java:2400)
	at reactor.core.publisher.FluxMap$MapSubscriber.request(FluxMap.java:164)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onSubscribe(MonoFlatMap.java:110)
	at reactor.core.publisher.FluxMap$MapSubscriber.onSubscribe(FluxMap.java:92)
	at reactor.core.publisher.MonoJust.subscribe(MonoJust.java:55)
	at reactor.core.publisher.MonoDeferContextual.subscribe(MonoDeferContextual.java:55)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoUsingWhen.subscribe(MonoUsingWhen.java:96)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:263)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.MonoUsingWhen$MonoUsingWhenSubscriber.deferredComplete(MonoUsingWhen.java:270)
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
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1840)
	at reactor.core.publisher.MonoStreamCollector$StreamCollectorSubscriber.onComplete(MonoStreamCollector.java:178)
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

2025-12-16 12:04:55.664 ERROR 6800 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.IllegalArgumentException: No parameter with name 'ihUpdTime' found (possible values [null, null])] with root cause

java.lang.IllegalArgumentException: No parameter with name 'ihUpdTime' found (possible values [null, null])
	at org.mariadb.r2dbc.MariadbClientParameterizedQueryStatement.getColumn(MariadbClientParameterizedQueryStatement.java:114)
	at org.mariadb.r2dbc.MariadbClientParameterizedQueryStatement.bind(MariadbClientParameterizedQueryStatement.java:63)
	at org.mariadb.r2dbc.MariadbClientParameterizedQueryStatement.bind(MariadbClientParameterizedQueryStatement.java:22)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.lambda$bindByName$4(DefaultDatabaseClient.java:426)
	at java.base/java.util.LinkedHashMap.forEach(LinkedHashMap.java:684)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.bindByName(DefaultDatabaseClient.java:423)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.lambda$getResultFunction$2(DefaultDatabaseClient.java:355)
	at org.springframework.r2dbc.core.ResultFunction.apply(ResultFunction.java:64)
	at org.springframework.r2dbc.core.ResultFunction.apply(ResultFunction.java:42)
	at org.springframework.r2dbc.core.DefaultDatabaseClient.sumRowsUpdated(DefaultDatabaseClient.java:191)
	at org.springframework.r2dbc.core.DefaultDatabaseClient.access$100(DefaultDatabaseClient.java:66)
	at org.springframework.r2dbc.core.DefaultDatabaseClient$DefaultGenericExecuteSpec.lambda$execute$3(DefaultDatabaseClient.java:378)
	at org.springframework.r2dbc.core.DelegateConnectionFunction.apply(DelegateConnectionFunction.java:48)
	at org.springframework.r2dbc.core.DelegateConnectionFunction.apply(DelegateConnectionFunction.java:33)
	at org.springframework.r2dbc.core.DefaultDatabaseClient.lambda$inConnection$2(DefaultDatabaseClient.java:117)
	at reactor.core.publisher.MonoUsingWhen.deriveMonoFromResource(MonoUsingWhen.java:114)
	at reactor.core.publisher.MonoUsingWhen.access$000(MonoUsingWhen.java:46)
	at reactor.core.publisher.MonoUsingWhen$ResourceSubscriber.onNext(MonoUsingWhen.java:181)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:122)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.FluxOnErrorResume$ResumeSubscriber.onNext(FluxOnErrorResume.java:79)
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1839)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onNext(MonoFlatMap.java:151)
	at reactor.core.publisher.FluxMap$MapSubscriber.onNext(FluxMap.java:122)
	at reactor.core.publisher.Operators$ScalarSubscription.request(Operators.java:2400)
	at reactor.core.publisher.FluxMap$MapSubscriber.request(FluxMap.java:164)
	at reactor.core.publisher.MonoFlatMap$FlatMapMain.onSubscribe(MonoFlatMap.java:110)
	at reactor.core.publisher.FluxMap$MapSubscriber.onSubscribe(FluxMap.java:92)
	at reactor.core.publisher.MonoJust.subscribe(MonoJust.java:55)
	at reactor.core.publisher.MonoDeferContextual.subscribe(MonoDeferContextual.java:55)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoUsingWhen.subscribe(MonoUsingWhen.java:96)
	at reactor.core.publisher.Mono.subscribe(Mono.java:4490)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.subscribeNext(MonoIgnoreThen.java:263)
	at reactor.core.publisher.MonoIgnoreThen$ThenIgnoreMain.onComplete(MonoIgnoreThen.java:203)
	at reactor.core.publisher.Operators$MultiSubscriptionSubscriber.onComplete(Operators.java:2060)
	at reactor.core.publisher.MonoUsingWhen$MonoUsingWhenSubscriber.deferredComplete(MonoUsingWhen.java:270)
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
	at reactor.core.publisher.Operators$MonoSubscriber.complete(Operators.java:1840)
	at reactor.core.publisher.MonoStreamCollector$StreamCollectorSubscriber.onComplete(MonoStreamCollector.java:178)
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

