    public String api4Return(String phone){
        log.info("계약체결동의 요청 Phone " + phone);

        RiderInfo rider;
        rider = businessRiderInfoRepository.findByPhoneRenew(phone).block();

        if(ObjectUtils.isEmpty(rider)) {
            // 일반
            rider = businessRiderInfoRepository.findByPhone(phone).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));

            HistoriesSaveDto update = historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state()).block();

            log.info("계약체결동의 완료 " + rider.getRi_id());

            update.setIhInsuState("051");
            update.setRiId(rider.getRi_id());
            update.updateTime();

            insuranceHistoryRepository.update(update);
            historyMapper.saveStateHistory(update);
            businessRiderInfoRepository.updateRiInsuState(update);
        } else {
            // 갱신 중
            HistoriesSaveDto update = historyMapper.findForUpdateById(rider.getRi_id(), rider.getRi_state()).block();

            log.info("계약체결동의 완료 " + rider.getRi_id());

            update.setIhInsuState("051");
            update.setRiId(rider.getRi_id());
            update.updateTime();

            historyMapper.updateRenew(update);
            historyMapper.saveStateHistoryRenew(update);
            businessRiderInfoRepository.updateRiInsuStateRenew(update);
        }

        return "Y";
    }
