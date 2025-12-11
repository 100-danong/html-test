public Flux<DeliveryInsureAccidentResponseDto> findAccidents(AccidentCreate dto) {

    String callCheck = dto.getCall_id().substring(0,1);

    Mono<AccidentSearch> searchMono =
            ("G".equals(callCheck)
                ? accidentRepository.findByGroupCallIdForAccident(dto.getCall_id())
                : accidentRepository.findByInsuCallIdForAccident(dto.getCall_id()))
            .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));

    return searchMono
        .map(search -> {
            // 여기서 setter 마음대로 사용
            LocalDateTime endDate = LocalDateTime.of(LocalDate.now(), LocalTime.of(23, 59, 59));
            search.setEndTime(endDate);
            return search;
        })
        .flatMapMany(search ->
            callInfoRepository.findCallsByAppointTimeForAccident(search)
                .map(call -> new DeliveryInsureAccidentResponseDto(call)) // 여기서도 getter 써도 됨
        );
}
