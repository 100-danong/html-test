public Mono<Void> updateAllUnderComp(List<RiderInsuranceHistory> list) {
    if (list == null || list.isEmpty()) {
        return Mono.empty();
    }

    StringBuffer sb = new StringBuffer();

    for (RiderInsuranceHistory r : list) {
        sb.append("UPDATE rider_insurance_history SET ");
        sb.append("rih_under_complete_time = '").append(r.getRihUnderCompleteTime()).append("', ");
        sb.append("rih_upd_time = '").append(r.getIhUpdTime()).append("' ");
        sb.append("WHERE ri_id = ").append(r.getRiId()).append("; ");
    }

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .then(); // 실행 후 결과 반환 없음 (Mono<Void>)
}
