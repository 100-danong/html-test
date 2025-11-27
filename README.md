public Mono<CallInfo> findByCallId(String ci_call_id) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT * ");
    sql.append("FROM call_info ");
    sql.append("WHERE ci_call_id = :ci_call_id");

    return databaseClient.sql(sql.toString())
            .bind("ci_call_id", ci_call_id)
            .map((row, metadata) -> {

                CallInfo info = new CallInfo();
                info.setCi_id(row.get("ci_id", Integer.class));
                info.setRi_id(row.get("ri_id", Long.class));
                info.setGci_groupid(row.get("gci_groupid", String.class));
                info.setCi_appoint_time(row.get("ci_appoint_time", LocalDateTime.class));
                info.setCi_complete_time(row.get("ci_complete_time", LocalDateTime.class));
                info.setCi_call_id(row.get("ci_call_id", String.class));
                info.setCi_req_delivery_time(row.get("ci_req_delivery_time", LocalDateTime.class));
                info.setCi_delivery_address(row.get("ci_delivery_address", String.class));
                info.setCi_delivery_status(row.get("ci_delivery_status", String.class));
                info.setCi_company_name(row.get("ci_company_name", String.class));
                info.setCi_pickup_time(row.get("ci_pickup_time", LocalDateTime.class));
                info.setCi_pickup_address(row.get("ci_pickup_address", String.class));
                info.setCi_insu_call_id(row.get("ci_insu_call_id", String.class));
                info.setCi_recv_group_id(row.get("ci_recv_group_id", String.class));
                info.setCi_ins_time(row.get("ci_ins_time", LocalDateTime.class));
                info.setCi_upd_time(row.get("ci_upd_time", LocalDateTime.class));
                info.setSales_date(row.get("sales_date", LocalDate.class));

                info.setRi_driver_id(row.get("ri_driver_id", String.class));
                info.setSi_cmp_code(row.get("
