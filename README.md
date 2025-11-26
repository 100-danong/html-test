public Mono<Integer> findCallDailyGroupIdCount(LocalDateTime schStartDate, LocalDateTime schEndDate, Long riId) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT COUNT(*) ");
    sql.append("FROM call_info ");
    sql.append("WHERE 1=1 ");
    sql.append("AND ci_appoint_time >= :schStartDate ");
    sql.append("AND ci_appoint_time <= :schEndDate ");
    sql.append("AND ri_id = :riId");

    return databaseClient.sql(sql.toString())
            .bind("schStartDate", schStartDate)
            .bind("schEndDate", schEndDate)
            .bind("riId", riId)
            .map(row -> row.get(0, Integer.class)) // COUNT(*)는 컬럼명이 없으므로 index 0
            .one(); // Mono<Integer> 반환, 값 없으면 empty
}
