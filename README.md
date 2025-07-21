PS C:\Users\user02gogof\Desktop\new_GoPlanV1> ./GRADLEW DEPENDENCIES

> Task :dependencies

------------------------------------------------------------
Root project 'new_GoPlanV1'
------------------------------------------------------------

annotationProcessor - Annotation processors and their dependencies for source set 'main'.
\--- org.projectlombok:lombok:1.18.24

apiElements - API elements for main. (n)
No dependencies

archives - Configuration for archive artifacts. (n)
No dependencies

bootArchives - Configuration for Spring Boot archive artifacts. (n)
No dependencies

compileClasspath - Compile classpath for source set 'main'.
+--- org.projectlombok:lombok:1.18.24                                                                          
+--- org.springframework.boot:spring-boot-starter-web -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18  
|    |    +--- org.springframework.boot:spring-boot:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31
|    |    |    |    \--- org.springframework:spring-jcl:5.3.31
|    |    |    \--- org.springframework:spring-context:5.3.31
|    |    |         +--- org.springframework:spring-aop:5.3.31
|    |    |         |    +--- org.springframework:spring-beans:5.3.31
|    |    |         |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |         +--- org.springframework:spring-core:5.3.31 (*)
|    |    |         \--- org.springframework:spring-expression:5.3.31
|    |    |              \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- org.springframework.boot:spring-boot-autoconfigure:2.7.18
|    |    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-starter-logging:2.7.18
|    |    |    +--- ch.qos.logback:logback-classic:1.2.12
|    |    |    |    +--- ch.qos.logback:logback-core:1.2.12
|    |    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    |    +--- org.apache.logging.log4j:log4j-to-slf4j:2.17.2
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.35 -> 1.7.36
|    |    |    |    \--- org.apache.logging.log4j:log4j-api:2.17.2
|    |    |    \--- org.slf4j:jul-to-slf4j:1.7.36
|    |    |         \--- org.slf4j:slf4j-api:1.7.36
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    \--- org.yaml:snakeyaml:1.30
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18
|    |    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    |    +--- org.springframework:spring-web:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5 (c)
|    |    |    |         \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5 (c)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5
|    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |         \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    +--- org.springframework.boot:spring-boot-starter-tomcat:2.7.18
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    |    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    |    \--- org.apache.tomcat.embed:tomcat-embed-websocket:9.0.83
|    |         \--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webmvc:5.3.31
|         +--- org.springframework:spring-aop:5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.31 (*)
+--- org.springframework.boot:spring-boot-starter-thymeleaf -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.thymeleaf:thymeleaf-spring5:3.0.15.RELEASE
|    |    +--- org.thymeleaf:thymeleaf:3.0.15.RELEASE
|    |    |    +--- org.attoparser:attoparser:2.0.5.RELEASE
|    |    |    +--- org.unbescape:unbescape:1.1.6.RELEASE
|    |    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    \--- org.thymeleaf.extras:thymeleaf-extras-java8time:3.0.4.RELEASE
|         +--- org.thymeleaf:thymeleaf:3.0.11.RELEASE -> 3.0.15.RELEASE (*)
|         \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-validation -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    \--- org.hibernate.validator:hibernate-validator:6.2.5.Final
|         +--- jakarta.validation:jakarta.validation-api:2.0.2
|         +--- org.jboss.logging:jboss-logging:3.4.1.Final -> 3.4.3.Final
|         \--- com.fasterxml:classmate:1.5.1
+--- org.thymeleaf.extras:thymeleaf-extras-springsecurity5 -> 3.0.5.RELEASE
|    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-security -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework:spring-aop:5.3.31 (*)
|    +--- org.springframework.security:spring-security-config:5.7.11
|    |    +--- org.springframework.security:spring-security-core:5.7.11
|    |    |    +--- org.springframework.security:spring-security-crypto:5.7.11
|    |    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    |    |    \--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    \--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    \--- org.springframework.security:spring-security-web:5.7.11
|         +--- org.springframework.security:spring-security-core:5.7.11 (*)
|         +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.29 -> 5.3.31 (*)
+--- io.springfox:springfox-boot-starter:3.0.0
|    +--- io.springfox:springfox-oas:3.0.0
|    |    +--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- io.swagger.core.v3:swagger-models:2.1.2
|    |    |    \--- com.fasterxml.jackson.core:jackson-annotations:2.10.1 -> 2.13.5 (*)
|    |    +--- io.springfox:springfox-spi:3.0.0
|    |    |    \--- io.springfox:springfox-core:3.0.0
|    |    |         +--- net.bytebuddy:byte-buddy:1.10.11 -> 1.12.23
|    |    |         +--- com.fasterxml:classmate:1.5.1
|    |    |         +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE
|    |    |         |    +--- org.springframework:spring-beans:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-context:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-aop:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE
|    |    |              +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |              \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- io.springfox:springfox-schema:3.0.0
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.github.classgraph:classgraph:4.8.83
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    |    +--- io.swagger:swagger-models:1.5.20
|    |    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.9.5 -> 2.13.5 (*)
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.22 -> 1.7.36
|    |    |    |    \--- io.swagger:swagger-annotations:1.5.20
|    |    |    \--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    +--- io.springfox:springfox-data-rest:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- io.springfox:springfox-bean-validators:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    +--- io.springfox:springfox-swagger2:3.0.0
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0 (*)
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    \--- io.swagger:swagger-models:1.5.20 (*)
|    +--- io.springfox:springfox-swagger-ui:3.0.0
|    +--- com.fasterxml:classmate:1.5.1
|    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
+--- io.springfox:springfox-swagger-ui:3.0.0
+--- io.jsonwebtoken:jjwt:0.9.1
|    \--- com.fasterxml.jackson.core:jackson-databind:2.9.6 -> 2.13.5 (*)
+--- com.google.code.gson:gson:2.10
+--- org.apache.commons:commons-text:1.10.0
|    \--- org.apache.commons:commons-lang3:3.12.0
+--- commons-io:commons-io:2.8.0
+--- io.projectreactor:reactor-core:3.4.0
|    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
+--- org.springframework.boot:spring-boot-starter-webflux -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-reactor-netty:2.7.18
|    |    \--- io.projectreactor.netty:reactor-netty-http:1.0.39
|    |         +--- io.netty:netty-codec-http:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final
|    |         |    |    \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-transport:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-resolver:4.1.101.Final
|    |         |    |         \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-codec:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport-native-unix-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         +--- io.netty:netty-codec-http2:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec-dns:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final
|    |         |    \--- io.netty:netty-resolver-dns-classes-macos:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.netty:netty-transport-native-epoll:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-transport-classes-epoll:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.projectreactor.netty:reactor-netty-core:1.0.39
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler-proxy:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec-socks:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-epoll:4.1.101.Final (*)
|    |         |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webflux:5.3.31
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-web:5.3.31 (*)
|         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
+--- org.apache.poi:poi:4.1.2
|    +--- commons-codec:commons-codec:1.13 -> 1.15
|    +--- org.apache.commons:commons-collections4:4.4
|    +--- org.apache.commons:commons-math3:3.6.1
|    \--- com.zaxxer:SparseBitSet:1.2
+--- org.apache.poi:poi-ooxml:4.1.2
|    +--- org.apache.poi:poi:4.1.2 (*)
|    +--- org.apache.poi:poi-ooxml-schemas:4.1.2
|    |    \--- org.apache.xmlbeans:xmlbeans:3.1.0
|    +--- org.apache.commons:commons-compress:1.19
|    \--- com.github.virtuald:curvesapi:1.06
+--- com.squareup.retrofit2:retrofit:2.9.0
|    \--- com.squareup.okhttp3:okhttp:3.14.9 -> 4.9.3
|         +--- com.squareup.okio:okio:2.8.0
|         |    +--- org.jetbrains.kotlin:kotlin-stdlib:1.4.0 -> 1.6.21
|         |    |    +--- org.jetbrains.kotlin:kotlin-stdlib-common:1.6.21
|         |    |    \--- org.jetbrains:annotations:13.0
|         |    \--- org.jetbrains.kotlin:kotlin-stdlib-common:1.4.0 -> 1.6.21
|         \--- org.jetbrains.kotlin:kotlin-stdlib:1.4.10 -> 1.6.21 (*)
+--- com.squareup.retrofit2:converter-gson:2.6.4
|    +--- com.squareup.retrofit2:retrofit:2.6.4 -> 2.9.0 (*)
|    \--- com.google.code.gson:gson:2.8.5 -> 2.10
+--- com.squareup.okhttp3:logging-interceptor:3.11.0
|    \--- com.squareup.okhttp3:okhttp:3.11.0 -> 4.9.3 (*)
+--- com.squareup.retrofit2:converter-jackson:2.9.0
|    +--- com.squareup.retrofit2:retrofit:2.9.0 (*)
|    \--- com.fasterxml.jackson.core:jackson-databind:2.10.1 -> 2.13.5 (*)
+--- com.google.firebase:firebase-admin:7.3.0
|    +--- com.google.api-client:google-api-client:1.31.4
|    |    +--- com.google.oauth-client:google-oauth-client:1.31.5
|    |    |    +--- com.google.http-client:google-http-client:1.39.2
|    |    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14
|    |    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.16
|    |    |    |    |    +--- commons-logging:commons-logging:1.2
|    |    |    |    |    \--- commons-codec:commons-codec:1.11 -> 1.15
|    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    +--- com.google.guava:guava:30.1.1-android
|    |    |    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    |    |    +--- com.google.errorprone:error_prone_annotations:2.5.1
|    |    |    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- io.opencensus:opencensus-api:0.28.0
|    |    |    |    |    \--- io.grpc:grpc-context:1.27.2 -> 1.30.0
|    |    |    |    \--- io.opencensus:opencensus-contrib-http-util:0.28.0
|    |    |    |         +--- io.opencensus:opencensus-api:0.28.0 (*)
|    |    |    |         \--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    |    \--- com.google.guava:guava:30.1-android -> 30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-gson:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    \--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.guava:guava:30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-apache-v2:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    |    \--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    \--- com.google.http-client:google-http-client:1.39.2 (*)
|    +--- com.google.api-client:google-api-client-gson:1.31.4
|    |    +--- com.google.api-client:google-api-client:1.31.4 (*)
|    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    \--- com.google.http-client:google-http-client-gson:1.39.2 (*)
|    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    +--- com.google.api:api-common:1.9.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    \--- com.google.auto.value:auto-value-annotations:1.7.2
|    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0
|    |    +--- com.google.auto.value:auto-value-annotations:1.7 -> 1.7.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.http-client:google-http-client:1.34.0 -> 1.39.2 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.34.0 -> 1.35.0
|    |    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    |    \--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.guava:guava:28.2-android -> 30.1.1-android (*)
|    +--- com.google.cloud:google-cloud-storage:1.110.0
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    +--- com.google.api-client:google-api-client:1.30.9 -> 1.31.4 (*)
|    |    +--- com.google.oauth-client:google-oauth-client:1.30.5 -> 1.31.5 (*)
|    |    +--- com.google.apis:google-api-services-storage:v1-rev20200430-1.30.9
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.cloud:google-cloud-core-http:1.93.6
|    |    +--- com.google.http-client:google-http-client-appengine:1.35.0
|    |    +--- com.google.api:gax-httpjson:0.74.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.protobuf:protobuf-java-util:3.12.2
|    |    \--- org.threeten:threetenbp:1.4.4
|    +--- com.google.cloud:google-cloud-firestore:1.35.0
|    |    +--- com.google.cloud:google-cloud-core-grpc:1.93.6
|    |    +--- io.grpc:grpc-core:1.30.0
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- org.apache.httpcomponents:httpclient:4.5.12 -> 4.5.14 (*)
|    |    +--- commons-logging:commons-logging:1.2
|    |    +--- commons-codec:commons-codec:1.11 -> 1.15
|    |    +--- org.apache.httpcomponents:httpcore:4.4.13 -> 4.4.16
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-admin-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1beta1:0.88.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- io.opencensus:opencensus-contrib-grpc-util:0.24.0
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.grpc:grpc-protobuf:1.30.0
|    |    +--- io.grpc:grpc-protobuf-lite:1.30.0
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- io.grpc:grpc-api:1.30.0
|    |    +--- com.google.api:gax-grpc:1.57.0
|    |    +--- io.grpc:grpc-auth:1.30.0
|    |    +--- io.grpc:grpc-netty-shaded:1.30.0
|    |    +--- io.grpc:grpc-alts:1.30.0
|    |    +--- io.grpc:grpc-grpclb:1.30.0
|    |    +--- org.apache.commons:commons-lang3:3.5 -> 3.12.0
|    |    +--- org.conscrypt:conscrypt-openjdk-uber:2.2.1
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- org.threeten:threetenbp:1.4.4
|    |    +--- io.grpc:grpc-stub:1.30.0
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.protobuf:protobuf-java-util:3.12.2
|    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    +--- org.slf4j:slf4j-api:1.7.30 -> 1.7.36
|    +--- io.netty:netty-codec-http:4.1.63.Final -> 4.1.101.Final (*)
|    +--- io.netty:netty-handler:4.1.63.Final -> 4.1.101.Final (*)
|    \--- io.netty:netty-transport:4.1.63.Final -> 4.1.101.Final (*)
+--- org.springframework.boot:spring-boot-starter-data-r2dbc -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.data:spring-data-r2dbc:1.5.18
|    |    +--- org.springframework.data:spring-data-commons:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework.data:spring-data-relational:2.4.18
|    |    |    +--- org.springframework.data:spring-data-commons:2.7.18 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31
|    |    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework:spring-r2dbc:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    |    +--- io.r2dbc:r2dbc-spi:0.8.6.RELEASE -> 0.9.1.RELEASE
|    |    |    |    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
|    |    |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    |    +--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    \--- io.r2dbc:r2dbc-pool:0.9.2.RELEASE
|         +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|         +--- io.projectreactor:reactor-core:3.4.22 -> 3.4.0 (*)
|         \--- io.projectreactor.addons:reactor-pool:0.2.9 -> 0.2.12
|              \--- io.projectreactor:reactor-core:3.4.33 -> 3.4.0 (*)
\--- org.mariadb:r2dbc-mariadb-0.9.1-spec:1.2.2
     +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
     +--- io.projectreactor:reactor-core:3.6.9 -> 3.4.0 (*)
     \--- io.projectreactor.netty:reactor-netty-core:1.1.22 -> 1.0.39 (*)

