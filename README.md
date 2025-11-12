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
