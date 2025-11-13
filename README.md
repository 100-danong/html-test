    <select id="findAllByDriverId" parameterType="java.util.List" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM (
            SELECT ri.ri_driver_id, ri.ri_id, ri.ri_state, ri.ri_insu_status, si.si_policy_number
            FROM rider_info ri
            INNER JOIN seller_info si
            ON ri.si_id = si.si_id
            WHERE 1=1
            AND ri_state = 1
            AND ri_driver_id IN
            <foreach collection='list' item='item' open='(' close=')' separator=','>
                #{item}
            </foreach>
            GROUP BY ri_driver_id

            UNION ALL

            SELECT rin.ri_driver_id, rin.ri_id, rin.ri_state, rin.ri_insu_status, spn.spn_policy_number
            FROM rider_info_renew rin
            INNER JOIN seller_policy_number spn
            ON rin.spn_id = spn.spn_id
            WHERE 1=1
            AND ri_state = 4
            AND ri_driver_id IN
            <foreach collection='list' item='item' open='(' close=')' separator=','>
                #{item}
            </foreach>
            GROUP BY ri_driver_id
        ) AS t
        ORDER BY ri_id
    </select>

    이 쿼리를 해야하는데

    package com.gogofnd.kb.Insurance.entity;

import lombok.Getter;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import java.time.LocalDateTime;

@Table("rider_info")
@Getter
@Setter
public class RiderInfo {

    @Id
    private Long ri_id;

    private String ri_name;
    private String ri_phone;
    private String ri_birthdate;
    private int ri_gender;
    private String ri_ss_number;
    private String ri_bike_number;
    private String ri_driver_id;
    private String ri_active_area;
    private String ri_userid;
    private String ri_insu_status;
    private String ri_compinsu_enddate;
    private String ri_operpurp_code;
    private LocalDateTime ri_insu_startdate;
    private LocalDateTime ri_insu_enddate;
    private String ri_insu_imgpath;
    private Long si_id;
    private String ri_total_webview_url;
    private int ri_balance;
    private String ri_pay_status;
    private String ri_received_driver_id;
    private String ri_ctcagreyn;
    private LocalDateTime ri_ins_time;
    private LocalDateTime ri_upd_time;
    private int ri_state;


}


여기에다가 넣어야해 LIST형식이야
