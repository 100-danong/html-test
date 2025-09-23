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

    <select id="findApplicationSpn" parameterType="java.lang.String" resultType="java.lang.String">
        SELECT spn_application_number
        FROM seller_policy_number
        WHERE si_cmp_code = #{siCmpCode}
        AND spn_apply_state = #{spnApplyState}
    </select>

    <select id="findForUpdateById" parameterType="java.util.Map" resultType="com.gogofnd.kb.insurances.insurance.dto.HistoriesSaveDto">
        SELECT ih.*, ri.ri_state
        FROM insurance_history ih
        INNER JOIN rider_info ri
        ON ih.ri_id = ri.ri_id
        WHERE ih.ri_id = #{riId}
        AND ri.ri_state = #{riState}

        UNION ALL

        SELECT ih.*, ri.ri_state
        FROM insurance_renew_history ih
        INNER JOIN rider_info_renew ri
        ON ih.ri_id = ri.ri_id
        WHERE ih.ri_id = #{riId}
        AND ri.ri_state = #{riState}
    </select>

    <update id="update" parameterType="com.gogofnd.kb.insurances.insurance.dto.HistoriesSaveDto">
        UPDATE insurance_history SET
            ih_insu_state       = #{ihInsuState},
            ih_effect_startdate = #{ihEffectStartdate},
            ih_effect_enddate   = #{ihEffectEnddate},
            ih_until            = #{ihUntil},
            ih_upd_time         = #{ihUpdTime},
            ih_age_yn           = #{ihAgeYn},
            ih_apply_state      = #{ihApplyState}
        WHERE ih_id         = #{ihId};

        UPDATE rider_info SET
            ri_insu_status  = #{ihInsuState},
            ri_upd_time     = #{ihUpdTime}
        WHERE ri_id         = #{riId}
        AND ri_state = 1

    </update>

    <update id="updateWebView" parameterType="com.gogofnd.kb.insurances.insurance.dto.HistoriesSaveDto">
        UPDATE rider_info SET
            ri_total_webview_url    = #{riTotalWebviewUrl},
            ri_upd_time             = #{ihUpdTime}
        WHERE ri_id                 = #{riId}
        AND ri_state = 1
    </update>

    <insert id="saveStateHistory" parameterType="com.gogofnd.kb.insurances.insurance.dto.HistoriesSaveDto">
        INSERT INTO insurance_state_history (
            ish_ins_time,
            ih_id,
            ri_id,
            ih_insu_state,
            ih_effect_startdate,
            ih_effect_enddate,
            ih_until
        ) VALUES (
            #{ihUpdTime},
            #{ihId},
            #{riId},
            #{ihInsuState},
            #{ihEffectStartdate},
            #{ihEffectEnddate},
            #{ihUntil}
        );
    </insert>
