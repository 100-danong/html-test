public Mono<Void> updateAllWithDrawComp(List<HistoriesSaveDto> histories) {

    String sql = """
        UPDATE rider_insurance_history SET
            rih_withdraw_complete_time = :rihWithdrawCompleteTime,
            rih_upd_time               = :ihUpdTime
        WHERE ri_id = :riId
    """;

    return Flux.fromIterable(histories)
            .flatMap(r -> databaseClient.sql(sql)
                    .bind("rihWithdrawCompleteTime", r.getRihWithdrawCompleteTime())
                    .bind("ihUpdTime", r.getIhUpdTime())
                    .bind("riId", r.getRiId())
                    .fetch()
                    .rowsUpdated()
                    .then()
            )
            .then(); // 전체 완료 시 Mono<Void> 반환
}