compileOnly - Compile only dependencies for source set 'main'. (n)
\--- org.projectlombok:lombok:1.18.24 (n)

default - Configuration for default artifacts. (n)
No dependencies

developmentOnly - Configuration for development-only dependencies such as Spring Boot's DevTools.
No dependencies

implementation - Implementation only dependencies for source set 'main'. (n)
+--- org.springframework.boot:spring-boot-starter-web (n)
+--- org.springframework.boot:spring-boot-starter-thymeleaf (n)
+--- org.springframework.boot:spring-boot-starter-validation (n)
+--- org.thymeleaf.extras:thymeleaf-extras-springsecurity5 (n)
+--- org.springframework.boot:spring-boot-starter-security (n)
+--- io.springfox:springfox-boot-starter:3.0.0 (n)
+--- io.springfox:springfox-swagger-ui:3.0.0 (n)
+--- io.jsonwebtoken:jjwt:0.9.1 (n)
+--- com.google.code.gson:gson:2.10 (n)
+--- org.apache.commons:commons-text:1.10.0 (n)
+--- commons-io:commons-io:2.8.0 (n)
+--- io.projectreactor:reactor-core:3.4.0 (n)
+--- org.springframework.boot:spring-boot-starter-webflux (n)
+--- org.apache.poi:poi:4.1.2 (n)
+--- org.apache.poi:poi-ooxml:4.1.2 (n)
+--- com.squareup.retrofit2:retrofit:2.9.0 (n)
+--- com.squareup.retrofit2:converter-gson:2.6.4 (n)
+--- com.squareup.okhttp3:logging-interceptor:3.11.0 (n)
+--- com.squareup.retrofit2:converter-jackson:2.9.0 (n)
+--- com.google.firebase:firebase-admin:7.3.0 (n)
+--- org.springframework.boot:spring-boot-starter-data-r2dbc (n)
\--- org.mariadb:r2dbc-mariadb-0.9.1-spec:1.2.2 (n)

mainSourceElements - List of source directories contained in the Main SourceSet. (n)
No dependencies

