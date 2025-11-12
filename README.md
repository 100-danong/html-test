public Mono<Void> riderWebInsuranceHistoryInsert(RiderInsuranceDto dto) {
    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO rider_insurance_history (");
    sb.append(" ri_id, ih_id, rih_ins_time, rih_upd_time, rih_state ");
    sb.append(") VALUES (");
    sb.append(" :riId, :ihId, :rihInsTime, :rihUpdTime, 1 )");

    return databaseClient.sql(sb.toString())
            .bind("riId", dto.getRiId())
            .bind("ihId", dto.getIhId())
            .bind("rihInsTime", dto.getRihInsTime())
            .bind("rihUpdTime", dto.getRihInsTime())  // 원래 쿼리처럼 둘 다 동일
            .fetch()
            .rowsUpdated()
            .then(); // Mono<Void> 리턴
}
