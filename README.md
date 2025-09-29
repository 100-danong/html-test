import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;

@Table("insurance_balance_history")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class InsuranceBalanceHistory {

    @Id
    private Long id;

    @Column("ibh_date")
    private LocalDateTime ibhDate;

    @Column("ibh_cmp_code")
    private String ibhCmpCode;

    @Column("ibh_balance")
    private Integer ibhBalance;

    @Column("ibh_use_amt")
    private Integer ibhUseAmt;
}


import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface InsuranceBalanceHistoryRepository
        extends ReactiveCrudRepository<InsuranceBalanceHistory, Long> {
}


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InsuranceBalanceHistoryService {

    private final InsuranceBalanceHistoryRepository repository;

    public Mono<Void> saveAll(List<InsuranceBalanceHistory> histories) {
        return repository.saveAll(histories) // Flux<InsuranceBalanceHistory>
                .then(); // 완료되면 Mono<Void> 반환
    }
}
