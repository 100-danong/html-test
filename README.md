public Mono<GroupCallInfo> findGroupcallInfoByGciGroupId(String gciGroupId) {

    StringBuffer sql = new StringBuffer();
    sql.append("select * ");
    sql.append("from groupcall_info ");
    sql.append("where gci_groupid = :gciGroupId");

    return databaseClient.sql(sql.toString())
            .bind("gciGroupId", gciGroupId)
            .map((row, meta) -> GroupCallInfo.builder()
                    .gciGroupid(row.get("gci_groupid", String.class))
                    .riId(row.get("ri_id", Long.class))
                    .gciFirstStarttime(row.get("gci_first_starttime", LocalDateTime.class))
                    .gciLastEndtime(row.get("gci_last_endtime", LocalDateTime.class))
                    .gciTotalBalance(row.get("gci_total_balance", Integer.class))
                    .gciGogoTotalBalance(row.get("gci_gogo_total_balance", Float.class))
                    .gciTotalTime(row.get("gci_total_time", Integer.class))
                    .gciInsuCallId(row.get("gci_insu_call_id", String.class))
                    .gciInsTime(row.get("gci_ins_time", LocalDateTime.class))
                    .gciUpdTime(row.get("gci_upd_time", LocalDateTime.class))
                    .ciCallId(row.get("ci_call_id", String.class))
                    .ciDeliveryAddress(row.get("ci_delivery_address", String.class))
                    .riDriverId(row.get("ri_driver_id", String.class))
                    .siCmpCode(row.get("si_cmp_code", String.class))
                    .siPolicyNumber(row.get("si_policy_number", String.class))
                    .salesDate(row.get("sales_date", LocalDate.class))
                    .totalMinute(row.get("total_minute", Integer.class))
                    .siId(row.get("si_id", Long.class))
                    .ciId(row.get("ci_id", Long.class))
                    .spnPolicyNumber(row.get("spn_policy_number", String.class))
                    .spnEffectEnddate(row.get("spn_effect_enddate", LocalDateTime.class))
                    .build())
            .one();
}
