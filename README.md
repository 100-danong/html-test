package com.gogofnd.kb.partner.call.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReGroupingDTO {
    private Long ri_id;
    private String si_seller_code;
}

    <select id="findReGroupAllDay" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.dto.ReGroupingDTO">
        select ci.ri_id, si.si_seller_code
        from call_info ci
        join rider_info ri
        on ci.ri_id = ri.ri_id
        join seller_info si
        on ri.si_id = si.si_id
        WHERE ci.sales_date = #{salesDate}
        group by ci.ri_id
        ORDER BY ci.ci_appoint_time;
    </select>
