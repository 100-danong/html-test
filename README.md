    <select id="findRequestsRiderByInsuranceStatusToday" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.dto.RiderInfoDto">
        <![CDATA[
        SELECT r.ri_id,
            s.si_id,
            r.ri_driver_id,
            r.ri_userid,
            r.ri_phone,
            r.ri_bike_number,
            r.ri_name,
            r.ri_ss_number,
            s.si_cmp_code,
            s.si_policy_number,
            s.si_seller_code,
            r.ri_total_webview_url,
            r.ri_compinsu_enddate,
            r.ri_operpurp_code,
            r.ri_active_area,
            r.ri_insu_status,
            s.si_application_number,
            r.ri_state,
            r.ri_ctcagreyn
        FROM rider_info r
        JOIN seller_info s
            ON r.si_id = s.si_id
        JOIN insurance_history i
            ON r.ri_id = i.ri_id
        WHERE r.ri_insu_status = #{status}
        AND r.ri_state = 1
        AND i.ih_upd_time >= SUBTIME(DATE_ADD(NOW(), INTERVAL -1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND i.ih_upd_time < NOW()
        ]]>
    </select>
