    public Mono<Map<String, Object>> findByPhoneRiStatus(String phone) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT r.ri_insu_status as inStatus, i.ih_apply_state as applyState");
        sb.append(" FROM rider_info r JOIN insurance_history i ");
        sb.append(" ON r.ri_id = i.ri_id ");
        sb.append(" WHERE r.ri_phone = :phone ");
        sb.append(" AND r.ri_state = 1 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("phone", phone)
                .map((row, metadata) -> {
                    
                    return riderSellerRes;
                })
                .one();     // 결과가 1개 (LIMIT 1)
    }

        public RiderStatusRes getRiderInsuranceStatus(String phone) {
        Map<String, Object> rider = businessRiderInfoRepository.findByPhoneRiStatus(phone).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
        return new RiderStatusRes((String) rider.get("ri_insu_status"),(String) rider.get("ih_apply_state"));
    }
