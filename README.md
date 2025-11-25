public Mono<TgDTO2> findByInsuCallId(String insuCallId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT ");
    sb.append("       ci.gci_groupid AS groupId, ");
    sb.append("       ci.ci_pickup_time AS startTime ");
    sb.append("FROM call_info ci ");
    sb.append("WHERE ci_insu_call_id = :insuCallId");

    return databaseClient.sql(sb.toString())
            .bind("insuCallId", insuCallId)
            .map((row, meta) -> {
                TgDTO2 dto = new TgDTO2();
                dto.setGroupId(row.get("groupId", String.class));
                dto.setStartTime(row.get("startTime", LocalDateTime.class));
                return dto;
            })
            .one();
}
