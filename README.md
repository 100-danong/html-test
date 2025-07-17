오후 3:56:31: Executing 'build'...

> Task :initQuerydslSourcesDir
> Task :compileQuerydsl FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
2 actionable tasks: 2 executed

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':compileQuerydsl'.
> Could not resolve all files for configuration ':querydsl'.
   > Could not find io.r2dbc:r2dbc-mariadb:1.1.4.
     Required by:
         project :

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 4s
오후 3:56:36: Execution finished 'build'.
