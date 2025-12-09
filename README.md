public Mono<Integer> riderInsuranceHistoryWithdrawUpdateRenew(RiderInsuranceDto dto) {

    StringBuffer sql = new StringBuffer();
    sql.append("UPDATE rider_insurance_renew_history SET ");
    sql.append("    rih_withdraw_request_time = :rihWithdrawRequestTime, ");
    sql.append("    rih_upd_time = :rihUpdTime ");
    sql.append("WHERE rih_id = :rihId");

    return client.sql(sql.toString())
            .bind("rihWithdrawRequestTime", dto.getRihWithdrawRequestTime())
            .bind("rihUpdTime", dto.getRihUpdTime())
            .bind("rihId", dto.getRihId())
            .fetch()
            .rowsUpdated();
}
