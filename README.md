public Mono<String> findLastGroupId(LocalDateTime schStartDate, LocalDateTime schEndDate, Long riId) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT gci_groupid ");
    sql.append("FROM call_info ");
    sql.append("WHERE 1=1 ");
    sql.append("AND ci_appoint_time >= :schStartDate ");
    sql.append("AND ci_appoint_time <= :schEndDate ");
    sql.append("AND ri_id = :riId ");
    sql.append("ORDER BY ci_appoint_time DESC ");
    sql.append("LIMIT 1");

    return databaseClient.sql(sql.toString())
            .bind("schStartDate", schStartDate)
            .bind("schEndDate", schEndDate)
            .bind("riId", riId)
            .map(row -> row.get("gci_groupid", String.class))
            .one(); // Mono<String> 반환, 값 없으면 empty
}
