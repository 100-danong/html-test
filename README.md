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
