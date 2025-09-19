    <select id="findByLoginIdAndSellerCode" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT r.ri_id, r.ri_ss_number, r.ri_insu_status
        FROM rider_info r
        JOIN seller_info s
            ON r.si_id = s.si_id
        WHERE r.ri_userid = #{loginId}
            AND s.si_seller_code = #{sellerCode}
            AND r.ri_state = 1
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
