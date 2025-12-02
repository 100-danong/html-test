    <select id="findReGroupSeller" parameterType="java.util.Map" resultType="java.lang.Long">
        select ci.ri_id
        from call_info ci
        join rider_info ri
        on ci.ri_id = ri.ri_id
        join seller_info si
        on ri.si_id = si.si_id
        WHERE ci.sales_date = #{salesDate} and si.si_seller_code = #{sellerCode}
        group by ci.ri_id
        ORDER BY ci.ci_appoint_time;
    </select>

    List<Long> calls = callMapper.findReGroupSeller(salesDate, sellerCode);
