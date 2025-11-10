public Mono<Void> updateAll(List<HistoriesSaveDto> histories) {

    return Flux.fromIterable(histories)
            .flatMap(history -> {
                String sql = """
                    UPDATE insurance_history SET
                        ih_insu_state       = :ihInsuState,
                        ih_effect_startdate = :ihEffectStartdate,
                        ih_effect_enddate   = :ihEffectEnddate,
                        ih_until            = :ihUntil,
                        ih_upd_time         = :ihUpdTime,
                        ih_age_yn           = :ihAgeYn,
                        ih_apply_state      = :ihApplyState
                    WHERE ih_id = :ihId
                """;

                return databaseClient.sql(sql)
                        .bind("ihInsuState", history.getIhInsuState())
                        .bind("ihEffectStartdate", history.getIhEffectStartdate())
                        .bind("ihEffectEnddate", history.getIhEffectEnddate())
                        .bind("ihUntil", history.getIhUntil())
                        .bind("ihUpdTime", history.getIhUpdTime())
                        .bind("ihAgeYn", history.getIhAgeYn())
                        .bind("ihApplyState", history.getIhApplyState())
                        .bind("ihId", history.getIhId())
                        .fetch()
                        .rowsUpdated()
                        .then(); // 반환 타입을 Void로 맞춤
            })
            .then(); // Flux<Void> → Mono<Void>
}
