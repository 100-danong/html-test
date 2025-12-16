오후 1:35:16: Executing ':KbApplication.main()'...

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

2025-12-15 13:35:31.822  INFO 6956 --- [           main] com.gogofnd.kb.KbApplication             : Starting KbApplication on Gogofnd002 with PID 6956 (C:\Users\user02gogof\Desktop\kb_goplanv2\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\kb_goplanv2)
2025-12-15 13:35:31.836 DEBUG 6956 --- [           main] com.gogofnd.kb.KbApplication             : Running with Spring Boot v2.3.9.RELEASE, Spring v5.2.13.RELEASE
2025-12-15 13:35:31.839  INFO 6956 --- [           main] com.gogofnd.kb.KbApplication             : The following profiles are active: dev
2025-12-15 13:35:49.639 DEBUG 6956 --- [           main] c.g.kb.global.config.ExceptionFilter     : Filter 'exceptionFilter' configured for use
2025-12-15 13:36:05.799  INFO 6956 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-15 13:36:05.835  INFO 6956 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-15 13:36:09.814  INFO 6956 --- [           main] com.gogofnd.kb.KbApplication             : Started KbApplication in 40.932 seconds (JVM running for 43.867)
Program Start
2025-12-15 13:36:35.994  INFO 6956 --- [nio-9888-exec-1] c.g.kb.global.config.HttpInterceptor     : [REQ] ---> [METHOD] GET | [URL] /api/goplan/service/check/status | [qs] loginId=ONNA001702 | [TOKEN] null | reto null | [Body] GET
loginId : ONNA001702
2025-12-15 13:36:36.302 DEBUG 6956 --- [nio-9888-exec-1] c.g.k.p.r.m.R.findRiderInsureCount       : ==>  Preparing: SELECT COUNT(*) FROM rider_info where 1=1 and ri_userid = ? and ri_insu_status = '062' and ri_state = 1
2025-12-15 13:36:36.425 DEBUG 6956 --- [nio-9888-exec-1] c.g.k.p.r.m.R.findRiderInsureCount       : ==> Parameters: ONNA001702(String)
2025-12-15 13:36:36.597 DEBUG 6956 --- [nio-9888-exec-1] c.g.k.p.r.m.R.findRiderInsureCount       : <==      Total: 1
2025-12-15 13:36:36.723  INFO 6956 --- [nio-9888-exec-1] c.g.kb.global.config.HttpInterceptor     : [RES] <--- [STATUS] 200

> Task :KbApplication.main() FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 2 executed, 3 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':KbApplication.main()'.
> Build cancelled while executing task ':KbApplication.main()'

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 1m 35s
오후 1:36:54: Execution finished ':KbApplication.main()'.
