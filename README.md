public Mono<Integer> findByCiCallId(String ciCallId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT count(*) ");
    sb.append("FROM call_count_info ");
    sb.append("WHERE ci_call_id = :ciCallId ");
    sb.append("  AND flag = 'G'");

    return databaseClient.sql(sb.toString())
            .bind("ciCallId", ciCallId)
            .map((row, meta) -> row.get(0, Integer.class))
            .one();
}