productionRuntimeClasspath
+--- org.springframework.boot:spring-boot-starter-web -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18
|    |    +--- org.springframework.boot:spring-boot:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31
|    |    |    |    \--- org.springframework:spring-jcl:5.3.31
|    |    |    \--- org.springframework:spring-context:5.3.31
|    |    |         +--- org.springframework:spring-aop:5.3.31
|    |    |         |    +--- org.springframework:spring-beans:5.3.31
|    |    |         |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |         +--- org.springframework:spring-core:5.3.31 (*)
|    |    |         \--- org.springframework:spring-expression:5.3.31
|    |    |              \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- org.springframework.boot:spring-boot-autoconfigure:2.7.18
|    |    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-starter-logging:2.7.18
|    |    |    +--- ch.qos.logback:logback-classic:1.2.12
|    |    |    |    +--- ch.qos.logback:logback-core:1.2.12
|    |    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    |    +--- org.apache.logging.log4j:log4j-to-slf4j:2.17.2
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.35 -> 1.7.36
|    |    |    |    \--- org.apache.logging.log4j:log4j-api:2.17.2
|    |    |    \--- org.slf4j:jul-to-slf4j:1.7.36
|    |    |         \--- org.slf4j:slf4j-api:1.7.36
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.springframework:spring-core:5.3.31 (*)         
|    |    \--- org.yaml:snakeyaml:1.30                            
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18
|    |    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    |    +--- org.springframework:spring-web:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5 (c)
|    |    |    |         \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5 (c)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5
|    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |         \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    +--- org.springframework.boot:spring-boot-starter-tomcat:2.7.18
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    |    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    |    \--- org.apache.tomcat.embed:tomcat-embed-websocket:9.0.83
|    |         \--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webmvc:5.3.31
|         +--- org.springframework:spring-aop:5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.31 (*)
+--- org.springframework.boot:spring-boot-starter-thymeleaf -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.thymeleaf:thymeleaf-spring5:3.0.15.RELEASE
|    |    +--- org.thymeleaf:thymeleaf:3.0.15.RELEASE
|    |    |    +--- org.attoparser:attoparser:2.0.5.RELEASE
|    |    |    +--- org.unbescape:unbescape:1.1.6.RELEASE
|    |    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    \--- org.thymeleaf.extras:thymeleaf-extras-java8time:3.0.4.RELEASE
|         +--- org.thymeleaf:thymeleaf:3.0.11.RELEASE -> 3.0.15.RELEASE (*)
|         \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-validation -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    \--- org.hibernate.validator:hibernate-validator:6.2.5.Final
|         +--- jakarta.validation:jakarta.validation-api:2.0.2
|         +--- org.jboss.logging:jboss-logging:3.4.1.Final -> 3.4.3.Final
|         \--- com.fasterxml:classmate:1.5.1
+--- org.thymeleaf.extras:thymeleaf-extras-springsecurity5 -> 3.0.5.RELEASE
|    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-security -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework:spring-aop:5.3.31 (*)
|    +--- org.springframework.security:spring-security-config:5.7.11
|    |    +--- org.springframework.security:spring-security-core:5.7.11
|    |    |    +--- org.springframework.security:spring-security-crypto:5.7.11
|    |    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    |    |    \--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    \--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    \--- org.springframework.security:spring-security-web:5.7.11
|         +--- org.springframework.security:spring-security-core:5.7.11 (*)
|         +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.29 -> 5.3.31 (*)
+--- io.springfox:springfox-boot-starter:3.0.0
|    +--- io.springfox:springfox-oas:3.0.0
|    |    +--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- io.swagger.core.v3:swagger-models:2.1.2
|    |    |    \--- com.fasterxml.jackson.core:jackson-annotations:2.10.1 -> 2.13.5 (*)
|    |    +--- io.springfox:springfox-spi:3.0.0
|    |    |    \--- io.springfox:springfox-core:3.0.0
|    |    |         +--- net.bytebuddy:byte-buddy:1.10.11 -> 1.12.23
|    |    |         +--- com.fasterxml:classmate:1.5.1
|    |    |         +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE
|    |    |         |    +--- org.springframework:spring-beans:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-context:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-aop:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE
|    |    |              +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |              \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- io.springfox:springfox-schema:3.0.0
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.github.classgraph:classgraph:4.8.83
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    |    +--- io.swagger:swagger-models:1.5.20
|    |    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.9.5 -> 2.13.5 (*)
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.22 -> 1.7.36
|    |    |    |    \--- io.swagger:swagger-annotations:1.5.20
|    |    |    \--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- org.mapstruct:mapstruct:1.3.1.Final
|    +--- io.springfox:springfox-data-rest:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- io.springfox:springfox-bean-validators:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    +--- io.springfox:springfox-swagger2:3.0.0
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0 (*)
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    +--- io.swagger:swagger-models:1.5.20 (*)
|    |    \--- org.mapstruct:mapstruct:1.3.1.Final
|    +--- io.springfox:springfox-swagger-ui:3.0.0
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- com.fasterxml:classmate:1.5.1
|    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
+--- io.springfox:springfox-swagger-ui:3.0.0 (*)
+--- io.jsonwebtoken:jjwt:0.9.1
|    \--- com.fasterxml.jackson.core:jackson-databind:2.9.6 -> 2.13.5 (*)
+--- com.google.code.gson:gson:2.10
+--- org.apache.commons:commons-text:1.10.0
|    \--- org.apache.commons:commons-lang3:3.12.0
+--- commons-io:commons-io:2.8.0
+--- io.projectreactor:reactor-core:3.4.0
|    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
+--- org.springframework.boot:spring-boot-starter-webflux -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-reactor-netty:2.7.18
|    |    \--- io.projectreactor.netty:reactor-netty-http:1.0.39
|    |         +--- io.netty:netty-codec-http:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final
|    |         |    |    \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-transport:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-resolver:4.1.101.Final
|    |         |    |         \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-codec:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport-native-unix-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         +--- io.netty:netty-codec-http2:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec-dns:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final
|    |         |    \--- io.netty:netty-resolver-dns-classes-macos:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.netty:netty-transport-native-epoll:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-transport-classes-epoll:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.projectreactor.netty:reactor-netty-core:1.0.39
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler-proxy:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec-socks:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-epoll:4.1.101.Final (*)
|    |         |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webflux:5.3.31
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-web:5.3.31 (*)
|         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
+--- org.apache.poi:poi:4.1.2
|    +--- commons-codec:commons-codec:1.13 -> 1.15
|    +--- org.apache.commons:commons-collections4:4.4
|    +--- org.apache.commons:commons-math3:3.6.1
|    \--- com.zaxxer:SparseBitSet:1.2
+--- org.apache.poi:poi-ooxml:4.1.2
|    +--- org.apache.poi:poi:4.1.2 (*)
|    +--- org.apache.poi:poi-ooxml-schemas:4.1.2
|    |    \--- org.apache.xmlbeans:xmlbeans:3.1.0
|    +--- org.apache.commons:commons-compress:1.19
|    \--- com.github.virtuald:curvesapi:1.06
+--- com.squareup.retrofit2:retrofit:2.9.0
|    \--- com.squareup.okhttp3:okhttp:3.14.9 -> 4.9.3
|         +--- com.squareup.okio:okio:2.8.0
|         |    +--- org.jetbrains.kotlin:kotlin-stdlib:1.4.0 -> 1.6.21
|         |    |    +--- org.jetbrains.kotlin:kotlin-stdlib-common:1.6.21
|         |    |    \--- org.jetbrains:annotations:13.0
|         |    \--- org.jetbrains.kotlin:kotlin-stdlib-common:1.4.0 -> 1.6.21
|         \--- org.jetbrains.kotlin:kotlin-stdlib:1.4.10 -> 1.6.21 (*)
+--- com.squareup.retrofit2:converter-gson:2.6.4
|    +--- com.squareup.retrofit2:retrofit:2.6.4 -> 2.9.0 (*)
|    \--- com.google.code.gson:gson:2.8.5 -> 2.10
+--- com.squareup.okhttp3:logging-interceptor:3.11.0
|    \--- com.squareup.okhttp3:okhttp:3.11.0 -> 4.9.3 (*)
+--- com.squareup.retrofit2:converter-jackson:2.9.0
|    +--- com.squareup.retrofit2:retrofit:2.9.0 (*)
|    \--- com.fasterxml.jackson.core:jackson-databind:2.10.1 -> 2.13.5 (*)
+--- com.google.firebase:firebase-admin:7.3.0
|    +--- com.google.api-client:google-api-client:1.31.4
|    |    +--- com.google.oauth-client:google-oauth-client:1.31.5
|    |    |    +--- com.google.http-client:google-http-client:1.39.2
|    |    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14
|    |    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.16
|    |    |    |    |    +--- commons-logging:commons-logging:1.2
|    |    |    |    |    \--- commons-codec:commons-codec:1.11 -> 1.15
|    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    +--- com.google.guava:guava:30.1.1-android
|    |    |    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    |    |    +--- com.google.errorprone:error_prone_annotations:2.5.1
|    |    |    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- io.opencensus:opencensus-api:0.28.0
|    |    |    |    |    \--- io.grpc:grpc-context:1.27.2 -> 1.30.0
|    |    |    |    \--- io.opencensus:opencensus-contrib-http-util:0.28.0
|    |    |    |         +--- io.opencensus:opencensus-api:0.28.0 (*)
|    |    |    |         \--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    |    \--- com.google.guava:guava:30.1-android -> 30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-gson:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    \--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.guava:guava:30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-apache-v2:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    |    \--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    \--- com.google.http-client:google-http-client:1.39.2 (*)
|    +--- com.google.api-client:google-api-client-gson:1.31.4
|    |    +--- com.google.api-client:google-api-client:1.31.4 (*)
|    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    \--- com.google.http-client:google-http-client-gson:1.39.2 (*)
|    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    +--- com.google.api:api-common:1.9.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    \--- com.google.auto.value:auto-value-annotations:1.7.2
|    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0
|    |    +--- com.google.auto.value:auto-value-annotations:1.7 -> 1.7.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.http-client:google-http-client:1.34.0 -> 1.39.2 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.34.0 -> 1.35.0
|    |    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    |    \--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.guava:guava:28.2-android -> 30.1.1-android (*)
|    +--- com.google.cloud:google-cloud-storage:1.110.0
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    +--- com.google.api-client:google-api-client:1.30.9 -> 1.31.4 (*)
|    |    +--- com.google.oauth-client:google-oauth-client:1.30.5 -> 1.31.5 (*)
|    |    +--- com.google.apis:google-api-services-storage:v1-rev20200430-1.30.9
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.cloud:google-cloud-core-http:1.93.6
|    |    +--- com.google.http-client:google-http-client-appengine:1.35.0
|    |    +--- com.google.api:gax-httpjson:0.74.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.protobuf:protobuf-java-util:3.12.2
|    |    \--- org.threeten:threetenbp:1.4.4
|    +--- com.google.cloud:google-cloud-firestore:1.35.0
|    |    +--- com.google.cloud:google-cloud-core-grpc:1.93.6
|    |    +--- io.grpc:grpc-core:1.30.0
|    |    +--- com.google.android:annotations:4.1.1.4
|    |    +--- io.perfmark:perfmark-api:0.19.0
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- org.apache.httpcomponents:httpclient:4.5.12 -> 4.5.14 (*)
|    |    +--- commons-logging:commons-logging:1.2
|    |    +--- commons-codec:commons-codec:1.11 -> 1.15
|    |    +--- org.apache.httpcomponents:httpcore:4.4.13 -> 4.4.16
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-admin-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1beta1:0.88.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- io.opencensus:opencensus-contrib-grpc-util:0.24.0
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.grpc:grpc-protobuf:1.30.0
|    |    +--- io.grpc:grpc-protobuf-lite:1.30.0
|    |    +--- org.codehaus.mojo:animal-sniffer-annotations:1.18
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- io.grpc:grpc-api:1.30.0
|    |    +--- com.google.api:gax-grpc:1.57.0
|    |    +--- io.grpc:grpc-auth:1.30.0
|    |    +--- io.grpc:grpc-netty-shaded:1.30.0
|    |    +--- io.grpc:grpc-alts:1.30.0
|    |    +--- io.grpc:grpc-grpclb:1.30.0
|    |    +--- org.apache.commons:commons-lang3:3.5 -> 3.12.0
|    |    +--- org.conscrypt:conscrypt-openjdk-uber:2.2.1
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- org.threeten:threetenbp:1.4.4
|    |    +--- io.grpc:grpc-stub:1.30.0
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.protobuf:protobuf-java-util:3.12.2
|    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    +--- org.slf4j:slf4j-api:1.7.30 -> 1.7.36
|    +--- io.netty:netty-codec-http:4.1.63.Final -> 4.1.101.Final (*)
|    +--- io.netty:netty-handler:4.1.63.Final -> 4.1.101.Final (*)
|    \--- io.netty:netty-transport:4.1.63.Final -> 4.1.101.Final (*)
+--- org.springframework.boot:spring-boot-starter-data-r2dbc -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.data:spring-data-r2dbc:1.5.18
|    |    +--- org.springframework.data:spring-data-commons:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework.data:spring-data-relational:2.4.18
|    |    |    +--- org.springframework.data:spring-data-commons:2.7.18 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31
|    |    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework:spring-r2dbc:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    |    +--- io.r2dbc:r2dbc-spi:0.8.6.RELEASE -> 0.9.1.RELEASE
|    |    |    |    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
|    |    |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    |    +--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    \--- io.r2dbc:r2dbc-pool:0.9.2.RELEASE
|         +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|         +--- io.projectreactor:reactor-core:3.4.22 -> 3.4.0 (*)
|         \--- io.projectreactor.addons:reactor-pool:0.2.9 -> 0.2.12
|              \--- io.projectreactor:reactor-core:3.4.33 -> 3.4.0 (*)
\--- org.mariadb:r2dbc-mariadb-0.9.1-spec:1.2.2
     +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
     +--- io.projectreactor:reactor-core:3.6.9 -> 3.4.0 (*)
     \--- io.projectreactor.netty:reactor-netty-core:1.1.22 -> 1.0.39 (*)

