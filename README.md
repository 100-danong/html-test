public Mono<Void> insert(WebHistoriesSaveDto dto) {
    StringBuffer insertSql = new StringBuffer();
    insertSql.append("INSERT INTO insurance_history (");
    insertSql.append(" ih_id, ri_id, si_id, ih_insu_state, ih_policy_number, ih_application_number, ");
    insertSql.append(" ih_effect_startdate, ih_effect_enddate, ih_until, ih_age_yn, ih_apply_state, ih_ins_time, ih_upd_time ");
    insertSql.append(") VALUES (");
    insertSql.append(" :ihId, :riId, :siId, :ihInsuState, :ihPolicyNumber, :ihApplicationNumber, ");
    insertSql.append(" :ihEffectStartdate, :ihEffectEnddate, :ihUntil, :ihAgeYn, :ihApplyState, :ihInsTime, :ihUpdTime )");

    StringBuffer updateSql = new StringBuffer();
    updateSql.append("UPDATE rider_info SET ");
    updateSql.append(" ri_insu_status = :ihInsuState, ");
    updateSql.append(" ri_total_webview_url = :ihTotalWebviewUrl, ");
    updateSql.append(" ri_upd_time = :ihUpdTime ");
    updateSql.append("WHERE ri_id = :riId ");
    updateSql.append("AND ri_state = 1 ");

    return databaseClient.sql(insertSql.toString())
            .bind("ihId", dto.getIhId())
            .bind("riId", dto.getRiId())
            .bind("siId", dto.getSiId())
            .bind("ihInsuState", dto.getIhInsuState())
            .bind("ihPolicyNumber", dto.getIhPolicyNumber())
            .bind("ihApplicationNumber", dto.getIhApplicationNumber())
            .bind("ihEffectStartdate", dto.getIhEffectStartdate())
            .bind("ihEffectEnddate", dto.getIhEffectEnddate())
            .bind("ihUntil", dto.getIhUntil())
            .bind("ihAgeYn", dto.getIhAgeYn())
            .bind("ihApplyState", dto.getIhApplyState())
            .bind("ihInsTime", dto.getIhInsTime())
            .bind("ihUpdTime", dto.getIhUpdTime())
            .fetch()
            .rowsUpdated()
            .flatMap(rows -> 
                databaseClient.sql(updateSql.toString())
                        .bind("ihInsuState", dto.getIhInsuState())
                        .bind("ihTotalWebviewUrl", dto.getIhTotalWebviewUrl())
                        .bind("ihUpdTime", dto.getIhUpdTime())
                        .bind("riId", dto.getRiId())
                        .fetch()
                        .rowsUpdated()
                        .then()
            );
}
