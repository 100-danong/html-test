// 기존 코드
String errorMessage = ex.getMessage();
StringWriter sw = new StringWriter();
ex.printStackTrace(new PrintWriter(sw));
String trace = sw.toString();

List<String> errorFields = List.of(
    String.format("{\"title\":\"환경\",\"value\":\"%s\",\"short\":true}", escape(env)),
    String.format("{\"title\":\"서버\",\"value\":\"%s\",\"short\":true}", escape(server)),
    String.format("{\"title\":\"서비스\",\"value\":\"%s\",\"short\":true}", escape(appName)),
    // 기존: 오류 메시지 한 줄
    // String.format("{\"title\":\"오류 메시지\",\"value\":\"%s\",\"short\":false}", escape(errorMessage))
    // 변경: 스택트레이스 전체를 코드 블록으로
    String.format("{\"title\":\"오류 메시지\",\"value\":\"``````\",\"short\":false}", escape(trace))
);

String allFields = Stream.concat(
        mentionFields.stream(),
        errorFields.stream()
).collect(Collectors.joining(","));

// text에는 간단한 안내만 넣거나 아예 비워도 됨
String payload = "{" +
        "\"attachments\":[{" +
        "\"color\":\"#ff0000\"," +
        "\"fields\":[" + allFields + "]," +
        "\"footer\":\"Stacktrace는 오류 메시지에서 확인하세요\"," +
        "\"footer_icon\":\"https://platform.slack-edge.com/img/default_application_icon.png\"" +
        // text 필드 삭제 또는 간단 안내
        "}]}";
