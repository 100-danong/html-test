    <select id="findCallsByAppointTimeForAccident" parameterType="com.gogofnd.kb.insurances.accident.dto.AccidentSearch" resultType="com.gogofnd.kb.partner.call.dto.CallInfoDto">
        select
        si.si_cmp_code, ri.ri_driver_id, ci.ci_insu_call_id, si.si_policy_number, ci.ci_appoint_time,
        ci.ci_pickup_address, ci.ci_delivery_address
        from call_info as ci
        inner join rider_info as ri on ci.ri_id = ri.ri_id
        inner join seller_info as si on ri.si_id = si.si_id
        where 1=1
        and ci.ci_appoint_time <![CDATA[ >= ]]> #{startTime}
        and ci.ci_appoint_time <![CDATA[ < ]]> #{endTime}
        and ri.ri_id = #{riId}
    </select>

이것도

List<CallInfoDto> callList = callInfoRepository.findCallsByAppointTimeForAccident(search);

이 부분에서 호출할거야
