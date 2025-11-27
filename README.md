    <insert id="InsertCallFailEnd" parameterType="com.gogofnd.kb.partner.call.entity.CallInfoFailEnd">
        insert into call_info_fail_end
        (cife_call_id, cife_driver_id, cife_driver_ci_complete_time,
        cife_seller_code, cife_recv_group_id, cife_error_code, cife_comment)
        values
        (#{cifeCallId}, #{cifeDriverId}, #{cifeDriverCiCompleteTime},
        #{cifeSellerCode}, #{cifeRecvGroupId}, #{cifeErrorCode}, #{cifeComment})
    </insert>

    package com.gogofnd.kb.Call.entity;

import com.gogofnd.kb.Kb.dto.Kb11thRequest;
import com.gogofnd.kb.global.model.ErrorCode;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table("call_info_fail_end")
public class CallInfoFailEnd {

    @Id
    private String cifeId;

    private String cifeCallId;

    private String cifeDriverId; // rider_info의 ri_userid

    private LocalDateTime cifeDriverCiCompleteTime;

    private String cifeSellerCode;

    private String cifeRecvGroupId;

    private String cifeErrorCode;

    private String cifeComment;

    public static CallInfoFailEnd create(Kb11thRequest request, ErrorCode errorCode) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return CallInfoFailEnd.builder()
                .cifeCallId(request.getCall_id())
                .cifeDriverId(request.getDriver_id())
                .cifeDriverCiCompleteTime(LocalDateTime.parse(request.getDriver_enddate(), formatter))
                .cifeSellerCode(request.getSeller_code())
                .cifeRecvGroupId(request.getGroup_id())
                .cifeErrorCode(errorCode.name())
                .cifeComment(errorCode.getMessage())
                .build();
    }

}
