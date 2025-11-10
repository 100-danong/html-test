public Mono<Void> saveAllStateHistory(List<HistoriesSaveDto> histories) {

    String sql = """
        INSERT INTO insurance_state_history (
            ish_ins_time,
            ih_id,
            ri_id,
            ih_reject_code,
            ih_insu_state,
            ih_effect_startdate,
            ih_effect_enddate,
            ih_until
        )
        VALUES (:ishInsTime, :ihId, :riId, :ihRejectCode, :ihInsuState, :ihEffectStartdate, :ihEffectEnddate, :ihUntil)
    """;

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
