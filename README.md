    <select id="findGroupCallByriIdAndTime" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        SELECT gci.*
        FROM groupcall_info gci
        WHERE gci.ri_id = #{riId}
        AND #{ciAppointTime} BETWEEN gci.gci_first_starttime AND gci.gci_last_endtime
        ORDER BY gci_upd_time DESC
        LIMIT 1
    </select>

    package com.gogofnd.kb.Call.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.time.LocalDateTime;

import static java.time.LocalDateTime.now;

@Table("groupcall_info")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GroupCallInfo {

    @Id
    private String gciGroupid;// 운행누적정보ID(GR+yyyyMMdd-증번6자리) : GR20230101-000001

    private Long riId;// 라이더ID

    private LocalDateTime gciFirstStarttime;// 그룹별 최초시작일시

    private LocalDateTime gciLastEndtime;// 그룹별 최종마감일시

    private Integer gciTotalBalance;// 운행 차감금액

    private float gciGogoTotalBalance;// 운행 차감금액(고고)

    private Integer gciTotalTime;// 그룹별 총 누적운행시간(minute)

    private String gciInsuCallId;// 보험사용 운행정보ID(GR라이더IDyyyyMMdd증번6자리) : GR123420230101000001

    private LocalDateTime gciInsTime;// 등록일시

    private LocalDateTime gciUpdTime;// 수정일시

    //--api 12--
    private String ciCallId;

    private String ciDeliveryAddress;

    private String riDriverId;

    private String siCmpCode;

    private String siPolicyNumber;

    private LocalDate salesDate;//영업기준일

    // 재그룹핑
    private Integer totalMinute;
    private Long siId;

    // 재그룹핑 후 groupcall_info에 저장시 필요
    private Long ciId;

    // 갱신 관련 필요
    private String spnPolicyNumber;
    private LocalDateTime spnEffectEnddate;


    public GroupCallInfo(String gciGroupid) {
        this.gciGroupid = gciGroupid;
    }

    public static GroupCallInfo create(String gci_groupid, long ri_id, LocalDateTime gci_first_starttime, LocalDateTime gci_last_endtime, float gci_gogo_total_balance, Integer gci_total_balance, Integer gci_total_time){
        return GroupCallInfo
                .builder()
                .gciGroupid(gci_groupid)
                .riId(ri_id)
                .gciFirstStarttime(gci_first_starttime)
                .gciLastEndtime(gci_last_endtime)
                .gciGogoTotalBalance(gci_gogo_total_balance)
                .gciTotalBalance(gci_total_balance)
                .gciTotalTime(gci_total_time)
                .gciInsTime(now())
                .gciUpdTime(now())
                .build();
    }

    public static GroupCallInfo create(String gci_groupid, long ri_id, LocalDateTime gci_first_starttime, LocalDateTime gci_last_endtime, float gci_gogo_total_balance, Integer gci_total_balance, Integer gci_total_time, LocalDate salesDate){
        return GroupCallInfo
                .builder()
                .gciGroupid(gci_groupid)
                .riId(ri_id)
                .gciFirstStarttime(gci_first_starttime)
                .gciLastEndtime(gci_last_endtime)
                .gciGogoTotalBalance(gci_gogo_total_balance)
                .gciTotalBalance(gci_total_balance)
                .gciTotalTime(gci_total_time)
                .gciInsTime(now())
                .gciUpdTime(now())
                .salesDate(salesDate)
                .build();
    }

    public static GroupCallInfo create(String gci_groupid, long ri_id, LocalDateTime gci_first_starttime, LocalDateTime gci_last_endtime, int gci_total_balance, Integer gci_total_time, Long si_id ){
        return GroupCallInfo
                .builder()
                .gciGroupid(gci_groupid)
                .riId(ri_id)
                .gciFirstStarttime(gci_first_starttime)
                .gciLastEndtime(gci_last_endtime)
                .gciTotalBalance(gci_total_balance)
                .gciTotalTime(gci_total_time)
                .siId(si_id)
                .gciInsTime(now())
                .gciUpdTime(now())
                .build();
    }

    public static GroupCallInfo create(String gci_groupid, long ri_id, Integer gci_total_balance, Integer gci_total_time){
        return GroupCallInfo
                .builder()
                .gciGroupid(gci_groupid)
                .riId(ri_id)
                .gciTotalBalance(gci_total_balance)
                .gciTotalTime(gci_total_time)
                .build();
    }
}


이건데 너 맘대로 변수명, 함수명 같은거 바꾸지 마
private final DatabaseClient databaseClient;

이거야
