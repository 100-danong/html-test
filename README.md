public Mono<Long> riderInsuranceHistoryInsert(RiderInsuranceDto dto) {

    StringBuffer sb = new StringBuffer();
    sb.append(" INSERT INTO rider_insurance_history ( ");
    sb.append("     rih_id, ");
    sb.append("     ri_id, ");
    sb.append("     ih_id, ");
    sb.append("     rih_ins_time, ");
    sb.append("     rih_upd_time, ");
    sb.append("     rih_state ");
    sb.append(" ) VALUES ( ");
    sb.append("     :rihId, ");
    sb.append("     :riId, ");
    sb.append("     :ihId, ");
    sb.append("     :rihInsTime, ");
    sb.append("     :rihInsTime, ");
    sb.append("     1 ");
    sb.append(" ) ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("rihId", dto.getRihId())
            .bind("riId", dto.getRiId())
            .bind("ihId", dto.getIhId())
            .bind("rihInsTime", dto.getRihInsTime())
            .filter((statement, exec) -> statement.returnGeneratedValues("rih_id").execute())
            .map((row, meta) -> row.get("rih_id", Long.class))
            .one();
}
