    <select id="findCountByGciGroupId" parameterType="java.lang.String" resultType="java.lang.Integer">
        select count(gci_groupid) from groupcall_info where gci_groupid = #{gciGroupId}
    </select>
