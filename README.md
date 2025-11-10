    <update id="updateAllWithDrawComp" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_insurance_history SET
                rih_withdraw_complete_time  = #{r.rihWithdrawCompleteTime},
                rih_upd_time                = #{r.ihUpdTime}
            WHERE ri_id                     = #{r.riId}
        </foreach>
    </update>
