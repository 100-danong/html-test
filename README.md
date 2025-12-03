public Mono<Integer> riderInsuranceHistoryUnderUpdateAll(List<RiderInsuranceDto> list) {

    StringBuffer sql = new StringBuffer();

    sql.append("UPDATE rider_insurance_history SET ")
       .append("rih_under_request_time = :rihUnderRequestTime, ")
       .append("rih_upd_time = :rihUpdTime ")
       .append("WHERE ri_id = :riId");

    return Flux.fromIterable(list)
            .flatMap(item ->
                client.sql(sql.toString())
                        .bind("rihUnderRequestTime", item.getRihUnderRequestTime())
                        .bind("rihUpdTime", item.getRihUpdTime())
                        .bind("riId", item.getRiId())
                        .fetch()
                        .rowsUpdated()
            )
            .reduce(0, Integer::sum);
}
