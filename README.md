    <select id="findInsuTypeByDriverId" parameterType="java.lang.String" resultType="java.lang.String">
        select
            si.si_insu_type
        from rider_info as ri
        inner join seller_info as si on ri.si_id = si.si_id
        where ri.ri_driver_id = #{driver_id}
        AND ri.ri_state = 1
    </select>

    <update id="updateRiderForOneDayInsurance" parameterType="com.gogofnd.kb.business.dto.UpdateInsureDateReq">
        UPDATE rider_info SET
            ri_insu_startdate = #{effectiveStartDate},
            ri_insu_enddate = #{effectiveEndDate},
            ri_pay_status = 'Y',
            ri_upd_time = NOW()
        WHERE ri_driver_id = #{driverId}
        AND ri_state = 1
    </update>
