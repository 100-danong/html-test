public Flux<CallInfo> findRunDeliveryByDriverId(Long riId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT ci.* ");
    sb.append("FROM call_info ci ");
    sb.append("INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id ");
    sb.append("WHERE ri.ri_id = :riId ");
    sb.append("  AND ri.ri_state = 1 ");
    sb.append("  AND ci.ci_complete_time IS NULL");

    return databaseClient.sql(sb.toString())
            .bind("riId", riId)
            .map((row, meta) -> {
                CallInfo c = new CallInfo();
                c.setCi_id(row.get("ci_id", Integer.class));
                c.setRi_id(row.get("ri_id", Long.class));
                c.setGci_groupid(row.get("gci_groupid", String.class));
                c.setCi_appoint_time(row.get("ci_appoint_time", LocalDateTime.class));
                c.setCi_complete_time(row.get("ci_complete_time", LocalDateTime.class));
                c.setCi_call_id(row.get("ci_call_id", String.class));
                c.setCi_req_delivery_time(row.get("ci_req_delivery_time", LocalDateTime.class));
                c.setCi_delivery_address(row.get("ci_delivery_address", String.class));
                c.setCi_delivery_status(row.get("ci_delivery_status", String.class));
                c.setCi_company_name(row.get("ci_company_name", String.class));
                c.setCi_pickup_time(row.get("ci_pickup_time", LocalDateTime.class));
                c.setCi_pickup_address(row.get("ci_pickup_address", String.class));
                c.setCi_insu_call_id(row.get("ci_insu_call_id", String.class));
                c.setCi_recv_group_id(row.get("ci_recv_group_id", String.class));
                c.setCi_ins_time(row.get("ci_ins_time", LocalDateTime.class));
                c.setCi_upd_time(row.get("ci_upd_time", LocalDateTime.class));
                c.setSales_date(row.get("sales_date", LocalDate.class));
                return c;
            })
            .all();
}
