public Mono<Integer> riderInsuranceHistoryEndoUpdateAll(List<RiderInsuranceDto> list) {

    StringBuffer sql = new StringBuffer();
    sql.append("UPDATE rider_insurance_history ")
       .append("SET rih_endo_request_time = :endoRequestTime, ")
       .append("    rih_upd_time = :updTime ")
       .append("WHERE rih_id = :rihId");

    return Flux.fromIterable(list)
            .flatMap(item ->
                    databaseClient.sql(sql.toString())
                            .bind("endoRequestTime", item.getRihEndoRequestTime())
                            .bind("updTime", item.getRihUpdTime())
                            .bind("rihId", item.getRihId())
                            .fetch()
                            .rowsUpdated()
            )
            .reduce(0, Integer::sum);
}
