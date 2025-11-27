public Mono<CallInfoFailStart> findFailCallStart(String cifsCallId) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT cifs_call_id, cifs_error_code ");
    sql.append("FROM call_info_fail_start ");
    sql.append("WHERE cifs_call_id = :cifsCallId ");
    sql.append("ORDER BY cifs_id DESC ");
    sql.append("LIMIT 1");

    return databaseClient.sql(sql.toString())
            .bind("cifsCallId", cifsCallId)
            .map((row, meta) -> CallInfoFailStart.builder()
                    .cifsCallId(row.get("cifs_call_id", String.class))
                    .cifsErrorCode(row.get("cifs_error_code", String.class))
                    .build())
            .one();
}
