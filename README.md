    <select id="findBySalesDateRiId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        SELECT *
        from call_count_info
        WHERE sales_date = #{salesDate} AND ri_id = #{riId} AND flag = 'G'
        ORDER BY cci_group_count DESC, cci_total_count DESC
        LIMIT 1
        FOR UPDATE;
    </select>

    <select id="findByCiCallId" parameterType="java.lang.String" resultType="java.lang.Integer">
        SELECT count(*)
        from call_count_info
        WHERE ci_call_id = #{ciCallId} AND flag = 'G';
    </select>
