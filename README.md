    <select id="findSellerPolicyNumber" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.seller.entity.SellerPolicyNumber">
        SELECT *
        FROM seller_policy_number spn
        INNER JOIN seller_info si
        ON spn.si_cmp_code = si.si_cmp_code
        WHERE si.si_seller_code = #{siSellerCode}
        AND spn.spn_apply_state = #{spnApplyState}
    </select>

    riders.forEach(r -> {
            sellerPolicyNumberMapper.findSellerPolicyNumber(r.getSiSellerCode(),"W");
            // renew 테이블과 기존 테이블의 rih_id의 순번을 맞추기위해 rih_id값 가져옴
            Long rihId = riderInsuranceHistoryMapper.findMaxRihId().block();
            System.out.println("r.getRiState() = " + r.getRiState());
            // 보험 상태 컬럼 생성
            RiderInsuranceDto riderInsuranceDto = RiderInsuranceDto.create(rihId,r.getRiId(), r.getIhId());

            riderInsuranceDto.updateUnderWritingRequestTime();

            if(r.getRiState() == 4) {
                insuranceHistoriesRenew.add(riderInsuranceDto);
            } else {
                insuranceHistories.add(riderInsuranceDto);
            }

            //231026 - 딜버, 온나 자동기명등재로 로직 변경 : KB는 policy_number로 자동기명등재대상 판단
            KbApiRiderDto dto = new KbApiRiderDto(r);
            String ssn = dto.getSsn();

            //암호화되서 저장된 주민등록번호를 복호화 한 뒤, kb에서 정한 방식으로 암호화한다.
            try {
                updateSsn(dto, ssn);
                riderDtoList.add(dto);
            } catch (Exception e) {
                throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
            }
        });
