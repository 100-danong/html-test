오후 3:41:45: Executing ':KbApplication.main()'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl UP-TO-DATE
> Task :compileJava UP-TO-DATE
> Task :processResources UP-TO-DATE
> Task :classes UP-TO-DATE

> Task :KbApplication.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.3.9.RELEASE)

2025-07-11 15:41:53.881  INFO 6456 --- [           main] com.gogofnd.kb.KbApplication             : Starting KbApplication on Gogofnd002 with PID 6456 (C:\Users\user02gogof\Desktop\kb_goplanv2\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\kb_goplanv2)
2025-07-11 15:41:53.890 DEBUG 6456 --- [           main] com.gogofnd.kb.KbApplication             : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-07-11 15:41:53.895  INFO 6456 --- [           main] com.gogofnd.kb.KbApplication             : The following profiles are active: dev
2025-07-11 15:42:03.620 DEBUG 6456 --- [           main] c.g.kb.global.config.ExceptionFilter     : Filter 'exceptionFilter' configured for use
2025-07-11 15:42:11.499 ERROR 6456 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in com.gogofnd.kb.global.error.exception.GlobalExceptionHandler required a bean of type 'com.gogofnd.gogorent.business.service.SlackService' that could not be found.


Action:

Consider defining a bean of type 'com.gogofnd.gogorent.business.service.SlackService' in your configuration.


> Task :KbApplication.main() FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':KbApplication.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 26s

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 2 executed, 3 up-to-date
오후 3:42:11: Execution finished ':KbApplication.main()'.
