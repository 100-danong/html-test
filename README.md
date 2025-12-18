return riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state())
                                                                        .doOnNext(riderInsuranceDto -> {
                                                                            if (riderInsuranceDto != null) {
                                                                                update.updateEndoCompl();
                                                                            }
                                                                            log.info("riId: {}", e.getRi_id());
                                                                            log.info("riState: {}", e.getRi_state());
                                                                            log.info(riderInsuranceDto.toString());
                                                                            update.updateTime();
                                                                            update.updateIshInsTime();
                                                                        })
                                                                        .then(sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                                                                                .doOnNext(sellerPolicyNumber -> {
                                                                                    log.info(sellerPolicyNumber.toString());

                                                                                    if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                        historiesRenew.add(update);
                                                                                    } else {
                                                                                        histories.add(update);
                                                                                    }
                                                                                })
                                                                                .switchIfEmpty(Mono.defer(() -> {
                                                                                    log.info("W 데이터 없음 → 기존 테이블: {}", d.getPolicy_number());
                                                                                    histories.add(update);
                                                                                    return Mono.empty();
                                                                                }))
                                                                                .then());

                                                                                이 코드 로그에서 보면 

                                                                                오후 3:26:14: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: Some input files use unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.

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

2025-12-18 15:26:30.153  INFO 3996 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 3996 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 15:26:30.169 DEBUG 3996 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 15:26:30.171  INFO 3996 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 15:26:42.947  INFO 3996 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 15:26:42.950  INFO 3996 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 15:26:46.224  INFO 3996 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 18.738 seconds (JVM running for 20.644)
한글 테스트 Start
2025-12-18 15:26:50.262  INFO 3996 --- [nio-8888-exec-2] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 15:26:51.607  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=062, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=062, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=062, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 15:26:51.625  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> []
2025-12-18 15:27:43.173  INFO 3996 --- [nio-8888-exec-3] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 15:27:43.230  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 15:27:43.232  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 15:27:43.232  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 15:27:43.233  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:27:43.234  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:27:43.234  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:27:43.234  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:27:43.248  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 15:27:43.248  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034042
2025-12-18 15:27:43.248  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:27:43.248  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:27:43.257  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:27:43.258  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:27:43.261  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G03
2025-12-18 15:27:43.262  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034043
2025-12-18 15:27:43.262  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:27:43.262  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:27:43.267  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:27:43.267  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:27:43.284  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34042
2025-12-18 15:27:43.324  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 15:27:43.349  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34043
2025-12-18 15:27:43.387  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : riId: 34042
2025-12-18 15:27:43.388  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : riState: 1
2025-12-18 15:27:43.454  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : RiderInsuranceDto(rihId=19495, riId=34042, ihId=53744, rihUnderRequestTime=2025-12-17T11:52:12.024419, rihUnderCompleteTime=null, rihEndoRequestTime=2025-12-17T15:18:11.176155, rihEndoCompleteTime=null, rihWithdrawRequestTime=2025-12-17T16:49:44.414662, rihWithdrawCompleteTime=null, rihInsTime=2025-12-10T16:51:03.550, rihUpdTime=2025-12-18T15:21:20.805906, rihState=1, pastRiId=null)
2025-12-18 15:27:43.461  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : riId: 34043
2025-12-18 15:27:43.461  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : riState: 1
2025-12-18 15:27:43.462  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : RiderInsuranceDto(rihId=19496, riId=34043, ihId=53745, rihUnderRequestTime=2025-12-17T11:52:12.027418, rihUnderCompleteTime=null, rihEndoRequestTime=2025-12-17T15:18:11.209062, rihEndoCompleteTime=null, rihWithdrawRequestTime=2025-12-17T16:49:44.424601, rihWithdrawCompleteTime=null, rihInsTime=2025-12-11T09:00:02.227, rihUpdTime=2025-12-18T15:21:20.815674, rihState=1, pastRiId=null)
2025-12-18 15:27:43.477  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : riId: 34041
2025-12-18 15:27:43.478  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : riState: 1
2025-12-18 15:27:43.479  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : RiderInsuranceDto(rihId=19494, riId=34041, ihId=53743, rihUnderRequestTime=2025-12-17T11:52:11.920418, rihUnderCompleteTime=null, rihEndoRequestTime=2025-12-17T15:18:11.038059, rihEndoCompleteTime=null, rihWithdrawRequestTime=2025-12-17T16:49:44.281561, rihWithdrawCompleteTime=null, rihInsTime=2025-12-10T15:08:40.631, rihUpdTime=2025-12-18T15:21:20.812673, rihState=1, pastRiId=null)
2025-12-18 15:27:43.486  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : W 데이터 없음 → 기존 테이블: 20252724146
2025-12-18 15:27:43.502  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : W 데이터 없음 → 기존 테이블: 20252732953
2025-12-18 15:27:43.508  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : W 데이터 없음 → 기존 테이블: 20252732953
2025-12-18 15:27:43.630  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> [HistoriesSaveDto(ihId=53745, riId=34043, siId=5, ihInsuState=062, ihPolicyNumber=20257391313, ihApplicationNumber=RQ2572998748, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=N, ihApplyState=Y, ihInsTime=2025-12-11T09:00:02.224, ihUpdTime=2025-12-18T15:27:43.463005300, ishInsTime=2025-12-18T15:27:43.463005300, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:27:43.461005200, ihRejectCode=endorsed, riState=1, pastRiId=null), HistoriesSaveDto(ihId=53744, riId=34042, siId=9, ihInsuState=062, ihPolicyNumber=20257391566, ihApplicationNumber=RQ2573001963, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=N, ihApplyState=Y, ihInsTime=2025-12-10T16:51:03.546, ihUpdTime=2025-12-18T15:27:43.455092600, ishInsTime=2025-12-18T15:27:43.455092600, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:27:43.387003700, ihRejectCode=endorsed, riState=1, pastRiId=null), HistoriesSaveDto(ihId=53743, riId=34041, siId=4, ihInsuState=062, ihPolicyNumber=20257391566, ihApplicationNumber=RQ2573001963, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=, ihApplyState=Y, ihInsTime=2025-12-10T15:08:40.631, ihUpdTime=2025-12-18T15:27:43.479005300, ishInsTime=2025-12-18T15:27:43.480006200, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:27:43.477005500, ihRejectCode=endorsed, riState=1, pastRiId=null)]
2025-12-18 15:27:43.640  INFO 3996 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : [HistoriesSaveDto(ihId=53745, riId=34043, siId=5, ihInsuState=062, ihPolicyNumber=20257391313, ihApplicationNumber=RQ2572998748, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=N, ihApplyState=Y, ihInsTime=2025-12-11T09:00:02.224, ihUpdTime=2025-12-18T15:27:43.463005300, ishInsTime=2025-12-18T15:27:43.463005300, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:27:43.461005200, ihRejectCode=endorsed, riState=1, pastRiId=null), HistoriesSaveDto(ihId=53744, riId=34042, siId=9, ihInsuState=062, ihPolicyNumber=20257391566, ihApplicationNumber=RQ2573001963, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=N, ihApplyState=Y, ihInsTime=2025-12-10T16:51:03.546, ihUpdTime=2025-12-18T15:27:43.455092600, ishInsTime=2025-12-18T15:27:43.455092600, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:27:43.387003700, ihRejectCode=endorsed, riState=1, pastRiId=null), HistoriesSaveDto(ihId=53743, riId=34041, siId=4, ihInsuState=062, ihPolicyNumber=20257391566, ihApplicationNumber=RQ2573001963, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=, ihApplyState=Y, ihInsTime=2025-12-10T15:08:40.631, ihUpdTime=2025-12-18T15:27:43.479005300, ishInsTime=2025-12-18T15:27:43.480006200, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:27:43.477005500, ihRejectCode=endorsed, riState=1, pastRiId=null)]


ㄱ값이 있다고 뜨는데 rihUnderCompleteTime은 null로 떠 이유가 뭘까?

