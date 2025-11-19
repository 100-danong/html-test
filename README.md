public Mono<Long> insertHistoryAndUpdateRider(HistoriesSaveDto dto) {

    // --- INSERT ---
    StringBuffer insertSb = new StringBuffer();
    insertSb.append(" INSERT INTO insurance_history ( ");
    insertSb.append("     ih_id, ");
    insertSb.append("     ri_id, ");
    insertSb.append("     si_id, ");
    insertSb.append("     ih_insu_state, ");
    insertSb.append("     ih_policy_number, ");
    insertSb.append("     ih_application_number, ");
    insertSb.append("     ih_effect_startdate, ");
    insertSb.append("     ih_effect_enddate, ");
    insertSb.append("     ih_until, ");
    insertSb.append("     ih_age_yn, ");
    insertSb.append("     ih_apply_state, ");
    insertSb.append("     ih_ins_time, ");
    insertSb.append("     ih_upd_time ");
    insertSb.append(" ) VALUES ( ");
    insertSb.append("     :ihId, ");
    insertSb.append("     :riId, ");
    insertSb.append("     :siId, ");
    insertSb.append("     :ihInsuState, ");
    insertSb.append("     :ihPolicyNumber, ");
    insertSb.append("     :ihApplicationNumber, ");
    insertSb.append("     :ihEffectStartdate, ");
    insertSb.append("     :ihEffectEnddate, ");
    insertSb.append("     :ihUntil, ");
    insertSb.append("     :ihAgeYn, ");
    insertSb.append("     :ihApplyState, ");
    insertSb.append("     :ihInsTime, ");
    insertSb.append("     :ihUpdTime ");
    insertSb.append(" ) ");

    String insertSql = insertSb.toString();



    // --- UPDATE rider_info ---
    StringBuffer updateSb = new StringBuffer();
    updateSb.append(" UPDATE rider_info SET ");
    updateSb.append("     ri_insu_status       = :ihInsuState, ");
    updateSb.append("     ri_total_webview_url = :riTotalWebviewUrl, ");
    updateSb.append("     ri_upd_time          = :ihUpdTime ");
    updateSb.append(" WHERE ri_id = :riId ");
    updateSb.append("   AND ri_state = 1 ");

    String updateSql = updateSb.toString();



    // --- 실행 로직 ---
    return databaseClient.sql(insertSql)
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

            .filter((statement, exec) -> statement.returnGeneratedValues("ih_id").execute())
            .map((row, meta) -> row.get("ih_id", Long.class))
            .one()

            // INSERT 후 UPDATE 실행
            .flatMap(generatedId ->
                    databaseClient.sql(updateSql)
                            .bind("ihInsuState", dto.getIhInsuState())
                            .bind("riTotalWebviewUrl", dto.getRiTotalWebviewUrl())
                            .bind("ihUpdTime", dto.getIhUpdTime())
                            .bind("riId", dto.getRiId())
                            .fetch()
                            .rowsUpdated()
                            .thenReturn(generatedId)   // 최종 리턴 = 생성된 ih_id
            );
}
