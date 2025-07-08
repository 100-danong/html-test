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
        AND ci.ri_id = '32673'
        order by ci.ci_appoint_time DESC 
        LIMIT 1;
