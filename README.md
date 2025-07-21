오후 4:35:19: Executing ':new_GoPlanV1Application.main()'...

> Task :compileJava UP-TO-DATE
> Task :processResources
> Task :classes

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.7.18)

2025-07-21 16:35:26.815  INFO 17004 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 17004 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-07-21 16:35:26.855 DEBUG 17004 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.18, Spring v5.3.31
2025-07-21 16:35:26.860  INFO 17004 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-07-21 16:35:26.894 DEBUG 17004 --- [kground-preinit] org.jboss.logging                        : Logging Provider: org.jboss.logging.Log4j2LoggerProvider
2025-07-21 16:35:26.947 DEBUG 17004 --- [kground-preinit] o.h.v.i.xml.config.ValidationXmlParser   : Trying to load META-INF/validation.xml for XML based Validator configuration.
2025-07-21 16:35:26.951 DEBUG 17004 --- [kground-preinit] o.h.v.i.xml.config.ResourceLoaderHelper  : Trying to load META-INF/validation.xml via TCCL
2025-07-21 16:35:26.954 DEBUG 17004 --- [kground-preinit] o.h.v.i.xml.config.ResourceLoaderHelper  : Trying to load META-INF/validation.xml via Hibernate Validator's class loader
2025-07-21 16:35:26.957 DEBUG 17004 --- [kground-preinit] o.h.v.i.xml.config.ValidationXmlParser   : No META-INF/validation.xml found. Using annotation based configuration only.
2025-07-21 16:35:27.027 DEBUG 17004 --- [kground-preinit] o.h.v.i.e.resolver.TraversableResolvers  : Cannot find javax.persistence.Persistence on classpath. Assuming non JPA 2 environment. All properties will per default be traversable.
2025-07-21 16:35:27.179 DEBUG 17004 --- [kground-preinit] .h.v.m.ResourceBundleMessageInterpolator : Loaded expression factory via original TCCL
2025-07-21 16:35:27.748 DEBUG 17004 --- [kground-preinit] .i.e.ValidatorFactoryConfigurationHelper : HV000252: Using org.hibernate.validator.internal.engine.DefaultPropertyNodeNameProvider as property node name provider.
2025-07-21 16:35:27.769 DEBUG 17004 --- [kground-preinit] .i.e.ValidatorFactoryConfigurationHelper : HV000234: Using org.hibernate.validator.messageinterpolation.ResourceBundleMessageInterpolator as ValidatorFactory-scoped message interpolator.
2025-07-21 16:35:27.778 DEBUG 17004 --- [kground-preinit] .i.e.ValidatorFactoryConfigurationHelper : HV000234: Using org.hibernate.validator.internal.engine.resolver.TraverseAllTraversableResolver as ValidatorFactory-scoped traversable resolver.
2025-07-21 16:35:27.779 DEBUG 17004 --- [kground-preinit] .i.e.ValidatorFactoryConfigurationHelper : HV000234: Using org.hibernate.validator.internal.util.ExecutableParameterNameProvider as ValidatorFactory-scoped parameter name provider.
2025-07-21 16:35:27.779 DEBUG 17004 --- [kground-preinit] .i.e.ValidatorFactoryConfigurationHelper : HV000234: Using org.hibernate.validator.internal.engine.DefaultClockProvider as ValidatorFactory-scoped clock provider.
2025-07-21 16:35:27.780 DEBUG 17004 --- [kground-preinit] .i.e.ValidatorFactoryConfigurationHelper : HV000234: Using org.hibernate.validator.internal.engine.scripting.DefaultScriptEvaluatorFactory as ValidatorFactory-scoped script evaluator factory.
2025-07-21 16:35:30.143  INFO 17004 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data R2DBC repositories in DEFAULT mode.
2025-07-21 16:35:30.535  INFO 17004 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 373 ms. Found 5 R2DBC repository interfaces.
2025-07-21 16:35:31.981 DEBUG 17004 --- [           main] o.a.catalina.core.AprLifecycleListener   : The Apache Tomcat Native library could not be found using names [tcnative-1, libtcnative-1, tcnative-2, libtcnative-2] on the java.library.path [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin;C:\Windows\Sun\Java\bin;C:\Windows\system32;C:\Windows;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\dotnet\;C:\Program Files\Git\cmd;C:\Program Files\PuTTY\;C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin;C:\Program Files\Bandizip\;C:\Users\user02gogof\AppData\Local\Programs\Python\Python312;C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts;C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\;C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps;;C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin;;C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin;C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin;;.]. The errors reported were [Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\tcnative-1.dll, Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\libtcnative-1.dll, Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\tcnative-2.dll, Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\libtcnative-2.dll, no tcnative-1 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .], no libtcnative-1 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .], no tcnative-2 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .], no libtcnative-2 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .]]

