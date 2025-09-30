@Repository
@RequiredArgsConstructor
public class AccidentRepository {

    private final DatabaseClient databaseClient;

    public Mono<AccidentSearch> findByGroupCallIdForAccident(String callId) {
        String sql = """
            SELECT ci.ci_insu_call_id AS callId,
                   gci.gci_first_starttime AS startTime,
                   ci.ri_id AS riId
            FROM groupcall_info gci
            INNER JOIN call_info ci
              ON ci.gci_groupid = gci.gci_groupid
            WHERE ci.gci_groupid = :callId
            ORDER BY ci.ci_appoint_time
            LIMIT 1
            """;

        return databaseClient.sql(sql)
                .bind("callId", callId)
                .map((row, metadata) -> new AccidentSearch(
                        row.get("callId", String.class),
                        row.get("startTime", LocalDateTime.class),
                        row.get("riId", String.class)
                ))
                .one(); // 결과가 1개 (LIMIT 1)
    }
}

Cannot resolve constructor 'AccidentSearch(T, T, T)'

라고 에러가 떠
