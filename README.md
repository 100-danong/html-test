return Mono.fromRunnable(() -> {
            insuranceHistoryRepository.update(update);
            insuranceHistoryRepository.saveStateHistory(update);
        })
        .thenReturn("ok");
