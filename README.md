public Flux<GroupCallInfo> findAllByCallPickUpTimeBetween(LocalDateTime startTime, LocalDateTime endTime) {
    StringBuffer sql = new StringBuffer();
    sql.append("SELECT DISTINCT ")
       .append("gci.gci_groupid AS gci_groupid, ")
       .append("gci.gci_first_starttime AS gci_first_starttime, ")
       .append("gci.gci_last_endtime AS gci_last_endtime, ")
       .append("gci.gci_total_time AS gci_total_time, ")
       .append("ri.ri_driver_id AS ri_driver_id, ")
       .append("si.si_cmp_code AS si_cmp_code, ")
       .append("spn.spn_policy_number AS si_policy_number ")
       .append("FROM groupcall_info gci ")
       .append("INNER JOIN rider_info ri ON gci.ri_id = ri.ri_id ")
       .append("INNER JOIN seller_info si ON ri.si_id = si.si_id ")
       .append("INNER JOIN seller_policy_number spn ON si.si_cmp_code = spn.si_cmp_code ")
       .append("WHERE gci.gci_first_starttime >= :startTime ")
       .append("AND gci.gci_first_starttime < :endTime ")
       .append("AND spn.spn_effect_startdate <= :startTime ")
       .append("AND spn.spn_effect_enddate >= :endTime");

    return databaseClient.sql(sql.toString())
            .bind("startTime", startTime)
            .bind("endTime", endTime)
            .map((row, metadata) -> GroupCallInfo.builder()
                    .gciGroupid(row.get("gci_groupid", String.class))
                    .gciFirstStarttime(row.get("gci_first_starttime", LocalDateTime.class))
                    .gciLastEndtime(row.get("gci_last_endtime", LocalDateTime.class))
                    .gciTotalTime(row.get("gci_total_time", Integer.class))
                    .riDriverId(row.get("ri_driver_id", String.class))
                    .siCmpCode(row.get("si_cmp_code", String.class))
                    .siPolicyNumber(row.get("si_policy_number", String.class))
                    .build())
            .all();
}
