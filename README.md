    <insert id="InsertCallInfoWhenDeliveryStart" parameterType="com.gogofnd.kb.partner.call.entity.CallInfo" useGeneratedKeys="true" keyColumn="ci_id" keyProperty="ciId">
        insert into call_info
            (ri_id, gci_groupid, ci_appoint_time, ci_call_id, ci_req_delivery_time,
             ci_delivery_address, ci_delivery_status, ci_company_name, ci_pickup_time, ci_pickup_address,
             ci_recv_group_id, ci_ins_time, ci_upd_time, sales_date)
        values
            (#{riId}, #{gciGroupid}, #{ciAppointTime}, #{ciCallId}, #{ciReqDeliveryTime},
             #{ciDeliveryAddress}, #{ciDeliveryStatus}, #{ciCompanyName}, #{ciPickupTime}, #{ciPickupAddress},
             #{ciRecvGroupId}, #{ciInsTime}, #{ciUpdTime}, #{salesDate})
    </insert>

    package com.gogofnd.kb.Accident.entity;

import com.gogofnd.kb.Kb.dto.Kb10thRequest;
import com.google.common.base.CharMatcher;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.time.LocalDateTime.now;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "call_info")
public class CallInfo {

    @Id
    private Integer ci_id; //PK

    private Long ri_id;//라이더ID

    private String gci_groupid;//운행누적정보ID

    private LocalDateTime ci_appoint_time;//배차시간

    private LocalDateTime ci_complete_time;//배달완료시간

    private String ci_call_id;//배달 콜ID(플랫폼사제공)

    private LocalDateTime ci_req_delivery_time;//배달요청시간

    private String ci_delivery_address;//배달주소

    private String ci_delivery_status;//배달진행상태

    private String ci_company_name;//배달요청사명

    private LocalDateTime ci_pickup_time;//픽업시간

    private String ci_pickup_address;//픽업주소

    private String ci_insu_call_id;//운행번호(보험사전송용 콜ID)

    private String ci_recv_group_id;//플랫폼 측에서 보내준 그룹 콜 아이디(온나)

    private LocalDateTime ci_ins_time;//등록일시

    private LocalDateTime ci_upd_time;//수정일시

    private LocalDate sales_date;//영업기준일

    //배차 시간으로 운행 조회 LIST 사용 목적
    private String ri_driver_id;
    private String si_cmp_code;
    private String si_policy_number;
    private LocalDateTime end_date;

    public static String extract(String text) {
        Pattern pattern = Pattern.compile("[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]");
        Matcher matcher = pattern.matcher(text);
        return matcher.replaceAll(" ");
    }

    public void updateCallPickUpTime(String pickUpTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        this.ci_pickup_time = LocalDateTime.parse(pickUpTime, formatter);
    }

    public void updateCallPickUpTime() {
        this.ci_pickup_time = now();
    }

    public void updateCallAppointtime(String ciAppointTime) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        this.ci_pickup_time = LocalDateTime.parse(ciAppointTime, formatter);
    }

    public void updateCallAppointtime() {
        this.ci_pickup_time = now();
    }

    public void updateDelivery_status(String delivery_status) {
        this.ci_delivery_status = delivery_status;
    }

    public void updateGroupId(String groupId) {
        this.gci_groupid = groupId;
    }

    public void createKbCallId(String leftPadCallId) {
        this.ci_insu_call_id = leftPadCallId;
    }

    public void updateRecvGroupId(String ciRecvGroupId){
        this.ci_recv_group_id = ciRecvGroupId;
    }

    public static CallInfo create(long riderId, Kb10thRequest dto, String riDriverId, String siCmpCode, String siPolicyNumber){
        return CallInfo
                .builder()
                .ri_id(riderId)
                .ci_call_id(dto.getCall_id())
                .ci_delivery_address(dto.getDriver_deliveryaddress())
                .ci_delivery_status("요청")
                .ri_driver_id(riDriverId)
                .si_cmp_code(siCmpCode)
                .si_policy_number(siPolicyNumber)
                .ci_pickup_address(dto.getDriver_pickupaddress())
                .ci_company_name(extract(dto.getDriver_client()))
                .ci_req_delivery_time(now())
                .ci_pickup_time(now())
                .ci_ins_time(now())
                .ci_upd_time(now())
                .build();
    }
}
