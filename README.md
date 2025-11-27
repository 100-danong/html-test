public Mono<Integer> updateCallInfoWhenComplete(
        LocalDateTime ciCompleteTime,
        String ciCallId,
        String ciDeliveryStatus,
        LocalDateTime ciUpdTime
) {

    StringBuffer sql = new StringBuffer();
    sql.append("UPDATE call_info ");
    sql.append("SET ");
    sql.append("    ci_complete_time = :ciCompleteTime, ");
    sql.append("    ci_delivery_status = :ciDeliveryStatus, ");
    sql.append("    ci_upd_time = :ciUpdTime ");
    sql.append("WHERE ci_call_id = :ciCallId");

    return databaseClient.sql(sql.toString())
            .bind("ciCompleteTime", ciCompleteTime)
            .bind("ciDeliveryStatus", ciDeliveryStatus)
            .bind("ciUpdTime", ciUpdTime)
            .bind("ciCallId", ciCallId)
            .fetch()
            .rowsUpdated();
}
