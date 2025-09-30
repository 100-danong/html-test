    <select id="findByGroupCallIdForAccident" parameterType="java.lang.String" resultType="com.gogofnd.kb.insurances.accident.dto.AccidentSearch">
        SELECT ci.ci_insu_call_id AS callId, gci.gci_first_starttime AS startTime, ci.ri_id AS riId
        FROM groupcall_info gci
        INNER JOIN call_info ci
        ON ci.gci_groupid = gci.gci_groupid
        WHERE ci.gci_groupid = #{callId}
        ORDER BY ci.ci_appoint_time
        LIMIT 1
    </select>
