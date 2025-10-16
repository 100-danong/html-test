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
                    riderInfo.setRi_total_webview_url(row.get("ri_total_webview_url", String.class));
                    return riderInfo;
                })
                .one();     // 결과가 1개 (LIMIT 1)
    }


    public String getTotalUrlApi1(String riUserId) {
        RiderInfo rider = riderInfoRepository.findByUserId(riUserId).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
        return rider.getRi_total_webview_url();
    }
