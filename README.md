public Mono<CallInfo> findCallInfoByCallId(String callId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * FROM call_info ");
    sb.append("WHERE ci_call_id = :callId");

    return databaseClient.sql(sb.toString())
            .bind("callId", callId)
            .map((row, meta) -> mapper.read(CallInfo.class, row))
            .one();
}
