public Mono<GroupCallInfo> findGroupCallByriIdAndTime(Map<String, Object> params) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT gci.* ");
    sql.append("FROM groupcall_info gci ");
    sql.append("WHERE gci.ri_id = :riId ");
    sql.append("AND :ciAppointTime BETWEEN gci.gci_first_starttime AND gci.gci_last_endtime ");
    sql.append("ORDER BY gci_upd_time DESC ");
    sql.append("LIMIT 1");

    return databaseClient.sql(sql.toString())
            .bind("riId", params.get("riId"))
            .bind("ciAppointTime", params.get("ciAppointTime"))
            .map((row, metadata) -> {
                GroupCallInfo gci = new GroupCallInfo();
                gci.setGciGroupid(row.get("gci_groupid", String.class));
                gci.setRiId(row.get("ri_id", Long.class));
                gci.setGciFirstStarttime(row.get("gci_first_starttime", LocalDateTime.class));
                gci.setGciLastEndtime(row.get("gci_last_endtime", LocalDateTime.class));
                gci.setGciTotalBalance(row.get("gci_total_balance", Integer.class));
                gci.setGciGogoTotalBalance(row.get("gci_gogo_total_balance", Float.class));
                gci.setGciTotalTime(row.get("gci_total_time", Integer.class));
                gci.setGciInsuCallId(row.get("gci_insu_call_id", String.class));
                gci.setGciInsTime(row.get("gci_ins_time", LocalDateTime.class));
                gci.setGciUpdTime(row.get("gci_upd_time", LocalDateTime.class));
                gci.setCiCallId(row.get("ci_call_id", String.class));
                gci.setCiDeliveryAddress(row.get("ci_delivery_address", String.class));
                gci.setRiDriverId(row.get("ri_driver_id", String.class));
                gci.setSiCmpCode(row.get("si_cmp_code", String.class));
                gci.setSiPolicyNumber(row.get("si_policy_number", String.class));
                gci.setSalesDate(row.get("sales_date", LocalDate.class));
                gci.setTotalMinute(row.get("total_minute", Integer.class));
                gci.setSiId(row.get("si_id", Long.class));
                gci.setCiId(row.get("ci_id", Long.class));
                gci.setSpnPolicyNumber(row.get("spn_policy_number", String.class));
                gci.setSpnEffectEnddate(row.get("spn_effect_enddate", LocalDateTime.class));
                return gci;
            })
            .one();
}
