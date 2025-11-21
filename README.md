@Repository
@RequiredArgsConstructor
public class GroupCallMapper {

    private final DatabaseClient databaseClient;

    public Flux<DeliveryInsureHistoryDto> findAllByCallAppointTimeBetweenAndRiderId(
            LocalDateTime startDate,
            LocalDateTime endDate,
            Long riderId
    ) {

        StringBuffer sb = new StringBuffer();
        sb.append("SELECT ");
        sb.append(" gci.gci_groupid, ");
        sb.append(" si.si_cmp_code, ");
        sb.append(" si.si_policy_number, ");
        sb.append(" UNIX_TIMESTAMP(gci.gci_first_starttime) as start_time, ");
        sb.append(" IF(gci.gci_last_endtime IS NOT NULL, UNIX_TIMESTAMP(gci.gci_last_endtime), UNIX_TIMESTAMP()) as end_time ");
        sb.append("FROM groupcall_info gci ");
        sb.append("INNER JOIN rider_info ri ON gci.ri_id = ri.ri_id ");
        sb.append("INNER JOIN seller_info si ON ri.si_id = si.si_id ");
        sb.append("WHERE 1=1 ");
        sb.append("  AND gci.gci_first_starttime >= :startDate ");
        sb.append("  AND gci.gci_first_starttime <= :endDate ");
        sb.append("  AND ri.ri_state = 1 ");
        sb.append("  AND ri.ri_id = :riderId");

        return databaseClient.sql(sb.toString())
                .bind("startDate", startDate)
                .bind("endDate", endDate)
                .bind("riderId", riderId)
                .map((row, meta) -> DeliveryInsureHistoryDto.builder()
                        .gciGroupid(row.get("gci_groupid", String.class))
                        .siCmpCode(row.get("si_cmp_code", String.class))
                        .siPolicyNumber(row.get("si_policy_number", String.class))
                        .startTime(row.get("start_time", Long.class))
                        .endTime(row.get("end_time", Long.class))
                        .build()
                )
                .all();
    }
}
