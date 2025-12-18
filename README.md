    private Mono<Void> batchUpdateHistories(List<HistoriesSaveDto> histories) {
        List<List<HistoriesSaveDto>> chunks = partition(histories, BATCH_SIZE);
        for (List<HistoriesSaveDto> chunk : chunks){
            historyMapper.updateAll(chunk);
            historyMapper.saveAllStateHistory(chunk);
            riderInfoRepository.updateRiderInsurStatusAndApplyDateAll(chunk);
            riderInsuranceHistoryMapper.updateAllUnderComp(chunk);
        }
    }

    private Mono<Void> batchUpdateHistoriesRenew(List<HistoriesSaveDto> historiesRenew) {
        List<List<HistoriesSaveDto>> chunks = partition(historiesRenew, BATCH_SIZE);
        for (List<HistoriesSaveDto> chunk : chunks){
            historyMapper.updateAllRenew(chunk);
            historyMapper.saveAllStateHistoryRenew(chunk);
            riderInfoRepository.updateRiderInsurStatusAndApplyDateAllRenew(chunk);
            riderInsuranceHistoryMapper.updateAllUnderCompRenew(chunk);
        }
    }
