    <select id="findFailCallStart" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.CallInfoFailStart">
        SELECT cifs_call_id, cifs_error_code
        FROM call_info_fail_start
        WHERE cifs_call_id = #{cifsCallId}
        ORDER BY cifs_id DESC
        LIMIT 1
    </select>

    package com.gogofnd.kb.Call.entity;

import com.gogofnd.kb.Kb.dto.Kb10thRequest;
import com.gogofnd.kb.global.model.ErrorCode;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table("call_info_fail_start")
public class CallInfoFailStart {

    @Id
    private String cifsId;

    private String cifsCallId;

    private String cifsDriverPickupaddress;

    private String cifsDriverDeliveryaddress;

    private LocalDateTime cifsReqDeliveryTime;

    private LocalDateTime cifsAppointTime;

    private LocalDateTime cifsPickupTime;

    private String cifsDriverId; // rider_info의 ri_userid

    private String cifsCompanyName;

    private String cifsRecvGroupId;

    private String cifsErrorCode;

    private String cifsComment;

    public static CallInfoFailStart create(Kb10thRequest request, ErrorCode errorCode) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return CallInfoFailStart.builder()
                .cifsCallId(request.getCall_id())
                .cifsDriverPickupaddress(request.getDriver_pickupaddress())
                .cifsDriverDeliveryaddress(request.getDriver_deliveryaddress())
                //.cifsReqDeliveryTime(LocalDateTime.parse(request.getCall_requesttime(), formatter))
                .cifsAppointTime(LocalDateTime.parse(request.getCall_appointtime(), formatter))
//                .cifsPickupTime(LocalDateTime.parse(request.getPickup_time(), formatter))
                .cifsDriverId(request.getDriver_id())
                .cifsCompanyName(extract(request.getDriver_client()))
                .cifsRecvGroupId(request.getGroup_id())
                .cifsErrorCode(errorCode.name())
                .cifsComment(errorCode.getMessage())
                .build();
    }

    public CallInfoFailStart(String cifsCallId) {
        this.cifsCallId = cifsCallId;
    }

    public static String extract(String text) {
        Pattern pattern = Pattern.compile("[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]");
        Matcher matcher = pattern.matcher(text);
        return matcher.replaceAll(" ");
    }

}
