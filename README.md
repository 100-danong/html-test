public Mono<HistoriesSaveDto> findForUpdateByPolicyNumber(Long riId, String siPolicyNumber) {

    StringBuffer sb = new StringBuffer();

    sb.append("SELECT ih.*, ri.ri_state ");
    sb.append("FROM insurance_history ih ");
    sb.append("INNER JOIN rider_info ri ON ih.ri_id = ri.ri_id ");
    sb.append("INNER JOIN seller_info si ON ri.si_id = si.si_id ");
    sb.append("WHERE ih.ri_id = :riId ");
    sb.append("AND si.si_policy_number = :siPolicyNumber ");

    sb.append("UNION ALL ");

    sb.append("SELECT ih.*, ri.ri_state ");
    sb.append("FROM insurance_renew_history ih ");
    sb.append("INNER JOIN rider_info_renew ri ON ih.ri_id = ri.ri_id ");
    sb.append("INNER JOIN seller_policy_number spn ON ri.spn_id = spn.spn_id ");
    sb.append("WHERE ih.ri_id = :riId ");
    sb.append("AND spn.spn_policy_number = :siPolicyNumber ");
    sb.append("AND ri.ri_state != 9 ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("riId", riId)
            .bind("siPolicyNumber", siPolicyNumber)
            .map((row, meta) -> {

                Map<String, Object> map = new HashMap<>();

                meta.getColumnNames().forEach(col -> map.put(col, row.get(col)));

                return HistoriesSaveDto.from(map);
            })
            .one();
}
