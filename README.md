public Mono<CallInfo> findCallInfoByCallId(String callId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * FROM call_info ");
    sb.append("WHERE ci_call_id = :callId");

    return databaseClient.sql(sb.toString())
            .bind("callId", callId)
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
                // optional extra fields used by DTOs
                c.setRi_driver_id(row.get("ri_driver_id", String.class));
                c.setSi_cmp_code(row.get("si_cmp_code", String.class));
                c.setSi_policy_number(row.get("si_policy_number", String.class));
                c.setEnd_date(row.get("end_date", LocalDateTime.class));
                return c;
            })
            .one();
}
