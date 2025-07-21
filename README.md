package com.gogofnd.kb.repository;

import com.gogofnd.kb.dto.DbTestRiderIInfoDTO;
import org.springframework.data.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@Repository
@RequiredArgsConstructor
public class RiderInfoCustomRepositoryImpl implements RiderInfoCustomRepository {

    private final DatabaseClient databaseClient;

    @Override
    public Flux<DbTestRiderIInfoDTO> findComplexRiderInfo() {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT ri.*, cci.cci_content ");
        sb.append(" FROM rider_info ri ");
        sb.append(" INNER JOIN insurance_history ih ON ri.ri_id = ih.ri_id ");
        sb.append(" INNER JOIN insurance_state_history ish ON ih.ih_id = ish.ih_id ");
        sb.append(" LEFT JOIN common_code_info cci ON ish.ih_reject_code = cci.cci_code ");
        sb.append(" WHERE ri.ri_insu_status != '062' ");
        sb.append(" AND ri.ri_state = 1 ");
        sb.append(" GROUP BY ri.ri_id ");
        sb.append(" ORDER BY ri.ri_ins_time DESC ");

        String sql = sb.toString();

        return databaseClient.execute(sql)
                .fetch()
                .all()
                .map(row -> DbTestRiderIInfoDTO.from(row));
    }
}
