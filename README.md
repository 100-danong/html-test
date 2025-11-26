public Mono<Integer> findRunDeliveryByDriverId(String riDriverId, LocalDate salesDate) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT COUNT(*) ");
    sql.append("FROM call_info ci ");
    sql.append("INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id ");
    sql.append("WHERE 1=1 ");
    sql.append("AND ri.ri_userid = :riDriverId ");
    sql.append("AND ri.ri_state = 1 ");
    sql.append("AND ci.ci_complete_time IS NULL ");
    sql.append("AND ci.sales_date = :salesDate");

    return databaseClient.sql(sql.toString())
            .bind("riDriverId", riDriverId)
            .bind("salesDate", salesDate)
            .map((row, metadata) -> row.get(0, Integer.class))
            .one();
}
