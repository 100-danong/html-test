    <select id="findByGroupCallIdForAccident" parameterType="java.lang.String" resultType="com.gogofnd.kb.insurances.accident.dto.AccidentSearch">
        SELECT ci.ci_insu_call_id AS callId, gci.gci_first_starttime AS startTime, ci.ri_id AS riId
        FROM groupcall_info gci
        INNER JOIN call_info ci
        ON ci.gci_groupid = gci.gci_groupid
        WHERE ci.gci_groupid = #{callId}
        ORDER BY ci.ci_appoint_time
        LIMIT 1
    </select>

    <select id="findByInsuCallIdForAccident" parameterType="java.lang.String" resultType="com.gogofnd.kb.insurances.accident.dto.AccidentSearch">
        SELECT ci1.ci_insu_call_id AS callId, ci1.ci_appoint_time AS startTime, ci2.ri_id AS riId
        FROM call_info ci1
        INNER JOIN (SELECT gci_groupid, ri_id
                    FROM call_info
                    WHERE ci_insu_call_id = #{callId}
                    LIMIT 1) AS ci2
        ON ci1.gci_groupid = ci2.gci_groupid
        ORDER BY ci1.ci_appoint_time
        LIMIT 1
    </select>

    <select id="findAccident" parameterType="java.lang.String" resultType="com.gogofnd.kb.insurances.accident.entity.AccidentHistory">
        SELECT *
        FROM accident_history
        WHERE ah_claim_number = #{ahClaimNumber}
        ORDER BY ah_id desc limit 1
    </select>

    <insert id="insertAccident" parameterType="com.gogofnd.kb.insurances.accident.entity.AccidentHistory">
        INSERT INTO accident_history
            (ah_accident_time, ah_claim_number, ah_claim_time, ah_call_id, ah_ins_time, ah_upd_time)
        VALUES
            (#{ahAccidentTime}, #{ahClaimNumber}, #{ahClaimTime}, #{ahCallId}, NOW(), NOW())
    </insert>

    <update id="updateAccident" parameterType="com.gogofnd.kb.insurances.accident.entity.AccidentHistory">
        UPDATE accident_history
            SET ah_upd_time = NOW()
        WHERE ah_claim_number = #{ahClaimNumber}
    </update>
