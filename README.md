PS C:\Users\user02gogof\Desktop\kb_goplanv2> .\gradlew build --offline
Downloading https://services.gradle.org/distributions/gradle-7.4.1-bin.zip

Exception in thread "main" java.io.IOException: Downloading from https://services.gradle.org/distributions/gradle-7.4.1-bin.zip failed: timeout
        at org.gradle.wrapper.Download.downloadInternal(Download.java:122)
        at org.gradle.wrapper.Download.download(Download.java:80)
        at org.gradle.wrapper.Install$1.call(Install.java:82)
        at org.gradle.wrapper.Install$1.call(Install.java:62)
        at org.gradle.wrapper.ExclusiveFileAccessManager.access(ExclusiveFileAccessManager.java:69)
        at org.gradle.wrapper.Install.createDist(Install.java:62)
        at org.gradle.wrapper.WrapperExecutor.execute(WrapperExecutor.java:107)
        at org.gradle.wrapper.GradleWrapperMain.main(GradleWrapperMain.java:63)
Caused by: java.net.SocketTimeoutException: connect timed out
        at java.base/java.net.PlainSocketImpl.waitForConnect(Native Method)
        at java.base/java.net.PlainSocketImpl.socketConnect(PlainSocketImpl.java:107)
        at java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:412)
        at java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:255)
        at java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:237)
        at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
        at java.base/java.net.Socket.connect(Socket.java:609)
        at java.base/sun.security.ssl.SSLSocketImpl.connect(SSLSocketImpl.java:305)
        at java.base/sun.net.NetworkClient.doConnect(NetworkClient.java:177)
        at java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:474)
        at java.base/sun.net.www.http.HttpClient.openServer(HttpClient.java:569)
        at java.base/sun.net.www.protocol.https.HttpsClient.<init>(HttpsClient.java:266)
        at java.base/sun.net.www.protocol.https.HttpsClient.New(HttpsClient.java:373)
        at java.base/sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.getNewHttpClient(AbstractDelegateHttpsURLConnection.java:203)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect0(HttpURLConnection.java:1187)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:1081)
        at java.base/sun.net.www.protocol.https.AbstractDelegateHttpsURLConnection.connect(AbstractDelegateHttpsURLConnection.java:189)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.getInputStream0(HttpURLConnection.java:1592)
        at java.base/sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1520)
        at java.base/sun.net.www.protocol.https.HttpsURLConnectionImpl.getInputStream(HttpsURLConnectionImpl.java:250)
        at org.gradle.wrapper.Download.downloadInternal(Download.java:100)
        ... 7 more
PS C:\Users\user02gogof\Desktop\kb_goplanv2> 
