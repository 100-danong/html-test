package com.gogofnd.kb.Kb.dto;

import lombok.*;
import org.springframework.data.relational.core.mapping.Column;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class KbBalancesHistoryDto {

    @Column(name = "ibh_date")
    private LocalDateTime ibhDate;//차감일자

    @Column(name = "ibh_cmp_code")
    private String ibhCmpCode;//제휴회사코드

    @Column(name = "ibh_balance")
    private Integer ibhBalance;//잔액

    @Column(name = "ibh_use_amt")
    private Integer ibhUseAmt;//사용금액

    public static KbBalancesHistoryDto create(BalanceInsureReq balanceInsureReq, String convertDate) {
        LocalDateTime time = LocalDateTime.now();

        String date = convertDate + " " + time.format(DateTimeFormatter.ofPattern("HH:mm:ss.SSS"));

        LocalDateTime dateTime = LocalDateTime.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS"));
//
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
//        LocalDateTime dateTime = LocalDateTime.parse(convertDate, formatter);

        return KbBalancesHistoryDto.builder()
                .ibhDate(dateTime)
                .ibhCmpCode(balanceInsureReq.getProxy_driv_coorp_cmpcd())
                .ibhBalance(Integer.parseInt(balanceInsureReq.getBalance()))
                .ibhUseAmt(Integer.parseInt(balanceInsureReq.getUse_amt()))
                .build();
    }
}



여기서 @Column(name = "") 부분에서 name에서 Cannot resolve method 'name' 라고 에러가 떠 어떻게 해결해?
