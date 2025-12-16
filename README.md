    public Mono<Void> saveAllStateHistory(List<HistoriesSaveDto> histories) {

        StringBuffer sb = new StringBuffer();
        sb.append(" INSERT INTO insurance_state_history ( ");
        sb.append(" ish_ins_time, ");
        sb.append(" ih_id, ");
        sb.append(" ri_id, ");
        sb.append(" ih_reject_code, ");
        sb.append(" ih_insu_state, ");
        sb.append(" ih_effect_startdate, ");
        sb.append(" ih_effect_enddate, ");
        sb.append(" ih_until ");
        sb.append(" ) ");
        sb.append(" VALUES (:ishInsTime, :ihId, :riId, :ihRejectCode, :ihInsuState, :ihEffectStartdate, :ihEffectEnddate, :ihUntil) ");

        String sql = sb.toString();

        return Flux.fromIterable(histories)
                .flatMap(history -> databaseClient.sql(sql)
                        .bind("ishInsTime", history.getIshInsTime())
                        .bind("ihId", history.getIhId())
                        .bind("riId", history.getRiId())
                        .bind("ihRejectCode", history.getIhRejectCode())
                        .bind("ihInsuState", history.getIhInsuState())
                        .bind("ihEffectStartdate", history.getIhEffectStartdate())
                        .bind("ihEffectEnddate", history.getIhEffectEnddate())
                        .bind("ihUntil", history.getIhUntil())
                        .fetch()
                        .rowsUpdated()
                        .then()
                )
                .then(); // Flux<Void> → Mono<Void>
    }
