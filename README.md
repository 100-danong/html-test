public Mono<Integer> updateReGrouping(String ciCallId, String gciGroupId) {

    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE call_info ")
      .append("SET gci_groupid = :gciGroupId, ")
      .append("    ci_upd_time = NOW() ")
      .append("WHERE ci_call_id = :ciCallId");

    return databaseClient.sql(sb.toString())
            .bind("gciGroupId", gciGroupId)
            .bind("ciCallId", ciCallId)
            .fetch()
            .rowsUpdated();
}
