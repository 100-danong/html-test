    <update id="updateReGrouping" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo">
        UPDATE call_info SET gci_groupid = #{gciGroupId}, ci_upd_time = NOW() WHERE ci_call_id = #{ciCallId}
    </update>

    callMapper.updateReGrouping(call.getCi_call_id(), call.getGci_groupid());
