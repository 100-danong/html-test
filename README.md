public Flux<DeliveryInsureHistorykbResponseDto> historyKb(DeliveryInsureHistoryReq deliveryInsureHistoryReq){
        //보험사에서 고고에프앤디로 조회 요청

        //72시간 구함
        LocalDateTime startDatetime = LocalDateTime.now().minusHours(72L);
        LocalDateTime endDatetime = LocalDateTime.now();

        //운영사 요청 ID(ri_driver_id)로 라이더 정보 조회
        Mono<RiderInfo> rider = callMapper.findByDriverId(deliveryInsureHistoryReq.getDriver_id());

        Long ri_id = rider.getRi_id();
        String ri_name = rider.getRi_name();
        String ri_driver_id = rider.getRi_driver_id();

        System.out.println("14번 api 호출 ======================================================");
        System.out.println("ri_id :"+ri_id);
        System.out.println("ri_name :"+ri_name);
        System.out.println("ri_driver_id :"+ri_driver_id);

        //유닉스 타임으로 변환 해야함
        Flux<DeliveryInsureHistoryDto> callList = callMapper.findAllByCallAppointTimeBetweenAndRiderId(ri_id, startDatetime, endDatetime);
        List<DeliveryInsureHistorykbResponseDto> deliveryInsureHistorykbResponseDtoList = new ArrayList<>();

        callList.forEach(call ->{
            DeliveryInsureHistorykbResponseDto dto = new DeliveryInsureHistorykbResponseDto(call);
            System.out.println("dto = " + dto);
            deliveryInsureHistorykbResponseDtoList.add(dto);
        });

        return deliveryInsureHistorykbResponseDtoList;
    }
