public Mono<Integer> updateKbCallId(CallInfo callInfo) {
    StringBuffer sql = new StringBuffer();
    sql.append("UPDATE call_info ");
    sql.append("SET ci_insu_call_id = :ciInsuCallId ");
    sql.append("WHERE ci_id = :ciId");

    return databaseClient.sql(sql.toString())
            .bind("ciInsuCallId", callInfo.getCi_insu_call_id())
            .bind("ciId", callInfo.getCi_id())
            .fetch()
            .rowsUpdated();  // 성공하면 1, 실패하면 0
}
