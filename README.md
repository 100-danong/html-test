public Mono<Integer> UpdateGroupcallInfoWhenDeliveryQuit(String gciGroupId,
                                                         LocalDateTime gciLastEndTime,
                                                         Float gciGogoTotalBalance,
                                                         Integer gciTotalBalance,
                                                         Integer updTotalTime,
                                                         LocalDateTime gciUpdTime) {
    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE groupcall_info ")
      .append("SET gci_last_endtime = :gciLastEndTime, ")
      .append("gci_gogo_total_balance = :gciGogoTotalBalance, ")
      .append("gci_total_balance = :gciTotalBalance, ")
      .append("gci_total_time = :updTotalTime, ")
      .append("gci_upd_time = :gciUpdTime ")
      .append("WHERE gci_groupid = :gciGroupId");

    return databaseClient.sql(sb.toString())
            .bind("gciLastEndTime", gciLastEndTime)
            .bind("gciGogoTotalBalance", gciGogoTotalBalance)
            .bind("gciTotalBalance", gciTotalBalance)
            .bind("updTotalTime", updTotalTime)
            .bind("gciUpdTime", gciUpdTime)
            .bind("gciGroupId", gciGroupId)
            .fetch()
            .rowsUpdated();
}
