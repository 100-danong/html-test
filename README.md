        if(callCheck.equals("G")) {
            //gci_groupid로 groupcall_info 조회
            search = accidentRepository.findByGroupCallIdForAccident(dto.getCall_id()).orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
        }else {
            //insu_call_id로 call_info 조회
            search = accidentRepository.findByInsuCallIdForAccident(dto.getCall_id()).orElseThrow(() -> new BusinessException(ErrorCode.ENTITY_NOT_FOUND));
        }

        //사고 접수 값 db에 저장
        AccidentHistory history = accidentRepository.findAccident(dto.getClaim_number()).orElse(AccidentHistory.create(dto, search.getCallId()));
