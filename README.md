    <select id="findRejectReason" parameterType="java.util.Map" resultType="java.lang.String">
        select cci.cci_content
        from common_code_info as cci
        inner join insurance_state_history as ish
            ON cci.cci_code = ish.ih_reject_code
        inner join insurance_history AS ih
            ON ih.ih_id = ish.ih_id
        where 1 = 1
            and ih.ri_id = #{ri_id}
            and ih.ih_insu_state = #{ri_insu_status}
            and cci.cci_isuse = 'Y'
            and cci.cci_state = 1
        order by ish.ish_ins_time desc
        limit 1;
    </select>

    resultMessage = callMapper.findRejectReason(riId, riInsuStatus);
