    public Mono<RiderWebInfo> findByCheckRiUserId(String name, String phone) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT * ");
        sb.append(" FROM rider_info ");
        sb.append(" WHERE ri_state = 1 ");
        sb.append(" AND ri_name = :riName ");
        sb.append(" AND ri_phone = :riPhone ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("riName", name)
                .bind("riPhone", phone)
                .map((row, metadata) -> {
                    RiderWebInfo riderWebInfo = new RiderWebInfo();
                    
                    return riderWebInfo;
                })
                .one();
    }

    package com.gogofnd.kb.Insurance.entity;

import com.gogofnd.kb.Insurance.dto.KbApiWebReq;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@Table("rider_info")
public class RiderWebInfo {
    @Id
    private Long riId;

    private Long siId;

    private String riDriverId; // kb에 보낼 driverId

    private String riUserid;

    private String riName;

    private String riPhone;

    private String riBirthdate;

    private int riGender;       // 1남 2여

    private Integer riState;    // 등록상태 1:사용 9:미사용

    private String riSsNumber; // 주민등록번호

    private String riBikeNumber; // 차량변호 한글명. 가입심사 할 때 실제 본인 소유 이륜차 아니면 심사 승인 안됨

    private String riActiveArea; // 활동지역

    private String riInsuStatus;    // 보헙가입 진행상태

    private String riInsuImgpath;   // 보험증권사진경로

    private int riBalance;      // 보험요금

    private String riPayStatus;       // 고고라 예치금

    private String riTotalWebviewUrl;

    private LocalDateTime riInsuStartdate;      // 보험적용기간시작
    private LocalDateTime riInsuEnddate;        // 보험적용기간종료
    private String riOperpurpCode;           // 의무보험 운행용도 코드
    private String riCompinsuEnddate;       // 의무보험 만기일자
    private String riReceivedDriverId;      // 기등재여부

    private LocalDateTime riInsTime;

    private LocalDateTime riUpdTime;

    // 증권 갱신용 시작
    private Long spnId;

    public void updateSpnId(Long spnId) {this.spnId = spnId;}

    public void updateRistateRenew() {this.riState = 3;}

    // 증권 갱신용 끝

    public void updateRiId(Long riId) {this.riId =riId;}
    public void updateInsuranceStatus(String status){
        this.riInsuStatus = status;
    }

    public void updateTotalWebViewUrl(String totalWebViewUrl) {
        this.riTotalWebviewUrl = totalWebViewUrl;
    }

    public void updateRequestData(KbApiWebReq req){
        this.riGender = req.getDriver_gender();
        this.riActiveArea = req.getDriver_region();
        this.riBikeNumber = req.getDriver_vcnum();
        this.riPhone = req.getDriver_phone();
        this.riSsNumber = req.getDriver_ssn();
        this.riName = req.getDriver_name();
        this.riCompinsuEnddate = req.getMtdt();
        this.riOperpurpCode = req.getOprn_purp();
        this.riUpdTime = LocalDateTime.now();
    }

    public static RiderWebInfo create(KbApiWebReq req, SellerInfo seller, String rawSsn) {
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

        return RiderWebInfo.builder()
                .siId(seller.getSi_id())
                .riBalance(0)
//                .policyNumber(seller.getPolicy_number())
//                .applicationNumber(seller.getApplication_number())
                .riInsuStatus("")
                .riBirthdate(createBirth(rawSsn))
                .riUserid(setDriverId)
                .riGender(req.getDriver_gender())
                .riActiveArea(req.getDriver_region())
                .riBikeNumber(req.getDriver_vcnum())
                .riPhone(req.getDriver_phone().substring(0, 11)) //수정필요
                .riSsNumber(req.getDriver_ssn())
                .riName(req.getDriver_name())
                .riState(1) // 1 사용, 9 미사용
                .riCompinsuEnddate(setMtdt)
                .riOperpurpCode(setOprnPurp)
                .riInsTime(LocalDateTime.now())
                .riUpdTime(LocalDateTime.now())
                .build();
    }

    public void updatePayStatus(String riPayStatus) {this.riPayStatus = riPayStatus;}

    public void createDriverId(String leftPadDriverId) {
        this.riDriverId = leftPadDriverId;
        this.riUpdTime = LocalDateTime.now();
    }
    private static String createBirth(String ssn) {
        String ssnBirth = ssn.substring(0, 7);
        String lastNum = ssnBirth.substring(6);

        String birthDate;

        if (lastNum.equals("1") || lastNum.equals("2") || lastNum.equals("5") || lastNum.equals("6")) {
            birthDate = "19";
        }
        else if (lastNum.equals("3") || lastNum.equals("4") || lastNum.equals("7") || lastNum.equals("8")){
            birthDate = "20";
        }
        else {
            // 주민번호가 비정상적일 경우
            birthDate = "99";
        }

        return birthDate + ssnBirth.substring(0, 6);
    }

}
