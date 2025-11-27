public Mono<SellerInfo> findBySiId(String siId) {

    StringBuffer sql = new StringBuffer();
    sql.append("SELECT * ");
    sql.append("FROM seller_info ");
    sql.append("WHERE si_id = :siId");

    return databaseClient.sql(sql.toString())
            .bind("siId", siId)
            .map((row, meta) -> SellerInfo.create(row))
            .one();
}
