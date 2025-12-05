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
