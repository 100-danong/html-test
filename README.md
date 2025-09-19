    <select id="findBySellerCode" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        SELECT * FROM seller_info WHERE si_seller_code = #{siSellerCode}
    </select>

    <select id="findByCheckRiUserId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.rider.entity.RiderWebInfo">
        SELECT *
        FROM rider_info
        WHERE ri_state = 1
        AND ri_name = #{riName}
        AND ri_phone = #{riPhone}
    </select>

    <select id="findMaxRiId" resultType="java.lang.Long">
        SELECT MAX(r.ri_id)+1
        FROM
        (
            SELECT MAX(ri_id) AS ri_id
            FROM rider_info

            UNION ALL

            SELECT MAX(ri_id) AS ri_id
            FROM rider_info_renew
        ) r
    </select>

    <insert id="insert" parameterType="com.gogofnd.kb.partner.rider.entity.RiderWebInfo" useGeneratedKeys="true" keyProperty="riId">
        INSERT INTO rider_info (
            ri_id,
            ri_name,
            ri_phone,
            ri_birthdate,
            ri_bike_number,
            ri_driver_id,
            ri_active_area,
            ri_userid,
            ri_insu_status,
            ri_pay_status,
            ri_compinsu_enddate,
            ri_operpurp_code,
            ri_gender,
            ri_ss_number,
            ri_state,
            si_id,
            ri_balance,
            ri_ins_time,
            ri_upd_time
        ) VALUES (
            #{riId},
            #{riName},
            #{riPhone},
            #{riBirthdate},
            #{riBikeNumber},
            #{riDriverId},
            #{riActiveArea},
            #{riUserid},
            #{riInsuStatus},
            #{riPayStatus},
            #{riCompinsuEnddate},
            #{riOperpurpCode},
            #{riGender},
            #{riSsNumber},
            #{riState},
            #{siId},
            #{riBalance},
            #{riInsTime},
            #{riUpdTime}
        )
    </insert>

    <select id="findBySellerCmpcd" parameterType="java.lang.String" resultType="java.lang.String">
        select si_cmp_code
        from seller_info
        where si_seller_code = #{seller_code}
    </select>

    <select id="findForInsertById" parameterType="java.lang.Long" resultType="java.util.HashMap">
        SELECT si.si_id, si.si_policy_number, si.si_application_number, ih.ih_id
        FROM rider_info ri
        INNER JOIN seller_info si
        ON ri.si_id = si.si_id
        LEFT JOIN insurance_history ih
        ON ih.ri_id = ri.ri_id
        AND ih.si_id = si.si_id
        WHERE ri.ri_id = #{riId}
        AND ri.ri_state = 1
    </select>

    <select id="findMaxIhId" resultType="java.lang.Long">
        SELECT MAX(i.ih_id)+1
        FROM
        (
        SELECT MAX(ih_id) AS ih_id
        FROM insurance_history

        UNION ALL

        SELECT MAX(ih_id) AS ih_id
        FROM insurance_renew_history
        ) i
    </select>

        <insert id="insert" parameterType="com.gogofnd.kb.insurances.insurance.dto.WebHistoriesSaveDto" useGeneratedKeys="true" keyProperty="ihId">
        INSERT INTO insurance_history (
            ih_id,
            ri_id,
            si_id,
            ih_insu_state,
            ih_policy_number,
            ih_application_number,
            ih_effect_startdate,
            ih_effect_enddate,
            ih_until,
            ih_age_yn,
            ih_apply_state,
            ih_ins_time,
            ih_upd_time
        ) VALUES (
            #{ihId},
            #{riId},
            #{siId},
            #{ihInsuState},
            #{ihPolicyNumber},
            #{ihApplicationNumber},
            #{ihEffectStartdate},
            #{ihEffectEnddate},
            #{ihUntil},
            #{ihAgeYn},
            #{ihApplyState},
            #{ihInsTime},
            #{ihUpdTime}
        );

        UPDATE rider_info SET
            ri_insu_status  = #{ihInsuState},
            ri_total_webview_url = #{riTotalWebviewUrl},
            ri_upd_time     = #{ihUpdTime}
        WHERE ri_id         = #{riId}
        AND ri_state = 1
    </insert>

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

    <insert id="riderWebInsuranceHistoryInsert" parameterType="com.gogofnd.kb.partner.rider.dto.RiderInsuranceDto">
        INSERT INTO rider_insurance_history (
            ri_id,
            ih_id,
            rih_ins_time,
            rih_upd_time,
            rih_state
        ) VALUES (
            #{riId},
            #{ihId},
            #{rihInsTime},
            #{rihInsTime},
            1
        )
    </insert>

    <insert id="saveStateHistory" parameterType="com.gogofnd.kb.insurances.insurance.dto.WebHistoriesSaveDto">
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

    <update id="update" parameterType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        UPDATE rider_info SET
            ri_driver_id = #{riDriverId},
            ri_upd_time  = #{riUpdTime}
        WHERE ri_id = #{riId}
        AND ri_state = 1
    </update>
