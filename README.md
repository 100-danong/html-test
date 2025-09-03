2025:09:03 13:33:15.147 INFO  --- [http-nio-9888-exec-64] drivingEnd : 운행종료 파라미터 값 Kb11thRequest{call_id='27551813', driver_id='a09137G', driver_enddate='2025-09-03 13:33:16', seller_code='1444432576f', group_id='null'}
2025:09:03 13:33:16.482 WARN  --- [http-nio-9888-exec-50] c.g.k.g.e.e.GlobalExceptionHandler : RuntimeException
org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.exceptions.PersistenceException:
### Error querying database.  Cause: org.springframework.jdbc.CannotGetJdbcConnectionException: Failed to obtain JDBC Connection; nested exception is java.sql.SQLTransientConnectionException: HikariPool-1 - Connection is not available, request timed out after 30000ms.
### The error may exist in class path resource [sqlmapper/delivery/CallMapper.xml]
### The error may involve com.gogofnd.kb.partner.call.mapper.CallMapper.findByDriveridAndSellerID
### The error occurred while executing a query
### Cause: org.springframework.jdbc.CannotGetJdbcConnectionException: Failed to obtain JDBC Connection; nested exception is java.sql.SQLTransientConnectionException: HikariPool-1 - Connection is not available, request timed out after 30000ms.
        at org.mybatis.spring.MyBatisExceptionTranslator.translateExceptionIfPossible(MyBatisExceptionTranslator.java:97)
        at org.mybatis.spring.SqlSessionTemplate$SqlSessionInterceptor.invoke(SqlSessionTemplate.java:439)
        at com.sun.proxy.$Proxy115.selectOne(Unknown Source)
        at org.mybatis.spring.SqlSessionTemplate.selectOne(SqlSessionTemplate.java:160)
        at org.apache.ibatis.binding.MapperMethod.execute(MapperMethod.java:87)
        at org.apache.ibatis.binding.MapperProxy$PlainMethodInvoker.invoke(MapperProxy.java:152)
        at org.apache.ibatis.binding.MapperProxy.invoke(MapperProxy.java:85)
        at com.sun.proxy.$Proxy122.findByDriveridAndSellerID(Unknown Source)
        at jdk.internal.reflect.GeneratedMethodAccessor124.invoke(Unknown Source)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at org.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:344)
        at org.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:198)
        at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
        at org.springframework.dao.support.PersistenceExceptionTranslationInterceptor.invoke(PersistenceExceptionTranslationInterceptor.java:139)
        at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
        at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:212)
        at com.sun.proxy.$Proxy123.findByDriveridAndSellerID(Unknown Source)
        at com.gogofnd.kb.partner.call.service.CallService.kb11th(CallService.java:258)
        at com.gogofnd.kb.partner.call.service.CallService$$FastClassBySpringCGLIB$$b36d461c.invoke(<generated>)
        at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:218)
        at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:687)
        at com.gogofnd.kb.partner.call.service.CallService$$EnhancerBySpringCGLIB$$a0734ffb.kb11th(<generated>)
        at com.gogofnd.kb.partner.call.api.CallApi.api11(CallApi.java:36)
        at jdk.internal.reflect.GeneratedMethodAccessor141.invoke(Unknown Source)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)****
