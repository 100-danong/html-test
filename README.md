    public Mono<SellerInfo> findBySellerCode(String sellerCode) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT * FROM seller_info WHERE si_seller_code = :siSellerCode ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("siSellerCode", sellerCode)
                .map((row, metadata) -> {
                    SellerInfo sellerInfo = new SellerInfo();

                    return sellerInfo;
                })
                .one();
    }

    이 코드에서 값을 조회해 와야 하는데 SellerInfo 코드가
    package com.gogofnd.kb.Insurance.entity;

import lombok.Getter;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Table("seller_info")
@Getter
@Setter
public class SellerInfo {

    @Id
    private Long si_id;

    private String si_cmp_code;
    private Long si_balance;
    private String si_name;
    private String si_phone;
    private String si_tell;
    private String si_seller_code;
    private String si_api_key;
    private String si_address;
    private String si_detail_address;
    private String si_ceo_name;
    private String si_busi_number;
    private String si_policy_number;
    private String si_application_number;
    private String si_apply_state;
    private String si_insu_type;
    private String si_business_type;
    private String si_business_item;
    private double si_insu_amount;
    private int si_insu_flat_amount;
    private int si_db1_premium;
    private int si_db2_premium;
    private int si_pd_premium;
    private int si_flat_rate;
    private double si_insu_dc_rate;
    private LocalDateTime si_ins_time;
    private LocalDateTime si_upd_time;
    private int si_state;
    private LocalTime sales_time;



}


이거야 create 함수 있어야 할 것 같아
