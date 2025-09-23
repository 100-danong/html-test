    <select id="findAllByCallPickUpTimeBetween" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        select DISTINCT
            gci.gci_groupid as 'gci_groupid',
            gci.gci_first_starttime as 'gci_first_starttime',
            gci.gci_last_endtime as 'gci_last_endtime',
            gci.gci_total_time as 'gci_total_time',
            ri.ri_driver_id as 'ri_driver_id',
            si.si_cmp_code as 'si_cmp_code',
            spn.spn_policy_number as 'si_policy_number'
        from groupcall_info as gci
            inner join rider_info as ri on gci.ri_id = ri.ri_id
            inner join seller_info as si on ri.si_id = si.si_id
            inner join seller_policy_number spn ON si.si_cmp_code = spn.si_cmp_code
        where 1=1
            and gci.gci_first_starttime <![CDATA[ >= ]]> #{startTime}
            and gci.gci_first_starttime <![CDATA[ < ]]> #{endTime}
            and spn.spn_effect_startdate <![CDATA[ <= ]]> #{startTime}
            and spn.spn_effect_enddate <![CDATA[ >= ]]> #{endTime}
    </select>

    <select id="sumGroupCallTotalTime" parameterType="java.util.Map" resultType="java.lang.Integer">
        SELECT SUM(gci.gci_total_time)
        FROM groupcall_info as gci
        INNER JOIN rider_info as ri
        ON gci.ri_id = ri.ri_id
        INNER JOIN seller_info as si
        ON ri.si_id = si.si_id
        WHERE 1=1
        AND ri.ri_driver_id = #{riDriverId}
        AND gci.gci_first_starttime <![CDATA[ >= ]]> #{startTime}
        AND gci.gci_first_starttime <![CDATA[ < ]]> #{endTime}
    </select>
