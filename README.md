    <select id="findBySiId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        select * from seller_info where si_id = #{siId}
    </select>

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

    public static SellerInfo create(io.r2dbc.spi.Row row) {
        SellerInfo s = new SellerInfo();
        s.setSi_id(row.get("si_id", Long.class));
        s.setSi_cmp_code(row.get("si_cmp_code", String.class));
        s.setSi_balance(row.get("si_balance", Long.class));
        s.setSi_name(row.get("si_name", String.class));
        s.setSi_phone(row.get("si_phone", String.class));
        s.setSi_tell(row.get("si_tell", String.class));
        s.setSi_seller_code(row.get("si_seller_code", String.class));
        s.setSi_api_key(row.get("si_api_key", String.class));
        s.setSi_address(row.get("si_address", String.class));
        s.setSi_detail_address(row.get("si_detail_address", String.class));
        s.setSi_ceo_name(row.get("si_ceo_name", String.class));
        s.setSi_busi_number(row.get("si_busi_number", String.class));
        s.setSi_policy_number(row.get("si_policy_number", String.class));
        s.setSi_application_number(row.get("si_application_number", String.class));
        s.setSi_apply_state(row.get("si_apply_state", String.class));
        s.setSi_insu_type(row.get("si_insu_type", String.class));
        s.setSi_business_type(row.get("si_business_type", String.class));
        s.setSi_business_item(row.get("si_business_item", String.class));
        s.setSi_insu_amount(row.get("si_insu_amount", Double.class));
        s.setSi_insu_flat_amount(row.get("si_insu_flat_amount", Integer.class));
        s.setSi_db1_premium(row.get("si_db1_premium", Integer.class));
        s.setSi_db2_premium(row.get("si_db2_premium", Integer.class));
        s.setSi_pd_premium(row.get("si_pd_premium", Integer.class));
        s.setSi_flat_rate(row.get("si_flat_rate", Integer.class));
        s.setSi_insu_dc_rate(row.get("si_insu_dc_rate", Double.class));
        s.setSi_ins_time(row.get("si_ins_time", LocalDateTime.class));
        s.setSi_upd_time(row.get("si_upd_time", LocalDateTime.class));
        s.setSi_state(row.get("si_state", Integer.class));
        s.setSales_time(row.get("sales_time", LocalTime.class));
        return s;
    }

}
