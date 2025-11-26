public Mono<String> findRejectReason(Long riId, String riInsuStatus) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT cci.cci_content ");
    sql.append("FROM common_code_info AS cci ");
    sql.append("INNER JOIN insurance_state_history AS ish ON cci.cci_code = ish.ih_reject_code ");
    sql.append("INNER JOIN insurance_history AS ih ON ih.ih_id = ish.ih_id ");
    sql.append("WHERE 1=1 ");
    sql.append("AND ih.ri_id = :riId ");
    sql.append("AND ih.ih_insu_state = :riInsuStatus ");
    sql.append("AND cci.cci_isuse = 'Y' ");
    sql.append("AND cci.cci_state = 1 ");
    sql.append("ORDER BY ish.ish_ins_time DESC ");
    sql.append("LIMIT 1");

    return databaseClient.sql(sql.toString())
            .bind("riId", riId)
            .bind("riInsuStatus", riInsuStatus)
            .map(row -> row.get("cci_content", String.class))
            .one(); // Mono<String> 반환, 값 없으면 empty
}
