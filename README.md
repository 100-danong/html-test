    public Mono<Integer> update(HistoriesSaveDto dto) {

        StringBuffer sb = new StringBuffer();
        sb.append(" UPDATE insurance_history SET ");
        sb.append("     ih_insu_state = :ihInsuState, ");
        sb.append("     ih_effect_startdate = :ihEffectStartdate, ");
        sb.append("     ih_effect_enddate = :ihEffectEnddate, ");
        sb.append("     ih_until = :ihUntil, ");
        sb.append("     ih_upd_time = :ihUpdTime, ");
        sb.append("     ih_age_yn = :ihAgeYn, ");
        sb.append("     ih_apply_state = :ihApplyState ");
        sb.append(" WHERE ih_id = :ihId; ");

        sb.append(" UPDATE rider_info SET ");
        sb.append("     ri_insu_status = :ihInsuState, ");
        sb.append("     ri_upd_time = :ihUpdTime ");
        sb.append(" WHERE ri_id = :riId ");
        sb.append(" AND ri_state = 1 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("ihInsuState", dto.getIhInsuState())
                .bind("ihEffectStartdate", dto.getIhEffectStartdate())
                .bind("ihEffectEnddate", dto.getIhEffectEnddate())
                .bind("ihUntil", dto.getIhUntil())
                .bind("ihUpdTime", dto.getIhUpdTime())
                .bind("ihAgeYn", dto.getIhAgeYn())
                .bind("ihApplyState", dto.getIhApplyState())
                .bind("ihId", dto.getIhId())
                .bind("riId", dto.getRiId())
                .fetch()
                .rowsUpdated();
    }
