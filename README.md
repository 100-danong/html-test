    <update id="updateStartCallInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo">
        UPDATE call_info
        SET ci_insu_call_id = #{ciInsuCallId}
        WHERE ci_id = #{ciId}
    </update>
