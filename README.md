    @PostMapping("/insure/signup/cancel")
    @ApiOperation(value = "api8 기명취소요청 결과 수신", notes = "라이더들의 기명취소 요청 심사결과를 리스트 형태로 kb로부터 수신합니다. " +
            "고고에프앤디 서버는 카운트를 리턴합니다.")
    public Mono<ResponseEntity> api8(@RequestBody List<KbApi8thReq> dtoList){
        return new ResponseEntity(insuranceService.kbApi8th(dtoList), HttpStatus.OK);
    }
