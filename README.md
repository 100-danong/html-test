    public Mono<Integer> updateAll(List<HistoriesSaveDto> histories) {

        histories.forEach(history-> {
            StringBuffer sb = new StringBuffer();
            sb.append(" UPDATE insurance_history SET ");
            sb.append(" ih_insu_state       = :ihInsuState, ");
            sb.append(" ih_effect_startdate = :ihEffectStartdate, ");
            sb.append(" ih_effect_enddate   = :ihEffectEnddate, ");
            sb.append(" ih_until            = :ihUntil, ");
            sb.append(" ih_upd_time         = :ihUpdTime, ");
            sb.append(" ih_age_yn           = :ihAgeYn, ");
            sb.append(" ih_apply_state      = :ihApplyState ");
            sb.append(" WHERE ih_id         = :ihId ");

            String sql = sb.toString();

            databaseClient.sql(sql)
                    .bind("ihInsuState", history.getIhInsuState())
                    .bind("ihEffectStartdate", history.getIhEffectStartdate())
                    .bind("ihEffectEnddate", history.getIhEffectEnddate())
                    .bind("ihUntil", history.getIhUntil())
                    .bind("ihUpdTime", history.getIhUpdTime())
                    .bind("ihAgeYn", history.getIhAgeYn())
                    .bind("ihApplyState", history.getIhApplyState())
                    .bind("ihId", history.getIhId())
                    .fetch()
                    .rowsUpdated();
        }
    }
