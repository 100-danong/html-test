    <select id="findRunDeliveryByDriverId" resultType="java.lang.Integer">
        select count(*)
        from call_info as ci
        inner join rider_info as ri on ci.ri_id = ri.ri_id
        where 1=1
            and ri.ri_userid = #{ri_driver_id}
            AND ri.ri_state = 1
            and ci.ci_complete_time is null
            and ci.sales_date = #{sales_date}
    </select>

    int chkCompleteCall = callMapper.findRunDeliveryByDriverId(dto.getDriver_id(), groupNow);
