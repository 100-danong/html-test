public static SellerInfo create(io.r2dbc.spi.Row row) {
    SellerInfo s = new SellerInfo();
    s.setSi_id(row.get("si_id", Long.class));
    s.setSi_cmp_code(row.get("si_cmp_code", String.class));
    s.setSi_balance(row.get("si_balance", Long.class));
    s.setSi_name(row.get("si_name", String.class));
    s.setSi_phone(row.get("si_phone", String.class));
    s.setSi_tell(row.get("si_tell", String.class));
    s.setSi_seller_code(row.get("si_seller_code", String.class));
    s.setSi_api_key(row.get("si_api_key", String.class));
    s.setSi_address(row.get("si_address", String.class));
    s.setSi_detail_address(row.get("si_detail_address", String.class));
    s.setSi_ceo_name(row.get("si_ceo_name", String.class));
    s.setSi_busi_number(row.get("si_busi_number", String.class));
    s.setSi_policy_number(row.get("si_policy_number", String.class));
    s.setSi_application_number(row.get("si_application_number", String.class));
    s.setSi_apply_state(row.get("si_apply_state", String.class));
    s.setSi_insu_type(row.get("si_insu_type", String.class));
    s.setSi_business_type(row.get("si_business_type", String.class));
    s.setSi_business_item(row.get("si_business_item", String.class));
    s.setSi_insu_amount(row.get("si_insu_amount", Double.class));
    s.setSi_insu_flat_amount(row.get("si_insu_flat_amount", Integer.class));
    s.setSi_db1_premium(row.get("si_db1_premium", Integer.class));
    s.setSi_db2_premium(row.get("si_db2_premium", Integer.class));
    s.setSi_pd_premium(row.get("si_pd_premium", Integer.class));
    s.setSi_flat_rate(row.get("si_flat_rate", Integer.class));
    s.setSi_insu_dc_rate(row.get("si_insu_dc_rate", Double.class));
    s.setSi_ins_time(row.get("si_ins_time", LocalDateTime.class));
    s.setSi_upd_time(row.get("si_upd_time", LocalDateTime.class));
    s.setSi_state(row.get("si_state", Integer.class));
    s.setSales_time(row.get("sales_time", LocalTime.class));
    return s;
}


public Mono<SellerInfo> findBySellerCode(String sellerCode) {

    String sql = "SELECT * FROM seller_info WHERE si_seller_code = :siSellerCode";

    return databaseClient.sql(sql)
            .bind("siSellerCode", sellerCode)
            .map((row, metadata) -> SellerInfo.create(row))
            .one();
}
