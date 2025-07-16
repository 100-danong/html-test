package com.gogofnd.kb.global.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

import javax.servlet.annotation.WebFilter;

@Component
@Slf4j
public abstract class SwaggerAccessLoggingFilter implements WebFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();

        if(path.startsWith("/swagger-ui") || path.equals("/swagger-ui.html") || path.startsWith("/v3/api-docs")){
            log.info("Swagger UI 접속: {}", path);
        }
        return chain.filter(exchange);
    }
}
