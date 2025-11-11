public Mono<String> api4Return(String phone) {
    log.info("계약체결동의 요청 Phone {}", phone);

    return businessRiderInfoRepository.findByPhoneRenew(phone)
        .flatMap(rider -> {
            // ✅ 갱신 중인 라이더일 때
            log.info("갱신 중 라이더 - 계약체결동의 완료 {}", rider.getRi_id());
            return historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                .flatMap(update -> {
                    update.setIhInsuState("051");
                    update.setRiId(rider.getRi_id());
                    update.updateTime();

                    return historyMapper.updateRenew(update)
                        .then(historyMapper.saveStateHistoryRenew(update))
                        .then(businessRiderInfoRepository.updateRiInsuStateRenew(update))
                        .thenReturn("Y");
                });
        })
        .switchIfEmpty(
            // ✅ 일반 라이더일 때
            businessRiderInfoRepository.findByPhone(phone)
                .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
                .flatMap(rider -> {
                    log.info("일반 라이더 - 계약체결동의 완료 {}", rider.getRi_id());
                    return historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state())
                        .flatMap(update -> {
                            update.setIhInsuState("051");
                            update.setRiId(rider.getRi_id());
                            update.updateTime();

                            return insuranceHistoryRepository.update(update)
                                .then(historyMapper.saveStateHistory(update))
                                .then(businessRiderInfoRepository.updateRiInsuState(update))
                                .thenReturn("Y");
                        });
                })
        );
}
