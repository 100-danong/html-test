public Mono<CallCountInfo> findByReSalesDateRiId(LocalDate salesDate, Long riId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ")
      .append("FROM call_count_info ")
      .append("WHERE sales_date = :salesDate ")
      .append("  AND ri_id = :riId ")
      .append("  AND flag = 'R' ")
      .append("ORDER BY cci_group_count DESC, cci_total_count DESC ")
      .append("LIMIT 1");

    return databaseClient.sql(sb.toString())
            .bind("salesDate", salesDate)
            .bind("riId", riId)
            .map((row, metadata) -> CallCountInfo.builder()
                    .cciId(row.get("cci_id", Integer.class))
                    .salesDate(row.get("sales_date", LocalDate.class))
                    .riId(row.get("ri_id", Long.class))
                    .siId(row.get("si_id", Long.class))
                    .ciCallId(row.get("ci_call_id", String.class))
                    .cciStartCount(row.get("cci_start_count", Integer.class))
                    .cciEndCount(row.get("cci_end_count", Integer.class))
                    .cciGroupCount(row.get("cci_group_count", Integer.class))
                    .cciTotalCount(row.get("cci_total_count", Integer.class))
                    .cciInsTime(row.get("cci_ins_time", LocalDateTime.class))
                    .cciUpdTime(row.get("cci_upd_time", LocalDateTime.class))
                    .flag(row.get("flag", String.class))
                    .build()
            )
            .one();  // LIMIT 1이므로 단일 객체
}
