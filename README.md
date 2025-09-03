server:
  port: 9888
  servlet:
    context-path: /api/goplan/
    encoding:
      charset: UTF-8
      enabled: true
      force: true

spring:
  jwt:
    secret: gogofndgogosafe#!
  datasource:
    url: jdbc:mariadb://gogora.co.kr/goplanV2?serverTimezone=Asia/Seoul&allowMultiQueries=true
    username: goplanv2
    password: goplanV20@
    datasource: driver-class-name=org.mariadb.jdbc.Driver
    hikari:max-lifetime: 177000 #177초, hikari는 RDS wait_timeout(180초) 보다 2 ~ 3초 정도 짧게 줄 것을 권장
  spring-doc:
    api-docs:
      groups:
        enabled: true
    swagger-ui:
      path: /swagger-ui.html
      displayRequestDuration: true
      groups-order: DESC
  jpa:
    show-sql: false
    open-in-view: true
    generate-ddl: false
    hibernate:
      ddl-auto: none
      naming:
        physical-strategy: org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
    properties:
      hibernate:
        format_sql: true
        use_sql_comments: true
        default_batch_fetch_size: 1000

project:
  properties:
    firebase-create-scoped: "https://www.googleapis.com/auth/firebase.messaging"
    firebase-topic: "diet_record_notification"

app:
  filePath: /home/goplanv2/images
  baseUrl: http://10.0.2.101:57509

firebaseKey: /home/goplanv2/kb/firebase/kb-flutter-8c87e-firebase-adminsdk-7yzva-e3283f39a5.json

hash: gogofndgoplan#!%

serverUrl: gogora.co.kr:9888
v3-serverUrl: http://gb.navers.co.kr:9889/api/goplan

mybatis:
  configuration:
    map-underscore-to-camel-case: true
  environments:
    default:
      transactionManager: jdbc
      dataSource: dataSource
  mapper-locations: sqlmapper/**/*.xml

kakao:
  api:
    key: 1cc498c524619af1b0feeff4279bfdb5
    #key: ec86a7af731bdef703d097a73e9c04fd

