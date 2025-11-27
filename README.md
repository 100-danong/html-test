    <select id="findByRiDriverIdForCallCnt" parameterType="java.util.Map" resultType="java.lang.Integer">
        SELECT COUNT(*) cnt
          FROM call_info ci
    INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id
         WHERE 1=1
           AND ri.ri_userid = #{ri_driver_id}
           AND ri.ri_state = 1
           AND ci.gci_groupid = #{gci_groupid}
           AND ci.ci_complete_time IS NULL
    </select>

    int cnt = callMapper.findByRiDriverIdForCallCnt(driver_id, callInfo.getGci_groupid());
