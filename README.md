2025-07-10 16:40:59.039  INFO 9525 --- [nio-9800-exec-7] c.g.g.global.config.LogInterceptor       : REQUEST [86948200-e964-47e2-bcc0-5a67d68c7df1][/api/gogorental/test/slack/error]

에러 상태값200
여기로 오니 어디로 오니?💥 테스트용 강제 예외 발생!
java.lang.RuntimeException: 💥 테스트용 강제 예외 발생!
        at com.gogofnd.gogorent.business.controller.TestSlackController.triggerError(TestSlackController.java:16)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
        at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
        at java.base/java.lang.reflect.Method.invoke(Method.java:566)
        at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:190)
        at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:138)
        at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:105)
        at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:878)
        at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:792)
        at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)
        at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1040)
        at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:943)
        at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006)
        at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:626)
        at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883)
        at javax.servlet.http.HttpServlet.service(HttpServlet.java:733)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:227)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:53)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:113)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at com.gogofnd.gogorent.global.config.JwtRequestFilter.doFilterInternal(JwtRequestFilter.java:80)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at com.gogofnd.gogorent.global.config.JwtExceptionFilter.doFilterInternal(JwtExceptionFilter.java:24)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:320)
        at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:126)
        at org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:90)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:118)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.session.SessionManagementFilter.doFilter(SessionManagementFilter.java:137)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.authentication.AnonymousAuthenticationFilter.doFilter(AnonymousAuthenticationFilter.java:111)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter.doFilter(SecurityContextHolderAwareRequestFilter.java:158)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.savedrequest.RequestCacheAwareFilter.doFilter(RequestCacheAwareFilter.java:63)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at com.gogofnd.gogorent.global.config.JwtRequestFilter.doFilterInternal(JwtRequestFilter.java:80)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at com.gogofnd.gogorent.global.config.JwtExceptionFilter.doFilterInternal(JwtExceptionFilter.java:24)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.authentication.logout.LogoutFilter.doFilter(LogoutFilter.java:116)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.web.filter.CorsFilter.doFilterInternal(CorsFilter.java:92)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.header.HeaderWriterFilter.doHeadersAfter(HeaderWriterFilter.java:92)
        at org.springframework.security.web.header.HeaderWriterFilter.doFilterInternal(HeaderWriterFilter.java:77)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.context.SecurityContextPersistenceFilter.doFilter(SecurityContextPersistenceFilter.java:105)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter.doFilterInternal(WebAsyncManagerIntegrationFilter.java:56)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:334)
        at org.springframework.security.web.FilterChainProxy.doFilterInternal(FilterChainProxy.java:215)
        at org.springframework.security.web.FilterChainProxy.doFilter(FilterChainProxy.java:178)
        at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:358)
        at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:271)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:100)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java:93)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201)
        at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119)
        at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:189)
        at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:162)
        at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:202)
        at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:97)
        at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:542)
        at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:143)
        at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:92)
        at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:78)
        at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:346)
        at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:374)
        at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:65)
        at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:887)
        at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1684)
        at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)
        at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
        at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
        at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
        at java.base/java.lang.Thread.run(Thread.java:834)
2025-07-10 16:40:59.057  INFO 9525 --- [nio-9800-exec-7] c.g.g.global.config.LogInterceptor       : RESPONSE [86948200-e964-47e2-bcc0-5a67d68c7df1][/api/gogorental/test/slack/error]



package com.gogofnd.gogorent.global.config;

import com.gogofnd.gogorent.business.dto.ApiResponse2;
import com.gogofnd.gogorent.business.service.SlackService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    private final SlackService slackService;
    private final Environment env;

    public GlobalExceptionHandler(SlackService slackService, Environment env) {
        this.slackService = slackService;
        this.env = env;
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGenericException(HttpServletRequest request, HttpServletResponse response, Exception e) {
        System.out.println();
        int status = response.getStatus();
        System.out.println("에러 상태값" + status);
        System.out.println("여기로 오니 어디로 오니?" + e.getMessage());
        if (status == 500) {
            System.out.println("여기 안 와지는거지?");
            String server  = request.getServerName();
            String appName = env.getProperty("spring.application.name", "unknown-app");
            String profile = env.getProperty("spring.profiles.active", "default");

            slackService.sendError(server, appName, profile, e);
        }

        ApiResponse2<Object> error = new ApiResponse2<>(
                "error",
                null,
                e.getMessage()
        );
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }


}
