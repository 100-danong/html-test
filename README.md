public Mono<GroupCallInfo> insetGroupCallInfo(GroupCallInfo groupCallInfo) {

    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO groupcall_info ");
    sb.append("(gci_groupid, ri_id, gci_first_starttime, gci_last_endtime, gci_gogo_total_balance, gci_total_balance, gci_total_time, gci_insu_call_id, gci_ins_time, gci_upd_time, sales_date) ");
    sb.append("VALUES ");
    sb.append("(:gciGroupid, :riId, :gciFirstStarttime, :gciLastEndtime, :gciGogoTotalBalance, :gciTotalBalance, :gciTotalTime, :gciInsuCallId, :gciInsTime, :gciUpdTime, :salesDate)");

    return databaseClient.sql(sb.toString())
            .bind("gciGroupid", groupCallInfo.getGciGroupid())
            .bind("riId", groupCallInfo.getRiId())
            .bind("gciFirstStarttime", groupCallInfo.getGciFirstStarttime())
            .bind("gciLastEndtime", groupCallInfo.getGciLastEndtime())
            .bind("gciGogoTotalBalance", groupCallInfo.getGciGogoTotalBalance())
            .bind("gciTotalBalance", groupCallInfo.getGciTotalBalance())
            .bind("gciTotalTime", groupCallInfo.getGciTotalTime())
            .bind("gciInsuCallId", groupCallInfo.getGciInsuCallId())
            .bind("gciInsTime", groupCallInfo.getGciInsTime())
            .bind("gciUpdTime", groupCallInfo.getGciUpdTime())
            .bind("salesDate", groupCallInfo.getSalesDate())
            .then()
            .thenReturn(groupCallInfo);
}
