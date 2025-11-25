public Mono<Map<String, Object>> findDailyTotalData(Long riId, String gciGroupId,
                                                    LocalDateTime startTime, LocalDateTime endTime) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT ");
    sb.append("       IFNULL(SUM(gci_total_time), 0) AS cumulation_time, ");
    sb.append("       IFNULL(SUM(gci_total_balance), 0) AS cumulation_balance ");
    sb.append("FROM groupcall_info ");
    sb.append("WHERE ri_id = :riId ");
    sb.append("  AND gci_groupid != :gciGroupId ");
    sb.append("  AND gci_first_starttime >= :startTime ");
    sb.append("  AND gci_first_starttime < :endTime");

    return databaseClient.sql(sb.toString())
            .bind("riId", riId)
            .bind("gciGroupId", gciGroupId)
            .bind("startTime", startTime)
            .bind("endTime", endTime)
            .map((row, meta) -> {
                Map<String, Object> result = new HashMap<>();
                result.put("cumulation_time", row.get("cumulation_time", Long.class));
                result.put("cumulation_balance", row.get("cumulation_balance", Long.class));
                return result;
            })
            .one();
}
