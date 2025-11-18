RiderInfo rider = riderInfoRepository.findByPhone(phone).defaultIfEmpty(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
