public Flux<DeliveryInsureAccidentResponseDto> findAccidents(AccidentCreate dto) {

    String callCheck = dto.getCall_id().substring(0, 1);

    Mono<AccidentSearch> searchMono;
    if (callCheck.equals("G")) {
        searchMono = accidentRepository.findByGroupCallIdForAccident(dto.getCall_id())
                        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));
    } else {
        searchMono = accidentRepository.findByInsuCallIdForAccident(dto.getCall_id())
                        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));
    }

    return searchMono
            .flatMap(search -> 
                accidentRepository.findAccident(dto.getClaim_number())
                        .defaultIfEmpty(AccidentHistory.create(dto, search.getCallId()))
                        .flatMap(history -> {
                            Mono<AccidentHistory> saveMono;
                            if (history.getAhState() == 0) {
                                saveMono = accidentRepository.insertAccident(history);
                            } else {
                                saveMono = accidentRepository.updateAccident(history);
                            }
                            return saveMono.thenReturn(search); // 다음 단계로 search 넘김
                        })
            )
            .flatMapMany(search -> {
                search.setEndTime(LocalDateTime.of(LocalDate.now(), LocalTime.of(23, 59, 59)));
                return callInfoRepository.findCallsByAppointTimeForAccident(search);
            })
            .map(DeliveryInsureAccidentResponseDto::new);
}
