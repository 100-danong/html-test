오후 3:59:23: Executing ':new_GoPlanV1Application.main()'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl UP-TO-DATE
> Task :compileJava UP-TO-DATE
> Task :processResources UP-TO-DATE
> Task :classes UP-TO-DATE

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.3.9.RELEASE)

2025-07-17 15:59:34.655  INFO 9596 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application on Gogofnd002 with PID 9596 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-07-17 15:59:34.806 DEBUG 9596 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-07-17 15:59:34.808  INFO 9596 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following profiles are active: dev
2025-07-17 15:59:45.297 ERROR 9596 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

A component required a bean of type 'javax.persistence.EntityManagerFactory' that could not be found.


Action:

Consider defining a bean of type 'javax.persistence.EntityManagerFactory' in your configuration.


> Task :new_GoPlanV1Application.main() FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 2 executed, 3 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':new_GoPlanV1Application.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 22s
오후 3:59:45: Execution finished ':new_GoPlanV1Application.main()'.
