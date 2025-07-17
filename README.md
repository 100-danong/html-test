오후 3:50:01: Executing 'build'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl

> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\service\insuranceService.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.

> Task :processResources
> Task :classes
> Task :bootJar FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
5 actionable tasks: 5 executed

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':bootJar'.
> Could not resolve all files for configuration ':runtimeClasspath'.
   > Could not find io.r2dbc:r2dbc-mysql:.
     Required by:
         project :

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 14s
오후 3:50:16: Execution finished 'build'.
