public Mono<Integer> insertCallFailStart(CallInfoFailStart dto) {

    StringBuffer sql = new StringBuffer();
    sql.append("INSERT INTO call_info_fail_start (");
    sql.append("cifs_call_id, cifs_driver_pickupaddress, cifs_driver_deliveryaddress, ");
    sql.append("cifs_req_delivery_time, cifs_appoint_time, cifs_pickup_time, ");
    sql.append("cifs_driver_id, cifs_company_name, cifs_recv_group_id, cifs_error_code, cifs_comment");
    sql.append(") VALUES (");
    sql.append(":cifsCallId, :cifsDriverPickupaddress, :cifsDriverDeliveryaddress, ");
    sql.append("NOW(), :cifsAppointTime, NOW(), ");
    sql.append(":cifsDriverId, :cifsCompanyName, :cifsRecvGroupId, :cifsErrorCode, :cifsComment");
    sql.append(")");

    return client.sql(sql.toString())
            .bind("cifsCallId", dto.getCifsCallId())
            .bind("cifsDriverPickupaddress", dto.getCifsDriverPickupaddress())
            .bind("cifsDriverDeliveryaddress", dto.getCifsDriverDeliveryaddress())
            .bind("cifsAppointTime", dto.getCifsAppointTime())
            .bind("cifsDriverId", dto.getCifsDriverId())
            .bind("cifsCompanyName", dto.getCifsCompanyName())
            .bind("cifsRecvGroupId", dto.getCifsRecvGroupId())
            .bind("cifsErrorCode", dto.getCifsErrorCode())
            .bind("cifsComment", dto.getCifsComment())
            .fetch()
            .rowsUpdated();
}
