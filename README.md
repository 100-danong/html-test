public Mono<Integer> findGroupCallNotCompleteTime(Long riId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT count(*) ");
    sb.append("FROM groupcall_info ");
    sb.append("WHERE ri_id = :riId ");
    sb.append("  AND gci_last_endtime IS NULL");

    return databaseClient.sql(sb.toString())
            .bind("riId", riId)
            .map((row, meta) -> row.get(0, Integer.class))
            .one();
}
