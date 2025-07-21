오후 2:42:26: Executing 'build'...

> Task :compileJava UP-TO-DATE
> Task :processResources UP-TO-DATE
> Task :classes UP-TO-DATE
> Task :bootJarMainClassName FAILED
3 actionable tasks: 1 executed, 2 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':bootJarMainClassName'.
> Could not resolve all files for configuration ':runtimeClasspath'.
   > Could not find org.mariadb:r2dbc-mariadb:0.9.0.
     Required by:
         project :

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s
오후 2:42:29: Execution finished 'build'.
