오후 2:23:18: Executing 'build'...

> Task :compileJava UP-TO-DATE
> Task :processResources UP-TO-DATE
> Task :classes UP-TO-DATE
> Task :bootJarMainClassName
> Task :bootJarMainClassName FAILED

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings
3 actionable tasks: 1 executed, 2 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':bootJarMainClassName'.
> Could not resolve all files for configuration ':runtimeClasspath'.
   > Could not resolve org.mariadb:r2dbc-mariadb:0.9.1-spec.
     Required by:
         project :
      > Could not resolve org.mariadb:r2dbc-mariadb:0.9.1-spec.
         > Could not get resource 'https://jcenter.bintray.com/org/mariadb/r2dbc-mariadb/0.9.1-spec/r2dbc-mariadb-0.9.1-spec.pom'.
            > Could not GET 'https://jcenter.bintray.com/org/mariadb/r2dbc-mariadb/0.9.1-spec/r2dbc-mariadb-0.9.1-spec.pom'.
               > Connect to jcenter.bintray.com:443 [jcenter.bintray.com/3.95.117.170, jcenter.bintray.com/18.232.172.199, jcenter.bintray.com/18.214.194.113] failed: Connection timed out: no further information
      > Could not resolve org.mariadb:r2dbc-mariadb:0.9.1-spec.
         > Could not get resource 'https://oss.sonatype.org/content/repositories/releases/org/mariadb/r2dbc-mariadb/0.9.1-spec/r2dbc-mariadb-0.9.1-spec.pom'.
            > Could not GET 'https://oss.sonatype.org/content/repositories/releases/org/mariadb/r2dbc-mariadb/0.9.1-spec/r2dbc-mariadb-0.9.1-spec.pom'.
               > Connect to oss.sonatype.org:443 [oss.sonatype.org/44.199.138.219, oss.sonatype.org/3.225.52.36] failed: Connection timed out: no further information

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 10m 46s
오후 2:34:06: Execution finished 'build'.
