    <select id="findByDriveridAndSellerID" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        select
            ri.ri_id, ri.si_id, ri.ri_insu_status, ri.ri_pay_status, ri.ri_state, ri.si_id, ri.ri_driver_id
        from rider_info as ri
        inner join seller_info as si on ri.si_id = si.si_id
        where 1=1
            and ri.ri_userid = #{ri_driver_id}
            and si.si_seller_code = #{si_seller_code}
            and ri.ri_insu_status = '062'
            and ri.ri_state = 1
        ORDER BY ri_upd_time DESC
        LIMIT 1
    </select>

    <select id="findByCallIdForDupl" parameterType="java.lang.String" resultType="java.lang.Integer">
        select
            count(*)
        from call_info
        where 1=1
            and ci_call_id = #{ci_call_id}
    </select>

    <insert id="InsertCallFailStart" parameterType="com.gogofnd.kb.partner.call.entity.CallInfoFailStart">
        insert into call_info_fail_start
        (cifs_call_id, cifs_driver_pickupaddress, cifs_driver_deliveryaddress,
        cifs_req_delivery_time, cifs_appoint_time, cifs_pickup_time,
        cifs_driver_id, cifs_company_name, cifs_recv_group_id, cifs_error_code, cifs_comment)
        values
        (#{cifsCallId}, #{cifsDriverPickupaddress}, #{cifsDriverDeliveryaddress},
        NOW(), #{cifsAppointTime}, NOW(),
        #{cifsDriverId}, #{cifsCompanyName}, #{cifsRecvGroupId}, #{cifsErrorCode}, #{cifsComment})
    </insert>

    <select id="findBySellerCode" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        SELECT * FROM seller_info WHERE si_seller_code = #{siSellerCode}
    </select>

    <select id="findGroupCallByriIdAndTime" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        SELECT gci.*
        FROM groupcall_info gci
        WHERE gci.ri_id = #{riId}
        AND #{ciAppointTime} BETWEEN gci.gci_first_starttime AND gci.gci_last_endtime
        ORDER BY gci_upd_time DESC
        LIMIT 1
    </select>

    <select id="findNullCompleteTimeCallId" parameterType="java.lang.String" resultType="java.lang.String">
        select ci.ci_call_id
        from call_info as ci
        left join rider_info as ri on ci.ri_id = ri.ri_id
        where 1=1
            and ci.ci_complete_time is null
            and ri.ri_driver_id = #{ri_driver_id}
            AND ri.ri_state = 1
    </select>

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

    <insert id="InsertCallCountInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        INSERT INTO call_count_info
        (sales_date, ri_id, si_id, ci_call_id, cci_start_count, cci_end_count, cci_group_count, cci_total_count, cci_ins_time, cci_upd_time, flag)
        VALUES
        (#{salesDate}, #{riId}, #{siId}, #{ciCallId}, #{cciStartCount}, #{cciEndCount}, #{cciGroupCount}, #{cciTotalCount}, NOW(), NOW(), #{flag})
    </insert>

    <select id="findRunDeliveryByDriverId" resultType="java.lang.Integer">
        select count(*)
        from call_info as ci
        inner join rider_info as ri on ci.ri_id = ri.ri_id
        where 1=1
            and ri.ri_userid = #{ri_driver_id}
            AND ri.ri_state = 1
            and ci.ci_complete_time is null
            and ci.sales_date = #{sales_date}
    </select>

    <insert id="InsertCallInfoWhenDeliveryStart" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo" useGeneratedKeys="true" keyColumn="ci_id" keyProperty="ciId">
        insert into call_info
            (ri_id, gci_groupid, ci_appoint_time, ci_call_id, ci_req_delivery_time,
             ci_delivery_address, ci_delivery_status, ci_company_name, ci_pickup_time, ci_pickup_address,
             ci_recv_group_id, ci_ins_time, ci_upd_time, sales_date)
        values
            (#{riId}, #{gciGroupid}, #{ciAppointTime}, #{ciCallId}, #{ciReqDeliveryTime},
             #{ciDeliveryAddress}, #{ciDeliveryStatus}, #{ciCompanyName}, #{ciPickupTime}, #{ciPickupAddress},
             #{ciRecvGroupId}, #{ciInsTime}, #{ciUpdTime}, #{salesDate})
    </insert>

    <update id="updateKbCallId" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo">
        UPDATE call_info SET ci_insu_call_id = #{ciInsuCallId} WHERE ci_id = #{ciId}
    </update>
