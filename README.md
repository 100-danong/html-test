HashMap<String, Object> byId = historyMapper.findForInsertById(riderWeb.getRiId());

    <select id="findForInsertById" parameterType="java.lang.Long" resultType="java.util.HashMap">
        SELECT si.si_id, si.si_policy_number, si.si_application_number, ih.ih_id
        FROM rider_info ri
        INNER JOIN seller_info si
        ON ri.si_id = si.si_id
        LEFT JOIN insurance_history ih
        ON ih.ri_id = ri.ri_id
        AND ih.si_id = si.si_id
        WHERE ri.ri_id = #{riId}
        AND ri.ri_state = 1
    </select>
