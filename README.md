private Mono<Void> batchUpdateHistories(List<HistoriesSaveDto> histories) {
    List<List<HistoriesSaveDto>> chunks = partition(histories, BATCH_SIZE);

    return Flux.fromIterable(chunks)
            .concatMap(chunk ->
                    historyMapper.updateAll(chunk)
                            .then(historyMapper.saveAllStateHistory(chunk))
                            .then(riderInfoRepository.updateRiderInsurStatusAndApplyDateAll(chunk))
                            .then(riderInsuranceHistoryMapper.updateAllUnderComp(chunk))
            )
            .then();
}

private Mono<Void> batchUpdateHistoriesRenew(List<HistoriesSaveDto> historiesRenew) {
    List<List<HistoriesSaveDto>> chunks = partition(historiesRenew, BATCH_SIZE);

    return Flux.fromIterable(chunks)
            .concatMap(chunk ->
                    historyMapper.updateAllRenew(chunk)
                            .then(historyMapper.saveAllStateHistoryRenew(chunk))
                            .then(riderInfoRepository.updateRiderInsurStatusAndApplyDateAllRenew(chunk))
                            .then(riderInsuranceHistoryMapper.updateAllUnderCompRenew(chunk))
            )
            .then();
}
