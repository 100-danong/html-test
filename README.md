@PostMapping("/insure/underwriting/result")
@ApiOperation(value = "api3 언더라이팅 결과 수신", notes = "...")
public Mono<ResponseEntity<CountDto>> api3(@RequestBody List<KbApiUnderWritingResult> dto){
    return insuranceService.underWritingResult(dto)  // Mono<CountDto>
        .map(countDto -> ResponseEntity.ok(countDto));  // Mono<ResponseEntity<CountDto>>
}
