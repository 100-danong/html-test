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
    sb.append(" VALUES ( ");
    sb.append(" :ishInsTime, ");
    sb.append(" :ihId, ");
    sb.append(" :riId, ");
    sb.append(" :ihRejectCode, ");
    sb.append(" :ihInsuState, ");
    sb.append(" :ihEffectStartdate, ");
    sb.append(" :ihEffectEnddate, ");
    sb.append(" :ihUntil ");
    sb.append(" ) ");

    String sql = sb.toString();

    return Flux.fromIterable(histories)
            .flatMap(history -> {

                DatabaseClient.GenericExecuteSpec spec =
                        databaseClient.sql(sql)
                                .bind("ishInsTime", history.getIshInsTime())
                                .bind("ihId", history.getIhId())
                                .bind("riId", history.getRiId())
                                .bind("ihInsuState", history.getIhInsuState())
                                .bind("ihEffectStartdate", history.getIhEffectStartdate())
                                .bind("ihEffectEnddate", history.getIhEffectEnddate())
                                .bind("ihUntil", history.getIhUntil());

                // ✅ 여기만 수정됨 (null-safe)
                spec = history.getIhRejectCode() != null
                        ? spec.bind("ihRejectCode", history.getIhRejectCode())
                        : spec.bindNull("ihRejectCode", String.class);

                return spec.fetch()
                        .rowsUpdated()
                        .then();
            })
            .then(); // Flux<Void> → Mono<Void>
}
