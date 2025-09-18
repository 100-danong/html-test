    <select id="findAccidentsByPhone" parameterType="java.lang.String" resultType="com.gogofnd.kb.insurances.accident.entity.AccidentHistory">
        CALL findAccidentsByPhone(
                #{ri_phone, mode=IN, jdbcType=VARCHAR, javaType=String}
            )
    </select>

    <select id="findAccidentsCountByPhone" parameterType="java.lang.String" resultType="java.lang.Integer">
        CALL findAccidentsCountByPhone(
                #{ri_phone, mode=IN, jdbcType=VARCHAR, javaType=String}
            )
    </select>
