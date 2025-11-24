    <select id="findGroupCallNotComplteTime" parameterType="java.lang.Long" resultType="java.lang.Integer">
        SELECT count(*)
        FROM groupcall_info
        WHERE 1=1
        AND ri_id = #{riId}
        AND gci_last_endtime IS NULL
    </select>