org.apache.tomcat.jni.LibraryNotFoundError: Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\tcnative-1.dll, Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\libtcnative-1.dll, Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\tcnative-2.dll, Can't load library: C:\Users\user02gogof\Desktop\new_GoPlanV1\bin\libtcnative-2.dll, no tcnative-1 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .], no libtcnative-1 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .], no tcnative-2 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .], no libtcnative-2 in java.library.path: [C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Windows\Sun\Java\bin, C:\Windows\system32, C:\Windows, C:\Windows\system32, C:\Windows, C:\Windows\System32\Wbem, C:\Windows\System32\WindowsPowerShell\v1.0\, C:\Windows\System32\OpenSSH\, C:\Program Files\dotnet\, C:\Program Files\Git\cmd, C:\Program Files\PuTTY\, C:\Program Files\ojdkbuild\java-11-openjdk-11.0.15-1\bin, C:\Program Files\Bandizip\, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312, C:\Users\user02gogof\AppData\Local\Programs\Python\Python312\Scripts, C:\Users\user02gogof\AppData\Local\Programs\Python\Launcher\, C:\Users\user02gogof\AppData\Local\Microsoft\WindowsApps, ., C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.2.5\bin, ., C:\Users\user02gogof\AppData\Local\Programs\Microsoft VS Code\bin, C:\Program Files\JetBrains\PyCharm Community Edition 2023.3.3\bin, ., .]
	at org.apache.tomcat.jni.Library.<init>(Library.java:94)
	at org.apache.tomcat.jni.Library.initialize(Library.java:235)
	at org.apache.catalina.core.AprLifecycleListener.init(AprLifecycleListener.java:194)
	at org.apache.catalina.core.AprLifecycleListener.isAprAvailable(AprLifecycleListener.java:107)
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getDefaultServerLifecycleListeners(TomcatServletWebServerFactory.java:182)
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.<init>(TomcatServletWebServerFactory.java:129)
	at org.springframework.boot.autoconfigure.web.servlet.ServletWebServerFactoryConfiguration$EmbeddedTomcat.tomcatServletWebServerFactory(ServletWebServerFactoryConfiguration.java:76)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:154)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:648)
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:633)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1352)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1195)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:582)
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542)
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335)
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234)
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333)
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:213)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.getWebServerFactory(ServletWebServerApplicationContext.java:219)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:182)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:585)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:732)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:409)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1300)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1289)
	at com.gogofnd.kb.new_GoPlanV1Application.main(new_GoPlanV1Application.java:20)

2025-07-21 16:35:32.576 DEBUG 17004 --- [           main] o.apache.tomcat.util.compat.Jre16Compat  : Class not found so assuming code is running on a pre-Java 16 JVM

java.lang.ClassNotFoundException: java.net.UnixDomainSocketAddress
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	at java.base/java.lang.Class.forName0(Native Method)
	at java.base/java.lang.Class.forName(Class.java:315)
	at org.apache.tomcat.util.compat.Jre16Compat.<clinit>(Jre16Compat.java:47)
	at org.apache.tomcat.util.compat.JreCompat.<clinit>(JreCompat.java:74)
	at org.apache.catalina.startup.Tomcat.<clinit>(Tomcat.java:1302)
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:194)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:184)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:585)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:732)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:409)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1300)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1289)
	at com.gogofnd.kb.new_GoPlanV1Application.main(new_GoPlanV1Application.java:20)

2025-07-21 16:35:32.619 DEBUG 17004 --- [           main] o.apache.tomcat.util.compat.Jre19Compat  : Class not found so assuming code is running on a pre-Java 19 JVM

java.lang.ClassNotFoundException: java.lang.WrongThreadException
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	at java.base/java.lang.Class.forName0(Native Method)
	at java.base/java.lang.Class.forName(Class.java:315)
	at org.apache.tomcat.util.compat.Jre19Compat.<clinit>(Jre19Compat.java:37)
	at org.apache.tomcat.util.compat.JreCompat.<clinit>(JreCompat.java:74)
	at org.apache.catalina.startup.Tomcat.<clinit>(Tomcat.java:1302)
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:194)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:184)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:585)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:732)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:409)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1300)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1289)
	at com.gogofnd.kb.new_GoPlanV1Application.main(new_GoPlanV1Application.java:20)

