public Flux<RiderInfo> findAllByDriverId(List<String> driverIds) {
    if (driverIds == null || driverIds.isEmpty()) {
        return Flux.empty();
    }

    // IN절 생성 (예: (?, ?, ?))
    String inClause = driverIds.stream()
            .map(id -> "?")
            .collect(Collectors.joining(", ", "(", ")"));

    StringBuffer sb = new StringBuffer();
    sb.append(" SELECT * FROM ( ");
    sb.append(" SELECT ri.ri_driver_id, ri.ri_id, ri.ri_state, ri.ri_insu_status, si.si_policy_number ");
    sb.append(" FROM rider_info ri ");
    sb.append(" INNER JOIN seller_info si ON ri.si_id = si.si_id ");
    sb.append(" WHERE ri.ri_state = 1 ");
    sb.append(" AND ri.ri_driver_id IN " + inClause);
    sb.append(" GROUP BY ri.ri_driver_id ");

    sb.append(" UNION ALL ");

    sb.append(" SELECT rin.ri_driver_id, rin.ri_id, rin.ri_state, rin.ri_insu_status, spn.spn_policy_number ");
    sb.append(" FROM rider_info_renew rin ");
    sb.append(" INNER JOIN seller_policy_number spn ON rin.spn_id = spn.spn_id ");
    sb.append(" WHERE rin.ri_state = 4 ");
    sb.append(" AND rin.ri_driver_id IN " + inClause);
    sb.append(" GROUP BY rin.ri_driver_id ");
    sb.append(" ) AS t ORDER BY ri_id ");

    String sql = sb.toString();

    // bind()에선 index 기반으로 매핑해야 함
    DatabaseClient.GenericExecuteSpec spec = databaseClient.sql(sql);
    for (String id : driverIds) {
        spec = spec.bind(driverIds.indexOf(id), id);
    }
    for (String id : driverIds) {
        spec = spec.bind(driverIds.size() + driverIds.indexOf(id), id);
    }

    return spec.map((row, metadata) -> {
                RiderInfo riderInfo = new RiderInfo();
                riderInfo.setRi_driver_id(row.get("ri_driver_id", String.class));
                riderInfo.setRi_id(row.get("ri_id", Long.class));
                riderInfo.setRi_state(row.get("ri_state", Integer.class));
                riderInfo.setRi_insu_status(row.get("ri_insu_status", String.class));
                // si_policy_number는 RiderInfo에 없으니 필요하면 추가하세요.
                return riderInfo;
            })
            .all(); // 결과 여러 개 → Flux
}
