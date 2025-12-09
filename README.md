public Mono<RiderInsuranceDto> findByIdRenew(Long id) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT rih_id, ")
       .append("       ri_id, ")
       .append("       ih_id, ")
       .append("       rih_withdraw_request_time ")
       .append("FROM rider_insurance_renew_history ")
       .append("WHERE ri_id = :id");

    return databaseClient.sql(sql.toString())
            .bind("id", id)
            .fetch()
            .one()
            .map(row -> RiderInsuranceDto.builder()
                    .rihId(row.get("rih_id", Long.class))
                    .riId(row.get("ri_id", Long.class))
                    .ihId(row.get("ih_id", Long.class))
                    .rihWithdrawRequestTime(row.get("rih_withdraw_request_time", LocalDateTime.class))
                    .build()
            );
}
