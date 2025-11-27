    <select id="findMinTime" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        SELECT MIN(ci_appoint_time) AS ciAppointTime
        FROM call_info
        WHERE gci_groupid = #{gciGroupId}
    </select>
