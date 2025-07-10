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









                package com.gogofnd.gogorent.global.filter;


import com.gogofnd.gogorent.business.service.SlackService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Component
@RequiredArgsConstructor
public class SlackStatusFilter extends OncePerRequestFilter {
    private final SlackService slackService;
    private final Environment env;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {
        // 요청을 처리
        filterChain.doFilter(request, response);

        // 응답 상태 코드 추출
        int status = response.getStatus();
        // 성공(200) 응답은 알림 제외
        if (status != 500) {
            return;
        }

        String server  = request.getServerName();
        String appName = env.getProperty("spring.application.name", "unknown-app");
        String profile = env.getProperty("spring.profiles.active", "default");

        // SlackService 호출
        slackService.sendError(server, appName, profile, status);
    }
}



        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        rest.postForEntity(props.getWebhookUrl(), new HttpEntity<>(payload, headers), String.class);
    }
