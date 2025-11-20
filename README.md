@Repository
@RequiredArgsConstructor
public class CallInfoRepository {

    private final DatabaseClient databaseClient;

    public Flux<CallInfo> findCallsBySellerCode(String sellerCode,
                                                LocalDateTime startDate,
                                                LocalDateTime endDate) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT ");
        sb.append("     ci.ci_call_id, ");
        sb.append("     ci.ci_appoint_time, ");
        sb.append("     ci.ci_complete_time ");
        sb.append(" FROM call_info ci ");
        sb.append(" INNER JOIN rider_info ri ON ci.ri_id = ri.ri_id ");
        sb.append(" INNER JOIN seller_info si ON ri.si_id = si.si_id ");
        sb.append(" WHERE 1=1 ");
        sb.append("   AND ci.ci_appoint_time >= :startDate ");
        sb.append("   AND ci.ci_appoint_time < :endDate ");
        sb.append("   AND si.si_seller_code = :sellerCode ");
        sb.append("   AND ri.ri_state = 1 ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("startDate", startDate)
                .bind("endDate", endDate)
                .bind("sellerCode", sellerCode)
                .map((row, meta) -> {
                    CallInfo ci = new CallInfo();
                    ci.setCi_call_id(row.get("ci_call_id", String.class));
                    ci.setCi_appoint_time(row.get("ci_appoint_time", LocalDateTime.class));
                    ci.setCi_complete_time(row.get("ci_complete_time", LocalDateTime.class));
                    return ci;
                })
                .all();   // Flux
    }
}
