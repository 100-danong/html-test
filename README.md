public Mono<Integer> sumGroupCallTotalTime(String riDriverId, LocalDateTime startTime, LocalDateTime endTime) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT SUM(gci.gci_total_time) ")
       .append("FROM groupcall_info gci ")
       .append("INNER JOIN rider_info ri ON gci.ri_id = ri.ri_id ")
       .append("INNER JOIN seller_info si ON ri.si_id = si.si_id ")
       .append("WHERE ri.ri_driver_id = :riDriverId ")
       .append("AND gci.gci_first_starttime >= :startTime ")
       .append("AND gci.gci_first_starttime < :endTime");

    return databaseClient.sql(sql.toString())
            .bind("riDriverId", riDriverId)
            .bind("startTime", startTime)
            .bind("endTime", endTime)
            .map((row, metadata) -> row.get(0, Integer.class))
            .one();
}
