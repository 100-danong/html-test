package com.gogofnd.gogorent.business.service;

import com.gogofnd.gogorent.global.config.SlackProperties;
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
    public void sendError(String server, String appName, String env, Exception ex) {
        Map<String, String> roleLabels = Map.of(
                "oncall",       "담당자",
                "executives",   "대표",
                "stakeholders", "관계자"
        );

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

        String errorMessage = ex.getMessage();
        StringWriter sw = new StringWriter();
        ex.printStackTrace(new PrintWriter(sw));
        String trace = sw.toString();

        List<String> errorFields = List.of(
                String.format("{\"title\":\"환경\",\"value\":\"%s\",\"short\":true}", escape(env)),
                String.format("{\"title\":\"서버\",\"value\":\"%s\",\"short\":true}", escape(server)),
                String.format("{\"title\":\"서비스\",\"value\":\"%s\",\"short\":true}", escape(appName)),
                String.format("{\"title\":\"오류 메시지\",\"value\":\"%s\",\"short\":false}", escape(errorMessage))
        );

        String allFields = Stream.concat(
                        mentionFields.stream(),
                        errorFields.stream()
                )
                .collect(Collectors.joining(","));

        String payload = "{" +
                "\"attachments\":[{" +
                "\"color\":\"#ff0000\"," +
                "\"fields\":[" + allFields + "]," +
                "\"footer\":\"Stacktrace 아래에 있습니다\"," +
                "\"footer_icon\":\"https://platform.slack-edge.com/img/default_application_icon.png\"," +
                "\"text\":\"```" + escape(trace) + "```\"" +
                "}]}";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        rest.postForEntity(props.getWebhookUrl(), new HttpEntity<>(payload, headers), String.class);
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
