오후 3:46:09: Executing ':KbApplication.main()'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl
> Task :compileJava
> Task :processResources UP-TO-DATE
> Task :classes

> Task :KbApplication.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.3.9.RELEASE)

2025-07-11 15:46:26.328  INFO 14952 --- [           main] com.gogofnd.kb.KbApplication             : Starting KbApplication on Gogofnd002 with PID 14952 (C:\Users\user02gogof\Desktop\kb_goplanv2\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\kb_goplanv2)
2025-07-11 15:46:26.333 DEBUG 14952 --- [           main] com.gogofnd.kb.KbApplication             : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-07-11 15:46:26.334  INFO 14952 --- [           main] com.gogofnd.kb.KbApplication             : The following profiles are active: dev
2025-07-11 15:46:33.072 DEBUG 14952 --- [           main] c.g.kb.global.config.ExceptionFilter     : Filter 'exceptionFilter' configured for use
2025-07-11 15:46:39.430 ERROR 14952 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in com.gogofnd.kb.global.service.SlackService required a bean of type 'com.gogofnd.gogorent.global.config.SlackProperties' that could not be found.


Action:

Consider defining a bean of type 'com.gogofnd.gogorent.global.config.SlackProperties' in your configuration.


> Task :KbApplication.main() FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 4 executed, 1 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':KbApplication.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 29s
오후 3:46:39: Execution finished ':KbApplication.main()'.
