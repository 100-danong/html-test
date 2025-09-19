    <select id="findByInsuranceStatusAPi4Specific" parameterType="java.lang.Long" resultType="com.gogofnd.kb.insurances.insurance.entity.InsuranceHistory">
        <![CDATA[
        SELECT *
        FROM insurance_history ih
        INNER JOIN rider_info ri
        ON ih.ri_id = ri.ri_id
        INNER JOIN seller_info si
        ON ih.si_id = si.si_id
        WHERE ih.ih_insu_state = '032'
        AND ri.ri_state = 1
        AND ih.ih_upd_time >= CAST(DATE(NOW()) AS DATETIME)
        AND ih.ih_upd_time < SUBTIME(DATE_ADD(NOW(), INTERVAL 1 DAY), TIMEDIFF(NOW() , CAST(DATE(NOW()) AS DATETIME)))
        AND ri.ri_id = #{riId}
        ]]>
    </select>
