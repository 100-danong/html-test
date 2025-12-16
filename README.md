public Mono<Integer> update(HistoriesSaveDto dto) {

        StringBuffer sb = new StringBuffer();
        sb.append(" UPDATE insurance_history SET ");
        sb.append("     ih_insu_state = :ihInsuState, ");
        sb.append("     ih_effect_startdate = :ihEffectStartdate, ");
        sb.append("     ih_effect_enddate = :ihEffectEnddate, ");
        sb.append("     ih_until = :ihUntil, ");
        sb.append("     ih_upd_time = :ihUpdTime, ");
        sb.append("     ih_age_yn = :ihAgeYn, ");
        sb.append("     ih_apply_state = :ihApplyState ");
        sb.append(" WHERE ih_id = :ihId; ");

        sb.append(" UPDATE rider_info SET ");
        sb.append("     ri_insu_status = :ihInsuState, ");
        sb.append("     ri_upd_time = :ihUpdTime ");
        sb.append(" WHERE ri_id = :riId ");
        sb.append(" AND ri_state = 1 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("ihInsuState", dto.getIhInsuState())
                .bind("ihEffectStartdate", dto.getIhEffectStartdate())
                .bind("ihEffectEnddate", dto.getIhEffectEnddate())
                .bind("ihUntil", dto.getIhUntil())
                .bind("ihUpdTime", dto.getIhUpdTime())
                .bind("ihAgeYn", dto.getIhAgeYn())
                .bind("ihApplyState", dto.getIhApplyState())
                .bind("ihId", dto.getIhId())
                .bind("riId", dto.getRiId())
                .fetch()
                .rowsUpdated();
    }

	public Mono<Integer> updateRenew(HistoriesSaveDto dto) {

        StringBuffer sb = new StringBuffer();
        sb.append(" UPDATE insurance_renew_history SET ");
        sb.append("     ih_insu_state = :ihInsuState, ");
        sb.append("     ih_effect_startdate = :ihEffectStartdate, ");
        sb.append("     ih_effect_enddate = :ihEffectEnddate, ");
        sb.append("     ih_until = :ihUntil, ");
        sb.append("     ih_upd_time = :ihUpdTime, ");
        sb.append("     ih_age_yn = :ihAgeYn, ");
        sb.append("     ih_apply_state = :ihApplyState ");
        sb.append(" WHERE ih_id = :ihId; ");

        sb.append(" UPDATE rider_info_renew SET ");
        sb.append("     ri_insu_status = :ihInsuState, ");
        sb.append("     ri_upd_time = :ihUpdTime ");
        sb.append(" WHERE ri_id = :riId ");
        sb.append(" AND ri_state = 4 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("ihInsuState", dto.getIhInsuState())
                .bind("ihEffectStartdate", dto.getIhEffectStartdate())
                .bind("ihEffectEnddate", dto.getIhEffectEnddate())
                .bind("ihUntil", dto.getIhUntil())
                .bind("ihUpdTime", dto.getIhUpdTime())
                .bind("ihAgeYn", dto.getIhAgeYn())
                .bind("ihApplyState", dto.getIhApplyState())
                .bind("ihId", dto.getIhId())
                .bind("riId", dto.getRiId())
                .fetch()
                .rowsUpdated();
    }

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

        Object riStateObj = row.get("ri_state");
        dto.riState = ((Number) riStateObj).intValue();

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
	
