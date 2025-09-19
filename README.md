    <select id="findRequestsRiderByInsuranceStatusYesterday" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.dto.RiderInfoDto">
        <![CDATA[
        SELECT r.ri_id,
            s.si_id,
            i.ih_id,
            r.ri_driver_id,
            r.ri_phone,
            r.ri_bike_number,
            r.ri_name,
            r.ri_ss_number,
            s.si_cmp_code,
            s.si_policy_number,
            r.ri_total_webview_url,
            r.ri_compinsu_enddate,
            r.ri_operpurp_code,
            r.ri_active_area,
            r.ri_insu_status,
            s.si_application_number,
            s.si_seller_code,
            r.ri_state,
            IFNULL(r.ri_ctcagreyn, 'Y') AS ri_ctcagreyn
        FROM rider_info r
        JOIN seller_info s
            ON r.si_id = s.si_id
        JOIN insurance_history i
            ON r.ri_id = i.ri_id
        WHERE i.ih_insu_state = #{status}
        AND r.ri_insu_status != '062'
        AND i.ih_upd_time < NOW()
        AND i.ih_upd_time >= SUBTIME(DATE_ADD(NOW(), INTERVAL -1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND r.ri_state = 1
        GROUP BY r.ri_id

        UNION ALL

        SELECT r.ri_id,
            r.si_id,
            i.ih_id,
            r.ri_driver_id,
            r.ri_phone,
            r.ri_bike_number,
            r.ri_name,
            r.ri_ss_number,
            s.si_cmp_code,
            s.spn_policy_number,
            r.ri_total_webview_url,
            r.ri_compinsu_enddate,
            r.ri_operpurp_code,
            r.ri_active_area,
            r.ri_insu_status,
            s.spn_application_number,
            si.si_seller_code,
            r.ri_state,
            IFNULL(r.ri_ctcagreyn, 'Y') AS ri_ctcagreyn
        FROM rider_info_renew r
        JOIN seller_policy_number s
            ON r.spn_id = s.spn_id
        JOIN insurance_renew_history i
            ON r.ri_id = i.ri_id
        JOIN seller_info si
        	ON si.si_id = r.si_id
        WHERE i.ih_insu_state = #{status}
        AND r.ri_insu_status != '062'
        AND i.ih_upd_time < NOW()
        AND i.ih_upd_time >= SUBTIME(DATE_ADD(NOW(), INTERVAL -1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND r.ri_state = 4
        AND s.spn_apply_state = 'W'
        GROUP BY r.ri_id
        ]]>
    </select>

    <select id="findSellerPolicyNumber" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.seller.entity.SellerPolicyNumber">
        SELECT *
        FROM seller_policy_number spn
        INNER JOIN seller_info si
        ON spn.si_cmp_code = si.si_cmp_code
        WHERE si.si_seller_code = #{siSellerCode}
        AND spn.spn_apply_state = #{spnApplyState}
    </select>

    <select id="findMaxRihId" resultType="java.lang.Long">
        SELECT MAX(i.rih_id)+1
        FROM
        (
        SELECT MAX(rih_id) AS rih_id
        FROM rider_insurance_history

        UNION ALL

        SELECT MAX(rih_id) AS rih_id
        FROM rider_insurance_renew_history
        ) i
    </select>

    <update id="riderInsuranceHistoryUnderUpdateAll" parameterType="java.util.List">
        <foreach collection="list" item="item" separator=";">
            UPDATE rider_insurance_history SET
                rih_under_request_time = #{item.rihUnderRequestTime},
                rih_upd_time = #{item.rihUpdTime}
            WHERE ri_id = #{item.riId}
        </foreach>
    </update>

    <update id="riderInsuranceHistoryUnderUpdateAllRenew" parameterType="java.util.List">
        <foreach collection="list" item="item" separator=";">
            UPDATE rider_insurance_renew_history SET
                rih_under_request_time = #{item.rihUnderRequestTime},
                rih_upd_time = #{item.rihUpdTime}
            WHERE ri_id = #{item.riId}
        </foreach>
    </update>
