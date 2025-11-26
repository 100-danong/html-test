    <select id="findCallDailyGroupIdCount" parameterType="java.util.Map" resultType="java.lang.Integer">
        select count(*)
        from call_info
        where 1=1
            and ci_appoint_time <![CDATA[ >= ]]> #{schStartDate}
            and ci_appoint_time <![CDATA[ <= ]]> #{schEndDate}
            and ri_id = #{riId}
    </select>

    int cnt = callMapper.findCallDailyGroupIdCount(schStartDate, schEndDate, ri_id);
