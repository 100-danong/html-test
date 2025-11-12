public Mono<Map<String, Object>> findForInsertById(Long riId) {

    StringBuffer sb = new StringBuffer();
    sb.append(" SELECT ");
    sb.append("     si.si_id, ");
    sb.append("     si.si_policy_number, ");
    sb.append("     si.si_application_number, ");
    sb.append("     ih.ih_id ");
    sb.append(" FROM rider_info ri ");
    sb.append(" INNER JOIN seller_info si ON ri.si_id = si.si_id ");
    sb.append(" LEFT JOIN insurance_history ih ON ih.ri_id = ri.ri_id AND ih.si_id = si.si_id ");
    sb.append(" WHERE ri.ri_id = :riId ");
    sb.append(" AND ri.ri_state = 1 ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("riId", riId)
            .map((row, meta) -> {
                Map<String, Object> result = new HashMap<>();
                result.put("si_id", row.get("si_id", Long.class));
                result.put("si_policy_number", row.get("si_policy_number", String.class));
                result.put("si_application_number", row.get("si_application_number", String.class));
                result.put("ih_id", row.get("ih_id", Long.class));
                return result;
            })
            .one();
}
