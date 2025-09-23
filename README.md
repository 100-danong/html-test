    <select id="findVroongBalance" resultType="java.lang.Long">
        SELECT s.si_balance
        FROM seller_info s
        WHERE s.si_cmp_code = 'G02'
    </select>

    <update id="updateVroongBalance" parameterType="java.lang.Long">
        UPDATE seller_info SET
            si_balance = #{result}
        WHERE si_cmp_code = 'G02'
    </update>
