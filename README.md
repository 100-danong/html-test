    public Mono<SellerPolicyNumber> findSellerPolicyNumberByCmpcd(String siCmpCode, String spnApplyState) {
        log.info("흠냐룽");

        StringBuffer sb = new StringBuffer();
        sb.append("SELECT * ");
        sb.append("FROM seller_policy_number ");
        sb.append("WHERE si_cmp_code = :siCmpCode ");
        sb.append("AND spn_apply_state = :spnApplyState ");

        String sql = sb.toString();

        return databaseClient.sql(sql)
                .bind("siCmpCode", siCmpCode)
                .bind("spnApplyState", spnApplyState)
                .map((row, meta) -> {

                    SellerPolicyNumber dto = new SellerPolicyNumber();

                    dto.setSpnId(row.get("spn_id", Long.class));
                    dto.setSiCmpCode(row.get("si_cmp_code", String.class));
                    dto.setSpnPolicyNumber(row.get("spn_policy_number", String.class));
                    dto.setSpnApplicationNumber(row.get("spn_application_number", String.class));
                    dto.setSpnInsuImgpath(row.get("spn_insu_imgpath", String.class));
                    dto.setSpnApplyState(row.get("spn_apply_state", String.class));
                    dto.setSpnEffectStartdate(row.get("spn_effect_startdate", LocalDateTime.class));
                    dto.setSpnEffectEnddate(row.get("spn_effect_enddate", LocalDateTime.class));
                    dto.setSpnWriter(row.get("spn_writer", String.class));
                    dto.setSpnState(row.get("spn_state", Integer.class));
                    dto.setSpnInsTime(row.get("spn_ins_time", LocalDateTime.class));
                    dto.setSpnUpdTime(row.get("spn_upd_time", LocalDateTime.class));

                    log.info("??? : {}", dto.toString());

                    return dto;
                })
                .one();
    }

    오후 2:56:07: Executing ':new_GoPlanV1Application.main()'...


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

2025-12-18 14:56:19.535  INFO 3108 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Starting new_GoPlanV1Application using Java 11.0.15 on Gogofnd002 with PID 3108 (C:\Users\user02gogof\Desktop\new_GoPlanV1\build\classes\java\main started by user02gogof in C:\Users\user02gogof\Desktop\new_GoPlanV1)
2025-12-18 14:56:19.554 DEBUG 3108 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Running with Spring Boot v2.7.10, Spring v5.3.26
2025-12-18 14:56:19.560  INFO 3108 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : The following 4 profiles are active: "dev", "logging_daily", "logging_error", "logging_info"
2025-12-18 14:56:32.220  INFO 3108 --- [           main] c.g.kb.global.config.SecurityConfig      : accessDeniedHandler
2025-12-18 14:56:32.246  INFO 3108 --- [           main] c.g.kb.global.config.SecurityConfig      : authenticationEntryPoint
2025-12-18 14:56:35.280  INFO 3108 --- [           main] com.gogofnd.kb.new_GoPlanV1Application   : Started new_GoPlanV1Application in 18.108 seconds (JVM running for 19.658)
한글 테스트 Start
2025-12-18 14:56:39.199  INFO 3108 --- [nio-8888-exec-1] c.g.k.I.service.InsuranceService         : dto --> [KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034041, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G01, driver_id=GG0000034042, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252732953, effective_time=[1765486800, 1777496400], underwriting_after=1775401200), KbApiSignResultDto(proxy_driv_coorp_cmpcd=G03, driver_id=GG0000034043, vcno_hngl_nm=서울마포파4445, result=endorsed, policy_number=20252724146, effective_time=[1765486800, 1777496400], underwriting_after=1775401200)]
2025-12-18 14:56:40.550  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 조회된 라이더들 [RiderInfo(ri_id=34041, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034041, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34042, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034042, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252732953), RiderInfo(ri_id=34043, ri_name=null, ri_phone=null, ri_birthdate=null, ri_gender=0, ri_ss_number=null, ri_bike_number=null, ri_driver_id=GG0000034043, ri_active_area=null, ri_userid=null, ri_insu_status=051, ri_compinsu_enddate=null, ri_operpurp_code=null, ri_insu_startdate=null, ri_insu_enddate=null, ri_insu_imgpath=null, si_id=null, ri_total_webview_url=null, ri_balance=0, ri_pay_status=null, ri_received_driver_id=null, ri_ctcagreyn=null, ri_ins_time=null, ri_upd_time=null, ri_state=1, si_policy_number=20252724146)]
2025-12-18 14:56:40.570  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:56:40.574  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034041
2025-12-18 14:56:40.577  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:56:40.578  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:56:40.580  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:56:40.581  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:56:40.599  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G01
2025-12-18 14:56:40.599  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034042
2025-12-18 14:56:40.600  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:56:40.601  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:56:40.601  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:56:40.601  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:56:40.602  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : proxy_driv_coorp_cmpcd : G03
2025-12-18 14:56:40.602  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : driver_id : GG0000034043
2025-12-18 14:56:40.603  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : Vcno_hngl_nm : 서울마포파4445
2025-12-18 14:56:40.603  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : result : endorsed
2025-12-18 14:56:40.603  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : effective_time : [1765486800, 1777496400]
2025-12-18 14:56:40.603  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : underwriting_after : 1775401200
2025-12-18 14:56:40.617  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34041
2025-12-18 14:56:40.636  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.r.SellerPolicyNumberRepository   : 흠냐룽
2025-12-18 14:56:40.658  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34042
2025-12-18 14:56:40.659  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.r.SellerPolicyNumberRepository   : 흠냐룽
2025-12-18 14:56:40.684  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 기명등재b ri_id 값 = 34043
2025-12-18 14:56:40.685  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.r.SellerPolicyNumberRepository   : 흠냐룽
2025-12-18 14:56:40.697  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 여기 들옴?
2025-12-18 14:56:40.702  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 여기 들옴?
2025-12-18 14:56:40.711  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : 여기 들옴?
2025-12-18 14:56:40.725  INFO 3108 --- [actor-tcp-nio-2] c.g.k.I.service.InsuranceService         : histories --> []