runtimeClasspath - Runtime classpath of source set 'main'.
+--- org.springframework.boot:spring-boot-starter-web -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18
|    |    +--- org.springframework.boot:spring-boot:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31
|    |    |    |    \--- org.springframework:spring-jcl:5.3.31
|    |    |    \--- org.springframework:spring-context:5.3.31
|    |    |         +--- org.springframework:spring-aop:5.3.31
|    |    |         |    +--- org.springframework:spring-beans:5.3.31
|    |    |         |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |         +--- org.springframework:spring-core:5.3.31 (*)
|    |    |         \--- org.springframework:spring-expression:5.3.31
|    |    |              \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- org.springframework.boot:spring-boot-autoconfigure:2.7.18
|    |    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-starter-logging:2.7.18
|    |    |    +--- ch.qos.logback:logback-classic:1.2.12
|    |    |    |    +--- ch.qos.logback:logback-core:1.2.12
|    |    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    |    +--- org.apache.logging.log4j:log4j-to-slf4j:2.17.2
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.35 -> 1.7.36
|    |    |    |    \--- org.apache.logging.log4j:log4j-api:2.17.2
|    |    |    \--- org.slf4j:jul-to-slf4j:1.7.36
|    |    |         \--- org.slf4j:slf4j-api:1.7.36
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    \--- org.yaml:snakeyaml:1.30
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18
|    |    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    |    +--- org.springframework:spring-web:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5 (c)
|    |    |    |         \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5 (c)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5
|    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |         \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    +--- org.springframework.boot:spring-boot-starter-tomcat:2.7.18
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    |    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    |    \--- org.apache.tomcat.embed:tomcat-embed-websocket:9.0.83
|    |         \--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webmvc:5.3.31
|         +--- org.springframework:spring-aop:5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.31 (*)
+--- org.springframework.boot:spring-boot-starter-thymeleaf -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.thymeleaf:thymeleaf-spring5:3.0.15.RELEASE
|    |    +--- org.thymeleaf:thymeleaf:3.0.15.RELEASE
|    |    |    +--- org.attoparser:attoparser:2.0.5.RELEASE
|    |    |    +--- org.unbescape:unbescape:1.1.6.RELEASE
|    |    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    \--- org.thymeleaf.extras:thymeleaf-extras-java8time:3.0.4.RELEASE
|         +--- org.thymeleaf:thymeleaf:3.0.11.RELEASE -> 3.0.15.RELEASE (*)
|         \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-validation -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    \--- org.hibernate.validator:hibernate-validator:6.2.5.Final
|         +--- jakarta.validation:jakarta.validation-api:2.0.2
|         +--- org.jboss.logging:jboss-logging:3.4.1.Final -> 3.4.3.Final
|         \--- com.fasterxml:classmate:1.5.1
+--- org.thymeleaf.extras:thymeleaf-extras-springsecurity5 -> 3.0.5.RELEASE
|    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-security -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework:spring-aop:5.3.31 (*)
|    +--- org.springframework.security:spring-security-config:5.7.11
|    |    +--- org.springframework.security:spring-security-core:5.7.11
|    |    |    +--- org.springframework.security:spring-security-crypto:5.7.11
|    |    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    |    |    \--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    \--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    \--- org.springframework.security:spring-security-web:5.7.11
|         +--- org.springframework.security:spring-security-core:5.7.11 (*)
|         +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.29 -> 5.3.31 (*)
+--- io.springfox:springfox-boot-starter:3.0.0
|    +--- io.springfox:springfox-oas:3.0.0
|    |    +--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- io.swagger.core.v3:swagger-models:2.1.2
|    |    |    \--- com.fasterxml.jackson.core:jackson-annotations:2.10.1 -> 2.13.5 (*)
|    |    +--- io.springfox:springfox-spi:3.0.0
|    |    |    \--- io.springfox:springfox-core:3.0.0
|    |    |         +--- net.bytebuddy:byte-buddy:1.10.11 -> 1.12.23
|    |    |         +--- com.fasterxml:classmate:1.5.1
|    |    |         +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE
|    |    |         |    +--- org.springframework:spring-beans:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-context:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-aop:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE
|    |    |              +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |              \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- io.springfox:springfox-schema:3.0.0
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.github.classgraph:classgraph:4.8.83
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    |    +--- io.swagger:swagger-models:1.5.20
|    |    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.9.5 -> 2.13.5 (*)
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.22 -> 1.7.36
|    |    |    |    \--- io.swagger:swagger-annotations:1.5.20
|    |    |    \--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- org.mapstruct:mapstruct:1.3.1.Final
|    +--- io.springfox:springfox-data-rest:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- io.springfox:springfox-bean-validators:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    +--- io.springfox:springfox-swagger2:3.0.0
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0 (*)
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    +--- io.swagger:swagger-models:1.5.20 (*)
|    |    \--- org.mapstruct:mapstruct:1.3.1.Final
|    +--- io.springfox:springfox-swagger-ui:3.0.0
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- com.fasterxml:classmate:1.5.1
|    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
+--- io.springfox:springfox-swagger-ui:3.0.0 (*)
+--- io.jsonwebtoken:jjwt:0.9.1
|    \--- com.fasterxml.jackson.core:jackson-databind:2.9.6 -> 2.13.5 (*)
+--- com.google.code.gson:gson:2.10
+--- org.apache.commons:commons-text:1.10.0
|    \--- org.apache.commons:commons-lang3:3.12.0
+--- commons-io:commons-io:2.8.0
+--- io.projectreactor:reactor-core:3.4.0
|    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
+--- org.springframework.boot:spring-boot-starter-webflux -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-reactor-netty:2.7.18
|    |    \--- io.projectreactor.netty:reactor-netty-http:1.0.39
|    |         +--- io.netty:netty-codec-http:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final
|    |         |    |    \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-transport:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-resolver:4.1.101.Final
|    |         |    |         \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-codec:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport-native-unix-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         +--- io.netty:netty-codec-http2:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec-dns:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final
|    |         |    \--- io.netty:netty-resolver-dns-classes-macos:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.netty:netty-transport-native-epoll:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-transport-classes-epoll:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.projectreactor.netty:reactor-netty-core:1.0.39
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler-proxy:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec-socks:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-epoll:4.1.101.Final (*)
|    |         |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webflux:5.3.31
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-web:5.3.31 (*)
|         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
+--- org.apache.poi:poi:4.1.2
|    +--- commons-codec:commons-codec:1.13 -> 1.15
|    +--- org.apache.commons:commons-collections4:4.4
|    +--- org.apache.commons:commons-math3:3.6.1
|    \--- com.zaxxer:SparseBitSet:1.2
+--- org.apache.poi:poi-ooxml:4.1.2
|    +--- org.apache.poi:poi:4.1.2 (*)
|    +--- org.apache.poi:poi-ooxml-schemas:4.1.2
|    |    \--- org.apache.xmlbeans:xmlbeans:3.1.0
|    +--- org.apache.commons:commons-compress:1.19
|    \--- com.github.virtuald:curvesapi:1.06
+--- com.squareup.retrofit2:retrofit:2.9.0
|    \--- com.squareup.okhttp3:okhttp:3.14.9 -> 4.9.3
|         +--- com.squareup.okio:okio:2.8.0
|         |    +--- org.jetbrains.kotlin:kotlin-stdlib:1.4.0 -> 1.6.21
|         |    |    +--- org.jetbrains.kotlin:kotlin-stdlib-common:1.6.21
|         |    |    \--- org.jetbrains:annotations:13.0
|         |    \--- org.jetbrains.kotlin:kotlin-stdlib-common:1.4.0 -> 1.6.21
|         \--- org.jetbrains.kotlin:kotlin-stdlib:1.4.10 -> 1.6.21 (*)
+--- com.squareup.retrofit2:converter-gson:2.6.4
|    +--- com.squareup.retrofit2:retrofit:2.6.4 -> 2.9.0 (*)
|    \--- com.google.code.gson:gson:2.8.5 -> 2.10
+--- com.squareup.okhttp3:logging-interceptor:3.11.0
|    \--- com.squareup.okhttp3:okhttp:3.11.0 -> 4.9.3 (*)
+--- com.squareup.retrofit2:converter-jackson:2.9.0
|    +--- com.squareup.retrofit2:retrofit:2.9.0 (*)
|    \--- com.fasterxml.jackson.core:jackson-databind:2.10.1 -> 2.13.5 (*)
+--- com.google.firebase:firebase-admin:7.3.0
|    +--- com.google.api-client:google-api-client:1.31.4
|    |    +--- com.google.oauth-client:google-oauth-client:1.31.5
|    |    |    +--- com.google.http-client:google-http-client:1.39.2
|    |    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14
|    |    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.16
|    |    |    |    |    +--- commons-logging:commons-logging:1.2
|    |    |    |    |    \--- commons-codec:commons-codec:1.11 -> 1.15
|    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    +--- com.google.guava:guava:30.1.1-android
|    |    |    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    |    |    +--- com.google.errorprone:error_prone_annotations:2.5.1
|    |    |    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- io.opencensus:opencensus-api:0.28.0
|    |    |    |    |    \--- io.grpc:grpc-context:1.27.2 -> 1.30.0
|    |    |    |    \--- io.opencensus:opencensus-contrib-http-util:0.28.0
|    |    |    |         +--- io.opencensus:opencensus-api:0.28.0 (*)
|    |    |    |         \--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    |    \--- com.google.guava:guava:30.1-android -> 30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-gson:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    \--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.guava:guava:30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-apache-v2:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    |    \--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    \--- com.google.http-client:google-http-client:1.39.2 (*)
|    +--- com.google.api-client:google-api-client-gson:1.31.4
|    |    +--- com.google.api-client:google-api-client:1.31.4 (*)
|    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    \--- com.google.http-client:google-http-client-gson:1.39.2 (*)
|    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    +--- com.google.api:api-common:1.9.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    \--- com.google.auto.value:auto-value-annotations:1.7.2
|    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0
|    |    +--- com.google.auto.value:auto-value-annotations:1.7 -> 1.7.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.http-client:google-http-client:1.34.0 -> 1.39.2 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.34.0 -> 1.35.0
|    |    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    |    \--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.guava:guava:28.2-android -> 30.1.1-android (*)
|    +--- com.google.cloud:google-cloud-storage:1.110.0
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    +--- com.google.api-client:google-api-client:1.30.9 -> 1.31.4 (*)
|    |    +--- com.google.oauth-client:google-oauth-client:1.30.5 -> 1.31.5 (*)
|    |    +--- com.google.apis:google-api-services-storage:v1-rev20200430-1.30.9
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.cloud:google-cloud-core-http:1.93.6
|    |    +--- com.google.http-client:google-http-client-appengine:1.35.0
|    |    +--- com.google.api:gax-httpjson:0.74.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.protobuf:protobuf-java-util:3.12.2
|    |    \--- org.threeten:threetenbp:1.4.4
|    +--- com.google.cloud:google-cloud-firestore:1.35.0
|    |    +--- com.google.cloud:google-cloud-core-grpc:1.93.6
|    |    +--- io.grpc:grpc-core:1.30.0
|    |    +--- com.google.android:annotations:4.1.1.4
|    |    +--- io.perfmark:perfmark-api:0.19.0
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- org.apache.httpcomponents:httpclient:4.5.12 -> 4.5.14 (*)
|    |    +--- commons-logging:commons-logging:1.2
|    |    +--- commons-codec:commons-codec:1.11 -> 1.15
|    |    +--- org.apache.httpcomponents:httpcore:4.4.13 -> 4.4.16
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-admin-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1beta1:0.88.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- io.opencensus:opencensus-contrib-grpc-util:0.24.0
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.grpc:grpc-protobuf:1.30.0
|    |    +--- io.grpc:grpc-protobuf-lite:1.30.0
|    |    +--- org.codehaus.mojo:animal-sniffer-annotations:1.18
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- io.grpc:grpc-api:1.30.0
|    |    +--- com.google.api:gax-grpc:1.57.0
|    |    +--- io.grpc:grpc-auth:1.30.0
|    |    +--- io.grpc:grpc-netty-shaded:1.30.0
|    |    +--- io.grpc:grpc-alts:1.30.0
|    |    +--- io.grpc:grpc-grpclb:1.30.0
|    |    +--- org.apache.commons:commons-lang3:3.5 -> 3.12.0
|    |    +--- org.conscrypt:conscrypt-openjdk-uber:2.2.1
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- org.threeten:threetenbp:1.4.4
|    |    +--- io.grpc:grpc-stub:1.30.0
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.protobuf:protobuf-java-util:3.12.2
|    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    +--- org.slf4j:slf4j-api:1.7.30 -> 1.7.36
|    +--- io.netty:netty-codec-http:4.1.63.Final -> 4.1.101.Final (*)
|    +--- io.netty:netty-handler:4.1.63.Final -> 4.1.101.Final (*)
|    \--- io.netty:netty-transport:4.1.63.Final -> 4.1.101.Final (*)
+--- org.springframework.boot:spring-boot-starter-data-r2dbc -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.data:spring-data-r2dbc:1.5.18
|    |    +--- org.springframework.data:spring-data-commons:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework.data:spring-data-relational:2.4.18
|    |    |    +--- org.springframework.data:spring-data-commons:2.7.18 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31
|    |    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework:spring-r2dbc:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    |    +--- io.r2dbc:r2dbc-spi:0.8.6.RELEASE -> 0.9.1.RELEASE
|    |    |    |    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
|    |    |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    |    +--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    \--- io.r2dbc:r2dbc-pool:0.9.2.RELEASE
|         +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|         +--- io.projectreactor:reactor-core:3.4.22 -> 3.4.0 (*)
|         \--- io.projectreactor.addons:reactor-pool:0.2.9 -> 0.2.12
|              \--- io.projectreactor:reactor-core:3.4.33 -> 3.4.0 (*)
\--- org.mariadb:r2dbc-mariadb-0.9.1-spec:1.2.2
     +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
     +--- io.projectreactor:reactor-core:3.6.9 -> 3.4.0 (*)
     \--- io.projectreactor.netty:reactor-netty-core:1.1.22 -> 1.0.39 (*)

