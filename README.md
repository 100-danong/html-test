//@Scheduled(cron = "0 10 06 * * *")
    public List<DeliveryInsureHistoryReq> getTotalDelivery(){

        LocalDateTime startTime = LocalDateTime.of(LocalDate.now(), LocalTime.of(6,0,0)).minusDays(2);
        LocalDateTime endTime = LocalDateTime.of(LocalDate.now(), LocalTime.of(6,0,0)).minusDays(1);

        // 운행이력 구함(요청시간 기반)
        Flux<GroupCallInfo> calls = groupCallMapper.findAllByCallPickUpTimeBetween(startTime, endTime);

        List<DeliveryInsureHistoryReq> deliveryInsureHistoryReqList = new ArrayList<>();

        calls.forEach(call -> {
            DeliveryInsureHistoryReq dto = new DeliveryInsureHistoryReq(call);

            dto.TotalTimeSetting(groupCallMapper.sumGroupCallTotalTime(call.getRiDriverId(), startTime, endTime).toString());

            deliveryInsureHistoryReqList.add(dto);
        });

        CountDto countDto = new CountDto();

        //레트로핏 만들어서 kb에 전달 - V2 10/01 레트로핏은 따로 테스트 필요
        KBRetrofitConfig<DeliveryInsureHistoryReq> KBRetrofitConfig = new KBRetrofitConfig<>();

        try {
            countDto = KBRetrofitConfig.create(KbSendApi.class).kbApi12Retrofit(deliveryInsureHistoryReqList).execute().body();
        } catch (IOException e) {
            throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
        }

        deliveryInsureHistoryReqList.stream().forEach(d-> System.out.println("운행이력 : " + d.getCall_id()));

        log.info("운행이력 전송 완료");

        return deliveryInsureHistoryReqList;
    }
