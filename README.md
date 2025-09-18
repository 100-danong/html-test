    <select id="findByPhoneRenew" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info_renew
        WHERE ri_phone = #{phone}
        AND ri_state = 4
    </select>

    <select id="findRequestsByRiderInsuranceStatusToday" parameterType="java.lang.Long" resultType="java.lang.Integer">
        <![CDATA[
        SELECT COUNT(*)
        FROM insurance_history ih INNER JOIN rider_info ri
        ON ih.ri_id = ri.ri_id
        where ih.ih_insu_state = '021'
        AND ri.ri_state = 1
        AND ih.ih_upd_time >= CAST(DATE(NOW()) AS DATETIME)
        AND ih.ih_upd_time < SUBTIME(DATE_ADD(NOW(), INTERVAL 1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND ri.ri_id = #{riId}
        ]]>
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

    <update id="updateRiInsuState" parameterType="com.gogofnd.kb.insurances.insurance.dto.HistoriesSaveDto">
        UPDATE rider_info SET
        ri_insu_status = #{ihInsuState},
        ri_upd_time  = #{ihUpdTime}
        WHERE ri_id = #{riId}
        AND ri_state = 1
    </update>

    <update id="updateCtc" parameterType="java.util.Map">
        UPDATE rider_info SET
            ri_ctcagreyn = #{ctcAgreYn},
            ri_upd_time  = NOW()
        WHERE ri_id = #{riId}
        AND ri_state = 1
    </update>
