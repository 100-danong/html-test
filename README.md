public Mono<Integer> findByCallIdForDupl(String ciCallId) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT count(*) ");
    sql.append("FROM call_info ");
    sql.append("WHERE 1=1 ");
    sql.append("AND ci_call_id = :ciCallId ");

    return client.sql(sql.toString())
            .bind("ciCallId", ciCallId)
            .map((row, metadata) -> row.get(0, Integer.class))
            .one();
}
