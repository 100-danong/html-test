    public String kbApi9th(String driverId) throws IOException {
        RiderSellerRes rider = riderInfoRepository.findByDriverId(driverId).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));

        KBRetrofitConfig<ResultDto> KBRetrofitConfig = new KBRetrofitConfig<>();
        ResultDto dto = KBRetrofitConfig.create(KbSendApi.class).kbApi9Retrofit(new KbApi9thReq(rider)).execute().body();

        if (dto == null) {
            throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
        }
        if (!dto.getResult().equals("ok")) {
            throw new BusinessException(ErrorCode.DRIVER_ERROR);
        }
        return "ok";
    }
