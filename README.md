select DISTINCT
            gci.gci_groupid as 'gci_groupid',
            gci.gci_first_starttime as 'gci_first_starttime',
            gci.gci_last_endtime as 'gci_last_endtime',
            gci.gci_total_time as 'gci_total_time',
            ri.ri_driver_id as 'ri_driver_id',
            si.si_cmp_code as 'si_cmp_code',
            spn.spn_policy_number as 'si_policy_number',
            gci.gci_total_balance as '정산금'
        from groupcall_info as gci
            inner join rider_info as ri on gci.ri_id = ri.ri_id
            inner join seller_info as si on ri.si_id = si.si_id
            inner join seller_policy_number spn ON si.si_cmp_code = spn.si_cmp_code
        where 1=1
            and gci.gci_first_starttime  >= '2025-10-30 06:00:00'
            and gci.gci_first_starttime  < '2025-11-03 06:00:00'
            and spn.spn_effect_startdate  <=  '2025-10-30 06:00:00'
            and spn.spn_effect_enddate  >=  '2025-11-03 06:00:00'
order by gci.ri_id;
