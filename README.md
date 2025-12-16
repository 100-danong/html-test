@Transactional(readOnly = true)
    public Mono<RateInfoRes> getRateInfo(SellerCodeReq dto, String apiKey) throws Exception {
        //복호화 . sellecode랑 비교
        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}",decryptedApiKey);
        if(!dto.getSellerCode().equals(decryptedApiKey)){
            return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
        }

        // 운영사 조회후, 운영사가 kb와 계약한 시간당 요금 분 단위로 구하여 balance로 선언
        return accidentRepository.findSellerBySellerCode(dto.getSellerCode())
                .flatMap(sellerInfo -> {
                    String balance = String.valueOf((sellerInfo.getSi_db1_premium() + sellerInfo.getSi_db2_premium() + sellerInfo.getSi_pd_premium()) / 60);

                    // 운영사의 총 사고보상금 조회
                    return accidentRepository.findTotalCompensation(dto.getSellerCode())
                            .flatMap(totalCompensation -> {
                                // 손해율 = (총 보상금) / (운영사가 입금한 예납금) * 100
                                int sellerBalance = Math.toIntExact(sellerInfo.getSi_balance());
                                String strLossRate = String.format("%.2f", (sellerBalance == 0 ? 0 : (double) totalCompensation / sellerBalance * 100));

                                return new RateInfoRes(strLossRate,balance);
                            });
                });
    }

        public Mono<Integer> findTotalCompensation(String sellerCode) {

        StringBuffer sb = new StringBuffer();
        sb.append(" select ");
        sb.append(" ifnull(sum(ah.ah_compensation), 0) as tot_compensation ");
        sb.append(" from accident_history as ah ");
        sb.append(" inner join call_info as ci on ah.ah_call_id = ci.ci_id ");
        sb.append(" inner join rider_info as ri on ci.ri_id = ri.ri_id ");
        sb.append(" inner join seller_info as si on ri.si_id = si.si_id ");
        sb.append(" where 1=1 ");
        sb.append(" and si.si_seller_code = :si_seller_code ");
        sb.append(" and ri.ri_state = 1 ");

        String sql = sb.toString();

        log.info("쿼리 : {}", sql);

        return databaseClient.sql(sql)
                .bind("si_seller_code", sellerCode)
                .map((row, metadata) -> {
                    Integer total = row.get("tot_compensation", Integer.class);
                    return total;
                })
                .one();
    }
