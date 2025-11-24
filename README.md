@Repository
@RequiredArgsConstructor
public class TgMapper {

    private final DatabaseClient databaseClient;

    public Mono<TgDTO> findTgDTO(Long riId) {

        StringBuffer sb = new StringBuffer();
        sb.append("SELECT ");
        sb.append(" ri.ri_id, ");
        sb.append(" ri.si_id, ");
        sb.append(" ri.ri_driver_id, ");
        sb.append(" si.si_cmp_code, ");
        sb.append(" si.si_policy_number, ");
        sb.append(" ci.ci_insu_call_id, ");
        sb.append(" ci.ci_appoint_time, ");
        sb.append(" ci.gci_groupid ");
        sb.append("FROM call_info ci ");
        sb.append("JOIN rider_info ri ON ci.ri_id = ri.ri_id ");
        sb.append("JOIN seller_info si ON ri.si_id = si.si_id ");
        sb.append("WHERE 1=1 ");
        sb.append(" AND ci.ci_complete_time IS NULL ");
        sb.append(" AND ci.ri_id = :riId ");
        sb.append("ORDER BY ci.ci_appoint_time DESC ");
        sb.append("LIMIT 1");

        return databaseClient.sql(sb.toString())
                .bind("riId", riId)
                .map((row, meta) -> {
                    TgDTO dto = new TgDTO();
                    dto.setRiId(row.get("ri_id", Long.class));
                    dto.setSiId(row.get("si_id", Long.class));
                    dto.setRiDriverId(row.get("ri_driver_id", String.class));
                    dto.setSiCmpCode(row.get("si_cmp_code", String.class));
                    dto.setSiPolicyNumber(row.get("si_policy_number", String.class));
                    dto.setCiInsuCallId(row.get("ci_insu_call_id", String.class));
                    dto.setCiAppointTime(
                            row.get("ci_appoint_time") != null
                                    ? row.get("ci_appoint_time").toString()
                                    : null
                    );
                    dto.setCiGroupId(row.get("gci_groupid", String.class));
                    return dto;
                })
                .one(); // LIMIT 1
    }
}
