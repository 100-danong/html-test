package com.gogofnd.kb.Accident.repository;

import com.gogofnd.kb.Accident.dto.AccidentSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@Repository
@RequiredArgsConstructor
public class AccidentRepository {

    private final DatabaseClient databaseClient;

    public Mono<AccidentSearch> findByGroupCallIdForAccident(String callId) {

        StringBuffer sb = new StringBuffer();
        sb.append(" SELECT ci.ci_insu_call_id AS callId, ");
        sb.append(" gci.gci_first_starttime AS startTime, ");
        sb.append(" ci.ri_id AS riId ");
        sb.append(" FROM groupcall_info gci ");
        sb.append(" INNER JOIN call_info ci ");
        sb.append(" ON ci.gci_groupid = gci.gci_groupid ");
        sb.append(" WHERE ci.gci_groupid = :callId ");
        sb.append(" ORDER BY ci.ci_appoint_time ");
        sb.append(" LIMIT 1 ");

        String sql = sb.toString();

        return (Mono<AccidentSearch>) databaseClient.sql(sql)
                .bind("callId", callId)
                .map((row, metadata) -> {
                    AccidentSearch dto = new AccidentSearch();
                    dto.setCallId(row.get("callId", String.class));
                    dto.setStartTime(row.get("startTime", LocalDateTime.class));
                    dto.setRiId(row.get("riId", String.class));
                    return dto;
                }); // 결과가 1개 (LIMIT 1)
    }
}
