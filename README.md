public Mono<Integer> updateSellerInfo(Long siId, long siBalance) {

    StringBuffer sb = new StringBuffer();
    sb.append("UPDATE seller_info ");
    sb.append("SET si_balance = si_balance - :siBalance ");
    sb.append("WHERE si_id = :siId");

    return databaseClient.sql(sb.toString())
            .bind("siBalance", siBalance)
            .bind("siId", siId)
            .fetch()
            .rowsUpdated();
}
