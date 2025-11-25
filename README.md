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
