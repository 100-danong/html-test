    <update id="updateCallInfoWhenComplete" parameterType="java.util.Map">
        update call_info
        set
            ci_complete_time = #{ci_complete_time},
            ci_delivery_status = #{ci_delivery_status},
            ci_upd_time = #{ci_upd_time}
        where ci_call_id = #{ci_call_id}
    </update>

    int resUpdCallInfo = callMapper.updateCallInfoWhenComplete(callCompleteTime, kb11thRequest.getCall_id(), "완료", updTime);
