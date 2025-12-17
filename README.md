//@Scheduled(cron = "0 10 06 * * *")
public Flux<DeliveryInsureHistoryReq> getTotalDelivery() {

    LocalDateTime startTime = LocalDateTime.of(LocalDate.now(), LocalTime.of(6,0,0)).minusDays(2);
    LocalDateTime endTime   = LocalDateTime.of(LocalDate.now(), LocalTime.of(6,0,0)).minusDays(1);

    // 운행이력 구함(요청시간 기반)
    Flux<GroupCallInfo> calls =
            groupCallMapper.findAllByCallPickUpTimeBetween(startTime, endTime);

    return calls
            .flatMap(call -> {
                DeliveryInsureHistoryReq dto = new DeliveryInsureHistoryReq(call);

                return groupCallMapper
                        .sumGroupCallTotalTime(call.getRiDriverId(), startTime, endTime)
                        .map(totalTime -> {
                            dto.TotalTimeSetting(totalTime.toString());
                            return dto;
                        });
            })
            .collectList()
            .flatMapMany(deliveryInsureHistoryReqList -> {

                CountDto countDto;

                //레트로핏 만들어서 kb에 전달 - V2 10/01 레트로핏은 따로 테스트 필요
                KBRetrofitConfig<DeliveryInsureHistoryReq> KBRetrofitConfig =
                        new KBRetrofitConfig<>();

                try {
                    countDto = KBRetrofitConfig
                            .create(KbSendApi.class)
                            .kbApi12Retrofit(deliveryInsureHistoryReqList)
                            .execute()
                            .body();
                } catch (IOException e) {
                    throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
                }

                deliveryInsureHistoryReqList
                        .forEach(d -> System.out.println("운행이력 : " + d.getCall_id()));

                log.info("운행이력 전송 완료");

                return Flux.fromIterable(deliveryInsureHistoryReqList);
            });
}
