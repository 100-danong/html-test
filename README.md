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

    <select id="findAllByCallAppointTimeBetweenAndRiderId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.dto.app.DeliveryInsureHistoryDto">
        select
            gci.gci_groupid,si.si_cmp_code, si.si_policy_number,
            UNIX_TIMESTAMP(gci.gci_first_starttime) as start_time,
            if(gci.gci_last_endtime is not null, UNIX_TIMESTAMP(gci.gci_last_endtime), UNIX_TIMESTAMP()) as end_time
        from groupcall_info as gci
        inner join rider_info as ri on gci.ri_id = ri.ri_id
        inner join seller_info si on ri.si_id = si.si_id
        where 1=1
            and gci.gci_first_starttime <![CDATA[ >= ]]> #{startDate}
            and gci.gci_first_starttime <![CDATA[ <= ]]> #{endDate}
            AND ri.ri_state = 1
            and ri.ri_id = #{ri_id}
    </select>
