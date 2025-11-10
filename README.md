public Flux<RiderInfo> findAllByDriverIdForCancel(List<String> driverIds) {
    if (driverIds == null || driverIds.isEmpty()) {
        return Flux.empty();
    }

    // IN 절용 파라미터 플레이스홀더 만들기 (:id0, :id1, ...)
    String inParams = driverIds.stream()
            .map(id -> ":id" + driverIds.indexOf(id))
            .collect(Collectors.joining(", "));

    String sql = "SELECT * FROM rider_info WHERE ri_driver_id IN (" + inParams + ")";

    DatabaseClient.GenericExecuteSpec spec = databaseClient.sql(sql);

    // 바인딩
    for (int i = 0; i < driverIds.size(); i++) {
        spec = spec.bind("id" + i, driverIds.get(i));
    }

    return spec
            .map((row, metadata) -> {
                RiderInfo rider = new RiderInfo();
                rider.setRi_id(row.get("ri_id", Long.class));
                rider.setRi_driver_id(row.get("ri_driver_id", String.class));
                rider.setRi_userid(row.get("ri_userid", String.class));
                // 필요한 컬럼들 매핑 추가
                return rider;
            })
            .all();
}
