public Mono<RiderInfo> findByCheckUserId(String riName, String riPhone) {

    StringBuffer sb = new StringBuffer();
    sb.append(" SELECT * ");
    sb.append(" FROM rider_info ");
    sb.append(" WHERE ri_name = :riName ");
    sb.append(" AND ri_phone = :riPhone ");
    sb.append(" AND ri_state = 1 ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("riName", riName)
            .bind("riPhone", riPhone)
            .map((row, metadata) -> {
                RiderInfo rider = new RiderInfo();
                rider.setRi_id(row.get("ri_id", Long.class));
                rider.setRi_name(row.get("ri_name", String.class));
                rider.setRi_phone(row.get("ri_phone", String.class));
                rider.setRi_birthdate(row.get("ri_birthdate", String.class));
                rider.setRi_gender(row.get("ri_gender", Integer.class));
                rider.setRi_ss_number(row.get("ri_ss_number", String.class));
                rider.setRi_bike_number(row.get("ri_bike_number", String.class));
                rider.setRi_driver_id(row.get("ri_driver_id", String.class));
                rider.setRi_active_area(row.get("ri_active_area", String.class));
                rider.setRi_userid(row.get("ri_userid", String.class));
                rider.setRi_insu_status(row.get("ri_insu_status", String.class));
                rider.setRi_compinsu_enddate(row.get("ri_compinsu_enddate", String.class));
                rider.setRi_operpurp_code(row.get("ri_operpurp_code", String.class));
                rider.setRi_insu_startdate(row.get("ri_insu_startdate", LocalDateTime.class));
                rider.setRi_insu_enddate(row.get("ri_insu_enddate", LocalDateTime.class));
                rider.setRi_insu_imgpath(row.get("ri_insu_imgpath", String.class));
                rider.setSi_id(row.get("si_id", Long.class));
                rider.setRi_total_webview_url(row.get("ri_total_webview_url", String.class));
                rider.setRi_balance(row.get("ri_balance", Integer.class));
                rider.setRi_pay_status(row.get("ri_pay_status", String.class));
                rider.setRi_received_driver_id(row.get("ri_received_driver_id", String.class));
                rider.setRi_ctcagreyn(row.get("ri_ctcagreyn", String.class));
                rider.setRi_ins_time(row.get("ri_ins_time", LocalDateTime.class));
                rider.setRi_upd_time(row.get("ri_upd_time", LocalDateTime.class));
                rider.setRi_state(row.get("ri_state", Integer.class));
                rider.setSi_policy_number(row.get("si_policy_number", Integer.class));
                return rider;
            })
            .one();
}
