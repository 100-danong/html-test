public Mono<Integer> findByRiDriverIdForCallCnt(String ri_driver_id, String gci_groupid) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT COUNT(*) cnt ");
    sql.append("FROM call_info ci ");
    sql.append("INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id ");
    sql.append("WHERE 1=1 ");
    sql.append("AND ri.ri_userid = :ri_driver_id ");
    sql.append("AND ri.ri_state = 1 ");
    sql.append("AND ci.gci_groupid = :gci_groupid ");
    sql.append("AND ci.ci_complete_time IS NULL");

    return databaseClient.sql(sql.toString())
            .bind("ri_driver_id", ri_driver_id)
            .bind("gci_groupid", gci_groupid)
            .map((row, metadata) -> row.get("cnt", Integer.class))
            .one();
}
