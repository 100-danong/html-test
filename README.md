    <select id="findByUserId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info
        WHERE ri_userid =  #{riUserId}
            AND ri_state = 1
    </select>

    <select id="findRiderInsureCount" parameterType="java.lang.String" resultType="java.lang.Integer">
        SELECT
            COUNT(*)
        FROM rider_info
        where 1=1
            and ri_userid = #{ri_userid}
            and ri_insu_status = '062'
            and ri_state = 1
    </select>

    <select id="findByRenewUserId" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info_renew
        WHERE ri_userid = #{riUserId}
        AND ri_state = 4
    </select>

    <select id="findByUserIdRenewLast" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.entity.RiderInfo">
        SELECT *
        FROM rider_info
        WHERE ri_userid =  #{riUserId}
        AND ri_state = 1
    </select>

