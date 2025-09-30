
    public Flux<CallInfoDto> findCallsByAppointTimeForAccident(AccidentSearch search) {
        String sql = """
            SELECT si.si_cmp_code       AS siCmpCode,
                   ri.ri_driver_id      AS riDriverId,
                   ci.ci_insu_call_id   AS ciInsuCallId,
                   si.si_policy_number  AS siPolicyNumber,
                   ci.ci_appoint_time   AS ciAppointTime,
                   ci.ci_pickup_address AS ciPickupAddress,
                   ci.ci_delivery_address AS ciDeliveryAddress
            FROM call_info ci
            INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id
            INNER JOIN seller_info si ON ri.si_id = si.si_id
            WHERE ci.ci_appoint_time >= :startTime
              AND ci.ci_appoint_time < :endTime
              AND ri.ri_id = :riId
            """;

        return databaseClient.sql(sql)
                .bind("startTime", search.getStartTime())
                .bind("endTime", search.getEndTime())
                .bind("riId", search.getRiId())
                .map((row, meta) -> {
                    CallInfoDto dto = new CallInfoDto();
                    dto.setSiCmpCode(row.get("siCmpCode", String.class));
                    dto.setRiDriverId(row.get("riDriverId", String.class));
                    dto.setCiInsuCallId(row.get("ciInsuCallId", String.class));
                    dto.setSiPolicyNumber(row.get("siPolicyNumber", String.class));
                    dto.setCiAppointTime(row.get("ciAppointTime", LocalDateTime.class));
                    dto.setCiPickupAddress(row.get("ciPickupAddress", String.class));
                    dto.setCiDeliveryAddress(row.get("ciDeliveryAddress", String.class));
                    return dto;
                })
                .all(); // 여러 건 반환이므로 Flux
    }
