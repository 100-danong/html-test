    public Mono<RiderInfo> findByUserId(String riUserId) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT * ");
        sb.append(" FROM rider_info ");
        sb.append(" WHERE ri_userid =  :riUserId ");
        sb.append(" AND ri_state = 1 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("riUserId", riUserId)
                .map((row, metadata) -> {
                    RiderInfo riderInfo = new RiderInfo();
                    riderInfo.setRi_id(row.get("ri_id", Long.class));
                    return riderInfo;
                })
                .one();     // 결과가 1개 (LIMIT 1)
    }
