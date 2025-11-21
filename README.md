@Repository
@RequiredArgsConstructor
public class RiderInfoMapper {

    private final DatabaseClient databaseClient;

    public Flux<RiderInfo> findByDriverId(String driverId) {

        StringBuffer sb = new StringBuffer();
        sb.append("SELECT ri_id, ri_name, ri_driver_id ");
        sb.append("FROM rider_info ");
        sb.append("WHERE ri_driver_id = :driverId ");
        sb.append("AND ri_state = 1");

        return databaseClient.sql(sb.toString())
                .bind("driverId", driverId)
                .map((row, meta) -> RiderInfo.builder()
                        .riId(row.get("ri_id", Long.class))
                        .riName(row.get("ri_name", String.class))
                        .riDriverId(row.get("ri_driver_id", String.class))
                        .build()
                )
                .all();
    }
}
