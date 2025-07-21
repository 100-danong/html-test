오후 1:05:34: Executing 'build'...

Download https://repo.maven.apache.org/maven2/io/github/classgraph/classgraph/4.8.83/classgraph-4.8.83.pom, took 1 s 670 ms (28.03 kB)
Download https://repo.maven.apache.org/maven2/io/github/classgraph/classgraph/4.8.83/classgraph-4.8.83.jar, took 234 ms (504.68 kB)

> Task :compileJava
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\CommonCodeInfo.java:6: error: package javax.persistence does not exist
import javax.persistence.Column;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\CommonCodeInfo.java:7: error: package javax.persistence does not exist
import javax.persistence.Table;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\CommonCodeInfo.java:10: error: cannot find symbol
@Table(name = "common_code_info")
 ^
  symbol: class Table
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceHistory.java:6: error: package javax.persistence does not exist
import javax.persistence.Id;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceHistory.java:7: error: package javax.persistence does not exist
import javax.persistence.Table;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceHistory.java:10: error: cannot find symbol
@Table(name="insurance_history")
 ^
  symbol: class Table
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceStateHistory.java:6: error: package javax.persistence does not exist
import javax.persistence.Id;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceStateHistory.java:7: error: package javax.persistence does not exist
import javax.persistence.Table;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceStateHistory.java:10: error: cannot find symbol
@Table(name="insurance_state_history")
 ^
  symbol: class Table
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\RiderInfo.java:6: error: package javax.persistence does not exist
import javax.persistence.Id;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\RiderInfo.java:7: error: package javax.persistence does not exist
import javax.persistence.Table;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\RiderInfo.java:10: error: cannot find symbol
@Table(name="rider_info")
 ^
  symbol: class Table
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\SellerInfo.java:6: error: package javax.persistence does not exist
import javax.persistence.Id;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\SellerInfo.java:7: error: package javax.persistence does not exist
import javax.persistence.Table;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\SellerInfo.java:10: error: cannot find symbol
@Table(name="seller_info")
 ^
  symbol: class Table
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:3: error: package com.querydsl.jpa.impl does not exist
import com.querydsl.jpa.impl.JPAQueryFactory;
                            ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:7: error: package org.springframework.data.jpa.repository.config does not exist
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
                                                     ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:13: error: package javax.persistence does not exist
import javax.persistence.EntityManager;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:14: error: package javax.persistence does not exist
import javax.persistence.PersistenceContext;
                        ^
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:18: error: cannot find symbol
@EnableJpaAuditing
 ^
  symbol: class EnableJpaAuditing
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:26: error: cannot find symbol
	private EntityManager entityManager;
	        ^
  symbol:   class EntityManager
  location: class new_GoPlanV1Application
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:29: error: cannot find symbol
	public JPAQueryFactory jpaQueryFactory() {
	       ^
  symbol:   class JPAQueryFactory
  location: class new_GoPlanV1Application
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\CommonCodeInfo.java:15: error: cannot find symbol
    @Column(name = "cci_code")
     ^
  symbol:   class Column
  location: class CommonCodeInfo
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\CommonCodeInfo.java:18: error: cannot find symbol
    @Column(name = "cci_parent_code")
     ^
  symbol:   class Column
  location: class CommonCodeInfo
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceHistory.java:15: error: cannot find symbol
    @Id
     ^
  symbol:   class Id
  location: class InsuranceHistory
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\InsuranceStateHistory.java:15: error: cannot find symbol
    @Id
     ^
  symbol:   class Id
  location: class InsuranceStateHistory
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\RiderInfo.java:15: error: cannot find symbol
    @Id
     ^
  symbol:   class Id
  location: class RiderInfo
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\entity\SellerInfo.java:15: error: cannot find symbol
    @Id
     ^
  symbol:   class Id
  location: class SellerInfo
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:25: error: cannot find symbol
	@PersistenceContext
	 ^
  symbol:   class PersistenceContext
  location: class new_GoPlanV1Application
29 errors

> Task :compileJava FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':compileJava'.
> Compilation failed; see the compiler error output for details.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 24s
1 actionable task: 1 executed
오후 1:05:59: Execution finished 'build'.
