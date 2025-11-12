public static RiderWebInfo create(io.r2dbc.spi.Row row) {
    RiderWebInfo r = new RiderWebInfo();
    r.riId = row.get("ri_id", Long.class);
    r.siId = row.get("si_id", Long.class);
    r.riDriverId = row.get("ri_driver_id", String.class);
    r.riUserid = row.get("ri_userid", String.class);
    r.riName = row.get("ri_name", String.class);
    r.riPhone = row.get("ri_phone", String.class);
    r.riBirthdate = row.get("ri_birthdate", String.class);
    r.riGender = row.get("ri_gender", Integer.class);
    r.riState = row.get("ri_state", Integer.class);
    r.riSsNumber = row.get("ri_ss_number", String.class);
    r.riBikeNumber = row.get("ri_bike_number", String.class);
    r.riActiveArea = row.get("ri_active_area", String.class);
    r.riInsuStatus = row.get("ri_insu_status", String.class);
    r.riInsuImgpath = row.get("ri_insu_imgpath", String.class);
    r.riBalance = row.get("ri_balance", Integer.class);
    r.riPayStatus = row.get("ri_pay_status", String.class);
    r.riTotalWebviewUrl = row.get("ri_total_webview_url", String.class);
    r.riInsuStartdate = row.get("ri_insu_startdate", LocalDateTime.class);
    r.riInsuEnddate = row.get("ri_insu_enddate", LocalDateTime.class);
    r.riOperpurpCode = row.get("ri_operpurp_code", String.class);
    r.riCompinsuEnddate = row.get("ri_compinsu_enddate", String.class);
    r.riReceivedDriverId = row.get("ri_received_driver_id", String.class);
    r.riInsTime = row.get("ri_ins_time", LocalDateTime.class);
    r.riUpdTime = row.get("ri_upd_time", LocalDateTime.class);
    r.spnId = row.get("spn_id", Long.class);
    return r;
}

public Mono<RiderWebInfo> findByCheckRiUserId(String name, String phone) {

    String sql = "SELECT * FROM rider_info WHERE ri_state = 1 AND ri_name = :riName AND ri_phone = :riPhone";

    return databaseClient.sql(sql)
            .bind("riName", name)
            .bind("riPhone", phone)
            .map((row, metadata) -> RiderWebInfo.create(row))
            .one();
}
