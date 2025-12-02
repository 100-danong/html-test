public Flux<Long> findReGroupSeller(LocalDate salesDate, String sellerCode) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT ci.ri_id ")
      .append("FROM call_info ci ")
      .append("JOIN rider_info ri ON ci.ri_id = ri.ri_id ")
      .append("JOIN seller_info si ON ri.si_id = si.si_id ")
      .append("WHERE ci.sales_date = :salesDate ")
      .append("  AND si.si_seller_code = :sellerCode ")
      .append("GROUP BY ci.ri_id ")
      .append("ORDER BY ci.ci_appoint_time");

    return databaseClient.sql(sb.toString())
            .bind("salesDate", salesDate)
            .bind("sellerCode", sellerCode)
            .map((row, meta) -> row.get("ri_id", Long.class))
            .all();
}
