@PostMapping("/insure/underwriting/result")
public Mono<ResponseEntity> api3(@RequestBody List<KbApiUnderWritingResult> dto){
    return insuranceService.underWritingResult(dto)  // Mono<CountDto>
        .map(countDto -> ResponseEntity.ok(countDto));  // Mono<ResponseEntity<CountDto>>
}
