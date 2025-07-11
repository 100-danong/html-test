    @ExceptionHandler(RuntimeException.class)
    protected ResponseEntity<ErrorResponse> handleRuntimeException(HttpServletRequest request, Exception e){
        log.info("test1");
        String server = request.getServerName();
        log.info("test2");
        String profile = env.getProperty("spring.profiles.active", "default");
        log.info("test3");
        slackService.sendError(server, profile, e);

        log.info("test1");
        log.warn("RuntimeException", e);
        final ErrorResponse response = ErrorResponse.of(ErrorCode.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }



package com.gogofnd.kb.global.service;

import com.gogofnd.kb.global.config.SlackProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class SlackService {
    private final SlackProperties props;
    private final RestTemplate rest = new RestTemplateBuilder().build();
    public void sendError(String server, String env, Exception ex) {
        Map<String, String> roleLabels = Map.of(
                "oncall",       "담당자",
                "executives",   "대표",
                "stakeholders", "관계자"
        );
        System.out.println("test1");
        List<String> mentionFields = props.getMentionGroups().entrySet().stream()
                .filter(e -> e.getValue() != null && !e.getValue().isEmpty())
                .map(e -> {
                    String label = roleLabels.getOrDefault(e.getKey(), e.getKey());
                    String mentions = e.getValue().stream()
                            .map(id -> "<@" + id + ">")
                            .collect(Collectors.joining(" "));
                    return String.format(
                            "{\"title\":\"%s\",\"value\":\"%s\",\"short\":false}",
                            label, escape(mentions)
                    );
                })
                .collect(Collectors.toList());

        System.out.println("test2");
        StringWriter sw = new StringWriter();
        ex.printStackTrace(new PrintWriter(sw));
        String trace = sw.toString();

        List<String> errorFields = List.of(
                String.format("{\"title\":\"환경\",\"value\":\"%s\",\"short\":true}", escape(env)),
                String.format("{\"title\":\"서버\",\"value\":\"%s\",\"short\":true}", escape(server)),
                String.format("{\"title\":\"서비스\",\"value\":\"%s\",\"short\":true}", escape("goplan")),
                // 기존: 오류 메시지 한 줄
                // String.format("{\"title\":\"오류 메시지\",\"value\":\"%s\",\"short\":false}", escape(errorMessage))
                // 변경: 스택트레이스 전체를 코드 블록으로
                String.format("{\"title\":\"오류 메시지\",\"value\":\"%s\",\"short\":false}", escape(trace))
        );
        System.out.println("test3");
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
        System.out.println("test4");
        HttpHeaders headers = new HttpHeaders();
        System.out.println("test5");
        headers.setContentType(MediaType.APPLICATION_JSON);
        System.out.println("test6");
        rest.postForEntity(props.getWebhookUrl(), new HttpEntity<>(payload, headers), String.class);
        System.out.println("test7");
    }

    /**
     * JSON 내 특수문자 escape 처리
     */
    private String escape(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\r", "")
                .replace("\n", "\\n");
    }
}


package com.gogofnd.kb.global.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "slack")
@Getter @Setter
public class SlackProperties {
    /**
     * application.yml의 slack.webhook-url 값을 바인딩
     */
    private String webhookUrl;
    private Map<String, List<String>> mentionGroups;
}

