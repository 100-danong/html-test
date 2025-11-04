    @PostMapping("/service/join/cancel")
    @ApiOperation(value = "가입취소요청", notes = "기명취소 요청한 라이더의 정보가 db에 쌓이게 되는 api입니다.")
    public Mono<ResultFormatRes<String>> api7(@Valid @RequestBody DriverIdReq dto,
                                        @RequestHeader("apiKey") String apiKey) throws Exception {
        return new Mono<ResultFormatRes(riderService.sellerWithDrawRider(dto.getDriver_id(),dto.getSeller_code(),apiKey))>;
    }
