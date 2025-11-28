public Flux<CallInfo> findReGroupAll(LocalDate salesDate, Long riId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ")
      .append("FROM call_info ")
      .append("WHERE ri_id = :riId ")
      .append("  AND sales_date = :salesDate ")
      .append("ORDER BY ci_appoint_time");

    return databaseClient.sql(sb.toString())
            .bind("riId", riId)
            .bind("salesDate", salesDate)
            .map((row, metadata) -> CallInfo.builder()
                    .ci_id(row.get("ci_id", Integer.class))
                    .ri_id(row.get("ri_id", Long.class))
                    .gci_groupid(row.get("gci_groupid", String.class))
                    .ci_appoint_time(row.get("ci_appoint_time", LocalDateTime.class))
                    .ci_complete_time(row.get("ci_complete_time", LocalDateTime.class))
                    .ci_call_id(row.get("ci_call_id", String.class))
                    .ci_req_delivery_time(row.get("ci_req_delivery_time", LocalDateTime.class))
                    .ci_delivery_address(row.get("ci_delivery_address", String.class))
                    .ci_delivery_status(row.get("ci_delivery_status", String.class))
                    .ci_company_name(row.get("ci_company_name", String.class))
                    .ci_pickup_time(row.get("ci_pickup_time", LocalDateTime.class))
                    .ci_pickup_address(row.get("ci_pickup_address", String.class))
                    .ci_insu_call_id(row.get("ci_insu_call_id", String.class))
                    .ci_recv_group_id(row.get("ci_recv_group_id", String.class))
                    .ci_ins_time(row.get("ci_ins_time", LocalDateTime.class))
                    .ci_upd_time(row.get("ci_upd_time", LocalDateTime.class))
                    .sales_date(row.get("sales_date", LocalDate.class))
                    .ri_driver_id(row.get("ri_driver_id", String.class))
                    .si_cmp_code(row.get("si_cmp_code", String.class))
                    .si_policy_number(row.get("si_policy_number", String.class))
                    .end_date(row.get("end_date", LocalDateTime.class))
                    .build()
            )
            .all();   // List 대응
}
