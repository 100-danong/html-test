public Mono<SellerPolicyNumber> findSellerPolicyNumber(String siSellerCode, String spnApplyState) {

        StringBuffer sql = new StringBuffer();
        sql.append("SELECT spn.* ");
        sql.append("FROM seller_policy_number spn ");
        sql.append("INNER JOIN seller_info si ");
        sql.append("    ON spn.si_cmp_code = si.si_cmp_code ");
        sql.append("WHERE si.si_seller_code = :siSellerCode ");
        sql.append("  AND spn.spn_apply_state = :spnApplyState ");

        return client.sql(sql.toString())
            .bind("siSellerCode", siSellerCode)
            .bind("spnApplyState", spnApplyState)
            .map((row, meta) -> SellerPolicyNumber.builder()
                    .spnId(row.get("spn_id", Long.class))
                    .siCmpCode(row.get("si_cmp_code", String.class))
                    .spnPolicyNumber(row.get("spn_policy_number", String.class))
                    .spnApplicationNumber(row.get("spn_application_number", String.class))
                    .spnApplyState(row.get("spn_apply_state", String.class))
                    .siId(row.get("si_id", Long.class))
                    .build()
            )
            .one();
    }