runtimeElements - Elements of runtime for main. (n)
No dependencies

runtimeOnly - Runtime only dependencies for source set 'main'. (n)
No dependencies

testAnnotationProcessor - Annotation processors and their dependencies for source set 'test'.
No dependencies

testCompileClasspath - Compile classpath for source set 'test'.
+--- org.springframework.boot:spring-boot-starter-web -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18
|    |    +--- org.springframework.boot:spring-boot:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31
|    |    |    |    \--- org.springframework:spring-jcl:5.3.31
|    |    |    \--- org.springframework:spring-context:5.3.31
|    |    |         +--- org.springframework:spring-aop:5.3.31
|    |    |         |    +--- org.springframework:spring-beans:5.3.31
|    |    |         |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |         +--- org.springframework:spring-core:5.3.31 (*)
|    |    |         \--- org.springframework:spring-expression:5.3.31
|    |    |              \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- org.springframework.boot:spring-boot-autoconfigure:2.7.18
|    |    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-starter-logging:2.7.18
|    |    |    +--- ch.qos.logback:logback-classic:1.2.12
|    |    |    |    +--- ch.qos.logback:logback-core:1.2.12
|    |    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    |    +--- org.apache.logging.log4j:log4j-to-slf4j:2.17.2
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.35 -> 1.7.36
|    |    |    |    \--- org.apache.logging.log4j:log4j-api:2.17.2
|    |    |    \--- org.slf4j:jul-to-slf4j:1.7.36
|    |    |         \--- org.slf4j:slf4j-api:1.7.36
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    \--- org.yaml:snakeyaml:1.30
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18
|    |    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    |    +--- org.springframework:spring-web:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5 (c)
|    |    |    |         \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5 (c)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5
|    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |         \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    +--- org.springframework.boot:spring-boot-starter-tomcat:2.7.18
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    |    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    |    \--- org.apache.tomcat.embed:tomcat-embed-websocket:9.0.83
|    |         \--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webmvc:5.3.31
|         +--- org.springframework:spring-aop:5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.31 (*)
+--- org.springframework.boot:spring-boot-starter-thymeleaf -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.thymeleaf:thymeleaf-spring5:3.0.15.RELEASE
|    |    +--- org.thymeleaf:thymeleaf:3.0.15.RELEASE
|    |    |    +--- org.attoparser:attoparser:2.0.5.RELEASE
|    |    |    +--- org.unbescape:unbescape:1.1.6.RELEASE
|    |    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    \--- org.thymeleaf.extras:thymeleaf-extras-java8time:3.0.4.RELEASE
|         +--- org.thymeleaf:thymeleaf:3.0.11.RELEASE -> 3.0.15.RELEASE (*)
|         \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-validation -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    \--- org.hibernate.validator:hibernate-validator:6.2.5.Final
|         +--- jakarta.validation:jakarta.validation-api:2.0.2
|         +--- org.jboss.logging:jboss-logging:3.4.1.Final -> 3.4.3.Final
|         \--- com.fasterxml:classmate:1.5.1
+--- org.thymeleaf.extras:thymeleaf-extras-springsecurity5 -> 3.0.5.RELEASE
|    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-security -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework:spring-aop:5.3.31 (*)
|    +--- org.springframework.security:spring-security-config:5.7.11
|    |    +--- org.springframework.security:spring-security-core:5.7.11
|    |    |    +--- org.springframework.security:spring-security-crypto:5.7.11
|    |    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    |    |    \--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    \--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    \--- org.springframework.security:spring-security-web:5.7.11
|         +--- org.springframework.security:spring-security-core:5.7.11 (*)
|         +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.29 -> 5.3.31 (*)
+--- io.springfox:springfox-boot-starter:3.0.0
|    +--- io.springfox:springfox-oas:3.0.0
|    |    +--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- io.swagger.core.v3:swagger-models:2.1.2
|    |    |    \--- com.fasterxml.jackson.core:jackson-annotations:2.10.1 -> 2.13.5 (*)
|    |    +--- io.springfox:springfox-spi:3.0.0
|    |    |    \--- io.springfox:springfox-core:3.0.0
|    |    |         +--- net.bytebuddy:byte-buddy:1.10.11 -> 1.12.23
|    |    |         +--- com.fasterxml:classmate:1.5.1
|    |    |         +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE
|    |    |         |    +--- org.springframework:spring-beans:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-context:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-aop:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE
|    |    |              +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |              \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- io.springfox:springfox-schema:3.0.0
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.github.classgraph:classgraph:4.8.83
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    |    +--- io.swagger:swagger-models:1.5.20
|    |    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.9.5 -> 2.13.5 (*)
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.22 -> 1.7.36
|    |    |    |    \--- io.swagger:swagger-annotations:1.5.20
|    |    |    \--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    +--- io.springfox:springfox-data-rest:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- io.springfox:springfox-bean-validators:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    +--- io.springfox:springfox-swagger2:3.0.0
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0 (*)
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    \--- io.swagger:swagger-models:1.5.20 (*)
|    +--- io.springfox:springfox-swagger-ui:3.0.0
|    +--- com.fasterxml:classmate:1.5.1
|    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
+--- io.springfox:springfox-swagger-ui:3.0.0
+--- io.jsonwebtoken:jjwt:0.9.1
|    \--- com.fasterxml.jackson.core:jackson-databind:2.9.6 -> 2.13.5 (*)
+--- com.google.code.gson:gson:2.10
+--- org.apache.commons:commons-text:1.10.0
|    \--- org.apache.commons:commons-lang3:3.12.0
+--- commons-io:commons-io:2.8.0
+--- io.projectreactor:reactor-core:3.4.0
|    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
+--- org.springframework.boot:spring-boot-starter-webflux -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-reactor-netty:2.7.18
|    |    \--- io.projectreactor.netty:reactor-netty-http:1.0.39
|    |         +--- io.netty:netty-codec-http:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final
|    |         |    |    \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-transport:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-resolver:4.1.101.Final
|    |         |    |         \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-codec:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport-native-unix-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         +--- io.netty:netty-codec-http2:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec-dns:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final
|    |         |    \--- io.netty:netty-resolver-dns-classes-macos:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.netty:netty-transport-native-epoll:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-transport-classes-epoll:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.projectreactor.netty:reactor-netty-core:1.0.39
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler-proxy:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec-socks:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-epoll:4.1.101.Final (*)
|    |         |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webflux:5.3.31
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-web:5.3.31 (*)
|         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
+--- org.apache.poi:poi:4.1.2
|    +--- commons-codec:commons-codec:1.13 -> 1.15
|    +--- org.apache.commons:commons-collections4:4.4
|    +--- org.apache.commons:commons-math3:3.6.1
|    \--- com.zaxxer:SparseBitSet:1.2
+--- org.apache.poi:poi-ooxml:4.1.2
|    +--- org.apache.poi:poi:4.1.2 (*)
|    +--- org.apache.poi:poi-ooxml-schemas:4.1.2
|    |    \--- org.apache.xmlbeans:xmlbeans:3.1.0
|    +--- org.apache.commons:commons-compress:1.19
|    \--- com.github.virtuald:curvesapi:1.06
+--- com.squareup.retrofit2:retrofit:2.9.0
|    \--- com.squareup.okhttp3:okhttp:3.14.9 -> 4.9.3
|         +--- com.squareup.okio:okio:2.8.0
|         |    +--- org.jetbrains.kotlin:kotlin-stdlib:1.4.0 -> 1.6.21
|         |    |    +--- org.jetbrains.kotlin:kotlin-stdlib-common:1.6.21
|         |    |    \--- org.jetbrains:annotations:13.0
|         |    \--- org.jetbrains.kotlin:kotlin-stdlib-common:1.4.0 -> 1.6.21
|         \--- org.jetbrains.kotlin:kotlin-stdlib:1.4.10 -> 1.6.21 (*)
+--- com.squareup.retrofit2:converter-gson:2.6.4
|    +--- com.squareup.retrofit2:retrofit:2.6.4 -> 2.9.0 (*)
|    \--- com.google.code.gson:gson:2.8.5 -> 2.10
+--- com.squareup.okhttp3:logging-interceptor:3.11.0
|    \--- com.squareup.okhttp3:okhttp:3.11.0 -> 4.9.3 (*)
+--- com.squareup.retrofit2:converter-jackson:2.9.0
|    +--- com.squareup.retrofit2:retrofit:2.9.0 (*)
|    \--- com.fasterxml.jackson.core:jackson-databind:2.10.1 -> 2.13.5 (*)
+--- com.google.firebase:firebase-admin:7.3.0
|    +--- com.google.api-client:google-api-client:1.31.4
|    |    +--- com.google.oauth-client:google-oauth-client:1.31.5
|    |    |    +--- com.google.http-client:google-http-client:1.39.2
|    |    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14
|    |    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.16
|    |    |    |    |    +--- commons-logging:commons-logging:1.2
|    |    |    |    |    \--- commons-codec:commons-codec:1.11 -> 1.15
|    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    +--- com.google.guava:guava:30.1.1-android
|    |    |    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    |    |    +--- com.google.errorprone:error_prone_annotations:2.5.1
|    |    |    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- io.opencensus:opencensus-api:0.28.0
|    |    |    |    |    \--- io.grpc:grpc-context:1.27.2 -> 1.30.0
|    |    |    |    \--- io.opencensus:opencensus-contrib-http-util:0.28.0
|    |    |    |         +--- io.opencensus:opencensus-api:0.28.0 (*)
|    |    |    |         \--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    |    \--- com.google.guava:guava:30.1-android -> 30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-gson:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    \--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.guava:guava:30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-apache-v2:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    |    \--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    \--- com.google.http-client:google-http-client:1.39.2 (*)
|    +--- com.google.api-client:google-api-client-gson:1.31.4
|    |    +--- com.google.api-client:google-api-client:1.31.4 (*)
|    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    \--- com.google.http-client:google-http-client-gson:1.39.2 (*)
|    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    +--- com.google.api:api-common:1.9.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    \--- com.google.auto.value:auto-value-annotations:1.7.2
|    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0
|    |    +--- com.google.auto.value:auto-value-annotations:1.7 -> 1.7.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.http-client:google-http-client:1.34.0 -> 1.39.2 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.34.0 -> 1.35.0
|    |    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    |    \--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.guava:guava:28.2-android -> 30.1.1-android (*)
|    +--- com.google.cloud:google-cloud-storage:1.110.0
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    +--- com.google.api-client:google-api-client:1.30.9 -> 1.31.4 (*)
|    |    +--- com.google.oauth-client:google-oauth-client:1.30.5 -> 1.31.5 (*)
|    |    +--- com.google.apis:google-api-services-storage:v1-rev20200430-1.30.9
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.cloud:google-cloud-core-http:1.93.6
|    |    +--- com.google.http-client:google-http-client-appengine:1.35.0
|    |    +--- com.google.api:gax-httpjson:0.74.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.protobuf:protobuf-java-util:3.12.2
|    |    \--- org.threeten:threetenbp:1.4.4
|    +--- com.google.cloud:google-cloud-firestore:1.35.0
|    |    +--- com.google.cloud:google-cloud-core-grpc:1.93.6
|    |    +--- io.grpc:grpc-core:1.30.0
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- org.apache.httpcomponents:httpclient:4.5.12 -> 4.5.14 (*)
|    |    +--- commons-logging:commons-logging:1.2
|    |    +--- commons-codec:commons-codec:1.11 -> 1.15
|    |    +--- org.apache.httpcomponents:httpcore:4.4.13 -> 4.4.16
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-admin-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1beta1:0.88.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- io.opencensus:opencensus-contrib-grpc-util:0.24.0
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.grpc:grpc-protobuf:1.30.0
|    |    +--- io.grpc:grpc-protobuf-lite:1.30.0
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- io.grpc:grpc-api:1.30.0
|    |    +--- com.google.api:gax-grpc:1.57.0
|    |    +--- io.grpc:grpc-auth:1.30.0
|    |    +--- io.grpc:grpc-netty-shaded:1.30.0
|    |    +--- io.grpc:grpc-alts:1.30.0
|    |    +--- io.grpc:grpc-grpclb:1.30.0
|    |    +--- org.apache.commons:commons-lang3:3.5 -> 3.12.0
|    |    +--- org.conscrypt:conscrypt-openjdk-uber:2.2.1
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- org.threeten:threetenbp:1.4.4
|    |    +--- io.grpc:grpc-stub:1.30.0
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.protobuf:protobuf-java-util:3.12.2
|    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    +--- org.slf4j:slf4j-api:1.7.30 -> 1.7.36
|    +--- io.netty:netty-codec-http:4.1.63.Final -> 4.1.101.Final (*)
|    +--- io.netty:netty-handler:4.1.63.Final -> 4.1.101.Final (*)
|    \--- io.netty:netty-transport:4.1.63.Final -> 4.1.101.Final (*)
+--- org.springframework.boot:spring-boot-starter-data-r2dbc -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.data:spring-data-r2dbc:1.5.18
|    |    +--- org.springframework.data:spring-data-commons:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework.data:spring-data-relational:2.4.18
|    |    |    +--- org.springframework.data:spring-data-commons:2.7.18 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31
|    |    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework:spring-r2dbc:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    |    +--- io.r2dbc:r2dbc-spi:0.8.6.RELEASE -> 0.9.1.RELEASE
|    |    |    |    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
|    |    |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    |    +--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    \--- io.r2dbc:r2dbc-pool:0.9.2.RELEASE
|         +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|         +--- io.projectreactor:reactor-core:3.4.22 -> 3.4.0 (*)
|         \--- io.projectreactor.addons:reactor-pool:0.2.9 -> 0.2.12
|              \--- io.projectreactor:reactor-core:3.4.33 -> 3.4.0 (*)
+--- org.mariadb:r2dbc-mariadb-0.9.1-spec:1.2.2
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    +--- io.projectreactor:reactor-core:3.6.9 -> 3.4.0 (*)
|    \--- io.projectreactor.netty:reactor-netty-core:1.1.22 -> 1.0.39 (*)
+--- org.springframework.boot:spring-boot-starter-test -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-test:2.7.18
|    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-test-autoconfigure:2.7.18
|    |    +--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-test:2.7.18 (*)
|    |    \--- org.springframework.boot:spring-boot-autoconfigure:2.7.18 (*)
|    +--- com.jayway.jsonpath:json-path:2.7.0
|    |    +--- net.minidev:json-smart:2.4.7 -> 2.4.11
|    |    |    \--- net.minidev:accessors-smart:2.4.11
|    |    |         \--- org.ow2.asm:asm:9.3
|    |    \--- org.slf4j:slf4j-api:1.7.33 -> 1.7.36
|    +--- jakarta.xml.bind:jakarta.xml.bind-api:2.3.3
|    |    \--- jakarta.activation:jakarta.activation-api:1.2.2
|    +--- org.assertj:assertj-core:3.22.0
|    +--- org.hamcrest:hamcrest:2.2
|    +--- org.junit.jupiter:junit-jupiter:5.8.2
|    |    +--- org.junit:junit-bom:5.8.2
|    |    |    +--- org.junit.jupiter:junit-jupiter:5.8.2 (c)
|    |    |    +--- org.junit.jupiter:junit-jupiter-api:5.8.2 (c)
|    |    |    +--- org.junit.jupiter:junit-jupiter-params:5.8.2 (c)
|    |    |    \--- org.junit.platform:junit-platform-commons:1.8.2 (c)
|    |    +--- org.junit.jupiter:junit-jupiter-api:5.8.2
|    |    |    +--- org.junit:junit-bom:5.8.2 (*)
|    |    |    +--- org.opentest4j:opentest4j:1.2.0
|    |    |    +--- org.junit.platform:junit-platform-commons:1.8.2
|    |    |    |    +--- org.junit:junit-bom:5.8.2 (*)
|    |    |    |    \--- org.apiguardian:apiguardian-api:1.1.2
|    |    |    \--- org.apiguardian:apiguardian-api:1.1.2
|    |    \--- org.junit.jupiter:junit-jupiter-params:5.8.2
|    |         +--- org.junit:junit-bom:5.8.2 (*)
|    |         +--- org.junit.jupiter:junit-jupiter-api:5.8.2 (*)
|    |         \--- org.apiguardian:apiguardian-api:1.1.2
|    +--- org.mockito:mockito-core:4.5.1
|    |    +--- net.bytebuddy:byte-buddy:1.12.9 -> 1.12.23
|    |    \--- net.bytebuddy:byte-buddy-agent:1.12.9 -> 1.12.23
|    +--- org.mockito:mockito-junit-jupiter:4.5.1
|    |    \--- org.mockito:mockito-core:4.5.1 (*)
|    +--- org.skyscreamer:jsonassert:1.5.1
|    |    \--- com.vaadin.external.google:android-json:0.0.20131108.vaadin1
|    +--- org.springframework:spring-core:5.3.31 (*)
|    +--- org.springframework:spring-test:5.3.31
|    |    \--- org.springframework:spring-core:5.3.31 (*)
|    \--- org.xmlunit:xmlunit-core:2.9.1
\--- org.springframework.security:spring-security-test -> 5.7.11
     +--- org.springframework.security:spring-security-core:5.7.11 (*)
     +--- org.springframework.security:spring-security-web:5.7.11 (*)
     +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
     \--- org.springframework:spring-test:5.3.29 -> 5.3.31 (*)

