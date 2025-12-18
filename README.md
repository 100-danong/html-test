오후 2:01:58: Executing ':new_GoPlanV1Application.main()'...


> Task :compileJava
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
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

2025-12-18 14:02:26.018  INFO 4748 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 4748 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 14:02:26.027 DEBUG 4748 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 14:02:26.028  INFO 4748 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 14:02:39.909  INFO 4748 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 14:02:39.918  INFO 4748 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 14:02:43.913  INFO 4748 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 20.334 seconds (JVM running for 21.884)
한글 테스트 Start
2025-12-18 14:03:18.631  INFO 4748 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 14:03:19.939  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:03:19.956  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:03:19.986  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:03:20.006  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 14:03:20.007  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:03:20.020  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:03:20.022  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:03:20.023  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:03:20.071  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:03:20.072  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034042
2025-12-18 14:03:20.072  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:03:20.073  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:03:20.073  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:03:20.073  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:03:20.075  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G03
2025-12-18 14:03:20.076  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034043
2025-12-18 14:03:20.076  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:03:20.077  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:03:20.079  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:03:20.084  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:03:20.146  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 14:03:20.193  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34042
2025-12-18 14:03:20.219  INFO 4748 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34043
