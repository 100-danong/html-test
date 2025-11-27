public Mono<Integer> findCountByGciGroupId(String gciGroupId) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT COUNT(gci_groupid) AS cnt ");
    sql.append("FROM groupcall_info ");
    sql.append("WHERE gci_groupid = :gciGroupId");

    return databaseClient.sql(sql.toString())
            .bind("gciGroupId", gciGroupId)
            .map((row, meta) -> row.get("cnt", Integer.class))
            .one();
}
