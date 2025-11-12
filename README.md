public Mono<Integer> insert(RiderWebInfo riderWebInfo) {

    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO rider_info (");
    sb.append("    ri_id, ");
    sb.append("    ri_name, ");
    sb.append("    ri_phone, ");
    sb.append("    ri_birthdate, ");
    sb.append("    ri_bike_number, ");
    sb.append("    ri_driver_id, ");
    sb.append("    ri_active_area, ");
    sb.append("    ri_userid, ");
    sb.append("    ri_insu_status, ");
    sb.append("    ri_pay_status, ");
    sb.append("    ri_compinsu_enddate, ");
    sb.append("    ri_operpurp_code, ");
    sb.append("    ri_gender, ");
    sb.append("    ri_ss_number, ");
    sb.append("    ri_state, ");
    sb.append("    si_id, ");
    sb.append("    ri_balance, ");
    sb.append("    ri_ins_time, ");
    sb.append("    ri_upd_time ");
    sb.append(") VALUES (");
    sb.append("    :riId, :riName, :riPhone, :riBirthdate, :riBikeNumber, ");
    sb.append("    :riDriverId, :riActiveArea, :riUserid, :riInsuStatus, :riPayStatus, ");
    sb.append("    :riCompinsuEnddate, :riOperpurpCode, :riGender, :riSsNumber, :riState, ");
    sb.append("    :siId, :riBalance, :riInsTime, :riUpdTime ");
    sb.append(")");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("riId", riderWebInfo.getRiId())
            .bind("riName", riderWebInfo.getRiName())
            .bind("riPhone", riderWebInfo.getRiPhone())
            .bind("riBirthdate", riderWebInfo.getRiBirthdate())
            .bind("riBikeNumber", riderWebInfo.getRiBikeNumber())
            .bind("riDriverId", riderWebInfo.getRiDriverId())
            .bind("riActiveArea", riderWebInfo.getRiActiveArea())
            .bind("riUserid", riderWebInfo.getRiUserid())
            .bind("riInsuStatus", riderWebInf
