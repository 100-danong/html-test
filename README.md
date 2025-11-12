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
이거랑 밑에있는거랑 두개는 서로 다른거야 2개 만들어줘
        <update id="update" parameterType="com.gogofnd.kb.partner.rider.entity.RiderWebInfo">
        UPDATE rider_info SET
            ri_driver_id = #{riDriverId},
            ri_upd_time  = #{riUpdTime}
        WHERE ri_id = #{riId}
        AND ri_state = 1
    </update>
