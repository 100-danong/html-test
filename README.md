    public List<DeliveryInsureAccidentResponseDto> findAccidents(AccidentCreate dto){

        log.info("dto -> " + dto);
        String callCheck = dto.getCall_id().substring(0,1);

        AccidentSearch search = null;
        String saveCallId = "";

        if(callCheck.equals("G")) {
            //gci_groupid로 groupcall_info 조회
            search = accidentRepository.findByGroupCallIdForAccident(dto.getCall_id()).blockOptional().orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
        }else {
            //insu_call_id로 call_info 조회
            search = accidentRepository.findByInsuCallIdForAccident(dto.getCall_id()).blockOptional().orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
        }

        //사고 접수 값 db에 저장
        AccidentHistory history = accidentRepository.findAccident(dto.getClaim_number()).blockOptional().orElse(AccidentHistory.create(dto, search.getCallId()));

        if(history.getAhState() == 0) {
            accidentRepository.insertAccident(history);
        } else {
            accidentRepository.updateAccident(history);
        }

        LocalDateTime endDate = LocalDateTime.of(LocalDate.now(), LocalTime.of(23,59,59));

        search.setEndTime(endDate);

        List<CallInfoDto> callList = callInfoRepository.findCallsByAppointTimeForAccident(search).collectList().block();
        List<DeliveryInsureAccidentResponseDto> callResList = new ArrayList<>();

        callList.forEach(call -> {
            DeliveryInsureAccidentResponseDto responseDto = new DeliveryInsureAccidentResponseDto(call);
            callResList.add(responseDto);
        });

        log.info("=============================== 사고접수 api호출 ===================================");
        log.info("사고접수 " + callList);

        callResList.forEach(System.out::println);

        return callResList;
    }
