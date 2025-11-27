    <select id="findCallInfoByCiCallId" parameterType="java.lang.String" resultType="java.lang.String">
        select ci_call_id
        from call_info
        where gci_groupid = #{gciGroupId}
        order by ci_complete_time desc
        limit 1
    </select>
