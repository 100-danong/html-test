        //종료 시간 없는 콜 종료
        List<CallInfo> callInfo2 = tgMapper.findRunDeliveryByDriverId(riId);
        if (!callInfo2.isEmpty()){
            TgDTO3 tgDTO3 = new TgDTO3();
            tgDTO3.setEndTime(LocalDateTime.now());
            tgDTO3.setInsuCallId(callInfo2.getCiInsuCallId());
            tgDTO3.setDeliveryAddress(coordToAddress);
            tgMapper.updateEndCallInfo(tgDTO3);
        } else {
            log.info("종료 데이터 없는 값이 존재하지 않음.");
        }
