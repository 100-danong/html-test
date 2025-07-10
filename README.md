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
        try {
            System.out.println("여긴 오니?");
            filterChain.doFilter(request, response);
        } catch (Exception ex){
            System.out.println("여기 안 오는 거지?");
            int status = response.getStatus();
            if (status != 500) {
                System.out.println("아니면 여기로 빠지니?");
                return;
            }

            String server  = request.getServerName();
            String appName = env.getProperty("spring.application.name", "unknown-app");
            String profile = env.getProperty("spring.profiles.active", "default");

            slackService.sendError(server, appName, profile, ex);

            throw ex;
        }
    }
}

