Integer resInstInsuBalanceHistory = insuranceBalanceHistoryMapper.insuranceBalnceHistoryInsert(kbBalancesHistories);

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.gogofnd.kb.insurances.kb.mapper.InsuranceBalanceHistoryMapper">
    <insert id="insuranceBalnceHistoryInsert" parameterType="java.util.List">
        insert into insurance_balance_history
            (ibh_date, ibh_cmp_code, ibh_balance, ibh_use_amt)
        values
        <foreach collection="list" item="item" separator=",">
            (#{item.ibhDate}, #{item.ibhCmpCode}, #{item.ibhBalance}, #{item.ibhUseAmt})
        </foreach>
    </insert>
</mapper>
