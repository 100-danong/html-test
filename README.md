    @PostMapping("/api/9")
    @ApiOperation(value = "api9 운행가능여부조회", notes = "운행을 시작하기전 보험적용 여부확인을 위해 라이더의 정보를 kb측에 전송합니다")
    public Mono<ResultDto> api9(@RequestBody api9Req api9Req) throws IOException {
        return new ResultDto(kbService.kbApi9th(api9Req.getDriver_id()));
    }

    @Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResultDto {
    String result;

    public void ResultDTO(Mono<String> result) {
        this.result = String.valueOf(result);
    }
}
