    <select id="findDailyTotalData" parameterType="java.util.Map" resultType="java.util.Map">
        SELECT
               ifnull(sum(gci_total_time), 0) as cumulation_time,
               ifnull(sum(gci_total_balance), 0) as cumulation_balance
          FROM groupcall_info
         WHERE 1=1
           AND ri_id = #{riId}
           AND gci_groupid != #{gciGroupId}
           AND gci_first_starttime <![CDATA[ >= ]]> #{startTime}
           AND gci_first_starttime <![CDATA[ < ]]> #{endTime}
    </select>
