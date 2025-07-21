오후 1:09:00: Executing 'build'...


> Task :compileJava
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
C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\new_GoPlanV1Application.java:25: error: cannot find symbol
	@PersistenceContext
	 ^
  symbol:   class PersistenceContext
  location: class new_GoPlanV1Application
8 errors

> Task :compileJava FAILED
1 actionable task: 1 executed

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':compileJava'.
> Compilation failed; see the compiler error output for details.

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 9s
오후 1:09:10: Execution finished 'build'.
