@Transactional(noRollbackFor = RuntimeException.class)
    // 고고라 라이더 포인트 실시간 차감(부릉)
    public void PostGogoraPoint(float balance, String driverId, String groupId, LocalDateTime startTime, int runningTime, int callCnt) {
        Map<String, Object> bodyMap = new HashMap<>();
        bodyMap.put("balance", balance);
        bodyMap.put("driverId", driverId);
        bodyMap.put("runningTime", runningTime);
        bodyMap.put("startTime", localDateTimeToString(startTime));
        bodyMap.put("groupId", groupId);
        bodyMap.put("callCnt", callCnt);
        

        // webClient 기본 설정
        WebClient webClient =
                WebClient
                        .builder()
                        .baseUrl("https://gogora.co.kr:9500")
                        .build();

        // api 요청
        Map<String, Object> response =
                webClient
                        .post()
                        .uri("/api/goGoRa/web/point")
                        .bodyValue(bodyMap)
                        .retrieve()
                        .bodyToMono(Map.class)
                        .block();

        // 결과 확인
        log.info(response.toString());
    }
