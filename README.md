    @Transactional
    public CallCountInfo getCallCountStart(LocalDate today, long ri_id, String call_id, long si_id) {
        try{
            CallCountInfo callCountInfo = callCountMapper.findBySalesDateRiId(today, ri_id);

            int callCount = callCountMapper.findByCiCallId(call_id);

            if (callCount == 0) {
                //운영기준일 기준 첫 콜일 경우
                if (callCountInfo == null) {
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
                    if (callCountInfo.getCciStartCount() == callCountInfo.getCciEndCount()) {
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
                callCountMapper.InsertCallCountInfo(callCountInfo);
            }
            return callCountInfo;
        } catch (BusinessException e){
            throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
        }
    }

        <select id="findBySalesDateRiId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        SELECT *
        from call_count_info
        WHERE sales_date = #{salesDate} AND ri_id = #{riId} AND flag = 'G'
        ORDER BY cci_group_count DESC, cci_total_count DESC
        LIMIT 1
        FOR UPDATE;
    </select>
