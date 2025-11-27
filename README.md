public Mono<LocalDateTime> findMinTime(String gciGroupId) {
    StringBuffer sb = new StringBuffer();
    sb.append("SELECT MIN(ci_appoint_time) AS ciAppointTime ")
      .append("FROM call_info ")
      .append("WHERE gci_groupid = :gciGroupId");

    return databaseClient.sql(sb.toString())
            .bind("gciGroupId", gciGroupId)
            .map(row -> row.get("ciAppointTime", LocalDateTime.class))
            .one();
}
