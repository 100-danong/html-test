    <select id="findAllByDriverIdForCancel" parameterType="java.util.List" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info
        WHERE 1=1
        AND ri_driver_id IN
        <foreach collection='list' item='item' open='(' close=')' separator=','>
            #{item}
        </foreach>
    </select>
