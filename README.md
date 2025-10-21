public Mono<String> kbApi9th(String driverId) {
    return riderInfoRepository.findByDriverId(driverId)
            .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
            .flatMap(rider -> {
                try {
                    KBRetrofitConfig<ResultDto> KBRetrofitConfig = new KBRetrofitConfig<>();
                    ResultDto dto = KBRetrofitConfig.create(KbSendApi.class)
                            .kbApi9Retrofit(new KbApi9thReq(rider))
                            .execute()
                            .body();

                    if (dto == null) {
                        return Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                    }
                    if (!"ok".equals(dto.getResult())) {
                        return Mono.error(new BusinessException(ErrorCode.DRIVER_ERROR));
                    }
                    return Mono.just("ok");
                } catch (IOException e) {
                    return Mono.error(e);
                }
            });
}
