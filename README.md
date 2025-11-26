public Mono<Integer> insertCallInfoWhenDeliveryStart(CallInfo callInfo) {
    StringBuffer sql = new StringBuffer();
    sql.append("INSERT INTO call_info ");
    sql.append("(ri_id, gci_groupid, ci_appoint_time, ci_call_id, ci_req_delivery_time, ");
    sql.append("ci_delivery_address, ci_delivery_status, ci_company_name, ci_pickup_time, ci_pickup_address, ");
    sql.append("ci_recv_group_id, ci_ins_time, ci_upd_time, sales_date) ");
    sql.append("VALUES (");
    sql.append(":riId, :gciGroupid, :ciAppointTime, :ciCallId, :ciReqDeliveryTime, ");
    sql.append(":ciDeliveryAddress, :ciDeliveryStatus, :ciCompanyName, :ciPickupTime, :ciPickupAddress, ");
    sql.append(":ciRecvGroupId, :ciInsTime, :ciUpdTime, :salesDate)");

    return databaseClient.sql(sql.toString())
            .bind("riId", callInfo.getRi_id())
            .bind("gciGroupid", callInfo.getGci_groupid())
            .bind("ciAppointTime", callInfo.getCi_appoint_time())
            .bind("ciCallId", callInfo.getCi_call_id())
            .bind("ciReqDeliveryTime", callInfo.getCi_req_delivery_time())
            .bind("ciDeliveryAddress", callInfo.getCi_delivery_address())
            .bind("ciDeliveryStatus", callInfo.getCi_delivery_status())
            .bind("ciCompanyName", callInfo.getCi_company_name())
            .bind("ciPickupTime", callInfo.getCi_pickup_time())
            .bind("ciPickupAddress", callInfo.getCi_pickup_address())
            .bind("ciRecvGroupId", callInfo.getCi_recv_group_id())
            .bind("ciInsTime", callInfo.getCi_ins_time())
            .bind("ciUpdTime", callInfo.getCi_upd_time())
            .bind("salesDate", callInfo.getSales_date())
            .returnGeneratedValues("ci_id") // 자동 생성 PK 반환
            .map((row, meta) -> row.get("ci_id", Integer.class))
            .one();
}
