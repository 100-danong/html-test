public Mono<Long> insert(RiderInfo rider) {

    StringBuffer sb = new StringBuffer();
    sb.append(" INSERT INTO rider_info ( ");
    sb.append("     ri_id, ");
    sb.append("     ri_name, ");
    sb.append("     ri_phone, ");
    sb.append("     ri_birthdate, ");
    sb.append("     ri_bike_number, ");
    sb.append("     ri_driver_id, ");
    sb.append("     ri_active_area, ");
    sb.append("     ri_userid, ");
    sb.append("     ri_insu_status, ");
    sb.append("     ri_pay_status, ");
    sb.append("     ri_compinsu_enddate, ");
    sb.append("     ri_operpurp_code, ");
    sb.append("     ri_gender, ");
    sb.append("     ri_ss_number, ");
    sb.append("     ri_total_webview_url, ");
    sb.append("     ri_state, ");
    sb.append("     si_id, ");
    sb.append("     ri_balance, ");
    sb.append("     ri_ins_time, ");
    sb.append("     ri_upd_time ");
    sb.append(" ) VALUES ( ");
    sb.append("     :riId, ");
    sb.append("     :riName, ");
    sb.append("     :riPhone, ");
    sb.append("     :riBirthdate, ");
    sb.append("     :riBikeNumber, ");
    sb.append("     :riDriverId, ");
    sb.append("     :riActiveArea, ");
    sb.append("     :riUserid, ");
    sb.append("     :riInsuStatus, ");
    sb.append("     :riPayStatus, ");
    sb.append("     :riCompinsuEnddate, ");
    sb.append("     :riOperpurpCode, ");
    sb.append("     :riGender, ");
    sb.append("     :riSsNumber, ");
    sb.append("     :riTotalWebviewUrl, ");
    sb.append("     :riState, ");
    sb.append("     :siId, ");
    sb.append("     :riBalance, ");
    sb.append("     :riInsTime, ");
    sb.append("     :riUpdTime ");
    sb.append(" ) ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("riId", rider.getRi_id())
            .bind("riName", rider.getRi_name())
            .bind("riPhone", rider.getRi_phone())
            .bind("riBirthdate", rider.getRi_birthdate())
            .bind("riBikeNumber", rider.getRi_bike_number())
            .bind("riDriverId", rider.getRi_driver_id())
            .bind("riActiveArea", rider.getRi_active_area())
            .bind("riUserid", rider.getRi_userid())
            .bind("riInsuStatus", rider.getRi_insu_status())
            .bind("riPayStatus", rider.getRi_pay_status())
            .bind("riCompinsuEnddate", rider.getRi_compinsu_enddate())
            .bind("riOperpurpCode", rider.getRi_operpurp_code())
            .bind("riGender", rider.getRi_gender())
            .bind("riSsNumber", rider.getRi_ss_number())
            .bind("riTotalWebviewUrl", rider.getRi_total_webview_url())
            .bind("riState", rider.getRi_state())
            .bind("siId", rider.getSi_id())
            .bind("riBalance", rider.getRi_balance())
            .bind("riInsTime", rider.getRi_ins_time())
            .bind("riUpdTime", rider.getRi_upd_time())
            .filter((statement, executeFunction) -> statement.returnGeneratedValues("ri_id").execute())
            .map((row, meta) -> row.get("ri_id", Long.class))
            .one();
}