testCompileOnly - Compile only dependencies for source set 'test'. (n)
No dependencies

testImplementation - Implementation only dependencies for source set 'test'. (n)
+--- org.springframework.boot:spring-boot-starter-test (n)
\--- org.springframework.security:spring-security-test (n)

testResultsElementsForTest - Directory containing binary results of running tests for the test Test Suite's test target. (n)
No dependencies

testRuntimeClasspath - Runtime classpath of source set 'test'.
+--- org.springframework.boot:spring-boot-starter-web -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18
|    |    +--- org.springframework.boot:spring-boot:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31
|    |    |    |    \--- org.springframework:spring-jcl:5.3.31
|    |    |    \--- org.springframework:spring-context:5.3.31
|    |    |         +--- org.springframework:spring-aop:5.3.31
|    |    |         |    +--- org.springframework:spring-beans:5.3.31
|    |    |         |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |         +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |         +--- org.springframework:spring-core:5.3.31 (*)
|    |    |         \--- org.springframework:spring-expression:5.3.31
|    |    |              \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- org.springframework.boot:spring-boot-autoconfigure:2.7.18
|    |    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-starter-logging:2.7.18
|    |    |    +--- ch.qos.logback:logback-classic:1.2.12
|    |    |    |    +--- ch.qos.logback:logback-core:1.2.12
|    |    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    |    +--- org.apache.logging.log4j:log4j-to-slf4j:2.17.2
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.35 -> 1.7.36
|    |    |    |    \--- org.apache.logging.log4j:log4j-api:2.17.2
|    |    |    \--- org.slf4j:jul-to-slf4j:1.7.36
|    |    |         \--- org.slf4j:slf4j-api:1.7.36
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    \--- org.yaml:snakeyaml:1.30
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18
|    |    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    |    +--- org.springframework:spring-web:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5 (c)
|    |    |    |         +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5 (c)
|    |    |    |         \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5 (c)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5
|    |    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    +--- com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.13.5
|    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |    |    +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |    |    \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    |    \--- com.fasterxml.jackson.module:jackson-module-parameter-names:2.13.5
|    |         +--- com.fasterxml.jackson.core:jackson-core:2.13.5 (*)
|    |         +--- com.fasterxml.jackson.core:jackson-databind:2.13.5 (*)
|    |         \--- com.fasterxml.jackson:jackson-bom:2.13.5 (*)
|    +--- org.springframework.boot:spring-boot-starter-tomcat:2.7.18
|    |    +--- jakarta.annotation:jakarta.annotation-api:1.3.5
|    |    +--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    |    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    |    \--- org.apache.tomcat.embed:tomcat-embed-websocket:9.0.83
|    |         \--- org.apache.tomcat.embed:tomcat-embed-core:9.0.83
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webmvc:5.3.31
|         +--- org.springframework:spring-aop:5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.31 (*)
+--- org.springframework.boot:spring-boot-starter-thymeleaf -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.thymeleaf:thymeleaf-spring5:3.0.15.RELEASE
|    |    +--- org.thymeleaf:thymeleaf:3.0.15.RELEASE
|    |    |    +--- org.attoparser:attoparser:2.0.5.RELEASE
|    |    |    +--- org.unbescape:unbescape:1.1.6.RELEASE
|    |    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    \--- org.thymeleaf.extras:thymeleaf-extras-java8time:3.0.4.RELEASE
|         +--- org.thymeleaf:thymeleaf:3.0.11.RELEASE -> 3.0.15.RELEASE (*)
|         \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-validation -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.apache.tomcat.embed:tomcat-embed-el:9.0.83
|    \--- org.hibernate.validator:hibernate-validator:6.2.5.Final
|         +--- jakarta.validation:jakarta.validation-api:2.0.2
|         +--- org.jboss.logging:jboss-logging:3.4.1.Final -> 3.4.3.Final
|         \--- com.fasterxml:classmate:1.5.1
+--- org.thymeleaf.extras:thymeleaf-extras-springsecurity5 -> 3.0.5.RELEASE
|    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
+--- org.springframework.boot:spring-boot-starter-security -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework:spring-aop:5.3.31 (*)
|    +--- org.springframework.security:spring-security-config:5.7.11
|    |    +--- org.springframework.security:spring-security-core:5.7.11
|    |    |    +--- org.springframework.security:spring-security-crypto:5.7.11
|    |    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    |    |    \--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|    |    \--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|    \--- org.springframework.security:spring-security-web:5.7.11
|         +--- org.springframework.security:spring-security-core:5.7.11 (*)
|         +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-aop:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-beans:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-context:5.3.29 -> 5.3.31 (*)
|         +--- org.springframework:spring-expression:5.3.29 -> 5.3.31 (*)
|         \--- org.springframework:spring-web:5.3.29 -> 5.3.31 (*)
+--- io.springfox:springfox-boot-starter:3.0.0
|    +--- io.springfox:springfox-oas:3.0.0
|    |    +--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- io.swagger.core.v3:swagger-models:2.1.2
|    |    |    \--- com.fasterxml.jackson.core:jackson-annotations:2.10.1 -> 2.13.5 (*)
|    |    +--- io.springfox:springfox-spi:3.0.0
|    |    |    \--- io.springfox:springfox-core:3.0.0
|    |    |         +--- net.bytebuddy:byte-buddy:1.10.11 -> 1.12.23
|    |    |         +--- com.fasterxml:classmate:1.5.1
|    |    |         +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE
|    |    |         |    +--- org.springframework:spring-beans:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-context:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    +--- org.springframework:spring-aop:5.2.0.RELEASE -> 5.3.31 (*)
|    |    |         |    \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |         \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE
|    |    |              +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |              \--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- io.springfox:springfox-schema:3.0.0
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.github.classgraph:classgraph:4.8.83
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0
|    |    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    |    +--- com.fasterxml:classmate:1.5.1
|    |    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    |    +--- io.swagger:swagger-models:1.5.20
|    |    |    |    +--- com.fasterxml.jackson.core:jackson-annotations:2.9.5 -> 2.13.5 (*)
|    |    |    |    +--- org.slf4j:slf4j-api:1.7.22 -> 1.7.36
|    |    |    |    \--- io.swagger:swagger-annotations:1.5.20
|    |    |    \--- io.swagger.core.v3:swagger-annotations:2.1.2
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- org.mapstruct:mapstruct:1.3.1.Final
|    +--- io.springfox:springfox-data-rest:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-core:3.0.0 (*)
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- io.springfox:springfox-bean-validators:3.0.0
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    \--- io.springfox:springfox-spring-web:3.0.0 (*)
|    +--- io.springfox:springfox-swagger2:3.0.0
|    |    +--- io.springfox:springfox-spi:3.0.0 (*)
|    |    +--- io.springfox:springfox-schema:3.0.0 (*)
|    |    +--- io.springfox:springfox-swagger-common:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-web:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    |    +--- io.springfox:springfox-spring-webflux:3.0.0 (*)
|    |    +--- com.fasterxml:classmate:1.5.1
|    |    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    |    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    |    +--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
|    |    +--- io.swagger:swagger-annotations:1.5.20
|    |    +--- io.swagger:swagger-models:1.5.20 (*)
|    |    \--- org.mapstruct:mapstruct:1.3.1.Final
|    +--- io.springfox:springfox-swagger-ui:3.0.0
|    |    \--- io.springfox:springfox-spring-webmvc:3.0.0 (*)
|    +--- com.fasterxml:classmate:1.5.1
|    +--- org.slf4j:slf4j-api:1.7.25 -> 1.7.36
|    +--- org.springframework.plugin:spring-plugin-core:2.0.0.RELEASE (*)
|    \--- org.springframework.plugin:spring-plugin-metadata:2.0.0.RELEASE (*)
+--- io.springfox:springfox-swagger-ui:3.0.0 (*)
+--- io.jsonwebtoken:jjwt:0.9.1
|    \--- com.fasterxml.jackson.core:jackson-databind:2.9.6 -> 2.13.5 (*)
+--- com.google.code.gson:gson:2.10
+--- org.apache.commons:commons-text:1.10.0
|    \--- org.apache.commons:commons-lang3:3.12.0
+--- commons-io:commons-io:2.8.0
+--- io.projectreactor:reactor-core:3.4.0
|    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
+--- org.springframework.boot:spring-boot-starter-webflux -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-json:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-starter-reactor-netty:2.7.18
|    |    \--- io.projectreactor.netty:reactor-netty-http:1.0.39
|    |         +--- io.netty:netty-codec-http:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final
|    |         |    |    \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-transport:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-resolver:4.1.101.Final
|    |         |    |         \--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-codec:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport-native-unix-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         |    \--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         +--- io.netty:netty-codec-http2:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-codec-dns:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-handler:4.1.101.Final (*)
|    |         +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final
|    |         |    \--- io.netty:netty-resolver-dns-classes-macos:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.netty:netty-transport-native-epoll:4.1.101.Final
|    |         |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         |    \--- io.netty:netty-transport-classes-epoll:4.1.101.Final
|    |         |         +--- io.netty:netty-common:4.1.101.Final
|    |         |         +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |         +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |         \--- io.netty:netty-transport-native-unix-common:4.1.101.Final (*)
|    |         +--- io.projectreactor.netty:reactor-netty-core:1.0.39
|    |         |    +--- io.netty:netty-handler:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-handler-proxy:4.1.101.Final
|    |         |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    +--- io.netty:netty-codec-socks:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-common:4.1.101.Final
|    |         |    |    |    +--- io.netty:netty-buffer:4.1.101.Final (*)
|    |         |    |    |    +--- io.netty:netty-transport:4.1.101.Final (*)
|    |         |    |    |    \--- io.netty:netty-codec:4.1.101.Final (*)
|    |         |    |    \--- io.netty:netty-codec-http:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-resolver-dns-native-macos:4.1.101.Final (*)
|    |         |    +--- io.netty:netty-transport-native-epoll:4.1.101.Final (*)
|    |         |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    +--- org.springframework:spring-web:5.3.31 (*)
|    \--- org.springframework:spring-webflux:5.3.31
|         +--- org.springframework:spring-beans:5.3.31 (*)
|         +--- org.springframework:spring-core:5.3.31 (*)
|         +--- org.springframework:spring-web:5.3.31 (*)
|         \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
+--- org.apache.poi:poi:4.1.2
|    +--- commons-codec:commons-codec:1.13 -> 1.15
|    +--- org.apache.commons:commons-collections4:4.4
|    +--- org.apache.commons:commons-math3:3.6.1
|    \--- com.zaxxer:SparseBitSet:1.2
+--- org.apache.poi:poi-ooxml:4.1.2
|    +--- org.apache.poi:poi:4.1.2 (*)
|    +--- org.apache.poi:poi-ooxml-schemas:4.1.2
|    |    \--- org.apache.xmlbeans:xmlbeans:3.1.0
|    +--- org.apache.commons:commons-compress:1.19
|    \--- com.github.virtuald:curvesapi:1.06
+--- com.squareup.retrofit2:retrofit:2.9.0
|    \--- com.squareup.okhttp3:okhttp:3.14.9 -> 4.9.3
|         +--- com.squareup.okio:okio:2.8.0
|         |    +--- org.jetbrains.kotlin:kotlin-stdlib:1.4.0 -> 1.6.21
|         |    |    +--- org.jetbrains.kotlin:kotlin-stdlib-common:1.6.21
|         |    |    \--- org.jetbrains:annotations:13.0
|         |    \--- org.jetbrains.kotlin:kotlin-stdlib-common:1.4.0 -> 1.6.21
|         \--- org.jetbrains.kotlin:kotlin-stdlib:1.4.10 -> 1.6.21 (*)
+--- com.squareup.retrofit2:converter-gson:2.6.4
|    +--- com.squareup.retrofit2:retrofit:2.6.4 -> 2.9.0 (*)
|    \--- com.google.code.gson:gson:2.8.5 -> 2.10
+--- com.squareup.okhttp3:logging-interceptor:3.11.0
|    \--- com.squareup.okhttp3:okhttp:3.11.0 -> 4.9.3 (*)
+--- com.squareup.retrofit2:converter-jackson:2.9.0
|    +--- com.squareup.retrofit2:retrofit:2.9.0 (*)
|    \--- com.fasterxml.jackson.core:jackson-databind:2.10.1 -> 2.13.5 (*)
+--- com.google.firebase:firebase-admin:7.3.0
|    +--- com.google.api-client:google-api-client:1.31.4
|    |    +--- com.google.oauth-client:google-oauth-client:1.31.5
|    |    |    +--- com.google.http-client:google-http-client:1.39.2
|    |    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14
|    |    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.16
|    |    |    |    |    +--- commons-logging:commons-logging:1.2
|    |    |    |    |    \--- commons-codec:commons-codec:1.11 -> 1.15
|    |    |    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    +--- com.google.guava:guava:30.1.1-android
|    |    |    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    |    |    +--- com.google.errorprone:error_prone_annotations:2.5.1
|    |    |    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    |    |    +--- io.opencensus:opencensus-api:0.28.0
|    |    |    |    |    \--- io.grpc:grpc-context:1.27.2 -> 1.30.0
|    |    |    |    \--- io.opencensus:opencensus-contrib-http-util:0.28.0
|    |    |    |         +--- io.opencensus:opencensus-api:0.28.0 (*)
|    |    |    |         \--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    |    \--- com.google.guava:guava:30.1-android -> 30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-gson:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    \--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.guava:guava:30.1.1-android (*)
|    |    +--- com.google.http-client:google-http-client-apache-v2:1.39.2
|    |    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    |    \--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpcore:4.4.14 -> 4.4.16
|    |    +--- org.apache.httpcomponents:httpclient:4.5.13 -> 4.5.14 (*)
|    |    \--- com.google.http-client:google-http-client:1.39.2 (*)
|    +--- com.google.api-client:google-api-client-gson:1.31.4
|    |    +--- com.google.api-client:google-api-client:1.31.4 (*)
|    |    +--- com.google.http-client:google-http-client:1.39.2 (*)
|    |    \--- com.google.http-client:google-http-client-gson:1.39.2 (*)
|    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    +--- com.google.api:api-common:1.9.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    \--- com.google.auto.value:auto-value-annotations:1.7.2
|    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0
|    |    +--- com.google.auto.value:auto-value-annotations:1.7 -> 1.7.2
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.http-client:google-http-client:1.34.0 -> 1.39.2 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.34.0 -> 1.35.0
|    |    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    |    \--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.guava:guava:28.2-android -> 30.1.1-android (*)
|    +--- com.google.cloud:google-cloud-storage:1.110.0
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    +--- com.google.api-client:google-api-client:1.30.9 -> 1.31.4 (*)
|    |    +--- com.google.oauth-client:google-oauth-client:1.30.5 -> 1.31.5 (*)
|    |    +--- com.google.apis:google-api-services-storage:v1-rev20200430-1.30.9
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.cloud:google-cloud-core-http:1.93.6
|    |    +--- com.google.http-client:google-http-client-appengine:1.35.0
|    |    +--- com.google.api:gax-httpjson:0.74.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.protobuf:protobuf-java-util:3.12.2
|    |    \--- org.threeten:threetenbp:1.4.4
|    +--- com.google.cloud:google-cloud-firestore:1.35.0
|    |    +--- com.google.cloud:google-cloud-core-grpc:1.93.6
|    |    +--- io.grpc:grpc-core:1.30.0
|    |    +--- com.google.android:annotations:4.1.1.4
|    |    +--- io.perfmark:perfmark-api:0.19.0
|    |    +--- com.google.http-client:google-http-client:1.35.0 -> 1.39.2 (*)
|    |    +--- org.apache.httpcomponents:httpclient:4.5.12 -> 4.5.14 (*)
|    |    +--- commons-logging:commons-logging:1.2
|    |    +--- commons-codec:commons-codec:1.11 -> 1.15
|    |    +--- org.apache.httpcomponents:httpcore:4.4.13 -> 4.4.16
|    |    +--- io.opencensus:opencensus-contrib-http-util:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-admin-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1:1.35.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.api.grpc:proto-google-cloud-firestore-v1beta1:0.88.0
|    |    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    |    +--- com.google.guava:failureaccess:1.0.1
|    |    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    |    \--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- com.google.auto.value:auto-value-annotations:1.7.2
|    |    +--- io.opencensus:opencensus-contrib-grpc-util:0.24.0
|    |    +--- com.google.code.findbugs:jsr305:3.0.2
|    |    +--- com.google.api:api-common:1.9.2 (*)
|    |    +--- javax.annotation:javax.annotation-api:1.3.2
|    |    +--- io.grpc:grpc-protobuf:1.30.0
|    |    +--- io.grpc:grpc-protobuf-lite:1.30.0
|    |    +--- org.codehaus.mojo:animal-sniffer-annotations:1.18
|    |    +--- io.grpc:grpc-context:1.30.0
|    |    +--- com.google.protobuf:protobuf-java:3.12.2
|    |    +--- com.google.api.grpc:proto-google-common-protos:1.18.0
|    |    +--- com.google.api:gax:1.57.0
|    |    +--- com.google.auth:google-auth-library-oauth2-http:0.20.0 (*)
|    |    +--- io.grpc:grpc-api:1.30.0
|    |    +--- com.google.api:gax-grpc:1.57.0
|    |    +--- io.grpc:grpc-auth:1.30.0
|    |    +--- io.grpc:grpc-netty-shaded:1.30.0
|    |    +--- io.grpc:grpc-alts:1.30.0
|    |    +--- io.grpc:grpc-grpclb:1.30.0
|    |    +--- org.apache.commons:commons-lang3:3.5 -> 3.12.0
|    |    +--- org.conscrypt:conscrypt-openjdk-uber:2.2.1
|    |    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    |    +--- com.google.guava:failureaccess:1.0.1
|    |    +--- com.google.guava:listenablefuture:9999.0-empty-to-avoid-conflict-with-guava
|    |    +--- org.checkerframework:checker-compat-qual:2.5.5
|    |    +--- com.google.errorprone:error_prone_annotations:2.3.4 -> 2.5.1
|    |    +--- com.google.j2objc:j2objc-annotations:1.3
|    |    +--- org.threeten:threetenbp:1.4.4
|    |    +--- io.grpc:grpc-stub:1.30.0
|    |    +--- io.opencensus:opencensus-api:0.24.0 -> 0.28.0 (*)
|    |    +--- com.google.auth:google-auth-library-credentials:0.20.0
|    |    +--- com.google.cloud:google-cloud-core:1.93.6
|    |    +--- com.google.api.grpc:proto-google-iam-v1:0.13.0
|    |    +--- com.google.http-client:google-http-client-jackson2:1.35.0 (*)
|    |    +--- com.google.code.gson:gson:2.8.6 -> 2.10
|    |    +--- com.fasterxml.jackson.core:jackson-core:2.11.0 -> 2.13.5 (*)
|    |    \--- com.google.protobuf:protobuf-java-util:3.12.2
|    +--- com.google.guava:guava:29.0-android -> 30.1.1-android (*)
|    +--- org.slf4j:slf4j-api:1.7.30 -> 1.7.36
|    +--- io.netty:netty-codec-http:4.1.63.Final -> 4.1.101.Final (*)
|    +--- io.netty:netty-handler:4.1.63.Final -> 4.1.101.Final (*)
|    \--- io.netty:netty-transport:4.1.63.Final -> 4.1.101.Final (*)
+--- org.springframework.boot:spring-boot-starter-data-r2dbc -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.data:spring-data-r2dbc:1.5.18
|    |    +--- org.springframework.data:spring-data-commons:2.7.18
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework.data:spring-data-relational:2.4.18
|    |    |    +--- org.springframework.data:spring-data-commons:2.7.18 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31
|    |    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    |    \--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    |    +--- org.springframework:spring-r2dbc:5.3.31
|    |    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    |    +--- io.r2dbc:r2dbc-spi:0.8.6.RELEASE -> 0.9.1.RELEASE
|    |    |    |    \--- org.reactivestreams:reactive-streams:1.0.3 -> 1.0.4
|    |    |    \--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    +--- org.springframework:spring-tx:5.3.31 (*)
|    |    +--- org.springframework:spring-context:5.3.31 (*)
|    |    +--- org.springframework:spring-beans:5.3.31 (*)
|    |    +--- org.springframework:spring-core:5.3.31 (*)
|    |    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    |    +--- io.projectreactor:reactor-core:3.4.34 -> 3.4.0 (*)
|    |    \--- org.slf4j:slf4j-api:1.7.32 -> 1.7.36
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    \--- io.r2dbc:r2dbc-pool:0.9.2.RELEASE
|         +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|         +--- io.projectreactor:reactor-core:3.4.22 -> 3.4.0 (*)
|         \--- io.projectreactor.addons:reactor-pool:0.2.9 -> 0.2.12
|              \--- io.projectreactor:reactor-core:3.4.33 -> 3.4.0 (*)
+--- org.mariadb:r2dbc-mariadb-0.9.1-spec:1.2.2
|    +--- io.r2dbc:r2dbc-spi:0.9.1.RELEASE (*)
|    +--- io.projectreactor:reactor-core:3.6.9 -> 3.4.0 (*)
|    \--- io.projectreactor.netty:reactor-netty-core:1.1.22 -> 1.0.39 (*)
+--- org.springframework.boot:spring-boot-starter-test -> 2.7.18
|    +--- org.springframework.boot:spring-boot-starter:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-test:2.7.18
|    |    \--- org.springframework.boot:spring-boot:2.7.18 (*)
|    +--- org.springframework.boot:spring-boot-test-autoconfigure:2.7.18
|    |    +--- org.springframework.boot:spring-boot:2.7.18 (*)
|    |    +--- org.springframework.boot:spring-boot-test:2.7.18 (*)
|    |    \--- org.springframework.boot:spring-boot-autoconfigure:2.7.18 (*)
|    +--- com.jayway.jsonpath:json-path:2.7.0
|    |    +--- net.minidev:json-smart:2.4.7 -> 2.4.11
|    |    |    \--- net.minidev:accessors-smart:2.4.11
|    |    |         \--- org.ow2.asm:asm:9.3
|    |    \--- org.slf4j:slf4j-api:1.7.33 -> 1.7.36
|    +--- jakarta.xml.bind:jakarta.xml.bind-api:2.3.3
|    |    \--- jakarta.activation:jakarta.activation-api:1.2.2
|    +--- org.assertj:assertj-core:3.22.0
|    +--- org.hamcrest:hamcrest:2.2
|    +--- org.junit.jupiter:junit-jupiter:5.8.2
|    |    +--- org.junit:junit-bom:5.8.2
|    |    |    +--- org.junit.jupiter:junit-jupiter:5.8.2 (c)
|    |    |    +--- org.junit.jupiter:junit-jupiter-api:5.8.2 (c)
|    |    |    +--- org.junit.jupiter:junit-jupiter-engine:5.8.2 (c)
|    |    |    +--- org.junit.jupiter:junit-jupiter-params:5.8.2 (c)
|    |    |    +--- org.junit.platform:junit-platform-commons:1.8.2 (c)
|    |    |    \--- org.junit.platform:junit-platform-engine:1.8.2 (c)
|    |    +--- org.junit.jupiter:junit-jupiter-api:5.8.2
|    |    |    +--- org.junit:junit-bom:5.8.2 (*)
|    |    |    +--- org.opentest4j:opentest4j:1.2.0
|    |    |    \--- org.junit.platform:junit-platform-commons:1.8.2
|    |    |         \--- org.junit:junit-bom:5.8.2 (*)
|    |    +--- org.junit.jupiter:junit-jupiter-params:5.8.2
|    |    |    +--- org.junit:junit-bom:5.8.2 (*)
|    |    |    \--- org.junit.jupiter:junit-jupiter-api:5.8.2 (*)
|    |    \--- org.junit.jupiter:junit-jupiter-engine:5.8.2
|    |         +--- org.junit:junit-bom:5.8.2 (*)
|    |         +--- org.junit.platform:junit-platform-engine:1.8.2
|    |         |    +--- org.junit:junit-bom:5.8.2 (*)
|    |         |    +--- org.opentest4j:opentest4j:1.2.0
|    |         |    \--- org.junit.platform:junit-platform-commons:1.8.2 (*)
|    |         \--- org.junit.jupiter:junit-jupiter-api:5.8.2 (*)
|    +--- org.mockito:mockito-core:4.5.1
|    |    +--- net.bytebuddy:byte-buddy:1.12.9 -> 1.12.23
|    |    +--- net.bytebuddy:byte-buddy-agent:1.12.9 -> 1.12.23
|    |    \--- org.objenesis:objenesis:3.2
|    +--- org.mockito:mockito-junit-jupiter:4.5.1
|    |    +--- org.mockito:mockito-core:4.5.1 (*)
|    |    \--- org.junit.jupiter:junit-jupiter-api:5.8.2 (*)
|    +--- org.skyscreamer:jsonassert:1.5.1
|    |    \--- com.vaadin.external.google:android-json:0.0.20131108.vaadin1
|    +--- org.springframework:spring-core:5.3.31 (*)
|    +--- org.springframework:spring-test:5.3.31
|    |    \--- org.springframework:spring-core:5.3.31 (*)
|    \--- org.xmlunit:xmlunit-core:2.9.1
\--- org.springframework.security:spring-security-test -> 5.7.11
     +--- org.springframework.security:spring-security-core:5.7.11 (*)
     +--- org.springframework.security:spring-security-web:5.7.11 (*)
     +--- org.springframework:spring-core:5.3.29 -> 5.3.31 (*)
     \--- org.springframework:spring-test:5.3.29 -> 5.3.31 (*)

testRuntimeOnly - Runtime only dependencies for source set 'test'. (n)
No dependencies

(c) - dependency constraint
(*) - dependencies omitted (listed previously)

(n) - Not resolved (configuration is not meant to be resolved)

A web-based, searchable dependency report is available by adding the --scan option.

BUILD SUCCESSFUL in 12s
1 actionable task: 1 executed
PS C:\Users\user02gogof\Desktop\new_GoPlanV1> 
