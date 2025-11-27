public Mono<Integer> updateSellerInfoForBalance(Long siId, Long siBalance) {
    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE seller_info ")
      .append("SET si_balance = si_balance - :siBalance, ")
      .append("si_upd_time = NOW() ")
      .append("WHERE si_id = :siId");

    return databaseClient.sql(sb.toString())
            .bind("siBalance", siBalance)
            .bind("siId", siId)
            .fetch()
            .rowsUpdated();
}
