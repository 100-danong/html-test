public Mono<RiderInfo> findByDriveridAndSellerID(Map<String, Object> params) {

    String riDriverId = (String) params.get("ri_driver_id");
    String siSellerCode = (String) params.get("si_seller_code");

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT ")
      .append(" ri.ri_id, ri.si_id, ri.ri_insu_status, ri.ri_pay_status, ")
      .append(" ri.ri_state, ri.si_id, ri.ri_driver_id ")
      .append("FROM rider_info ri ")
      .append("INNER JOIN seller_info si ON ri.si_id = si.si_id ")
      .append("WHERE 1=1 ")
      .append(" AND ri.ri_userid = :riDriverId ")
      .append(" AND si.si_seller_code = :siSellerCode ")
      .append(" AND ri.ri_insu_status = '062' ")
      .append(" AND ri.ri_state = 1 ")
      .append(" ORDER BY ri_upd_time DESC ")
      .append(" LIMIT 1");

    return databaseClient.sql(sb.toString())
            .bind("riDriverId", riDriverId)
            .bind("SiSellerCode", siSellerCode)
            .map((row, meta) -> {
                RiderInfo r = new RiderInfo();
                r.setRi_id(row.get("ri_id", Long.class));
                r.setSi_id(row.get("si_id", Long.class));
                r.setRi_insu_status(row.get("ri_insu_status", String.class));
                r.setRi_pay_status(row.get("ri_pay_status", String.class));
                r.setRi_state(row.get("ri_state", Integer.class));
                r.setRi_driver_id(row.get("ri_driver_id", String.class));
                return r;
            })
            .one();
}
