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

    <select id="findFailCallStart" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfoFailStart">
        SELECT cifs_call_id, cifs_error_code
        FROM call_info_fail_start
        WHERE cifs_call_id = #{cifsCallId}
        ORDER BY cifs_id DESC
        LIMIT 1
    </select>

    <insert id="InsertCallFailEnd" parameterType="com.gogofnd.kb.partner.call.entity.CallInfoFailEnd">
        insert into call_info_fail_end
        (cife_call_id, cife_driver_id, cife_driver_ci_complete_time,
        cife_seller_code, cife_recv_group_id, cife_error_code, cife_comment)
        values
        (#{cifeCallId}, #{cifeDriverId}, #{cifeDriverCiCompleteTime},
        #{cifeSellerCode}, #{cifeRecvGroupId}, #{cifeErrorCode}, #{cifeComment})
    </insert>

    <update id="updateCallInfoWhenComplete" parameterType="java.util.Map">
        update call_info
        set
            ci_complete_time = #{ci_complete_time},
            ci_delivery_status = #{ci_delivery_status},
            ci_upd_time = #{ci_upd_time}
        where ci_call_id = #{ci_call_id}
    </update>

    <select id="findBySiId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        select * from seller_info where si_id = #{siId}
    </select>

    <select id="findByCallId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        select *
        from call_info
        where ci_call_id = #{ci_call_id}
    </select>

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

    <select id="findByCallIdForGroupid" parameterType="java.lang.String" resultType="java.lang.String">
        select gci_groupid
        from call_info
        where ci_call_id = #{ci_call_id}
    </select>

    <select id="findCountByGciGroupId" parameterType="java.lang.String" resultType="java.lang.Integer">
        select count(gci_groupid) from groupcall_info where gci_groupid = #{gciGroupId}
    </select>

    <select id="findGroupcallInfoByGciGroupId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        select * from groupcall_info where gci_groupid = #{gciGroupId}
    </select>

    <update id="UpdateGroupcallInfoWhenDeliveryQuit" parameterType="java.util.Map">
        UPDATE groupcall_info
           SET
               gci_last_endtime = #{gciLastEndTime},
               gci_gogo_total_balance = #{gciGogoTotalBalance},
               gci_total_balance = #{gciTotalBalance},
               gci_total_time = #{updTotalTime},
               gci_upd_time = #{gciUpdTime}
         WHERE gci_groupId = #{gciGroupId}
    </update>

    <select id="findByRiDriverIdForCallCnt" parameterType="java.util.Map" resultType="java.lang.Integer">
        SELECT COUNT(*) cnt
          FROM call_info ci
    INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id
         WHERE 1=1
           AND ri.ri_userid = #{ri_driver_id}
           AND ri.ri_state = 1
           AND ci.gci_groupid = #{gci_groupid}
           AND ci.ci_complete_time IS NULL
    </select>

    <select id="findGroupcallInfoByGciGroupId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        select * from groupcall_info where gci_groupid = #{gciGroupId}
    </select>

    <select id="countCall" parameterType="java.lang.String" resultType="java.lang.Integer">
        SELECT COUNT(*)
        FROM call_info
        WHERE gci_groupid = #{gciGroupId}
    </select>

    <update id="updateSellerInfoForBalance" parameterType="java.util.Map">
        update seller_info
        set
            si_balance = si_balance - #{si_balance},
            si_upd_time = now()
        where si_id = #{si_id}
    </update>

    <select id="findByRiDriverIdForCallCnt" parameterType="java.util.Map" resultType="java.lang.Integer">
        SELECT COUNT(*) cnt
          FROM call_info ci
    INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id
         WHERE 1=1
           AND ri.ri_userid = #{ri_driver_id}
           AND ri.ri_state = 1
           AND ci.gci_groupid = #{gci_groupid}
           AND ci.ci_complete_time IS NULL
    </select>

    <select id="findMinTime" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfo">
        SELECT MIN(ci_appoint_time) AS ciAppointTime
        FROM call_info
        WHERE gci_groupid = #{gciGroupId}
    </select>

    <update id="updateSellerInfoForBalance" parameterType="java.util.Map">
        update seller_info
        set
            si_balance = si_balance - #{si_balance},
            si_upd_time = now()
        where si_id = #{si_id}
    </update>

    <insert id="InsertGroupCallInfoWhenDeliveryQuit" parameterType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        insert into groupcall_info
        (gci_groupid, ri_id, gci_first_starttime, gci_last_endtime, gci_gogo_total_balance,
        gci_total_balance, gci_total_time, gci_ins_time, gci_upd_time, sales_date)
        values
            (#{gciGroupid}, #{riId}, #{gciFirstStarttime}, #{gciLastEndtime}, #{gciGogoTotalBalance},
             #{gciTotalBalance}, #{gciTotalTime}, #{gciInsTime}, #{gciUpdTime}, #{salesDate})
    </insert>
