2025-12-11 14:50:42.764  INFO 5532 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : dto -> AccidentCreate(proxy_driv_coorp_cmpcd=G02, call_id=GR20250903-32814-0031, claim_number=20250904050826, claim_time=1723456789, accident_time=1723456789)
2025-12-11 14:50:42.830  INFO 5532 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : =============================== 사고접수 api호출 ===================================
2025-12-11 14:50:43.042  INFO 5532 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 com.gogofnd.kb.Accident.dto.CallInfoDto@4e3feb81
2025-12-11 14:50:43.072  INFO 5532 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 사고접수 com.gogofnd.kb.Accident.dto.CallInfoDto@3d0e9764
2025-12-11 14:50:43.125 ERROR 5532 --- [nio-8888-exec-2] o.a.c.c.C.[.[.[.[dispatcherServlet]      : Servlet.service() for servlet [dispatcherServlet] threw exception

로그를 보면 이렇게 나오는데

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
                return accidentRepository.insertAccident(history);
            } else {
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
        callList.doOnNext(logging -> log.info("사고접수 " + logging.toString())).subscribe();

        return savedMono.thenMany(callResList);
    }

    난 저 사고 접수를 한번만 출력하는데 왜 2개가 나오는걸까? 그것도 값이 다르게 해서?
