plugins {
    id 'org.springframework.boot' version '2.3.9.RELEASE'
    id 'io.spring.dependency-management' version '1.0.11.RELEASE'
    id 'java'
    // querydsl 플러그인은 최신 방식 권장
}

group = 'com.gogofnd'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '11'

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity5'
    compileOnly 'org.projectlombok:lombok:1.18.24'
    runtimeOnly 'org.mariadb.jdbc:mariadb-java-client'
    annotationProcessor 'org.projectlombok:lombok:1.18.24'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'

    implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:2.3.0'

    implementation 'org.springframework.boot:spring-boot-starter-security'
    testImplementation 'org.springframework.security:spring-security-test'

    implementation "io.springfox:springfox-boot-starter:3.0.0"
    implementation "io.springfox:springfox-swagger-ui:3.0.0"
    implementation 'io.jsonwebtoken:jjwt:0.9.1'
    implementation 'com.google.code.gson:gson:2.10'
    implementation 'org.apache.commons:commons-text:1.10.0'
    implementation 'commons-io:commons-io:2.8.0'

    // QueryDSL annotationProcessor 방식 권장
    implementation "com.querydsl:querydsl-jpa:5.0.0"
    annotationProcessor "com.querydsl:querydsl-apt:5.0.0:jpa"

    implementation 'org.springframework.boot:spring-boot-starter-webflux'
    implementation 'org.apache.poi:poi:4.1.2'
    implementation 'org.apache.poi:poi-ooxml:4.1.2'
    implementation 'com.squareup.retrofit2:retrofit:2.9.0'
    implementation 'com.squareup.retrofit2:converter-gson:2.6.4'
    implementation 'com.squareup.okhttp3:logging-interceptor:3.11.0'
    implementation 'com.squareup.retrofit2:converter-jackson:2.9.0'
    implementation 'com.google.firebase:firebase-admin:7.3.0'
}

tasks.named('test') {
    useJUnitPlatform()
}
tasks.withType(JavaCompile) {
    options.encoding = 'UTF-8'
}
