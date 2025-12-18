    @Async
    @Scheduled(cron = "00 */20 * * * *")
    public void safeEndTimeList() throws IOException {
        log.info("20분마다 배치 시작");

        LocalDate EndDate = LocalDate.now();
        LocalDate StartDate = EndDate.minusDays(1);

        log.info("조회 시작 날짜 : {}", StartDate);
        log.info("조회 종료 날짜 : {}", EndDate);
        List<SafeDTO> safe = tgMapper.findByNoEndTime(StartDate, EndDate);

        if (safe.isEmpty()){
            log.info("종료 시간 없는 콜 없음.");
        }

        log.info(safe.toString());

        GogoSafeRetrofitConfig goplanRetrofitConfig = new GogoSafeRetrofitConfig();
        goplanRetrofitConfig.create(GogoSafeApi.class).gogoSafeEndTime(safe).execute();
    }

    이 코드에서

    package com.gogofnd.kb.domain.rider.dto.tg;

import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;

@Data
@ToString
public class SafeDTO {

    private String senId;
    private LocalDate Date;
}


이 DTO에 값을 담는데 

[{"senId":"+821235548089","Date":{"year":2025,"month":12,"day":17}},{"senId":"+821239002272","Date":{"year":2025,"month":12,"day":17}},{"senId":"+821239002245","Date":{"year":2025,"month":12,"day":17}}]


이런식으로 저장이 되서 상대 서버에서 Date가 null로 들어와 이유가 뭐야?
