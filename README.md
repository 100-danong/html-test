public Mono<Void> update(HistoriesSaveDto dto) {

    StringBuffer sb1 = new StringBuffer();
    sb1.append("UPDATE insurance_history SET ")
       .append(" ih_insu_state = :ihInsuState, ")
       .append(" ih_effect_startdate = :ihEffectStartdate, ")
       .append(" ih_effect_enddate = :ihEffectEnddate, ")
       .append(" ih_until = :ihUntil, ")
       .append(" ih_upd_time = :ihUpdTime, ")
       .append(" ih_age_yn = :ihAgeYn, ")
       .append(" ih_apply_state = :ihApplyState ")
       .append("WHERE ih_id = :ihId");

    StringBuffer sb2 = new StringBuffer();
    sb2.append("UPDATE rider_info SET ")
       .append(" ri_insu_status = :ihInsuState, ")
       .append(" ri_upd_time = :ihUpdTime ")
       .append("WHERE ri_id = :riId ")
       .append("AND ri_state = 1");

    return databaseClient.sql(sb1.toString())
            .bind("ihInsuState", dto.getIhInsuState())
            .bind("ihEffectStartdate", dto.getIhEffectStartdate())
            .bind("ihEffectEnddate", dto.getIhEffectEnddate())
            .bind("ihUntil", dto.getIhUntil())
            .bind("ihUpdTime", dto.getIhUpdTime())
            .bind("ihAgeYn", dto.getIhAgeYn())
            .bind("ihApplyState", dto.getIhApplyState())
            .bind("ihId", dto.getIhId())
            .fetch().rowsUpdated()
            .then(
                databaseClient.sql(sb2.toString())
                    .bind("ihInsuState", dto.getIhInsuState())
                    .bind("ihUpdTime", dto.getIhUpdTime())
                    .bind("riId", dto.getRiId())
                    .fetch().rowsUpdated()
            )
            .then();
}
