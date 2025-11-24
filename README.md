    <select id="findTgDTO" parameterType="java.lang.Long" resultType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO">
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
        AND ci.ri_id = #{riId}
        ORDER BY ci.ci_appoint_time DESC
        LIMIT 1
    </select>

    package com.gogofnd.kb.Gosafe.dto;

import lombok.Data;

@Data
public class TgDTO {

    private Long riId;
    private Long siId;
    private String riDriverId;
    private String siCmpCode;
    private String siPolicyNumber;
    private String ciInsuCallId;
    private String ciAppointTime;
    private String ciGroupId;

}
