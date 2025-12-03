    <update id="riderInsuranceHistoryUnderUpdateAll" parameterType="java.util.List">
        <foreach collection="list" item="item" separator=";">
            UPDATE rider_insurance_history SET
                rih_under_request_time = #{item.rihUnderRequestTime},
                rih_upd_time = #{item.rihUpdTime}
            WHERE ri_id = #{item.riId}
        </foreach>
    </update>

    package com.gogofnd.kb.Insurance.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class RiderInsuranceDto {
    private Long rihId;

    private Long riId;

    private Long ihId;

    private LocalDateTime rihUnderRequestTime;

    // 언더라이팅 완료시간
    private LocalDateTime rihUnderCompleteTime;

    // 기명 요청시간
    private LocalDateTime rihEndoRequestTime;

    //기명 완료시간
    private LocalDateTime rihEndoCompleteTime;

    //기명 취소요청 시간
    private LocalDateTime rihWithdrawRequestTime;

    //기명취소 완료 시간
    private LocalDateTime rihWithdrawCompleteTime;

    private LocalDateTime rihInsTime;

    private LocalDateTime rihUpdTime;

    private Long rihState; // 1등록 9삭제

    private Long pastRiId;


    //    public static RiderInsuranceDto create(Long riderId){
//        return builder()
//                .riId(riderId)
//                .rihUnderRequestTime(LocalDateTime.now())
//                .rihUpdTime(LocalDateTime.now())
//                .build();
//    }
    public static RiderInsuranceDto create(Long rihId, Long riderId, Long ihId){
        return builder()
                .rihId(rihId)
                .riId(riderId)
                .ihId(ihId)
                .rihInsTime(LocalDateTime.now())
                .build();
    }

    public void updateUnderWritingRequestTime() {
        this.rihUnderRequestTime = LocalDateTime.now();
        this.rihUpdTime = LocalDateTime.now();
    }

    public void updateUnderWritingCompleteTime() {
        this.rihUnderCompleteTime = LocalDateTime.now();
    }

    public void updateEndorsementRequestTime() {
        this.rihEndoRequestTime = LocalDateTime.now();
    }

    public void updateEndorsementCompleteTime() {
        this.rihEndoCompleteTime = LocalDateTime.now();
    }

    public void updateWithdrawRequestTime() {
        this.rihWithdrawRequestTime = LocalDateTime.now();
        this.rihUpdTime = LocalDateTime.now();
    }

    public void updateWithdrawCompleteTime() {
        this.rihWithdrawCompleteTime = LocalDateTime.now();
        this.rihUpdTime = LocalDateTime.now();
    }

    public static RiderInsuranceDto from(Map<String, Object> row) {
        RiderInsuranceDto dto = new RiderInsuranceDto();

        dto.rihId = row.get("rih_id") != null ? ((Number) row.get("ih_id")).longValue() : null;
        dto.ihId = (Long) row.get("ih_id");
        dto.riId = (Long) row.get("ri_id");
        dto.rihEndoRequestTime = (LocalDateTime) row.get("rih_endo_request_time");
        dto.rihEndoCompleteTime = (LocalDateTime) row.get("rih_endo_complete_time");
        dto.rihUnderRequestTime = (LocalDateTime) row.get("rih_under_request_time");
        dto.rihUnderCompleteTime = (LocalDateTime) row.get("rih_under_complete_time");
        dto.rihWithdrawRequestTime = (LocalDateTime) row.get("rih_withdraw_request_time");
        dto.rihWithdrawCompleteTime = (LocalDateTime) row.get("rih_withdraw_complete_time");
        dto.rihInsTime = (LocalDateTime) row.get("rih_ins_time");
        dto.rihUpdTime = (LocalDateTime) row.get("rih_upd_time");
        dto.rihState = (Long) row.get("rih_state");

        return dto;
    }

}
