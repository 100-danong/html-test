public Mono<SellerPolicyNumber> findSellerPolicyNumberByCmpcd(String siCmpCode, String spnApplyState) {

    StringBuffer sb = new StringBuffer();
    sb.append("SELECT * ");
    sb.append("FROM seller_policy_number ");
    sb.append("WHERE si_cmp_code = :siCmpCode ");
    sb.append("AND spn_apply_state = :spnApplyState ");

    String sql = sb.toString();

    return databaseClient.sql(sql)
            .bind("siCmpCode", siCmpCode)
            .bind("spnApplyState", spnApplyState)
            .map((row, meta) -> {

                SellerPolicyNumber dto = new SellerPolicyNumber();

                dto.setSpnId(row.get("spn_id", Long.class));
                dto.setSiCmpCode(row.get("si_cmp_code", String.class));
                dto.setSpnPolicyNumber(row.get("spn_policy_number", String.class));
                dto.setSpnApplicationNumber(row.get("spn_application_number", String.class));
                dto.setSpnInsuImgpath(row.get("spn_insu_imgpath", String.class));
                dto.setSpnApplyState(row.get("spn_apply_state", String.class));
                dto.setSpnEffectStartdate(row.get("spn_effect_startdate", LocalDateTime.class));
                dto.setSpnEffectEnddate(row.get("spn_effect_enddate", LocalDateTime.class));
                dto.setSpnWriter(row.get("spn_writer", String.class));
                dto.setSpnState(row.get("spn_state", Integer.class));
                dto.setSpnInsTime(row.get("spn_ins_time", LocalDateTime.class));
                dto.setSpnUpdTime(row.get("spn_upd_time", LocalDateTime.class));

                return dto;
            })
            .one();
}
