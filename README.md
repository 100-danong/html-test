    <update id="updateSellerInfo" parameterType="map">
        UPDATE seller_info
        SET si_balance = si_balance - #{siBalance}
        WHERE si_id = #{siId}
    </update>
