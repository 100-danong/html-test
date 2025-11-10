    <update id="updateRiderInsurStatusAndApplyDateAll" parameterType="java.util.List">
        <foreach collection="list" item="r" separator=";">
            UPDATE rider_info SET
            ri_insu_status      = #{r.ihInsuState},
            ri_insu_startdate   = #{r.ihEffectStartdate},
            ri_insu_enddate     = #{r.ihEffectEnddate},
            ri_upd_time         = #{r.ihUpdTime},
            ri_state            = #{r.riState}
            WHERE ri_id         = #{r.riId}
        </foreach>
    </update>
