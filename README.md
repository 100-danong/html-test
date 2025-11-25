    <select id="findTotalBalance" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.dto.CallBalanceDto">
        SELECT
               ifnull(SUM(gci_total_balance), 0) AS 'kbBalance',
               ifnull(SUM(gci_gogo_total_balance), 0) AS 'gogoBalance'
          FROM groupcall_info
         WHERE 1=1
           AND ri_id = #{riId}
           AND gci_groupid != #{gciGroupId}
           AND gci_first_starttime <![CDATA[ >= ]]> #{startTime}
           AND gci_first_starttime <![CDATA[ < ]]> #{endTime}
    </select>

    package com.gogofnd.kb.Gosafe.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class CallBalanceDto {
    private Integer kbBalance;
    private float gogoBalance;
}
