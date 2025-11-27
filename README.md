    <update id="updateSellerInfoForBalance" parameterType="java.util.Map">
        update seller_info
        set
            si_balance = si_balance - #{si_balance},
            si_upd_time = now()
        where si_id = #{si_id}
    </update>

    int resUpdSellerInfo = callMapper.updateSellerInfoForBalance(sellerInfo.getSi_id(), gogoBalance);
