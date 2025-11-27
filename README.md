public Mono<String> findByCallIdForGroupid(String ciCallId) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT gci_groupid ");
    sql.append("FROM call_info ");
    sql.append("WHERE ci_call_id = :ciCallId");

    return databaseClient.sql(sql.toString())
            .bind("ciCallId", ciCallId)
            .map((row, meta) -> row.get("gci_groupid", String.class))
            .one();
}
