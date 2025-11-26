    <select id="findByDriveridAndSellerID" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        select
            ri.ri_id, ri.si_id, ri.ri_insu_status, ri.ri_pay_status, ri.ri_state, ri.si_id, ri.ri_driver_id
        from rider_info as ri
        inner join seller_info as si on ri.si_id = si.si_id
        where 1=1
            and ri.ri_userid = #{ri_driver_id}
            and si.si_seller_code = #{si_seller_code}
            and ri.ri_insu_status = '062'
            and ri.ri_state = 1
        ORDER BY ri_upd_time DESC
        LIMIT 1
    </select>

    package com.gogofnd.kb.Insurance.entity;

import com.gogofnd.kb.Kb.dto.KbApi1Req;
import lombok.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import java.time.LocalDateTime;

@Table("rider_info")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RiderInfo {

    @Id
    private Long ri_id;

    private String ri_name;
    private String ri_phone;
    private String ri_birthdate;
    private int ri_gender;
    private String ri_ss_number;
    private String ri_bike_number;
    private String ri_driver_id;
    private String ri_active_area;
    private String ri_userid;
    private String ri_insu_status;
    private String ri_compinsu_enddate;
    private String ri_operpurp_code;
    private LocalDateTime ri_insu_startdate;
    private LocalDateTime ri_insu_enddate;
    private String ri_insu_imgpath;
    private Long si_id;
    private String ri_total_webview_url;
    private int ri_balance;
    private String ri_pay_status;
    private String ri_received_driver_id;
    private String ri_ctcagreyn;
    private LocalDateTime ri_ins_time;
    private LocalDateTime ri_upd_time;
    private int ri_state;
    private int si_policy_number;

    public static RiderInfo create(KbApi1Req req, SellerInfo seller, String rawSsn){
        //아이디 중복 방지
        String id = req.getDriver_id();
        String setMtdt = "";
        String setOprnPurp = "";
        String setDriverId = "";


        //운송용도, 보험만료일 못받아오는 경우 이렇게 처리
        if(req.getMtdt() !=null)
            setMtdt = req.getMtdt();
        if(req.getOprn_purp() !=null)
            setOprnPurp = req.getOprn_purp();

        // 드라이버 아이디 없으면 기본형식으로 저장
        if(req.getDriver_id() != null) {
            setDriverId = req.getDriver_id();
        }else{
            setDriverId = req.getDriver_phone().substring(3);
        }

        return RiderInfo.builder()
                .si_id(seller.getSi_id())
                .ri_balance(0)
//                .policyNumber(seller.getPolicy_number())
//                .applicationNumber(seller.getApplication_number())
                .ri_insu_status("")
                .ri_birthdate(createBirth(rawSsn))
                .ri_userid(setDriverId)
                .ri_gender(req.getDriver_gender())
                .ri_active_area(req.getDriver_region())
                .ri_bike_number(req.getDriver_vcnum())
                .ri_phone(req.getDriver_phone())
                .ri_ss_number(req.getDriver_ssn())
                .ri_name(req.getDriver_name())
                .ri_state(1) // 1 사용, 9 미사용
                .ri_compinsu_enddate(setMtdt)
                .ri_operpurp_code(setOprnPurp)
                .ri_ins_time(LocalDateTime.now())
                .ri_upd_time(LocalDateTime.now())
                .build();
    }

    private static String createBirth(String ssn) {
        String ssnBirth = ssn.substring(0, 7);
        String lastNum = ssnBirth.substring(6);

        String birthDate;

        if (lastNum.equals("1") || lastNum.equals("2") || lastNum.equals("5") || lastNum.equals("6")) {
            birthDate = "19";
        } else if (lastNum.equals("3") || lastNum.equals("4") || lastNum.equals("7") || lastNum.equals("8")) {
            birthDate = "20";
        } else {
            // 주민번호가 비정상적일 경우
            birthDate = "99";
        }

        return birthDate + ssnBirth.substring(0, 6);
    }

    public void updatePayStatus(String riPayStatus) {this.ri_pay_status = riPayStatus;}

    public void updateRiId(Long riId) {this.ri_id = riId;}

    public void createDriverId(String leftPadDriverId) {
        this.ri_driver_id = leftPadDriverId;
        this.ri_upd_time = LocalDateTime.now();
    }

    public void updateImage(String imagePath) {
        this.ri_insu_imgpath = imagePath;
    }

    public void updateTotalWebViewUrl(String totalWebViewUrl) {
        this.ri_total_webview_url = totalWebViewUrl;
    }
}
