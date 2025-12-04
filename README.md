    <select id="findApplicationSpn" parameterType="java.lang.String" resultType="java.lang.String">
        SELECT spn_application_number
        FROM seller_policy_number
        WHERE si_cmp_code = #{siCmpCode}
        AND spn_apply_state = #{spnApplyState}
    </select>
