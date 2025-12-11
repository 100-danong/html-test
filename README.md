    public Flux<DeliveryInsureAccidentResponseDto> findAccidents(AccidentCreate dto){

        log.info("dto -> " + dto.toString());

        String callCheck = dto.getCall_id().substring(0,1);
        LocalDateTime endDate = LocalDateTime.of(LocalDate.now(), LocalTime.of(23,59,59));

        Mono<AccidentSearch> searchMono = callCheck.equals("G") ? accidentRepository.findByGroupCallIdForAccident(dto.getCall_id()) : accidentRepository.findByInsuCallIdForAccident(dto.getCall_id()).switchIfEmpty(Mono.error(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));

        Mono<AccidentHistory> historyMono = searchMono
                .flatMap(search ->
                        accidentRepository.findAccident(dto.getClaim_number())
                                .switchIfEmpty(Mono.just(AccidentHistory.create(dto, search.getCallId())))
                );

        Mono<Void> savedMono = historyMono.flatMap(history -> {
            if (history.getAhState() == 0) {
                log.info("뭐지..?");
                return accidentRepository.insertAccident(history);
            } else {
                log.info("뭐지..?2");
                return accidentRepository.updateAccident(history);
            }
        }).then();

        Flux<CallInfoDto> callList = searchMono
                .flatMapMany(search -> {
                    search.setEndTime(endDate);
                    return callInfoRepository.findCallsByAppointTimeForAccident(search);
                });

        Flux<DeliveryInsureAccidentResponseDto> callResList = callList.map(call -> new DeliveryInsureAccidentResponseDto(call));

        log.info("=============================== 사고접수 api호출 ===================================");
        log.info("사고접수 " + callList);

        return callResList;
    }

2025-12-11 14:07:54.919  INFO 9452 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : dto -> AccidentCreate(proxy_driv_coorp_cmpcd=G02, call_id=GR20250903-32814-0031, claim_number=20250904050826, claim_time=2025090405082, accident_time=2025090405082)
2025-12-11 14:07:54.960  INFO 9452 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : =============================== 사고접수 api호출 ===================================
2025-12-11 14:07:54.963  INFO 9452 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 MonoFlatMapMany
	
