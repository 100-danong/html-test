    <update id="updateRiderStatus" parameterType="com.gogofnd.kb.business.dto.UpdateStatusReq">
        UPDATE rider_info SET
            ri_pay_status = #{status},
            ri_upd_time = NOW()
        WHERE ri_driver_id = #{driverId}
        AND ri_state = 1
    </update>
