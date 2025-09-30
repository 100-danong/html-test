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

@Service
@RequiredArgsConstructor
public class AccidentService {

    private final AccidentRepository accidentRepository;

    public Mono<AccidentSearch> getAccidentInfo(String callId) {
        return accidentRepository.findByGroupCallIdForAccident(callId);
    }
}
