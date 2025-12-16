public Mono<Integer> updateInsurance(HistoriesSaveDto dto) {

        StringBuffer InsuranceSQL = new StringBuffer();
        InsuranceSQL.append(" UPDATE insurance_history SET ");
        InsuranceSQL.append("     ih_insu_state = :ihInsuState, ");
        InsuranceSQL.append("     ih_effect_startdate = :ihEffectStartdate, ");
        InsuranceSQL.append("     ih_effect_enddate = :ihEffectEnddate, ");
        InsuranceSQL.append("     ih_until = :ihUntil, ");
        InsuranceSQL.append("     ih_upd_time = :ihUpdTime, ");
        InsuranceSQL.append("     ih_age_yn = :ihAgeYn, ");
        InsuranceSQL.append("     ih_apply_state = :ihApplyState ");
        InsuranceSQL.append(" WHERE ih_id = :ihId ");

        return databaseClient.sql(InsuranceSQL.toString())
                .bind("ihInsuState", dto.getIhInsuState())
                .bind("ihEffectStartdate", dto.getIhEffectStartdate())
                .bind("ihEffectEnddate", dto.getIhEffectEnddate())
                .bind("ihUntil", dto.getIhUntil())
                .bind("ihUpdTime", dto.getIhUpdTime())
                .bind("ihAgeYn", dto.getIhAgeYn())
                .bind("ihApplyState", dto.getIhApplyState())
                .bind("ihId", dto.getIhId())
                .fetch()
                .rowsUpdated();
    }
