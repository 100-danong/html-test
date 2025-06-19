오전 9:52:36: Executing ':KbCsApplication.main()'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl

> Task :compileJava
C:\Users\user02gogof\Desktop\jnc_rental\src\main\java\com\gogofnd\jncrental\global\pay\entity\PayRecord.java:61: warning: @Builder will ignore the initializing expression entirely. If you want the initializing expression to serve as default, add @Builder.Default. If it is not supposed to be settable during building, make the field final.
    private List<PayCancelRecord> payCancelRecord = new ArrayList<>();
                                  ^
Note: C:\Users\user02gogof\Desktop\jnc_rental\src\main\java\com\gogofnd\jncrental\global\pay\service\WelcomePaymentPayService.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
1 warning

> Task :processResources
> Task :classes

> Task :KbCsApplication.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.3.9.RELEASE)

2025-06-19 09:53:43.354  INFO 14644 --- [           main] com.gogofnd.jncrental.KbCsApplication    : Starting KbCsApplication on Gogofnd002 with PID 14644 (C:\Users\user02gogof\Desktop\jnc_rental\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\jnc_rental)
2025-06-19 09:53:43.384 DEBUG 14644 --- [           main] com.gogofnd.jncrental.KbCsApplication    : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-06-19 09:53:43.386  INFO 14644 --- [           main] com.gogofnd.jncrental.KbCsApplication    : The following profiles are active: dev
2025-06-19 09:54:05.854 DEBUG 14644 --- [           main] c.g.j.global.config.JwtExceptionFilter   : Filter 'jwtExceptionFilter' configured for use
2025-06-19 09:54:05.860 DEBUG 14644 --- [           main] c.g.j.global.config.JwtRequestFilter     : Filter 'jwtRequestFilter' configured for use
2025-06-19 09:54:14.649 ERROR 14644 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.context.ApplicationContextException: Failed to start bean 'webServerStartStop'; nested exception is org.springframework.boot.web.server.WebServerException: Unable to start embedded Tomcat server
	at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:185)
	at org.springframework.context.support.DefaultLifecycleProcessor.access$200(DefaultLifecycleProcessor.java:53)
	at org.springframework.context.support.DefaultLifecycleProcessor$LifecycleGroup.start(DefaultLifecycleProcessor.java:360)
	at org.springframework.context.support.DefaultLifecycleProcessor.startBeans(DefaultLifecycleProcessor.java:158)
	at org.springframework.context.support.DefaultLifecycleProcessor.onRefresh(DefaultLifecycleProcessor.java:122)
	at org.springframework.context.support.AbstractApplicationContext.finishRefresh(AbstractApplicationContext.java:895)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:554)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:758)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:750)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:405)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:315)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1237)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1226)
	at com.gogofnd.jncrental.KbCsApplication.main(KbCsApplication.java:35)
Caused by: org.springframework.boot.web.server.WebServerException: Unable to start embedded Tomcat server
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.start(TomcatWebServer.java:229)
	at org.springframework.boot.web.servlet.context.WebServerStartStopLifecycle.start(WebServerStartStopLifecycle.java:43)
	at org.springframework.context.support.DefaultLifecycleProcessor.doStart(DefaultLifecycleProcessor.java:182)
	... 14 common frames omitted
Caused by: java.lang.IllegalArgumentException: standardService.connector.startFailed
	at org.apache.catalina.core.StandardService.addConnector(StandardService.java:244)
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.addPreviouslyRemovedConnectors(TomcatWebServer.java:282)
	at org.springframework.boot.web.embedded.tomcat.TomcatWebServer.start(TomcatWebServer.java:213)
	... 16 common frames omitted
Caused by: org.apache.catalina.LifecycleException: Protocol handler start failed
	at org.apache.catalina.connector.Connector.startInternal(Connector.java:1074)
	at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:183)
	at org.apache.catalina.core.StandardService.addConnector(StandardService.java:240)
	... 18 common frames omitted
Caused by: java.lang.IllegalArgumentException: C:\home\jncrental\ssl\keystore.p12 (������ ��θ� ã�� �� �����ϴ�)
	at org.apache.tomcat.util.net.AbstractJsseEndpoint.createSSLContext(AbstractJsseEndpoint.java:99)
	at org.apache.tomcat.util.net.AbstractJsseEndpoint.initialiseSsl(AbstractJsseEndpoint.java:71)
	at org.apache.tomcat.util.net.NioEndpoint.bind(NioEndpoint.java:246)
	at org.apache.tomcat.util.net.AbstractEndpoint.bindWithCleanup(AbstractEndpoint.java:1193)
	at org.apache.tomcat.util.net.AbstractEndpoint.start(AbstractEndpoint.java:1279)
	at org.apache.coyote.AbstractProtocol.start(AbstractProtocol.java:608)
	at org.apache.catalina.connector.Connector.startInternal(Connector.java:1071)
	... 20 common frames omitted
Caused by: java.io.FileNotFoundException: C:\home\jncrental\ssl\keystore.p12 (������ ��θ� ã�� �� �����ϴ�)
	at java.base/java.io.FileInputStream.open0(Native Method)
	at java.base/java.io.FileInputStream.open(FileInputStream.java:219)
	at java.base/java.io.FileInputStream.<init>(FileInputStream.java:157)
	at java.base/java.io.FileInputStream.<init>(FileInputStream.java:112)
	at java.base/sun.net.www.protocol.file.FileURLConnection.connect(FileURLConnection.java:86)
	at java.base/sun.net.www.protocol.file.FileURLConnection.getInputStream(FileURLConnection.java:184)
	at org.apache.catalina.startup.CatalinaBaseConfigurationSource.getResource(CatalinaBaseConfigurationSource.java:118)
	at org.apache.tomcat.util.net.SSLUtilBase.getStore(SSLUtilBase.java:197)
	at org.apache.tomcat.util.net.SSLHostConfigCertificate.getCertificateKeystore(SSLHostConfigCertificate.java:207)
	at org.apache.tomcat.util.net.SSLUtilBase.getKeyManagers(SSLUtilBase.java:282)
	at org.apache.tomcat.util.net.SSLUtilBase.createSSLContext(SSLUtilBase.java:246)
	at org.apache.tomcat.util.net.AbstractJsseEndpoint.createSSLContext(AbstractJsseEndpoint.java:97)
	... 26 common frames omitted


> Task :KbCsApplication.main() FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 5 executed

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':KbCsApplication.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1m 37s
오전 9:54:16: Execution finished ':KbCsApplication.main()'.
