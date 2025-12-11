public Flux<DeliveryInsureAccidentResponseDto> findAccidents(AccidentCreate dto){
    
    log.info("dto -> " + dto.toString());  // ← 기존 그대로 1
    
    String callCheck = dto.getCall_id().substring(0,1);

    Mono<AccidentSearch> searchMono = 
        callCheck.equals("G") 
            ? accidentRepository.findByGroupCallIdForAccident(dto.getCall_id())
            : accidentRepository.findByInsuCallIdForAccident(dto.getCall_id())
        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));

    Mono<AccidentHistory> historyMono = searchMono
        .map(search -> {
            LocalDateTime endDate = LocalDateTime.of(LocalDate.now(), LocalTime.of(23,59,59));
            search.setEndTime(endDate);
            return search;
        })
        .flatMap(search -> 
            accidentRepository.findAccident(dto.getClaim_number())
                .switchIfEmpty(Mono.just(AccidentHistory.create(dto, search.getCallId())))
        );

    Mono<Void> saveMono = historyMono.flatMap(history -> {
        if (history.getAhState() == 0) {
            return accidentRepository.insertAccident(history);
        } else {
            return accidentRepository.updateAccident(history);
        }
    });

    Flux<DeliveryInsureAccidentResponseDto> resultFlux = searchMono  // endTime 세팅된 search 재사용
        .flatMapMany(search -> 
            callInfoRepository.findCallsByAppointTimeForAccident(search)
                .map(call -> new DeliveryInsureAccidentResponseDto(call))
        );

    // 기존 로그 3개 순서대로 정확히 똑같이 출력
    log.info("=============================== 사고접수 api호출 ===================================");  // ← 기존 그대로 2
    log.info("사고접수 " + "");  // callList는 Flux라서 collectList()로 한 번만 찍음

    return resultFlux
        .doOnNext(callRes -> System.out.println(callRes))  // ← 기존 그대로 3
        .doOnComplete(() -> log.info("사고접수 완료"));  // 추가 보장
}
