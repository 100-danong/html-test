    <select id="findByReSalesDateRiId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.CallCountInfo">
        SELECT *
        from call_count_info
        WHERE sales_date = #{salesDate} AND ri_id = #{riId} AND flag = 'R'
        ORDER BY cci_group_count DESC, cci_total_count DESC
        LIMIT 1;
    </select>

    package com.gogofnd.kb.Gosafe.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table("call_count_info")
public class CallCountInfo {
    @Id
    private Integer cciId; //PK

    private LocalDate salesDate;//영업기준일

    private Long riId;//라이더ID

    private Long siId;//플랫폼ID

    private String ciCallId;//배달 콜ID(플랫폼사제공)

    private int cciStartCount;//시작카운트

    private int cciEndCount;//종료카운트

    private int cciGroupCount;//그룹핑카운트

    private int cciTotalCount;//합계카운트

    private LocalDateTime cciInsTime;//등록일시

    private LocalDateTime cciUpdTime;//수정일시

    private String flag;//그룹:G / 리그룹:R / 배치:B

    public static CallCountInfo create(LocalDate today, long ri_id, String call_id, long si_id) {
        return CallCountInfo.builder()
                .salesDate(today)
                .riId(ri_id)
                .siId(si_id)
                .ciCallId(call_id)
                .cciStartCount(1)
                .cciEndCount(0)
                .cciGroupCount(1)
                .cciTotalCount(1)
                .flag("G")
                .build();
    }

    public static CallCountInfo create(LocalDate today, long ri_id, String call_id, long si_id, String flag) {
        return CallCountInfo.builder()
                .salesDate(today)
                .riId(ri_id)
                .siId(si_id)
                .ciCallId(call_id)
                .cciStartCount(1)
                .cciEndCount(1)
                .cciGroupCount(1)
                .cciTotalCount(1)
                .flag(flag)
                .build();
    }

}
