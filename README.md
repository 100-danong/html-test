public Mono<Integer> insertGroupCallInfoWhenDeliveryQuit(GroupCallInfo groupCallInfo) {
    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO groupcall_info ")
      .append("(gci_groupid, ri_id, gci_first_starttime, gci_last_endtime, gci_gogo_total_balance, ")
      .append("gci_total_balance, gci_total_time, gci_ins_time, gci_upd_time, sales_date) ")
      .append("VALUES (")
      .append(":gciGroupid, :riId, :gciFirstStarttime, :gciLastEndtime, :gciGogoTotalBalance, ")
      .append(":gciTotalBalance, :gciTotalTime, :gciInsTime, :gciUpdTime, :salesDate)");

    return databaseClient.sql(sb.toString())
            .bind("gciGroupid", groupCallInfo.getGciGroupid())
            .bind("riId", groupCallInfo.getRiId())
            .bind("gciFirstStarttime", groupCallInfo.getGciFirstStarttime())
            .bind("gciLastEndtime", groupCallInfo.getGciLastEndtime())
            .bind("gciGogoTotalBalance", groupCallInfo.getGciGogoTotalBalance())
            .bind("gciTotalBalance", groupCallInfo.getGciTotalBalance())
            .bind("gciTotalTime", groupCallInfo.getGciTotalTime())
            .bind("gciInsTime", groupCallInfo.getGciInsTime())
            .bind("gciUpdTime", groupCallInfo.getGciUpdTime())
            .bind("salesDate", groupCallInfo.getSalesDate())
            .fetch()
            .rowsUpdated();  // 반환값 Integer: 성공 시 1, 실패 시 0
}
