public Mono<CallBalanceDto> findTotalBalance(Long riId,
                                             String gciGroupId,
                                             LocalDateTime startTime,
                                             LocalDateTime endTime) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT ");
    sb.append("       IFNULL(SUM(gci_total_balance), 0) AS kbBalance, ");
    sb.append("       IFNULL(SUM(gci_gogo_total_balance), 0) AS gogoBalance ");
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
                CallBalanceDto dto = new CallBalanceDto();
                dto.setKbBalance(row.get("kbBalance", Integer.class));
                dto.setGogoBalance(row.get("gogoBalance", Float.class));
                return dto;
            })
            .one();
}
