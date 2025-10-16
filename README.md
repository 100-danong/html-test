    @PostMapping("/service/update/insureDate")
    @ApiOperation(value = "일보험 보험적용일자 update", notes = "고고온에서 라이더가 선택한 보험적용일자를 update하는 API")
    public ApiResponse<String> updateInsureDate(@RequestBody UpdateInsureDateReq req) throws Exception {

        return new ApiResponse<>(businessService.updateInsureDate(req));
    }

    @GetMapping("/service/check/status")
    @ApiOperation(value = "보험 등재 여부 확인", notes = "고고온에서 라이더의 등재여부를 확인하기 위한 API")
    public ApiResponse<String> getCheckInsureStatus(@RequestParam("loginId") String loginId) throws Exception {

        return new ApiResponse<>(businessService.findRiderInsureStatus(loginId));
    }
