    <select id="findTgDTO" parameterType="java.lang.Long" resultType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO">
        SELECT
        ri.ri_id,
        ri.si_id,
        ri.ri_driver_id,
        si.si_cmp_code,
        si.si_policy_number,
        ci.ci_insu_call_id,
        ci.ci_appoint_time,
        ci.gci_groupid
        FROM call_info ci
        JOIN rider_info ri ON ci.ri_id = ri.ri_id
        JOIN seller_info si ON ri.si_id = si.si_id
        WHERE 1=1
        AND ci.ci_complete_time IS NULL
        AND ci.ri_id = #{riId}
        ORDER BY ci.ci_appoint_time DESC
        LIMIT 1
    </select>

    <update id="updateEndCallInfo" parameterType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO3">
        UPDATE call_info
        SET ci_complete_time = #{endTime},
        ci_delivery_status = #{status},
        ci_delivery_address = #{deliveryAddress}
        WHERE ci_insu_call_id = #{insuCallId}
    </update>

    <select id="findByInsuCallId" parameterType="java.lang.String" resultType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO2">
        SELECT
        ci.gci_groupid AS groupId,
        ci.ci_pickup_time AS startTime
        FROM
        call_info ci
        WHERE ci_insu_call_id = #{insuCallId}
    </select>

    <select id="findSellerInfoByCmpCode" parameterType="java.lang.Long" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        SELECT
        *
        FROM
        seller_info si
        WHERE si_id = #{siId}
    </select>

    <select id="findByInsuCallIds" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        select *
        from call_info
        where ci_insu_call_id = #{ciInsuCallId}
    </select>

    <insert id="insetGroupCallInfo" parameterType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        INSERT INTO groupcall_info (gci_groupid, ri_id, gci_first_starttime, gci_last_endtime, gci_gogo_total_balance, gci_total_balance, gci_total_time, gci_insu_call_id, gci_ins_time, gci_upd_time, sales_date)
        VALUES(#{gciGroupid}, #{riId}, #{gciFirstStarttime}, #{gciLastEndtime}, #{gciGogoTotalBalance}, #{gciTotalBalance}, #{gciTotalTime}, #{gciInsuCallId}, #{gciLastEndtime}, #{gciLastEndtime}, #{salesDate})
    </insert>

    <update id="updateSellerInfo" parameterType="map">
        UPDATE seller_info
        SET si_balance = si_balance - #{siBalance}
        WHERE si_id = #{siId}
    </update>

    <select id="findBySalesDateRiId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        SELECT *
        from call_count_info
        WHERE sales_date = #{salesDate} AND ri_id = #{riId} AND flag = 'G'
        ORDER BY cci_group_count DESC, cci_total_count DESC
        LIMIT 1
        FOR UPDATE;
    </select>

    <insert id="InsertCallCountInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        INSERT INTO call_count_info
        (sales_date, ri_id, si_id, ci_call_id, cci_start_count, cci_end_count, cci_group_count, cci_total_count, cci_ins_time, cci_upd_time, flag)
        VALUES
        (#{salesDate}, #{riId}, #{siId}, #{ciCallId}, #{cciStartCount}, #{cciEndCount}, #{cciGroupCount}, #{cciTotalCount}, NOW(), NOW(), #{flag})
    </insert>

