    public Mono<Integer> insertAccident(AccidentHistory history) {
        String sql = """
            INSERT INTO accident_history
                (ah_accident_time, ah_claim_number, ah_claim_time, ah_call_id, ah_ins_time, ah_upd_time)
            VALUES
                (:ahAccidentTime, :ahClaimNumber, :ahClaimTime, :ahCallId, NOW(), NOW())
            """;

        return databaseClient.sql(sql)
                .bind("ahAccidentTime", history.getAhAccidentTime())
                .bind("ahClaimNumber", history.getAhClaimNumber())
                .bind("ahClaimTime", history.getAhClaimTime())
                .bind("ahCallId", history.getAhCallId())
                .fetch()
                .rowsUpdated(); // 영향받은 row 수 반환
    }

    public Mono<Integer> updateAccident(AccidentHistory history) {
        String sql = """
            UPDATE accident_history
               SET ah_upd_time = NOW()
             WHERE ah_claim_number = :ahClaimNumber
            """;

        return databaseClient.sql(sql)
                .bind("ahClaimNumber", history.getAhClaimNumber())
                .fetch()
                .rowsUpdated();
    }
