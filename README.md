public Mono<Integer> insertStartCallInfo(CallInfo dto) {

    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO call_info ");
    sb.append("(ci_pickup_time, ci_appoint_time, ci_pickup_address, ci_call_id, ");
    sb.append(" ci_delivery_status, ci_company_name, ri_id, ci_ins_time, ci_upd_time, ");
    sb.append(" gci_groupid, sales_date) ");
    sb.append("VALUES (:ciPickupTime, :ciAppointTime, :ciPickupAddress, :ciCallId, ");
    sb.append(" :ciDeliveryStatus, :ciCompanyName, :riId, :ciAppointTime, :ciAppointTime, ");
    sb.append(" :gciGroupid, :salesDate)");

    return databaseClient.sql(sb.toString())
            .bind("ciPickupTime", dto.getCiPickupTime())
            .bind("ciAppointTime", dto.getCiAppointTime())
            .bind("ciPickupAddress", dto.getCiPickupAddress())
            .bind("ciCallId", dto.getCiCallId())
            .bind("ciDeliveryStatus", dto.getCiDeliveryStatus())
            .bind("ciCompanyName", dto.getCiCompanyName())
            .bind("riId", dto.getRiId())
            .bind("gciGroupid", dto.getGciGroupid())
            .bind("salesDate", dto.getSalesDate())
            .fetch()
            .rowsUpdated();
}
