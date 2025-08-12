<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.gogofnd.kb.partner.call.mapper.GroupCallMapper">

    <select id="findReGroupcallInfoByGciGroupId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        select * from groupcall_info_kb where gci_groupid = #{gciGroupId}
    </select>

    <insert id="InsertReGroupCallInfoWhenDeliveryQuit" parameterType="com.gogofnd.kb.partner.call.entity.GroupcallInfo">
        insert into groupcall_info_kb
        (gci_groupid, ri_id, gci_first_starttime, gci_last_endtime, gci_gogo_total_balance,
        gci_total_balance, gci_total_time, gci_ins_time, gci_upd_time, sales_date)
        values
        (#{gciGroupid}, #{riId}, #{gciFirstStarttime}, #{gciLastEndtime}, #{gciGogoTotalBalance},
        #{gciTotalBalance}, #{gciTotalTime}, #{gciInsTime}, #{gciUpdTime}, #{salesDate})
    </insert>

    <update id="UpdateReGroupcallInfoWhenDeliveryQuit" parameterType="java.util.Map">
        UPDATE groupcall_info_kb
        SET
        gci_last_endtime = #{gciLastEndTime},
        gci_gogo_total_balance = #{gciGogoTotalBalance},
        gci_total_balance = #{gciTotalBalance},
        gci_total_time = #{updTotalTime},
        gci_upd_time = #{gciUpdTime}
        WHERE gci_groupId = #{gciGroupId}
    </update>

</mapper>
