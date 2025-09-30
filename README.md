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

이제 이거 두개 해야해 

        if(history.getAhState() == 0) {
            accidentRepository.insertAccident(history);
        } else {
            accidentRepository.updateAccident(history);
        }
