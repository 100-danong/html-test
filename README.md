public Mono<SellerInfo> findSellerInfoByCmpCode(Long siId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ");
    sb.append("FROM seller_info ");
    sb.append("WHERE si_id = :siId");

    return databaseClient.sql(sb.toString())
            .bind("siId", siId)
            .map((row, meta) -> SellerInfo.create(row))
            .one();
}
