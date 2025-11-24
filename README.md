public Mono<Integer> updateEndCallInfo(TgDTO3 dto) {

    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE call_info ");
    sb.append("SET ci_complete_time = :endTime, ");
    sb.append("    ci_delivery_status = :status, ");
    sb.append("    ci_delivery_address = :deliveryAddress ");
    sb.append("WHERE ci_insu_call_id = :insuCallId");

    return databaseClient.sql(sb.toString())
            .bind("endTime", dto.getEndTime())
            .bind("status", dto.getStatus())
            .bind("deliveryAddress", dto.getDeliveryAddress())
            .bind("insuCallId", dto.getInsuCallId())
            .fetch()
            .rowsUpdated();
}
