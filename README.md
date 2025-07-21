server:
  port: 8888
  servlet:
    context-path: /api/goplanV1/
    encoding:
      charset: UTF-8
      enabled: true
      force: true

spring:
  jwt:
    secret: gogofndgogosafe#!
#  datasource:
#    url: jdbc:mariadb://ga.navers.co.kr/goplanV2?serverTimezone=Asia/Seoul&allowMultiQueries=true
#    username: goplanV2
#    password: goplan0@
#    datasource: driver-class-name=org.mariadb.jdbc.Driver
  r2dbc:
    url : r2dbc:mariadb://localhost:3306/goplantest
    username: root
    password: 1234
  spring-doc:
    api-docs:
      groups:
        enabled: true
    swagger-ui:
      path: /swagger-ui.html
      displayRequestDuration: true
      groups-order: DESC

#  jpa:
#    show-sql: true
#    open-in-view: true
#    generate-ddl: false
#    hibernate:
#      ddl-auto: none
#      naming:
#        physical-strategy: org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
#    properties:
#      hibernate:
#        format_sql: true
#        use_sql_comments: true
#        default_batch_fetch_size: 1000

app:
  filePath: /home/develop3/images/
  baseUrl: http://10.0.2.104:57509

firebaseKey: /home/develop3/firebase/kb-flutter-8c87e-firebase-adminsdk-7yzva-e3283f39a5.json

hash: gogofndgoplan#!%

serverUrl: ga.navers.co.kr:8888
v3-serverUrl: http://ga.navers.co.kr:9888/api/goplan

#mybatis:
#  configuration:
#    map-underscore-to-camel-case: true
#  environments:
#    default:
#      transactionManager: jdbc
#      dataSource: dataSource
#  mapper-locations: sqlmapper/**/*.xml

logging:
  level:
    org:
      hibernate:
        type:
          descriptor:
            sql: trace

kakao:
  api:
    key: ec86a7af731bdef703d097a73e9c04fd
