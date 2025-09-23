    <select id="findByDriverId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.dto.res.RiderSellerRes">
        SELECT r.ri_id AS id,
            r.ri_name AS name,
            r.ri_phone AS phone,
            r.ri_driver_id AS driverId,
            s.si_cmp_code AS cmpcd,
            s.si_policy_number AS policyNumber
        FROM rider_info r JOIN seller_info s
            ON r.si_id = s.si_id
        WHERE r.ri_driver_id = #{id}
        AND r.ri_state = 1
    </select>
