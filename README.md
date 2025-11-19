    <update id="update" parameterType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        UPDATE rider_info SET
            ri_driver_id = #{riDriverId},
            ri_upd_time  = #{riUpdTime}
        WHERE ri_id = #{riId}
        AND ri_state = 1
    </update>
