    <select id="findByCallIdForGroupid" parameterType="java.lang.String" resultType="java.lang.String">
        select gci_groupid
        from call_info
        where ci_call_id = #{ci_call_id}
    </select>
