public Mono<Void> updateRiderInsurStatusAndApplyDateAll(List<HistoriesSaveDto> histories) {

    String sql = """
        UPDATE rider_info SET
            ri_insu_status    = :ihInsuState,
            ri_insu_startdate = :ihEffectStartdate,
            ri_insu_enddate   = :ihEffectEnddate,
            ri_upd_time       = :ihUpdTime,
            ri_state          = :riState
        WHERE ri_id = :riId
    """;

    return Flux.fromIterable(histories)
            .flatMap(r -> databaseClient.sql(sql)
                    .bind("ihInsuState", r.getIhInsuState())
                    .bind("ihEffectStartdate", r.getIhEffectStartdate())
                    .bind("ihEffectEnddate", r.getIhEffectEnddate())
                    .bind("ihUpdTime", r.getIhUpdTime())
                    .bind("riState", r.getRiState())
                    .bind("riId", r.getRiId())
                    .fetch()
                    .rowsUpdated()
                    .then() // 한 행 처리 완료 후 다음으로
            )
            .then(); // 전체 완료 후 Mono<Void> 리턴
}
