오후 4:27:17: Executing ':new_GoPlanV1Application.main()'...

Starting Gradle Daemon...
Gradle Daemon started in 6 s 827 ms
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

2025-11-25 16:29:18.309  INFO 2916 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 2916 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-11-25 16:29:18.343 DEBUG 2916 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-11-25 16:29:18.355  INFO 2916 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-11-25 16:29:43.290 ERROR 2916 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'riderApi' defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\Business\controller\RiderApi.class]: Unsatisfied dependency expressed through constructor parameter 0; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'riderService' defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\Business\service\RiderService.class]: Unsatisfied dependency expressed through constructor parameter 2; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'insuranceHistoryRepository' defined in com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository defined in @EnableR2dbcRepositories declared on R2dbcRepositoriesAutoConfigureRegistrar.EnableR2dbcRepositoriesConfiguration: Invocation of init method failed; nested exception is org.springframework.data.repository.query.QueryCreationException: Could not create query for public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto); Reason: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'; nested exception is java.lang.IllegalArgumentException: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:800)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:229)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1372)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1222)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:582)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:955)
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:920)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:583)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:731)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:408)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:307)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1303)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1292)
	at com.gogofnd.kb.new_GoPlanV1Application.main(new_GoPlanV1Application.java:20)
Caused by: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'riderService' defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\Business\service\RiderService.class]: Unsatisfied dependency expressed through constructor parameter 2; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'insuranceHistoryRepository' defined in com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository defined in @EnableR2dbcRepositories declared on R2dbcRepositoriesAutoConfigureRegistrar.EnableR2dbcRepositoriesConfiguration: Invocation of init method failed; nested exception is org.springframework.data.repository.query.QueryCreationException: Could not create query for public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto); Reason: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'; nested exception is java.lang.IllegalArgumentException: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:800)
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:229)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1372)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1222)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:582)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:276)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1391)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1311)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:887)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 19 common frames omitted
Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'insuranceHistoryRepository' defined in com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository defined in @EnableR2dbcRepositories declared on R2dbcRepositoriesAutoConfigureRegistrar.EnableR2dbcRepositoriesConfiguration: Invocation of init method failed; nested exception is org.springframework.data.repository.query.QueryCreationException: Could not create query for public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto); Reason: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'; nested exception is java.lang.IllegalArgumentException: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:620)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208)
	at org.springframework.beans.factory.config.DependencyDescriptor.resolveCandidate(DependencyDescriptor.java:276)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.doResolveDependency(DefaultListableBeanFactory.java:1391)
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.resolveDependency(DefaultListableBeanFactory.java:1311)
	at org.springframework.beans.factory.support.ConstructorResolver.resolveAutowiredArgument(ConstructorResolver.java:887)
	at org.springframework.beans.factory.support.ConstructorResolver.createArgumentArray(ConstructorResolver.java:791)
	... 33 common frames omitted
Caused by: org.springframework.data.repository.query.QueryCreationException: Could not create query for public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto); Reason: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'; nested exception is java.lang.IllegalArgumentException: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'
	at org.springframework.data.repository.query.QueryCreationException.create(QueryCreationException.java:101)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.lookupQuery(QueryExecutorMethodInterceptor.java:107)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.lambda$mapMethodsToQuery$1(QueryExecutorMethodInterceptor.java:95)
	at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)
	at java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)
	at java.base/java.util.Collections$UnmodifiableCollection$1.forEachRemaining(Collections.java:1054)
	at java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)
	at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
	at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.mapMethodsToQuery(QueryExecutorMethodInterceptor.java:97)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.lambda$new$0(QueryExecutorMethodInterceptor.java:87)
	at java.base/java.util.Optional.map(Optional.java:265)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.<init>(QueryExecutorMethodInterceptor.java:87)
	at org.springframework.data.repository.core.support.RepositoryFactorySupport.getRepository(RepositoryFactorySupport.java:365)
	at org.springframework.data.repository.core.support.RepositoryFactoryBeanSupport.lambda$afterPropertiesSet$5(RepositoryFactoryBeanSupport.java:323)
	at org.springframework.data.util.Lazy.getNullable(Lazy.java:231)
	at org.springframework.data.util.Lazy.get(Lazy.java:115)
	at org.springframework.data.repository.core.support.RepositoryFactoryBeanSupport.afterPropertiesSet(RepositoryFactoryBeanSupport.java:329)
	at org.springframework.data.r2dbc.repository.support.R2dbcRepositoryFactoryBean.afterPropertiesSet(R2dbcRepositoryFactoryBean.java:179)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1863)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1800)
	... 44 common frames omitted
Caused by: java.lang.IllegalArgumentException: Failed to create query for method public abstract void com.gogofnd.kb.Insurance.repository.InsuranceHistoryRepository.update(com.gogofnd.kb.Insurance.dto.HistoriesSaveDto)! No property 'update' found for type 'InsuranceHistory'
	at org.springframework.data.r2dbc.repository.query.PartTreeR2dbcQuery.<init>(PartTreeR2dbcQuery.java:73)
	at org.springframework.data.r2dbc.repository.support.R2dbcRepositoryFactory$R2dbcQueryLookupStrategy.resolveQuery(R2dbcRepositoryFactory.java:199)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.lookupQuery(QueryExecutorMethodInterceptor.java:103)
	... 66 common frames omitted
Caused by: org.springframework.data.mapping.PropertyReferenceException: No property 'update' found for type 'InsuranceHistory'
	at org.springframework.data.mapping.PropertyPath.<init>(PropertyPath.java:91)
	at org.springframework.data.mapping.PropertyPath.create(PropertyPath.java:438)
	at org.springframework.data.mapping.PropertyPath.create(PropertyPath.java:414)
	at org.springframework.data.mapping.PropertyPath.lambda$from$0(PropertyPath.java:367)
	at java.base/java.util.concurrent.ConcurrentMap.computeIfAbsent(ConcurrentMap.java:330)
	at org.springframework.data.mapping.PropertyPath.from(PropertyPath.java:349)
	at org.springframework.data.mapping.PropertyPath.from(PropertyPath.java:332)
	at org.springframework.data.repository.query.parser.Part.<init>(Part.java:81)
	at org.springframework.data.repository.query.parser.PartTree$OrPart.lambda$new$0(PartTree.java:250)
	at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)
	at java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:177)
	at java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)
	at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
	at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)
	at org.springframework.data.repository.query.parser.PartTree$OrPart.<init>(PartTree.java:251)
	at org.springframework.data.repository.query.parser.PartTree$Predicate.lambda$new$0(PartTree.java:384)
	at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)
	at java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:177)
	at java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)
	at java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
	at java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)
	at org.springframework.data.repository.query.parser.PartTree$Predicate.<init>(PartTree.java:385)
	at org.springframework.data.repository.query.parser.PartTree.<init>(PartTree.java:93)
	at org.springframework.data.r2dbc.repository.query.PartTreeR2dbcQuery.<init>(PartTreeR2dbcQuery.java:69)
	... 68 common frames omitted


> Task :new_GoPlanV1Application.main() FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':new_GoPlanV1Application.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2m 26s
3 actionable tasks: 2 executed, 1 up-to-date
오후 4:29:44: Execution finished ':new_GoPlanV1Application.main()'.
