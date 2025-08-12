오후 3:40:41: Executing ':KbApplication.main()'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl
> Task :compileJava
> Task :processResources
> Task :classes

> Task :KbApplication.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.3.9.RELEASE)

2025-08-12 15:40:56.319  INFO 16612 --- [           main] com.gogofnd.kb.KbApplication             : Starting KbApplication on Gogofnd002 with PID 16612 (C:\Users\user02gogof\Desktop\kb_goplanv2\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\kb_goplanv2)
2025-08-12 15:40:56.327 DEBUG 16612 --- [           main] com.gogofnd.kb.KbApplication             : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-08-12 15:40:56.328  INFO 16612 --- [           main] com.gogofnd.kb.KbApplication             : The following profiles are active: dev
2025-08-12 15:41:03.686 DEBUG 16612 --- [           main] c.g.kb.global.config.ExceptionFilter     : Filter 'exceptionFilter' configured for use
2025-08-12 15:41:13.922  INFO 16612 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-08-12 15:41:13.924  INFO 16612 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-08-12 15:41:14.745 ERROR 16612 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

Web server failed to start. Port 9888 was already in use.

Action:

Identify and stop the process that's listening on port 9888 or configure this application to listen on another port.


> Task :KbApplication.main() FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 5 executed

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':KbApplication.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 32s
오후 3:41:14: Execution finished ':KbApplication.main()'.
