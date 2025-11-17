    <select id="findForUpdateByPolicyNumber" parameterType="java.util.Map" resultType="com.gogofnd.kb.insurances.insurance.dto.HistoriesSaveDto">
        SELECT ih.*, ri.ri_state
        FROM insurance_history ih
        INNER JOIN rider_info ri
        ON ih.ri_id = ri.ri_id
        INNER JOIN seller_info si
        ON ri.si_id = si.si_id
        WHERE ih.ri_id = #{riId}
        AND si.si_policy_number = #{siPolicyNumber}

        UNION ALL

        SELECT ih.*, ri.ri_state
        FROM insurance_renew_history ih
        INNER JOIN rider_info_renew ri
        ON ih.ri_id = ri.ri_id
        INNER JOIN seller_policy_number spn
        ON ri.spn_id = spn.spn_id
        WHERE ih.ri_id = #{riId}
        AND spn.spn_policy_number = #{siPolicyNumber}
        AND ri.ri_state != 9
    </select>

    package com.gogofnd.kb.Insurance.dto;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.util.Map;

import static java.time.LocalDateTime.now;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class HistoriesSaveDto {

    @Id
    private Long ihId;

    private Long riId;

    private Long siId;

    private String ihInsuState;

    private String ihPolicyNumber;

    private String ihApplicationNumber;

    private LocalDateTime ihEffectStartdate;
    private LocalDateTime ihEffectEnddate;
    private LocalDateTime ihUntil;

    private String ihAgeYn;

    private String ihApplyState; // 적용(Y), 만료(N), 대기(W)

    private LocalDateTime ihInsTime;
    private LocalDateTime ihUpdTime;

    private LocalDateTime ishInsTime;

    private String riTotalWebviewUrl;

    private LocalDateTime rihWithdrawCompleteTime;

    private LocalDateTime rihUnderCompleteTime;

    private LocalDateTime rihEndoCompleteTime;

    // insurance_state_history 테이블 데이터 추가
    private String ihRejectCode;

    // 증권 갱신 시 필요
    private Integer riState;

    private Long pastRiId;

    public static HistoriesSaveDto from(Map<String, Object> row) {
        HistoriesSaveDto dto = new HistoriesSaveDto();

        dto.ihId = row.get("ih_id") != null ? ((Number) row.get("ih_id")).longValue() : null;
        dto.riId = (Long) row.get("ri_id");
        dto.siId = (Long) row.get("si_id");
        dto.ihInsuState = (String) row.get("ih_insu_state");
        dto.ihPolicyNumber = (String) row.get("ih_policy_number");
        dto.ihApplicationNumber = (String) row.get("ih_application_number");
        dto.ihEffectStartdate = (LocalDateTime) row.get("ih_effect_startdate");
        dto.ihEffectEnddate = (LocalDateTime) row.get("ih_effect_enddate");
        dto.ihUntil = (LocalDateTime) row.get("ih_until");
        dto.ihAgeYn = (String) row.get("ih_age_yn");
        dto.ihApplyState = (String) row.get("ih_apply_state");
        dto.ihInsTime = (LocalDateTime) row.get("ih_ins_time");
        dto.ihUpdTime = (LocalDateTime) row.get("ih_upd_time");
        dto.riState = (Integer) row.get("ri_state");

        return dto;
    }


    public void updateEndoCompl() {
        this.rihEndoCompleteTime = now();
    }

    public void updateWithdrawCompl() {
        this.rihWithdrawCompleteTime = now();
    }

    public void updateUnderCompl() {
        this.rihUnderCompleteTime = now();

    }

    public void updateTime() {
        this.ihUpdTime = now();
    }

    public void updateIshInsTime() {this.ishInsTime = now();}

    public void updateRejectCode(String ihRejectCode) {this.ihRejectCode = ihRejectCode;}

    public void updateUntil(LocalDateTime ihUntil) {this.ihUntil = ihUntil;}

    public void updateEffectTime(LocalDateTime ihEffectStartdate, LocalDateTime ihEffectEnddate, LocalDateTime ihUntil) {
        this.ihEffectStartdate = ihEffectStartdate;
        this.ihEffectEnddate = ihEffectEnddate;
    }

    public void updateIhId(Long ihId) {
        this.ihId = ihId;
    }

    public static HistoriesSaveDto create(Long riId, Long siId, String ihInsuState, String ihPolicyNumber, String ihApplicationNumber, String ihAgeYn, String riTotalWebviewUrl) {
        return HistoriesSaveDto.builder()
                .riId(riId)
                .siId(siId)
                .ihInsuState(ihInsuState)
                .ihPolicyNumber(ihPolicyNumber)
                .ihApplicationNumber(ihApplicationNumber)
                .ihAgeYn(ihAgeYn)
                .ihApplyState("W") // 적용(Y), 만료(N), 대기(W)
                .ihInsTime(now())
                .ihUpdTime(now())
                .ishInsTime(now())
                .riTotalWebviewUrl(riTotalWebviewUrl)
                .build();
    }

}
