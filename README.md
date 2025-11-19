    <insert id="riderInsuranceHistoryInsert" parameterType="com.gogofnd.kb.partner.rider.dto.RiderInsuranceDto">
        INSERT INTO rider_insurance_history (
            rih_id,
            ri_id,
            ih_id,
            rih_ins_time,
            rih_upd_time,
            rih_state
        ) VALUES (
            #{rihId},
            #{riId},
            #{ihId},
            #{rihInsTime},
            #{rihInsTime},
            1
        )
    </insert>
