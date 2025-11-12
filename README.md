public Mono<Void> saveStateHistory(WebHistoriesSaveDto dto) {
    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO insurance_state_history (");
    sb.append(" ish_ins_time, ih_id, ri_id, ih_insu_state, ih_effect_startdate, ih_effect_enddate, ih_until ");
    sb.append(") VALUES (");
    sb.append(" :ihUpdTime, :ihId, :riId, :ihInsuState, :ihEffectStartdate, :ihEffectEnddate, :ihUntil )");

    return databaseClient.sql(sb.toString())
            .bind("ihUpdTime", dto.getIhUpdTime())
            .bind("ihId", dto.getIhId())
            .bind("riId", dto.getRiId())
            .bind("ihInsuState", dto.getIhInsuState())
            .bind("ihEffectStartdate", dto.getIhEffectStartdate())
            .bind("ihEffectEnddate", dto.getIhEffectEnddate())
            .bind("ihUntil", dto.getIhUntil())
            .fetch()
            .rowsUpdated()
            .then(); // Mono<Void>
}


public Mono<Void> updateRiderDriverId(RiderWebInfo riderWebInfo) {
    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE rider_info SET ");
    sb.append(" ri_driver_id = :riDriverId, ");
    sb.append(" ri_upd_time  = :riUpdTime ");
    sb.append("WHERE ri_id = :riId ");
    sb.append("AND ri_state = 1");

    return databaseClient.sql(sb.toString())
            .bind("riDriverId", riderWebInfo.getRiDriverId())
            .bind("riUpdTime", riderWebInfo.getRiUpdTime())
            .bind("riId", riderWebInfo.getRiId())
            .fetch()
            .rowsUpdated()
            .then(); // Mono<Void>
}