2025-07-21 16:35:32.647 DEBUG 17004 --- [           main] o.apache.tomcat.util.compat.Jre21Compat  : Class not found so assuming code is running on a pre-Java 21 JVM

java.lang.ClassNotFoundException: java.lang.Thread$Builder
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	at java.base/java.lang.Class.forName0(Native Method)
	at java.base/java.lang.Class.forName(Class.java:315)
	at org.apache.tomcat.util.compat.Jre21Compat.<clinit>(Jre21Compat.java:43)
	at org.apache.tomcat.util.compat.JreCompat.<clinit>(JreCompat.java:74)
	at org.apache.catalina.startup.Tomcat.<clinit>(Tomcat.java:1302)
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:194)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:184)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:585)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:732)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:409)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1300)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1289)
	at com.gogofnd.kb.new_GoPlanV1Application.main(new_GoPlanV1Application.java:20)

2025-07-21 16:35:32.662 DEBUG 17004 --- [           main] o.apache.tomcat.util.compat.Jre22Compat  : Class not found so assuming code is running on a pre-Java 22 JVM

java.lang.ClassNotFoundException: java.lang.foreign.MemorySegment
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	at java.base/java.lang.Class.forName0(Native Method)
	at java.base/java.lang.Class.forName(Class.java:315)
	at org.apache.tomcat.util.compat.Jre22Compat.<clinit>(Jre22Compat.java:40)
	at org.apache.tomcat.util.compat.JreCompat.<clinit>(JreCompat.java:74)
	at org.apache.catalina.startup.Tomcat.<clinit>(Tomcat.java:1302)
	at org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory.getWebServer(TomcatServletWebServerFactory.java:194)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.createWebServer(ServletWebServerApplicationContext.java:184)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.onRefresh(ServletWebServerApplicationContext.java:162)
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:585)
	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147)
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:732)
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:409)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1300)
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1289)
	at com.gogofnd.kb.new_GoPlanV1Application.main(new_GoPlanV1Application.java:20)

