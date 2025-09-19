    <select id="findAllByDriverIdForCancel" parameterType="java.util.List" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info
        WHERE 1=1
        AND ri_driver_id IN
        <foreach collection='list' item='item' open='(' close=')' separator=','>
            #{item}
        </foreach>
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

    <select id="findByRiderId" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.rider.dto.RiderInsuranceDto">
        SELECT rih.*, ri.ri_state
        FROM rider_insurance_history rih
        JOIN rider_info ri
        ON rih.ri_id = ri.ri_id
        WHERE rih.ri_id = #{riId}
        AND ri.ri_state = #{riState}

        UNION ALL

        SELECT rih.*, ri.ri_state
        FROM rider_insurance_renew_history rih
        JOIN rider_info_renew ri
        ON rih.ri_id = ri.ri_id
        WHERE rih.ri_id = #{riId}
        AND ri.ri_state = #{riState}
    </select>

    <update id="updateAll" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
        UPDATE insurance_history SET
            ih_insu_state       = #{r.ihInsuState},
            ih_effect_startdate = #{r.ihEffectStartdate},
            ih_effect_enddate   = #{r.ihEffectEnddate},
            ih_until            = #{r.ihUntil},
            ih_upd_time         = #{r.ihUpdTime},
            ih_age_yn           = #{r.ihAgeYn},
            ih_apply_state      = #{r.ihApplyState}
        WHERE ih_id         = #{r.ihId}
        </foreach>
    </update>

    <insert id="saveAllStateHistory" parameterType="java.util.List" >
        INSERT INTO insurance_state_history (
            ish_ins_time,
            ih_id,
            ri_id,
            ih_reject_code,
            ih_insu_state,
            ih_effect_startdate,
            ih_effect_enddate,
            ih_until
        ) VALUES
        <foreach collection="list" item="r" separator=",">
        (
            #{r.ishInsTime},
            #{r.ihId},
            #{r.riId},
            #{r.ihRejectCode},
            #{r.ihInsuState},
            #{r.ihEffectStartdate},
            #{r.ihEffectEnddate},
            #{r.ihUntil}
        )
        </foreach>
    </insert>

    <update id="updateRiderInsurStatusAndApplyDateAll" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_info SET
            ri_insu_status      = #{r.ihInsuState},
            ri_insu_startdate   = #{r.ihEffectStartdate},
            ri_insu_enddate     = #{r.ihEffectEnddate},
            ri_upd_time         = #{r.ihUpdTime},
            ri_state            = #{r.riState}
            WHERE ri_id         = #{r.riId}
        </foreach>
    </update>

    <update id="updateAllWithDrawComp" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_insurance_history SET
                rih_withdraw_complete_time  = #{r.rihWithdrawCompleteTime},
                rih_upd_time                = #{r.ihUpdTime}
            WHERE ri_id                     = #{r.riId}
        </foreach>
    </update>

    <update id="updateAllRenew" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE insurance_renew_history SET
                ih_insu_state       = #{r.ihInsuState},
                ih_effect_startdate = #{r.ihEffectStartdate},
                ih_effect_enddate   = #{r.ihEffectEnddate},
                ih_until            = #{r.ihUntil},
                ih_upd_time         = #{r.ihUpdTime},
                ih_age_yn           = #{r.ihAgeYn},
                ih_apply_state      = #{r.ihApplyState}
            WHERE ih_id         = #{r.ihId}
        </foreach>
    </update>

    <insert id="saveAllStateHistoryRenew" parameterType="java.util.List" >
        INSERT INTO insurance_state_renew_history (
            ish_ins_time,
            ih_id,
            ri_id,
            ih_reject_code,
            ih_insu_state,
            ih_effect_startdate,
            ih_effect_enddate,
            ih_until
        ) VALUES
        <foreach collection="list" item="r" separator=",">
            (
                #{r.ishInsTime},
                #{r.ihId},
                #{r.riId},
                #{r.ihRejectCode},
                #{r.ihInsuState},
                #{r.ihEffectStartdate},
                #{r.ihEffectEnddate},
                #{r.ihUntil}
            )
        </foreach>
    </insert>

    <update id="updateRiderInsurStatusAndApplyDateAllRenew" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_info_renew SET
                ri_insu_status      = #{r.ihInsuState},
                ri_insu_startdate   = #{r.ihEffectStartdate},
                ri_insu_enddate     = #{r.ihEffectEnddate},
                ri_upd_time         = #{r.ihUpdTime}
            WHERE ri_id         = #{r.riId}
        </foreach>
    </update>

    <update id="updateAllWithDrawCompRenew" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_insurance_renew_history SET
                rih_withdraw_complete_time  = #{r.rihWithdrawCompleteTime},
                rih_upd_time                = #{r.ihUpdTime}
            WHERE ri_id                     = #{r.riId}
        </foreach>
    </update>
