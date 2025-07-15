PS C:\Users\user02gogof\Desktop\new_GoPlanV1> ./gradlew processResourecs --info
Initialized native services in: C:\Users\user02gogof\.gradle\native
Initialized jansi services in: C:\Users\user02gogof\.gradle\native
Found daemon DaemonInfo{pid=15864, address=[35caa48d-2c30-435a-92e8-4ac276e4ac8d port:61090, addresses:[/127.0.0.1]], state=Idle, lastBusy=1752562202882, context=DefaultDaemonContext[uid=4302c306-077b-4636-89b7-2d88bfce7c13,java
Home=C:\Users\user02gogof\.jdks\corretto-17.0.9,daemonRegistryDir=C:\Users\user02gogof\.gradle\daemon,pid=15864,idleTimeout=10800000,priority=NORMAL,daemonOpts=--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.base/ja
va.lang=ALL-UNNAMED,--add-opens,java.base/java.lang.invoke=ALL-UNNAMED,--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=ALL-UNNAMED,--add-opens
,java.base/java.nio.charset=ALL-UNNAMED,--add-opens,java.base/java.net=ALL-UNNAMED,--add-opens,java.base/java.util.concurrent.atomic=ALL-UNNAMED,-XX:MaxMetaspaceSize=256m,-XX:+HeapDumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.
encoding=UTF-8,-Duser.country=KR,-Duser.language=ko,-Duser.variant]} however its context does not match the desired criteria.
Java home is different.
Wanted: DefaultDaemonContext[uid=null,javaHome=C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1,daemonRegistryDir=C:\Users\user02gogof\.gradle\daemon,pid=14888,idleTimeout=null,priority=NORMAL,daemonOpts=--add-opens,java.bas
e/java.util=ALL-UNNAMED,--add-opens,java.base/java.lang=ALL-UNNAMED,--add-opens,java.base/java.lang.invoke=ALL-UNNAMED,--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=ALL-UNNAMED,--add-opens,ja
va.prefs/java.util.prefs=ALL-UNNAMED,--add-opens,java.base/java.nio.charset=ALL-UNNAMED,--add-opens,java.base/java.net=ALL-UNNAMED,--add-opens,java.base/java.util.concurrent.atomic=ALL-UNNAMED,-XX:MaxMetaspaceSize=256m,-XX:+Heap
DumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.encoding=x-windows-949,-Duser.country=KR,-Duser.language=ko,-Duser.variant]
Actual: DefaultDaemonContext[uid=4302c306-077b-4636-89b7-2d88bfce7c13,javaHome=C:\Users\user02gogof\.jdks\corretto-17.0.9,daemonRegistryDir=C:\Users\user02gogof\.gradle\daemon,pid=15864,idleTimeout=10800000,priority=NORMAL,daemo
nOpts=--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.base/java.lang=ALL-UNNAMED,--add-opens,java.base/java.lang.invoke=ALL-UNNAMED,--add-opens,java.base/java.util=ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=
ALL-UNNAMED,--add-opens,java.prefs/java.util.prefs=ALL-UNNAMED,--add-opens,java.base/java.nio.charset=ALL-UNNAMED,--add-opens,java.base/java.net=ALL-UNNAMED,--add-opens,java.base/java.util.concurrent.atomic=ALL-UNNAMED,-XX:MaxMe
taspaceSize=256m,-XX:+HeapDumpOnOutOfMemoryError,-Xms256m,-Xmx512m,-Dfile.encoding=UTF-8,-Duser.country=KR,-Duser.language=ko,-Duser.variant]

  Looking for a different daemon...
The client will now receive all logging from the daemon (pid: 16480). The daemon log file: C:\Users\user02gogof\.gradle\daemon\7.4.1\daemon-16480.out.log
Starting 3rd build in daemon [uptime: 4 mins 15.647 secs, performance: 99%, non-heap usage: 30% of 256 MiB]
Using 4 worker leases.                                                             
Now considering [C:\Users\user02gogof\Desktop\new_GoPlanV1] as hierarchies to watch
Watching the file system is configured to be enabled if available
File system watching is active
Starting Build
Settings evaluated using settings file 'C:\Users\user02gogof\Desktop\new_GoPlanV1\settings.gradle'.
Projects loaded. Root project using build file 'C:\Users\user02gogof\Desktop\new_GoPlanV1\build.gradle'.
Included projects: [root project 'new_GoPlanV1']

> Configure project :
Evaluating root project 'new_GoPlanV1' using build file 'C:\Users\user02gogof\Desktop\new_GoPlanV1\build.gradle'.
Applying dependency management to configuration 'bootArchives' in project 'new_GoPlanV1'
Applying dependency management to configuration 'archives' in project 'new_GoPlanV1'
Applying dependency management to configuration 'default' in project 'new_GoPlanV1'
Applying dependency management to configuration 'implementation' in project 'new_GoPlanV1'
Applying dependency management to configuration 'compileOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'compileClasspath' in project 'new_GoPlanV1'
Applying dependency management to configuration 'annotationProcessor' in project 'new_GoPlanV1'
Applying dependency management to configuration 'runtimeOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'runtimeClasspath' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testImplementation' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testCompileOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testCompileClasspath' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testAnnotationProcessor' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testRuntimeOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testRuntimeClasspath' in project 'new_GoPlanV1'
Applying dependency management to configuration 'testResultsElementsForTest' in project 'new_GoPlanV1'
Applying dependency management to configuration 'apiElements' in project 'new_GoPlanV1'
Applying dependency management to configuration 'runtimeElements' in project 'new_GoPlanV1'
Applying dependency management to configuration 'mainSourceElements' in project 'new_GoPlanV1'
Applying dependency management to configuration 'developmentOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'productionRuntimeClasspath' in project 'new_GoPlanV1'
Applying Querydsl plugin
Applying querydsl plugin
Applying dependency management to configuration 'querydsl' in project 'new_GoPlanV1'
Applying dependency management to configuration 'compile' in project 'new_GoPlanV1'
Querydsl sources dir: C:\Users\user02gogof\Desktop\new_GoPlanV1\build\generated\querydsl
Querydsl library: com.querydsl:querydsl-apt:4.1.4
Create source set 'querydsl'.
Applying dependency management to configuration 'querydslImplementation' in project 'new_GoPlanV1'
Applying dependency management to configuration 'querydslCompileOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'querydslCompileClasspath' in project 'new_GoPlanV1'
Applying dependency management to configuration 'querydslAnnotationProcessor' in project 'new_GoPlanV1'
Applying dependency management to configuration 'querydslRuntimeOnly' in project 'new_GoPlanV1'
Applying dependency management to configuration 'querydslRuntimeClasspath' in project 'new_GoPlanV1'
All projects evaluated.

FAILURE: Build failed with an exception.

* What went wrong:
Task 'processResourecs' not found in root project 'new_GoPlanV1'. Some candidates are: 'processResources'.

* Try:
> Run gradlew tasks to get a list of available tasks.
> Run with --stacktrace option to get the stack trace.
> Run with --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

You can use '--warning-mode all' to show the individual deprecation warnings and determine if they come from your own scripts or plugins.

See https://docs.gradle.org/7.4.1/userguide/command_line_interface.html#sec:command_line_warnings

BUILD FAILED in 2s
Watched directory hierarchies: [C:\Users\user02gogof\Desktop\new_GoPlanV1]
PS C:\Users\user02gogof\Desktop\new_GoPlanV1> 
