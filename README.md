    <insert id="insetStartCallInfo" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo">
        INSERT INTO call_info (ci_pickup_time, ci_appoint_time, ci_pickup_address, ci_call_id, ci_delivery_status, ci_company_name, ri_id, ci_ins_time, ci_upd_time, gci_groupid, sales_date)
        VALUES(#{ciPickupTime}, #{ciAppointTime}, #{ciPickupAddress}, #{ciCallId}, #{ciDeliveryStatus}, #{ciCompanyName}, #{riId}, #{ciAppointTime}, #{ciAppointTime}, #{gciGroupid}, #{salesDate})
    </insert>
