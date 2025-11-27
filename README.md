public Mono<Integer> insertCallFailEnd(CallInfoFailEnd dto) {

    StringBuffer sql = new StringBuffer();
    sql.append("INSERT INTO call_info_fail_end ");
    sql.append("(cife_call_id, cife_driver_id, cife_driver_ci_complete_time, ");
    sql.append(" cife_seller_code, cife_recv_group_id, cife_error_code, cife_comment) ");
    sql.append("VALUES ");
    sql.append("(:cifeCallId, :cifeDriverId, :cifeDriverCiCompleteTime, ");
    sql.append(" :cifeSellerCode, :cifeRecvGroupId, :cifeErrorCode, :cifeComment)");

    return databaseClient.sql(sql.toString())
            .bind("cifeCallId", dto.getCifeCallId())
            .bind("cifeDriverId", dto.getCifeDriverId())
            .bind("cifeDriverCiCompleteTime", dto.getCifeDriverCiCompleteTime())
            .bind("cifeSellerCode", dto.getCifeSellerCode())
            .bind("cifeRecvGroupId", dto.getCifeRecvGroupId())
            .bind("cifeErrorCode", dto.getCifeErrorCode())
            .bind("cifeComment", dto.getCifeComment())
            .fetch()
            .rowsUpdated();
}
