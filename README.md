    <select id="findByCiCallId" parameterType="java.lang.String" resultType="java.lang.Integer">
        SELECT count(*)
        from call_count_info
        WHERE ci_call_id = #{ciCallId} AND flag = 'G';
    </select>
