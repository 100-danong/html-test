
    public Flux<RiderInfoDto> findRequestsRiderByInsuranceStatusToday(String status) {
        StringBuffer sql = new StringBuffer();
        sql.append("SELECT r.ri_id, ");
        sql.append("       s.si_id, ");
        sql.append("       r.ri_driver_id, ");
        sql.append("       r.ri_userid, ");
        sql.append("       r.ri_phone, ");
        sql.append("       r.ri_bike_number, ");
        sql.append("       r.ri_name, ");
        sql.append("       r.ri_ss_number, ");
        sql.append("       s.si_cmp_code, ");
        sql.append("       s.si_policy_number, ");
        sql.append("       s.si_seller_code, ");
        sql.append("       r.ri_total_webview_url, ");
        sql.append("       r.ri_compinsu_enddate, ");
        sql.append("       r.ri_operpurp_code, ");
        sql.append("       r.ri_active_area, ");
        sql.append("       r.ri_insu_status, ");
        sql.append("       s.si_application_number, ");
        sql.append("       r.ri_state, ");
        sql.append("       r.ri_ctcagreyn ");
        sql.append("FROM rider_info r ");
        sql.append("JOIN seller_info s ON r.si_id = s.si_id ");
        sql.append("JOIN insurance_history i ON r.ri_id = i.ri_id ");
        sql.append("WHERE r.ri_insu_status = :status ");
        sql.append("AND r.ri_state = 1 ");
        sql.append("AND i.ih_upd_time >= SUBTIME(DATE_ADD(NOW(), INTERVAL -1 DAY), TIMEDIFF(NOW(), CAST(DATE(NOW()) AS DATETIME))) ");
        sql.append("AND i.ih_upd_time < NOW()");

        return databaseClient.sql(sql.toString())
                .bind("status", status)
                .map((row, metadata) -> RiderInfoDto.builder()
                        .riId(row.get("ri_id", Long.class))
                        .siId(row.get("si_id", Long.class))
                        .riDriverId(row.get("ri_driver_id", String.class))
                        .riUserid(row.get("ri_userid", String.class))
                        .riPhone(row.get("ri_phone", String.class))
                        .riBikeNumber(row.get("ri_bike_number", String.class))
                        .riName(row.get("ri_name", String.class))
                        .riSsNumber(row.get("ri_ss_number", String.class))
                        .siCmpCode(row.get("si_cmp_code", String.class))
                        .siPolicyNumber(row.get("si_policy_number", String.class))
                        .siSellerCode(row.get("si_seller_code", String.class))
                        .riTotalWebviewUrl(row.get("ri_total_webview_url", String.class))
                        .riCompinsuEnddate(row.get("ri_compinsu_enddate", String.class))
                        .riOperpurpCode(row.get("ri_operpurp_code", String.class))
                        .riActiveArea(row.get("ri_active_area", String.class))
                        .riInsuStatus(row.get("ri_insu_status", String.class))
                        .siApplicationNumber(row.get("si_application_number", String.class))
                        .riState(row.get("ri_state", Integer.class))
                        .riCtcagreyn(row.get("ri_ctcagreyn", String.class))
                        .build())
                .all();
    }
