    <update id="updateAllUnderComp" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_insurance_history SET
                rih_under_complete_time = #{r.rihUnderCompleteTime},
                rih_upd_time            = #{r.ihUpdTime}
            WHERE ri_id                 = #{r.riId}
        </foreach>
    </update>
