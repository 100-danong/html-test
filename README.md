    <select id="findLastGroupId" parameterType="java.util.Map" resultType="java.lang.String">
        select
            gci_groupid
        from call_info
        where 1=1
          and ci_appoint_time <![CDATA[ >= ]]> #{schStartDate}
          and ci_appoint_time <![CDATA[ <= ]]> #{schEndDate}
          and ri_id = #{riId}
        order by ci_appoint_time desc
        limit 1
    </select>

    String lastGroupId = callMapper.findLastGroupId(schStartDate, schEndDate, ri_id);
