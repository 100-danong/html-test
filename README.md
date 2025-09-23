    <insert id="insuranceBalnceHistoryInsert" parameterType="java.util.List">
        insert into insurance_balance_history
            (ibh_date, ibh_cmp_code, ibh_balance, ibh_use_amt)
        values
        <foreach collection="list" item="item" separator=",">
            (#{item.ibhDate}, #{item.ibhCmpCode}, #{item.ibhBalance}, #{item.ibhUseAmt})
        </foreach>
    </insert>
