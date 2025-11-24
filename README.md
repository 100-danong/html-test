public Mono<Integer> updateStartCallInfo(CallInfo dto) {

    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE call_info ");
    sb.append("SET ci_insu_call_id = :ciInsuCallId ");
    sb.append("WHERE ci_id = :ciId");

    return databaseClient.sql(sb.toString())
            .bind("ciInsuCallId", dto.getCi_insu_call_id())
            .bind("ciId", dto.getCi_id())
            .fetch()
            .rowsUpdated();
}
