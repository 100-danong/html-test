    <select id="findByInsuCallId" parameterType="java.lang.String" resultType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO2">
        SELECT
        ci.gci_groupid AS groupId,
        ci.ci_pickup_time AS startTime
        FROM
        call_info ci
        WHERE ci_insu_call_id = #{insuCallId}
    </select>

    package com.gogofnd.kb.Gosafe.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TgDTO2 {

    private String groupId;
    private LocalDateTime startTime;

}

