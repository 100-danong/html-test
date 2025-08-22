public CallCountInfo getCallCountStart(LocalDate today, long ri_id, String call_id, long si_id){
        CallCountInfo callCountInfo  = callCountMapper.findBySalesDateRiId(today, ri_id);

        //운영기준일 기준 첫 콜일 경우
        if(callCountInfo == null){
            callCountInfo = new CallCountInfo();

            callCountInfo.setSalesDate(today);
            callCountInfo.setSiId(si_id);
            callCountInfo.setRiId(ri_id);
            callCountInfo.setCiCallId(call_id);
            callCountInfo.setCciStartCount(1);
            callCountInfo.setCciEndCount(0);
            callCountInfo.setCciGroupCount(1);
            callCountInfo.setCciTotalCount(1);
            callCountInfo.setFlag("G");
            callCountInfo.create(today, ri_id, call_id, si_id);
        } else {
            //이전 콜이 마지막 그룹 콜이였을 경우
            if(callCountInfo.getCciStartCount() == callCountInfo.getCciEndCount()){
                callCountInfo.setCiCallId(call_id);
                callCountInfo.setCciStartCount(1);
                callCountInfo.setCciEndCount(0);
                callCountInfo.setCciGroupCount(callCountInfo.getCciGroupCount() + 1);
                callCountInfo.setCciTotalCount(1);
            } else {
                callCountInfo.setCiCallId(call_id);
                callCountInfo.setCciStartCount(callCountInfo.getCciStartCount() + 1);
                callCountInfo.setCciTotalCount(callCountInfo.getCciTotalCount() + 1);
            }
        }
        return callCountInfo;
    }
