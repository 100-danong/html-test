    <select id="findByDriverId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        select ri_id, ri_name, ri_driver_id
        from rider_info
        where ri_driver_id = #{ri_driver_id}
        AND ri_state = 1
    </select>
