    @PutMapping("/service/update/driverId")
    @ApiOperation(value = "driverId 업데이트", notes = "고고라에서 갱신된 driverId를 goplan rider에 update하는 API")
    public void updatedDriverId(@RequestBody UpdateLoginIdReq updateLoginIdReq) throws Exception {
        businessService.putRiderLoginId(updateLoginIdReq);
    }

     public void putRiderLoginId(UpdateLoginIdReq updateLoginIdReq) throws Exception {
        riderInfoRepository.updateRiderLoginId(updateLoginIdReq);
    }
