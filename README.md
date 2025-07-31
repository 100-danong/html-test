    @PostMapping("/service/driving/start")
    @ApiOperation(value = "운행시작", notes = "운행 시작을 알리기 위해 라이더의 정보를 kb측에 전송합니다")
    public DrivingStartRes api10(@Valid @RequestBody Kb10thRequest dto,
                                 @RequestHeader("apiKey") String apiKey) throws Exception {
        return callService.kb10th(dto,apiKey);
    }


String response =
                webClient
                        .post()
                        .uri("/api/goplan/service/driving/end")
                        .bodyValue(bodyMap)
                        .retrieve()
                        .bodyToMono(String.class)
                        .doOnError(e -> {
                            log.error("Error :: ", e);
//                            gcPostCallEnd(dto);
                        })
                        .block();
