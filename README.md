// src/main/java/com/gogosafe/controller/TestSlackController.java
package com.gogofnd.gogorent.business.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test/slack")
public class TestSlackController {

    /**
     * 1) 예외 강제 발생: GlobalExceptionHandler → Slack에 스택트레이스 전송
     */
    @GetMapping("/error")
    public void triggerError() {
        throw new RuntimeException("💥 테스트용 강제 예외 발생!");
    }

    /**
     * 2) 임의 상태 코드 반환: SlackStatusFilter → Slack에 Status 전송
     *    ex) /test/slack/status/500  → HTTP 500 반환
     *        /test/slack/status/202  → HTTP 202 반환
     */
    @GetMapping("/status/{code}")
    public ResponseEntity<Void> triggerStatus(@PathVariable int code) {
        return ResponseEntity.status(code).build();
    }
}
