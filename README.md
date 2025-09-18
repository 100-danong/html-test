    <select id="findSellerBySellerCode" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.seller.entity.SellerInfo">
        select
            si_seller_code, si_balance, si_db1_premium, si_db2_premium, si_pd_premium
        from seller_info
        where si_seller_code = #{si_seller_code}
    </select>

    <select id="findTotalCompensation" parameterType="java.lang.String" resultType="java.lang.Integer">
        select
            ifnull(sum(ah.ah_compensation), 0) as tot_compensation
        from accident_history as ah
                 inner join call_info as ci on ah.ah_call_id = ci.ci_id
                 inner join rider_info as ri on ci.ri_id = ri.ri_id
                 inner join seller_info as si on ri.si_id = si.si_id
        where 1=1
          and si.si_seller_code = #{si_seller_code}
          and ri.ri_state = 1
    </select>
