    @Transactional(readOnly = true)
    public Mono<RateInfoRes> getRateInfo(SellerCodeReq dto, String apiKey) throws Exception {
        //복호화 . sellecode랑 비교
        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}",decryptedApiKey);
        if(!dto.getSellerCode().equals(decryptedApiKey)){
            return Mono.error(new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED));
        }

        // 운영사 조회후, 운영사가 kb와 계약한 시간당 요금 분 단위로 구하여 balance로 선언
        return accidentRepository.findSellerBySellerCode(dto.getSellerCode())
                .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR)))
                .flatMap(sellerInfo -> {
                    String balance = String.valueOf((sellerInfo.getSi_db1_premium() + sellerInfo.getSi_db2_premium() + sellerInfo.getSi_pd_premium()) / 60);

                    // 운영사의 총 사고보상금 조회
                    return accidentRepository.findTotalCompensation(dto.getSellerCode())
                            .map(totalCompensation -> {
                                log.info("1");
                                // 손해율 = (총 보상금) / (운영사가 입금한 예납금) * 100
                                int sellerBalance = Math.toIntExact(sellerInfo.getSi_balance());
                                log.info("2");
                                String strLossRate = String.format("%.2f", (sellerBalance == 0 ? 0 : (double) totalCompensation / sellerBalance * 100));
                                log.info("3");
                                return new RateInfoRes(strLossRate,balance);
                            });
                });
    }

    package com.gogofnd.kb.Accident.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import reactor.core.CoreSubscriber;
import reactor.core.publisher.Mono;

@NoArgsConstructor
@Getter
public class RateInfoRes extends Mono<RateInfoRes> {
    private String seller_lossRate;
    private String seller_balance;

    public RateInfoRes(String seller_lossRate, String seller_balance) {
        this.seller_lossRate = seller_lossRate + "%";
        this.seller_balance = seller_balance;
    }

    @Override
    public void subscribe(CoreSubscriber<? super RateInfoRes> actual) {

    }
}


    오후 1:50:09: Executing ':new_GoPlanV1Application.main()'...

> Task :compileJava
> Task :processResources UP-TO-DATE
> Task :classes

> Task :new_GoPlanV1Application.main()

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v2.7.10)

2025-12-16 13:50:20.254  INFO 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 1964 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-16 13:50:20.280 DEBUG 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-16 13:50:20.285  INFO 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-16 13:50:35.380  INFO 1964 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-16 13:50:35.385  INFO 1964 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-16 13:50:38.931  INFO 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 21.249 seconds (JVM running for 22.816)
한글 테스트 Start
2025-12-16 13:50:49.505  INFO 1964 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : decrypt : 194ea163e38
2025-12-16 13:50:49.681  INFO 1964 --- [actor-tcp-nio-2] c.g.k.A.repository.AccidentRepository    : 쿼리 :  select  ifnull(sum(ah.ah_compensation), 0) as tot_compensation  from accident_history as ah  inner join call_info as ci on ah.ah_call_id = ci.ci_id  inner join rider_info as ri on ci.ri_id = ri.ri_id  inner join seller_info as si on ri.si_id = si.si_id  where 1=1  and si.si_seller_code = :si_seller_code  and ri.ri_state = 1 
2025-12-16 13:50:49.715  INFO 1964 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 1
2025-12-16 13:50:49.742  INFO 1964 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 2
2025-12-16 13:50:49.747  INFO 1964 --- [actor-tcp-nio-2] c.g.kb.Accident.service.AccidentService  : 3


Code	Details
503
Undocumented
Error:
Response body
Download
{
  "timestamp": "2025-12-16T04:51:20.545+00:00",
  "status": 503,
  "error": "Service Unavailable",
  "path": "/api/goplanV1/service/info"
}
