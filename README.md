오후 3:06:51: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Business\service\BusinessService.java uses unchecked or unsafe operations.
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

2025-10-01 15:07:13.316  INFO 7976 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 7976 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-10-01 15:07:13.356 DEBUG 7976 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-10-01 15:07:13.359  INFO 7976 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-10-01 15:07:17.945 ERROR 7976 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

The bean 'riderInfoRepository', defined in com.gogofnd.kb.Insurance.repository.RiderInfoRepository defined in @EnableR2dbcRepositories declared on R2dbcRepositoriesAutoConfigureRegistrar.EnableR2dbcRepositoriesConfiguration, could not be registered. A bean with that name has already been defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\Business\repository\RiderInfoRepository.class] and overriding is disabled.

Action:

Consider renaming one of the beans or enabling overriding by setting spring.main.allow-bean-definition-overriding=true


> Task :new_GoPlanV1Application.main() FAILED
3 actionable tasks: 2 executed, 1 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':new_GoPlanV1Application.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 26s
오후 3:07:18: Execution finished ':new_GoPlanV1Application.main()'.
