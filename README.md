public Mono<RiderInfo> findByRiderId(String cSenId) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ");
    sb.append("FROM rider_info ");
    sb.append("WHERE ri_userid = :cSenId ");
    sb.append("  AND ri_insu_status = '062' ");
    sb.append("  AND ri_state = 1");

    return databaseClient.sql(sb.toString())
            .bind("cSenId", cSenId)
            .map((row, meta) -> {
                RiderInfo r = new RiderInfo();
                r.setRi_id(row.get("ri_id", Long.class));
                r.setRi_name(row.get("ri_name", String.class));
                r.setRi_phone(row.get("ri_phone", String.class));
                r.setRi_birthdate(row.get("ri_birthdate", String.class));
                r.setRi_gender(row.get("ri_gender", Integer.class));
                r.setRi_ss_number(row.get("ri_ss_number", String.class));
                r.setRi_bike_number(row.get("ri_bike_number", String.class));
                r.setRi_driver_id(row.get("ri_driver_id", String.class));
                r.setRi_active_area(row.get("ri_active_area", String.class));
                r.setRi_userid(row.get("ri_userid", String.class));
                r.setRi_insu_status(row.get("ri_insu_status", String.class));
                r.setRi_compinsu_enddate(row.get("ri_compinsu_enddate", String.class));
                r.setRi_operpurp_code(row.get("ri_operpurp_code", String.class));
                r.setRi_insu_startdate(row.get("ri_insu_startdate", LocalDateTime.class));
                r.setRi_insu_enddate(row.get("ri_insu_enddate", LocalDateTime.class));
                r.setRi_insu_imgpath(row.get("ri_insu_imgpath", String.class));
                r.setSi_id(row.get("si_id", Long.class));
                r.setRi_total_webview_url(row.get("ri_total_webview_url", String.class));
                r.setRi_balance(row.get("ri_balance", Integer.class));
                r.setRi_pay_status(row.get("ri_pay_status", String.class));
                r.setRi_received_driver_id(row.get("ri_received_driver_id", String.class));
                r.setRi_ctcagreyn(row.get("ri_ctcagreyn", String.class));
                r.setRi_ins_time(row.get("ri_ins_time", LocalDateTime.class));
                r.setRi_upd_time(row.get("ri_upd_time", LocalDateTime.class));
                r.setRi_state(row.get("ri_state", Integer.class));
                r.setSi_policy_number(row.get("si_policy_number", Integer.class));
                return r;
            })
            .one();
}
