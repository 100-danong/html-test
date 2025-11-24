public Mono<Integer> insertCallCountInfo(CallCountInfo dto) {

    StringBuffer sb = new StringBuffer();
    sb.append("INSERT INTO call_count_info ");
    sb.append("(sales_date, ri_id, si_id, ci_call_id, cci_start_count, cci_end_count, ");
    sb.append(" cci_group_count, cci_total_count, cci_ins_time, cci_upd_time, flag) ");
    sb.append("VALUES (:salesDate, :riId, :siId, :ciCallId, :cciStartCount, :cciEndCount, ");
    sb.append(" :cciGroupCount, :cciTotalCount, NOW(), NOW(), :flag)");

    return databaseClient.sql(sb.toString())
            .bind("salesDate", dto.getSalesDate())
            .bind("riId", dto.getRiId())
            .bind("siId", dto.getSiId())
            .bind("ciCallId", dto.getCiCallId())
            .bind("cciStartCount", dto.getCciStartCount())
            .bind("cciEndCount", dto.getCciEndCount())
            .bind("cciGroupCount", dto.getCciGroupCount())
            .bind("cciTotalCount", dto.getCciTotalCount())
            .bind("flag", dto.getFlag())
            .fetch()
            .rowsUpdated();
}
