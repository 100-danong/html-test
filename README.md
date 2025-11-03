    public Mono<String> findByRiderAndStatusOrderCrd(HashMap<String, Object> param) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT ish.ih_reject_code as recode ");
        sb.append(" FROM insurance_history ih ");
        sb.append(" INNER JOIN insurance_state_history ish ");
        sb.append(" ON ih.ih_id = ish.ih_id ");
        sb.append(" WHERE ih.ri_id = :riId ");
        sb.append(" AND ish.ih_insu_state = :rrRejectState ");
        sb.append(" ORDER BY ish.ish_ins_time DESC ");
        sb.append(" LIMIT 1 ");
        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("riId", param.get("riId"))
                .bind("rrRejectState", param.get("rrRejectState"))
                .map((row, metadata) -> {
                    return row.get("recode", String.class);
                })
                .one();     // 결과가 1개 (LIMIT 1)
    }
