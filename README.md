    <select id="findReGroupAllDay" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.dto.ReGroupingDTO">
        select ci.ri_id, si.si_seller_code
        from call_info ci
        join rider_info ri
        on ci.ri_id = ri.ri_id
        join seller_info si
        on ri.si_id = si.si_id
        WHERE ci.sales_date = #{salesDate} AND ri.si_id != '4'
        group by ci.ri_id
        ORDER BY ci.ci_appoint_time;
    </select>

    <select id="findBySellerCode" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        SELECT * FROM seller_info WHERE si_seller_code = #{siSellerCode}
    </select>

    <select id="findReGroupAll" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        select *
        from call_info
        WHERE ri_id = #{riId} and sales_date = #{salesDate}
        ORDER BY ci_appoint_time;
    </select>

    <select id="findGroupCallNotComplteTime" parameterType="java.lang.Long" resultType="java.lang.Integer">
        SELECT count(*)
        FROM groupcall_info
        WHERE 1=1
        AND ri_id = #{riId}
        AND gci_last_endtime IS NULL
    </select>

    <select id="findLastGroupCall" parameterType="java.lang.Long" resultType="java.lang.String">
        SELECT gci_groupid
        FROM groupcall_info
        WHERE 1=1
        AND ri_id = #{riId}
        AND gci_last_endtime IS NULL
    </select>

    <insert id="InsertReGroupCallInfoWhenDeliveryQuit" parameterType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        insert into groupcall_info_kb
        (gci_groupid, ri_id, gci_first_starttime, gci_last_endtime, gci_gogo_total_balance,
        gci_total_balance, gci_total_time, gci_ins_time, gci_upd_time, sales_date)
        values
        (#{gciGroupid}, #{riId}, #{gciFirstStarttime}, #{gciLastEndtime}, #{gciGogoTotalBalance},
        #{gciTotalBalance}, #{gciTotalTime}, #{gciInsTime}, #{gciUpdTime}, #{salesDate})
    </insert>

    <insert id="InsertCallCountInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        INSERT INTO call_count_info
        (sales_date, ri_id, si_id, ci_call_id, cci_start_count, cci_end_count, cci_group_count, cci_total_count, cci_ins_time, cci_upd_time, flag)
        VALUES
        (#{salesDate}, #{riId}, #{siId}, #{ciCallId}, #{cciStartCount}, #{cciEndCount}, #{cciGroupCount}, #{cciTotalCount}, NOW(), NOW(), #{flag})
    </insert>
