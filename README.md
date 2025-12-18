public Mono<Void> updateAllUnderComp(List<HistoriesSaveDto> list) {
    return Flux.fromIterable(list)
        .flatMap(r ->
            databaseClient.sql("""
                UPDATE rider_insurance_history 
                SET rih_under_complete_time = :rihUnderCompleteTime,
                    rih_upd_time = :rihUpdTime 
                WHERE ri_id = :riId
                """)
                .bind("rihUnderCompleteTime", Parameter.fromOrEmpty(r.getRihUnderCompleteTime(), LocalDateTime.class))
                .bind("rihUpdTime", r.getIhUpdTime())
                .bind("riId", r.getRiId())
                .fetch().rowsUpdated()
        )
        .then();
}
