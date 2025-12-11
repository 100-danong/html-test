search = accidentRepository.findByGroupCallIdForAccident(dto.getCall_id()).switchIfEmpty(Mono.just(new BusinessException(ErrorCode.ENTITY_NOT_FOUND)));
