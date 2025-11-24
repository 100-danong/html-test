    <select id="findLastGroupCall" parameterType="java.lang.Long" resultType="java.lang.String">
        SELECT gci_groupid
        FROM groupcall_info
        WHERE 1=1
        AND ri_id = #{riId}
        AND gci_last_endtime IS NULL
    </select>
