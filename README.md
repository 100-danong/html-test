    <select id="findByRiderSsn" parameterType="java.lang.String" resultType="java.util.Map">
        SELECT r.ri_ss_number, r.ri_userid, s.si_name
        FROM rider_info r JOIN seller_info s
            ON r.si_id = s.si_id
        WHERE r.ri_name = #{name}
        AND r.ri_state = 1
    </select>
