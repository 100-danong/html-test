public Mono<CallInfo> findByInsuCallIds(String ciInsuCallId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ");
    sb.append("FROM call_info ");
    sb.append("WHERE ci_insu_call_id = :ciInsuCallId");

    return databaseClient.sql(sb.toString())
            .bind("ciInsuCallId", ciInsuCallId)
            .map((row, meta) -> {
                CallInfo callInfo = new CallInfo();
                callInfo.setCi_id(row.get("ci_id", Integer.class));
                callInfo.setRi_id(row.get("ri_id", Long.class));
                callInfo.setGci_groupid(row.get("gci_groupid", String.class));
                callInfo.setCi_appoint_time(row.get("ci_appoint_time", LocalDateTime.class));
                callInfo.setCi_complete_time(row.get("ci_complete_time", LocalDateTime.class));
                callInfo.setCi_call_id(row.get("ci_call_id", String.class));
                callInfo.setCi_req_delivery_time(row.get("ci_req_delivery_time", LocalDateTime.class));
                callInfo.setCi_delivery_address(row.get("ci_delivery_address", String.class));
                callInfo.setCi_delivery_status(row.get("ci_delivery_status", String.class));
                callInfo.setCi_company_name(row.get("ci_company_name", String.class));
                callInfo.setCi_pickup_time(row.get("ci_pickup_time", LocalDateTime.class));
                callInfo.setCi_pickup_address(row.get("ci_pickup_address", String.class));
                callInfo.setCi_insu_call_id(row.get("ci_insu_call_id", String.class));
                callInfo.setCi_recv_group_id(row.get("ci_recv_group_id", String.class));
                callInfo.setCi_ins_time(row.get("ci_ins_time", LocalDateTime.class));
                callInfo.setCi_upd_time(row.get("ci_upd_time", LocalDateTime.class));
                callInfo.setSales_date(row.get("sales_date", LocalDate.class));
                callInfo.setRi_driver_id(row.get("ri_driver_id", String.class));
                callInfo.setSi_cmp_code(row.get("si_cmp_code", String.class));
                callInfo.setSi_policy_number(row.get("si_policy_number", String.class));
                callInfo.setEnd_date(row.get("end_date", LocalDateTime.class));
                return callInfo;
            })
            .one();
}
