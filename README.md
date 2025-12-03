    <select id="findRequestsRiderByInsuranceStatusYesterday" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.dto.RiderInfoDto">
        <![CDATA[
        SELECT r.ri_id,
            s.si_id,
            i.ih_id,
            r.ri_driver_id,
            r.ri_phone,
            r.ri_bike_number,
            r.ri_name,
            r.ri_ss_number,
            s.si_cmp_code,
            s.si_policy_number,
            r.ri_total_webview_url,
            r.ri_compinsu_enddate,
            r.ri_operpurp_code,
            r.ri_active_area,
            r.ri_insu_status,
            s.si_application_number,
            s.si_seller_code,
            r.ri_state,
            IFNULL(r.ri_ctcagreyn, 'Y') AS ri_ctcagreyn
        FROM rider_info r
        JOIN seller_info s
            ON r.si_id = s.si_id
        JOIN insurance_history i
            ON r.ri_id = i.ri_id
        WHERE i.ih_insu_state = #{status}
        AND r.ri_insu_status != '062'
        AND i.ih_upd_time < NOW()
        AND i.ih_upd_time >= SUBTIME(DATE_ADD(NOW(), INTERVAL -1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND r.ri_state = 1
        GROUP BY r.ri_id

        UNION ALL

        SELECT r.ri_id,
            r.si_id,
            i.ih_id,
            r.ri_driver_id,
            r.ri_phone,
            r.ri_bike_number,
            r.ri_name,
            r.ri_ss_number,
            s.si_cmp_code,
            s.spn_policy_number,
            r.ri_total_webview_url,
            r.ri_compinsu_enddate,
            r.ri_operpurp_code,
            r.ri_active_area,
            r.ri_insu_status,
            s.spn_application_number,
            si.si_seller_code,
            r.ri_state,
            IFNULL(r.ri_ctcagreyn, 'Y') AS ri_ctcagreyn
        FROM rider_info_renew r
        JOIN seller_policy_number s
            ON r.spn_id = s.spn_id
        JOIN insurance_renew_history i
            ON r.ri_id = i.ri_id
        JOIN seller_info si
        	ON si.si_id = r.si_id
        WHERE i.ih_insu_state = #{status}
        AND r.ri_insu_status != '062'
        AND i.ih_upd_time < NOW()
        AND i.ih_upd_time >= SUBTIME(DATE_ADD(NOW(), INTERVAL -1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND r.ri_state = 4
        AND s.spn_apply_state = 'W'
        GROUP BY r.ri_id
        ]]>
    </select>

    package com.gogofnd.kb.Business.dto;

import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class RiderInfoDto {
    private Long riId;

    private Long siId;

    private Long ihId;

    private String riName;

    private String riPhone;

    private int riGender;

    private String riSsNumber;

    private String riBikeNumber;

    private String riDriverId;

    private String riUserid;

    private String riOperpurpCode;

    private String riInsuStatus;

    private String riCompinsuEnddate;

    private String riActiveArea;

    private String riTotalWebviewUrl;

    private String siApplicationNumber;

    private String siPolicyNumber;

    private String siCmpCode;

    private String siSellerCode;

    private String riCtcagreyn;
    // 증권 갱신용
    private Integer riState;

    private LocalDateTime riInsuStartdate;

    private LocalDateTime riInsuEnddate;

    private String riPayStatus;

    private LocalDateTime riUpdTime;

    private Long pastRiId;


    public void updateTotalWebViewUrl(String totalWebViewUrl) {
        this.riTotalWebviewUrl = totalWebViewUrl;
    }
    public void updateInsuranceStatus(String insu_status){
        this.riInsuStatus = insu_status;
    }
}
