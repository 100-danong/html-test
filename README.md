[
  {
    "driver_id": "GG0000034041",
    "effective_time": [
      1765486800, 1777496400
    ],
    "policy_number": "20252732953",
    "proxy_driv_coorp_cmpcd": "G01",
    "result": "endorsed",
    "underwriting_after": 1775401200,
    "vcno_hngl_nm": "서울마포파4445"
  },
  {
    "driver_id": "GG0000034042",
    "effective_time": [
      1765486800, 1777496400
    ],
    "policy_number": "20252732953",
    "proxy_driv_coorp_cmpcd": "G01",
    "result": "endorsed",
    "underwriting_after": 1775401200,
    "vcno_hngl_nm": "서울마포파4445"
  },
  {
    "driver_id": "GG0000034043",
    "effective_time": [
      1765486800, 1777496400
    ],
    "policy_number": "20252724146",
    "proxy_driv_coorp_cmpcd": "G03",
    "result": "insure_needed",
    "underwriting_after": 1775401200,
    "vcno_hngl_nm": "서울마포파4445"
  }
]

이렇게 넣고 돌렸는데

오후 3:42:24: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: C:\Users\user02gogof\Desktop\new_GoPlanV1\src\main\java\com\gogofnd\kb\Insurance\controller\InsuranceApi.java uses unchecked or unsafe operations.
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

2025-12-18 15:42:39.674  INFO 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 1964 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 15:42:39.681 DEBUG 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 15:42:39.682  INFO 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 15:43:01.499  INFO 1964 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 15:43:01.502  INFO 1964 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 15:43:09.614  INFO 1964 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 32.647 seconds (JVM running for 34.412)
한글 테스트 Start
2025-12-18 15:43:19.977  INFO 1964 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=insure_needed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 15:43:21.104  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=062, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=062, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 15:43:21.127  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 15:43:21.133  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 15:43:21.135  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 15:43:21.136  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 15:43:21.137  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 15:43:21.138  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 15:43:21.187  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 15:43:21.240  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 갱신 데이터 없음
2025-12-18 15:43:21.361  INFO 1964 --- [actor-tcp-nio-2] c.g.k.I.r.RiderInsuranceHistoryMapper    : [HistoriesSaveDto(ihId=53743, riId=34041, siId=4, ihInsuState=062, ihPolicyNumber=20257391566, ihApplicationNumber=RQ2573001963, ihEffectStartdate=2025-12-12T06:00, ihEffectEnddate=2026-04-30T06:00, ihUntil=2026-03-11T00:00, ihAgeYn=, ihApplyState=Y, ihInsTime=2025-12-10T15:08:40.631, ihUpdTime=2025-12-18T15:43:21.233185500, ishInsTime=2025-12-18T15:43:21.233185500, riTotalWebviewUrl=null, rihWithdrawCompleteTime=null, rihUnderCompleteTime=null, rihEndoCompleteTime=2025-12-18T15:43:21.233185500, ihRejectCode=endorsed, riState=1, pastRiId=null)]


ㅎ하나만 돌았어 이거 왜 이런거야?
