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

        public Mono<AccidentRes> findAccidentsByPhone(String phone){
        //라이더 사고 조회
        List<AccidentHistory> accidents = accidentRepository.findAccidentsByPhone(phone);

        // dto로 변환 : .map 스트림의 각 요소를 변환, .collect 변환된 데이터 수집하고 결과 반환(toList())
        List<AccidentDetailRes> accidentDetailResList = accidents.stream()
                .map(AccidentDetailRes::new)
                .collect(Collectors.toList());

        Integer totalCount = accidentRepository.findAccidentsCountByPhone(phone);
        // 변환한 dto + 카운트 추가해서 dto 반환
        return new AccidentRes(totalCount, accidentDetailResList);
    }

    이거 어떻게 해야해?
    
