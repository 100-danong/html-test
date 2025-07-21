오후 2:20:41: Executing ':new_GoPlanV1Application.main()'...

> Task :compileJava UP-TO-DATE
> Task :processResources UP-TO-DATE
> Task :classes UP-TO-DATE

> Task :new_GoPlanV1Application.main() FAILED
Execution optimizations have been disabled for task ':new_GoPlanV1Application.main()' to ensure correctness due to the following reasons:
  - Type 'org.gradle.api.tasks.JavaExec' property 'classpath' cannot be resolved:  Could not resolve all files for configuration ':runtimeClasspath'. Reason: An input file collection couldn't be resolved, making it impossible to determine task inputs. Please refer to https://docs.gradle.org/7.4.1/userguide/validation_problems.html#unresolvable_input for more details about this problem.

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings

Execution optimizations have been disabled for 1 invalid unit(s) of work during this build to ensure correctness.
Please consult deprecation warnings for more details.
3 actionable tasks: 1 executed, 2 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':new_GoPlanV1Application.main()'.
> Could not resolve all files for configuration ':runtimeClasspath'.
   > Could not find org.mariadb:r2dbc-mariadb:0.9.1-spec.
     Required by:
         project :

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 4s
오후 2:20:46: Execution finished ':new_GoPlanV1Application.main()'.