2025-07-21 16:35:33.088 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.coyote.http11.Http11NioProtocol port=8888)
2025-07-21 16:35:33.121 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.coyote.http11.Http11NioProtocol bindOnInit=false)
2025-07-21 16:35:33.122 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.tomcat.util.net.NioEndpoint bindOnInit=false)
2025-07-21 16:35:33.130 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.coyote.http11.Http11NioProtocol maxPostSize=2097152)
2025-07-21 16:35:33.131 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.tomcat.util.net.NioEndpoint maxPostSize=2097152)
2025-07-21 16:35:33.170 DEBUG 17004 --- [           main] org.apache.catalina.core.ContainerBase   : Add child StandardHost[localhost] StandardEngine[Tomcat]
2025-07-21 16:35:33.253 DEBUG 17004 --- [           main] org.apache.catalina.core.ContainerBase   : Add child TomcatEmbeddedContext[/api/goplanV1] StandardEngine[Tomcat].StandardHost[localhost]
2025-07-21 16:35:33.262  INFO 17004 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8888 (http)
2025-07-21 16:35:33.279 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.coyote.http11.Http11NioProtocol parseBodyMethods=POST)
2025-07-21 16:35:33.282 DEBUG 17004 --- [           main] o.apache.tomcat.util.IntrospectionUtils  : IntrospectionUtils: setProperty(class org.apache.tomcat.util.net.NioEndpoint parseBodyMethods=POST)
2025-07-21 16:35:33.289  INFO 17004 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2025-07-21 16:35:33.290  INFO 17004 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.83]
2025-07-21 16:35:33.295 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Starting api#goplanV1
2025-07-21 16:35:33.311 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Configuring default Resources
2025-07-21 16:35:33.444 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Processing standard container startup
2025-07-21 16:35:33.445 DEBUG 17004 --- [           main] org.apache.catalina.loader.WebappLoader  : Starting this Loader
2025-07-21 16:35:33.749 DEBUG 17004 --- [           main] o.a.c.authenticator.AuthenticatorBase    : No SingleSignOn Valve is present
2025-07-21 16:35:33.861 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : No manager found. Checking if cluster manager should be used. Cluster configured: [false], Application distributable: [false]
2025-07-21 16:35:33.879 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Configured a manager of class [org.apache.catalina.session.StandardManager]
2025-07-21 16:35:33.897  INFO 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  : Initializing Spring embedded WebApplicationContext
2025-07-21 16:35:33.899  INFO 17004 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 6774 ms
2025-07-21 16:35:33.905 DEBUG 17004 --- [           main] o.a.c.loader.WebappClassLoaderBase       : getResourceAsStream(META-INF/services/org.apache.commons.logging.LogFactory)
2025-07-21 16:35:33.906 DEBUG 17004 --- [           main] o.a.c.loader.WebappClassLoaderBase       :   Delegating to parent classloader jdk.internal.loader.ClassLoaders$AppClassLoader@28c97a5
2025-07-21 16:35:33.907 DEBUG 17004 --- [           main] o.a.c.loader.WebappClassLoaderBase       :   --> Returning stream from parent
2025-07-21 16:35:34.095 DEBUG 17004 --- [           main] org.apache.catalina.core.ContainerBase   : Add child StandardWrapper[dispatcherServlet] StandardEngine[Tomcat].StandardHost[localhost].TomcatEmbeddedContext[/api/goplanV1]
2025-07-21 16:35:34.150 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Configuring application event listeners
2025-07-21 16:35:34.153 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  : Sending application start events
2025-07-21 16:35:34.160 DEBUG 17004 --- [           main] o.a.catalina.session.StandardManager     : Start: Loading persisted sessions
2025-07-21 16:35:34.161 DEBUG 17004 --- [           main] o.a.catalina.session.StandardManager     : Loading persisted sessions from [SESSIONS.ser]
2025-07-21 16:35:34.163 DEBUG 17004 --- [           main] o.a.catalina.session.StandardManager     : No persisted data file found
2025-07-21 16:35:34.164 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  : Starting filters
2025-07-21 16:35:34.165 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Starting filter 'requestContextFilter'
2025-07-21 16:35:34.173 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Starting filter 'errorPageSecurityFilter'
2025-07-21 16:35:34.176 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Starting filter 'Tomcat WebSocket (JSR356) Filter'
2025-07-21 16:35:34.177 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Starting filter 'characterEncodingFilter'
2025-07-21 16:35:34.179 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Starting filter 'springSecurityFilterChain'
2025-07-21 16:35:34.180 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Starting filter 'formContentFilter'
2025-07-21 16:35:34.181 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Starting completed
2025-07-21 16:35:34.194 DEBUG 17004 --- [           main] org.apache.catalina.mapper.Mapper        : Registered host [localhost]
2025-07-21 16:35:34.196 DEBUG 17004 --- [           main] o.apache.catalina.mapper.MapperListener  : Register Wrapper [dispatcherServlet] in Context [/api/goplanV1] for service [StandardService[Tomcat]]
2025-07-21 16:35:34.197 DEBUG 17004 --- [           main] o.apache.catalina.mapper.MapperListener  : Register Context [/api/goplanV1] for service [StandardService[Tomcat]]
2025-07-21 16:35:34.198 DEBUG 17004 --- [           main] o.apache.catalina.mapper.MapperListener  : Register host [localhost] at domain [null] for service [StandardService[Tomcat]]
2025-07-21 16:35:34.264  WARN 17004 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'dbTestController' defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\controller\DbTestController.class]: Unsatisfied dependency expressed through constructor parameter 0; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'insuranceService' defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\service\InsuranceService.class]: Unsatisfied dependency expressed through constructor parameter 0; nested exception is org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'riderInfoCustomRepositoryImpl' defined in file [C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main\com\gogofnd\kb\repository\RiderInfoCustomRepositoryImpl.class]: Unsatisfied dependency expressed through constructor parameter 0; nested exception is org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type 'org.springframework.data.r2dbc.core.DatabaseClient' available: expected at least 1 bean which qualifies as autowire candidate. Dependency annotations: {}
2025-07-21 16:35:34.273  INFO 17004 --- [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
2025-07-21 16:35:34.279 DEBUG 17004 --- [           main] o.apache.catalina.mapper.MapperListener  : Unregister host [localhost] at domain [null] for service [StandardService[Tomcat]]
2025-07-21 16:35:34.296 DEBUG 17004 --- [           main] o.apache.catalina.mapper.MapperListener  : Unregister Context [/api/goplanV1] for service [StandardService[Tomcat]]
2025-07-21 16:35:34.297 DEBUG 17004 --- [           main] o.apache.catalina.mapper.MapperListener  : Unregister Wrapper [dispatcherServlet] in Context [/api/goplanV1] for service [StandardService[Tomcat]]
2025-07-21 16:35:34.299 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  : Stopping filters
2025-07-21 16:35:34.301 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Stopping filter 'requestContextFilter'
2025-07-21 16:35:34.302 DEBUG 17004 --- [           main] o.a.c.core.ApplicationFilterConfig       : JMX de-registration complete for filter of type [org.springframework.boot.web.servlet.filter.OrderedRequestContextFilter] and name [requestContextFilter]
2025-07-21 16:35:34.303 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Stopping filter 'errorPageSecurityFilter'
2025-07-21 16:35:34.304 DEBUG 17004 --- [           main] o.a.c.core.ApplicationFilterConfig       : JMX de-registration complete for filter of type [org.springframework.boot.web.servlet.filter.ErrorPageSecurityFilter] and name [errorPageSecurityFilter]
2025-07-21 16:35:34.305 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Stopping filter 'Tomcat WebSocket (JSR356) Filter'
2025-07-21 16:35:34.307 DEBUG 17004 --- [           main] o.a.c.core.ApplicationFilterConfig       : JMX de-registration complete for filter of type [org.apache.tomcat.websocket.server.WsFilter] and name [Tomcat WebSocket (JSR356) Filter]
2025-07-21 16:35:34.307 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Stopping filter 'characterEncodingFilter'
2025-07-21 16:35:34.307 DEBUG 17004 --- [           main] o.a.c.core.ApplicationFilterConfig       : JMX de-registration complete for filter of type [org.springframework.boot.web.servlet.filter.OrderedCharacterEncodingFilter] and name [characterEncodingFilter]
2025-07-21 16:35:34.309 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Stopping filter 'springSecurityFilterChain'
2025-07-21 16:35:34.309 DEBUG 17004 --- [           main] o.a.c.core.ApplicationFilterConfig       : JMX de-registration complete for filter of type [org.springframework.boot.web.servlet.DelegatingFilterProxyRegistrationBean$1] and name [springSecurityFilterChain]
2025-07-21 16:35:34.310 DEBUG 17004 --- [           main] o.a.c.c.C.[.[localhost].[/api/goplanV1]  :  Stopping filter 'formContentFilter'
2025-07-21 16:35:34.310 DEBUG 17004 --- [           main] o.a.c.core.ApplicationFilterConfig       : JMX de-registration complete for filter of type [org.springframework.boot.web.servlet.filter.OrderedFormContentFilter] and name [formContentFilter]
2025-07-21 16:35:34.311 DEBUG 17004 --- [           main] o.a.catalina.session.StandardManager     : Stopping
2025-07-21 16:35:34.311 DEBUG 17004 --- [           main] o.a.catalina.session.StandardManager     : Unloading persisted sessions
2025-07-21 16:35:34.312 DEBUG 17004 --- [           main] o.a.catalina.session.StandardManager     : No persisted sessions to unload
2025-07-21 16:35:34.313 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Sending application stop events
2025-07-21 16:35:34.313 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Processing standard container shutdown
2025-07-21 16:35:34.314 DEBUG 17004 --- [           main] org.apache.catalina.loader.WebappLoader  : Stopping this Loader
2025-07-21 16:35:34.314 DEBUG 17004 --- [           main] o.a.c.loader.WebappClassLoaderBase       : getResourceAsStream(org/apache/catalina/loader/JdbcLeakPrevention.class)
2025-07-21 16:35:34.315 DEBUG 17004 --- [           main] o.a.c.loader.WebappClassLoaderBase       :   Delegating to parent classloader jdk.internal.loader.ClassLoaders$AppClassLoader@28c97a5
2025-07-21 16:35:34.316 DEBUG 17004 --- [           main] o.a.c.loader.WebappClassLoaderBase       :   --> Returning stream from parent
2025-07-21 16:35:34.330 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : resetContext Tomcat:j2eeType=WebModule,name=//localhost/api/goplanV1,J2EEApplication=none,J2EEServer=none
2025-07-21 16:35:34.333 DEBUG 17004 --- [           main] o.apache.catalina.core.StandardContext   : Stopping complete
2025-07-21 16:35:34.374  INFO 17004 --- [           main] ConditionEvaluationReportLoggingListener : 

Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
2025-07-21 16:35:34.429 ERROR 17004 --- [           main] o.s.b.d.LoggingFailureAnalysisReporter   : 

***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in com.gogofnd.kb.repository.RiderInfoCustomRepositoryImpl required a bean of type 'org.springframework.data.r2dbc.core.DatabaseClient' that could not be found.


Action:

Consider defining a bean of type 'org.springframework.data.r2dbc.core.DatabaseClient' in your configuration.


> Task :new_GoPlanV1Application.main() FAILED
3 actionable tasks: 2 executed, 1 up-to-date

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':new_GoPlanV1Application.main()'.
> Process 'command 'C:/Program Files/ojdkbuild/java-11-openjdk-11.0.15-1/bin/java.exe'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 14s
오후 4:35:34: Execution finished ':new_GoPlanV1Application.main()'.
