PS C:\Users\user02gogof\Desktop\kb_goplanv2> .\gradlew build --offline

FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'kb'.
> Could not resolve all files for configuration ':classpath'.
   > Could not resolve org.springframework.boot:spring-boot-buildpack-platform:2.3.9.RELEASE.
     Required by:
         project : > org.springframework.boot:org.springframework.boot.gradle.plugin:2.3.9.RELEASE > org.springframework.boot:spring-boot-gradle-plugin:2.3.9.RELEASE
      > No cached version of org.springframework.boot:spring-boot-buildpack-platform:2.3.9.RELEASE available for offline mode.
   > Could not resolve org.springframework.boot:spring-boot-loader-tools:2.3.9.RELEASE.
     Required by:
         project : > org.springframework.boot:org.springframework.boot.gradle.plugin:2.3.9.RELEASE > org.springframework.boot:spring-boot-gradle-plugin:2.3.9.RELEASE
      > No cached version of org.springframework.boot:spring-boot-loader-tools:2.3.9.RELEASE available for offline mode.
   > Could not resolve org.apache.commons:commons-compress:1.19.
     Required by:
         project : > org.springframework.boot:org.springframework.boot.gradle.plugin:2.3.9.RELEASE > org.springframework.boot:spring-boot-gradle-plugin:2.3.9.RELEASE
      > No cached version of org.apache.commons:commons-compress:1.19 available for offline mode.
   > Could not resolve org.springframework:spring-core:5.2.13.RELEASE.
     Required by:
         project : > org.springframework.boot:org.springframework.boot.gradle.plugin:2.3.9.RELEASE > org.springframework.boot:spring-boot-gradle-plugin:2.3.9.RELEASE
      > No cached version of org.springframework:spring-core:5.2.13.RELEASE available for offline mode.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s
PS C:\Users\user02gogof\Desktop\kb_goplanv2> 
