    <select id="findByRiderId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info
        WHERE ri_userid = #{cSenId}
            AND ri_insu_status = '062'
            AND ri_state = 1
    </select>

    <select id="findBySellerCode" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        SELECT * FROM seller_info WHERE si_seller_code = #{siSellerCode}
    </select>

    <select id="findRunDeliveryByDriverId" parameterType="java.lang.Long" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        select ci.*
        from call_info as ci
        inner join rider_info as ri on ci.ri_id = ri.ri_id
        where 1=1
        and ri.ri_id = #{ri_id}
        AND ri.ri_state = 1
        and ci.ci_complete_time is null
    </select>

    <update id="updateEndCallInfo" parameterType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO3">
        UPDATE call_info
        SET ci_complete_time = #{endTime},
        ci_delivery_status = #{status},
        ci_delivery_address = #{deliveryAddress}
        WHERE ci_insu_call_id = #{insuCallId}
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

    <insert id="insetStartCallInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo">
        INSERT INTO call_info (ci_pickup_time, ci_appoint_time, ci_pickup_address, ci_call_id, ci_delivery_status, ci_company_name, ri_id, ci_ins_time, ci_upd_time, gci_groupid, sales_date)
        VALUES(#{ciPickupTime}, #{ciAppointTime}, #{ciPickupAddress}, #{ciCallId}, #{ciDeliveryStatus}, #{ciCompanyName}, #{riId}, #{ciAppointTime}, #{ciAppointTime}, #{gciGroupid}, #{salesDate})
    </insert>

    <select id="findCallInfoByCallId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        SELECT
        *
        FROM
        call_info ci
        WHERE ci_call_id = #{callId}
    </select>

    <update id="updateStartCallInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo">
        UPDATE call_info
        SET ci_insu_call_id = #{ciInsuCallId}
        WHERE ci_id = #{ciId}
    </update>

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
