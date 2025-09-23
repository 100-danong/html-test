    <select id="findByPhoneRiStatus" parameterType="java.lang.String" resultType="java.util.Map">
        SELECT r.ri_insu_status, i.ih_apply_state
        FROM rider_info r JOIN insurance_history i
            ON r.ri_id = i.ri_id
        WHERE r.ri_phone = #{phone}
        AND r.ri_state = 1
    </select>

    <select id="findRiderGoGoraInsuranceList" parameterType="java.lang.String" resultType="com.gogofnd.kb.partner.rider.dto.RiderGogoraResDto">
        SELECT
               ri.ri_driver_id AS driverId,
               ri.ri_ins_time AS createdDate,
               ri.ri_insu_status AS insuranceStatus,
               cci1.cci_code_name AS statusName,
               cci2.cci_content AS rejectMessage,
               MAX(ri.ri_id)
          FROM rider_info ri
          JOIN seller_info si ON ri.si_id = si.si_id
          JOIN (
                SELECT
                        A.ish_ins_time,
                        A.ih_id,
                        A.ri_id,
                        A.ih_reject_code
                  FROM insurance_state_history A
                  JOIN (
                        SELECT
                               ih_id,
                               MAX(ish_ins_time) ish_ins_time
                          FROM insurance_state_history ish
                      GROUP BY ih_id
                       ) B ON A.ih_id = B.ih_id
                 WHERE A.ish_ins_time = B.ish_ins_time
               ) ish ON ri.ri_id = ish.ri_id
          JOIN common_code_info cci1 ON ri.ri_insu_status = cci1.cci_code
     LEFT JOIN common_code_info cci2 ON ish.ih_reject_code = cci2.cci_code
         WHERE si.si_seller_code = #{siSellerCode}
      GROUP BY ri_driver_id
      ORDER BY ri.ri_id DESC
    </select>

    <update id="updateRiderLoginId" parameterType="com.gogofnd.kb.business.dto.UpdateLoginIdReq">
        update rider_info SET
            ri_userid = #{loginId},
            ri_upd_time = NOW()
        where ri_driver_id = #{driverId}
        AND ri_state = 1
    </update>
