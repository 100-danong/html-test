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
