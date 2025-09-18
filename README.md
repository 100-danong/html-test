        select
            ci.ci_call_id, ci.ci_appoint_time, ci.ci_complete_time
        from call_info as ci
        inner join rider_info as ri on ci.ri_id = ri.ri_id
        inner join seller_info as si on ri.si_id = si.si_id
        where 1=1
            and ci.ci_appoint_time <![CDATA[ >= ]]> #{startDate}
            and ci.ci_appoint_time <![CDATA[ < ]]> #{endDate}
            and si.si_seller_code = #{si_seller_code}
            AND ri.ri_state = 1
