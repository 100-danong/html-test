public Mono<String> findCallInfoByCiCallId(String gciGroupId) {

    StringBuffer sql = new StringBuffer();
    sql.append("select ci_call_id ");
    sql.append("from call_info ");
    sql.append("where gci_groupid = :gciGroupId ");
    sql.append("order by ci_complete_time desc ");
    sql.append("limit 1");

    return databaseClient.sql(sql.toString())
            .bind("gciGroupId", gciGroupId)
            .map((row, metadata) -> row.get("ci_call_id", String.class))
            .one();
}
