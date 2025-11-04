    public Mono<HistoriesSaveDto> findForUpdateById(Long ri_id, int ri_state) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT ih.*, ri.ri_state ");
        sb.append(" FROM insurance_history ih ");
        sb.append(" INNER JOIN rider_info ri ");
        sb.append(" ON ih.ri_id = ri.ri_id ");
        sb.append(" WHERE ih.ri_id = :riId ");
        sb.append(" AND ri.ri_state = :riState ");
        sb.append("  ");
        sb.append(" UNION ALL ");
        sb.append("  ");
        sb.append(" SELECT ih.*, ri.ri_state ");
        sb.append(" FROM insurance_renew_history ih ");
        sb.append(" INNER JOIN rider_info_renew ri ");
        sb.append(" ON ih.ri_id = ri.ri_id ");
        sb.append(" WHERE ih.ri_id = :riId ");
        sb.append(" AND ri.ri_state = :riState ");
        
        String sql = sb.toString();

        return databaseClient.excute(sql)
                .bind("riId", ri_id)
                .bind("riState", ri_state)
                .fetch()
                .all()
                .map(row -> HistoriesSaveDto.from(row));
    }
