    @PostMapping("/insure/underwriting/result")
    @ApiOperation(value = "api3 언더라이팅 결과 수신", notes = "라이더들의 언더라이팅 결과를 리스트 형태로 kb로부터 수신합니다. " +
            "고고에프앤디 서버는 카운트를 리턴합니다.")
    public Mono<ResponseEntity> api3(@RequestBody List<KbApiUnderWritingResult> dto){
        return Mono.just(new ResponseEntity(insuranceService.underWritingResult(dto), HttpStatus.OK));
    }
