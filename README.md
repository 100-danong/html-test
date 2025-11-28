    <select id="findReGroupAll" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        select *
        from call_info
        WHERE ri_id = #{riId} and sales_date = #{salesDate}
        ORDER BY ci_appoint_time;
    </select>

    List<CallInfo> callInfo = callMapper.findReGroupAll(salesDate, riId);
