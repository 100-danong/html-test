import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@Repository
@RequiredArgsConstructor
public class RiderInfoCustomRepositoryImpl implements RiderInfoCustomRepository {

    private final DatabaseClient databaseClient;

    @Override
    public Flux<RiderInfoDTO> findComplexRiderInfo() {
        String sql = """
            SELECT ri.*, cci.cci_content
            FROM rider_info ri
            INNER JOIN insurance_history ih ON ri.ri_id = ih.ri_id
            INNER JOIN insurance_state_history ish ON ih.ih_id = ish.ih_id
            LEFT JOIN common_code_info cci ON ish.ih_reject_code = cci.cci_code
            WHERE ri.ri_insu_status != '062'
              AND ri.ri_state = 1
            GROUP BY ri.ri_id
            ORDER BY ri.ri_ins_time DESC
        """;
        return databaseClient.sql(sql)
            .fetch()
            .all()
            .map(row -> RiderInfoDTO.from(row));
    }
}
