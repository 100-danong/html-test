public Mono<Integer> update(RiderInfo rider) {

    StringBuffer sb = new StringBuffer();
    sb.append(" UPDATE rider_info SET ");
    sb.append("     ri_driver_id = :riDriverId, ");
    sb.append("     ri_upd_time  = :riUpdTime ");
    sb.append(" WHERE ri_id = :riId ");
    sb.append("   AND ri_state = 1 ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("riDriverId", rider.getRi_driver_id())
            .bind("riUpdTime", rider.getRi_upd_time())
            .bind("riId", rider.getRi_id())
            .fetch()
            .rowsUpdated();   // 영향을 받은 row 수 반환
}
