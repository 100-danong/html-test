    <update id="updateEndCallInfo" parameterType="com.gogofnd.kb.domain.rider.dto.tg.TgDTO3">
        UPDATE call_info
        SET ci_complete_time = #{endTime},
        ci_delivery_status = #{status},
        ci_delivery_address = #{deliveryAddress}
        WHERE ci_insu_call_id = #{insuCallId}
    </update>

    package com.gogofnd.kb.Gosafe.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TgDTO3 {

    private LocalDateTime endTime;
    private String status = "완료";
    private String insuCallId;
    private String deliveryAddress;

}
