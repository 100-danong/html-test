.map((row, metadata) -> {
    AccidentSearch dto = new AccidentSearch();
    dto.setCallId(row.get("callId", String.class));
    dto.setStartTime(row.get("startTime", LocalDateTime.class));
    dto.setRiId(row.get("riId", String.class));
    return dto;
})
