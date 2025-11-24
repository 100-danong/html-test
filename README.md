public Mono<CallCountInfo> findBySalesDateRiId(LocalDate salesDate, Long riId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ");
    sb.append("FROM call_count_info ");
    sb.append("WHERE sales_date = :salesDate ");
    sb.append("  AND ri_id = :riId ");
    sb.append("  AND flag = 'G' ");
    sb.append("ORDER BY cci_group_count DESC, cci_total_count DESC ");
    sb.append("LIMIT 1");

    return databaseClient.sql(sb.toString())
            .bind("salesDate", salesDate)
            .bind("riId", riId)
            .map((row, meta) -> {
                CallCountInfo c = new CallCountInfo();
                c.setCciId(row.get("cci_id", Integer.class));
                c.setSalesDate(row.get("sales_date", LocalDate.class));
                c.setRiId(row.get("ri_id", Long.class));
                c.setSiId(row.get("si_id", Long.class));
                c.setCiCallId(row.get("ci_call_id", String.class));
                c.setCciStartCount(row.get("cci_start_count", Integer.class));
                c.setCciEndCount(row.get("cci_end_count", Integer.class));
                c.setCciGroupCount(row.get("cci_group_count", Integer.class));
                c.setCciTotalCount(row.get("cci_total_count", Integer.class));
                c.setCciInsTime(row.get("cci_ins_time", LocalDateTime.class));
                c.setCciUpdTime(row.get("cci_upd_time", LocalDateTime.class));
                c.setFlag(row.get("flag", String.class));
                return c;
            })
            .one();
}
