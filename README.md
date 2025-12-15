    @PostMapping("/service/balance")
    @ApiOperation(value = "지점 포인트 조회", notes = "지점의 예납금을 조회합니다")
    public Mono<BalanceRes> getBalance(@RequestBody BalanceSearch balanceSearch,
                                       @RequestHeader("apiKey") String apiKey) throws Exception {
        return Mono.just(new BalanceRes(sellerService.getBalanceOfSeller(balanceSearch.getSeller_code(), apiKey)));
    }

	package com.gogofnd.kb.Seller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import reactor.core.publisher.Mono;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class BalanceRes {
    private int seller_balance;
}

    @Transactional(readOnly = true)
    public Integer getBalanceOfSeller(String sellerCode, String apiKey) throws Exception {
        //복호화 . sellecode랑 비교
        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);

        if(!sellerCode.equals(decryptedApiKey)){
            throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
        }

        SellerInfo sellerInfo = sellerMapper.findBySellerCode(sellerCode).block();

        return Long.valueOf(sellerInfo.getSi_balance()).intValue();

    }

	package com.gogofnd.kb.Insurance.entity;

import lombok.Getter;
import lombok.Setter;

import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Table("seller_info")
@Getter
@Setter
@ToString
public class SellerInfo {

    @Id
    private Long si_id;

    private String si_cmp_code;
    private Long si_balance;
    private String si_name;
    private String si_phone;
    private String si_tell;
    private String si_seller_code;
    private String si_api_key;
    private String si_address;
    private String si_detail_address;
    private String si_ceo_name;
    private String si_busi_number;
    private String si_policy_number;
    private String si_application_number;
    private String si_apply_state;
    private String si_insu_type;
    private String si_business_type;
    private String si_business_item;
    private double si_insu_amount;
    private int si_insu_flat_amount;
    private int si_db1_premium;
    private int si_db2_premium;
    private int si_pd_premium;
    private int si_flat_rate;
    private double si_insu_dc_rate;
    private LocalDateTime si_ins_time;
    private LocalDateTime si_upd_time;
    private int si_state;
    private LocalTime sales_time;

    public static SellerInfo create(io.r2dbc.spi.Row row) {
        SellerInfo s = new SellerInfo();
        s.setSi_id(row.get("si_id", Long.class));
        s.setSi_cmp_code(row.get("si_cmp_code", String.class));
        s.setSi_balance(row.get("si_balance", Long.class));
        s.setSi_name(row.get("si_name", String.class));
        s.setSi_phone(row.get("si_phone", String.class));
        s.setSi_tell(row.get("si_tell", String.class));
        s.setSi_seller_code(row.get("si_seller_code", String.class));
        s.setSi_api_key(row.get("si_api_key", String.class));
        s.setSi_address(row.get("si_address", String.class));
        s.setSi_detail_address(row.get("si_detail_address", String.class));
        s.setSi_ceo_name(row.get("si_ceo_name", String.class));
        s.setSi_busi_number(row.get("si_busi_number", String.class));
        s.setSi_policy_number(row.get("si_policy_number", String.class));
        s.setSi_application_number(row.get("si_application_number", String.class));
        s.setSi_apply_state(row.get("si_apply_state", String.class));
        s.setSi_insu_type(row.get("si_insu_type", String.class));
        s.setSi_business_type(row.get("si_business_type", String.class));
        s.setSi_business_item(row.get("si_business_item", String.class));
        s.setSi_insu_amount(row.get("si_insu_amount", Double.class));
        s.setSi_insu_flat_amount(row.get("si_insu_flat_amount", Integer.class));
        s.setSi_db1_premium(row.get("si_db1_premium", Integer.class));
        s.setSi_db2_premium(row.get("si_db2_premium", Integer.class));
        s.setSi_pd_premium(row.get("si_pd_premium", Integer.class));
        s.setSi_flat_rate(row.get("si_flat_rate", Integer.class));
        s.setSi_insu_dc_rate(row.get("si_insu_dc_rate", Double.class));
        s.setSi_ins_time(row.get("si_ins_time", LocalDateTime.class));
        s.setSi_upd_time(row.get("si_upd_time", LocalDateTime.class));
        s.setSi_state(row.get("si_state", Integer.class));
        s.setSales_time(row.get("sales_time", LocalTime.class));
        return s;
    }

}

    public Mono<SellerInfo> findBySellerCode(String sellerCode) {

        String sql = "SELECT * FROM seller_info WHERE si_seller_code = :siSellerCode";

        return databaseClient.sql(sql)
                .bind("siSellerCode", sellerCode)
                .map((row, metadata) -> SellerInfo.create(row))
                .one();
    }

	
오전 11:34:05: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Seller\service\SellerService.java uses unchecked or unsafe operations.
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

2025-12-15 11:34:16.844  INFO 8812 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 8812 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-15 11:34:16.854 DEBUG 8812 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-15 11:34:16.856  INFO 8812 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-15 11:34:30.386  INFO 8812 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-15 11:34:30.391  INFO 8812 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-15 11:34:33.567  INFO 8812 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 18.989 seconds (JVM running for 20.727)
한글 테스트 Start
2025-12-15 11:34:40.165 ERROR 8812 --- [nio-8888-exec-1] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] in context with path [/api/goplanV1] threw exception [Request processing failed; nested exception is java.lang.IllegalStateException: Cannot apply reactive transaction to non-reactive return type: class java.lang.Integer] with root cause

java.lang.IllegalStateException: Cannot apply reactive transaction to non-reactive return type: class java.lang.Integer
	at org.springframework.transaction.interceptor.TransactionAspectSupport.lambda$invokeWithinTransaction$0(TransactionAspectSupport.java:359)
	at java.base/java.util.concurrent.ConcurrentMap.computeIfAbsent(ConcurrentMap.java:330)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:353)
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:186)
	at org.springframework.aop.framework.CglibAopProxy$CglibMethodInvocation.proceed(CglibAopProxy.java:763)
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:708)
	at com.gogofnd.kb.Seller.service.SellerService$$EnhancerBySpringCGLIB$$f8bde63d.getBalanceOfSeller(<generated>)
	at com.gogofnd.kb.Seller.controller.SellerApi.getBalance(SellerApi.java:36)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:117)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:895)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:808)
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1072)
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:965)
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
	at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:909)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:528)
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:596)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:209)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:178)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:337)
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:115)
	at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:81)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:122)
	at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:116)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:126)
	at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:81)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:109)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:149)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:103)
	at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:89)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:90)
	at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:75)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:112)
	at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:82)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:55)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.session.DisableEncodeUrlFilter.doFilterInternal(DisableEncodeUrlFilter.java:42)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
	at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:346)
	at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:221)
	at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:186)
	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:354)
	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:267)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:178)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:178)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:178)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:117)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:178)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:153)
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:167)
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:90)
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:492)
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:130)
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:93)
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:74)
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:343)
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:389)
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:63)
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:926)
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1791)
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)
	at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191)
	at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659)
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
	at java.base/java.lang.Thread.run(Thread.java:829)

