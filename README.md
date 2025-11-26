    <select id="findByCallIdForDupl" parameterType="java.lang.String" resultType="java.lang.Integer">
        select
            count(*)
        from call_info
        where 1=1
            and ci_call_id = #{ci_call_id}
    </select>
