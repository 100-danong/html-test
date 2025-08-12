2025:08:12 10:29:51.585 INFO  --- [http-nio-9888-exec-5] c.g.k.global.config.HttpInterceptor : [REQ] ---> [METHOD] POST | [URL] /api/goplan/tg/safeToPlanStart | [qs] null | [TOKEN] null | reto null | [Body] POST
2025:08:12 10:29:51.586 DEBUG --- [http-nio-9888-exec-5] c.g.k.d.r.m.TgMapper.findByRiderId : ==>  Preparing: SELECT * FROM rider_info WHERE ri_userid = ? AND ri_insu_status = '062' AND ri_state = 1
2025:08:12 10:29:51.586 DEBUG --- [http-nio-9888-exec-5] c.g.k.d.r.m.TgMapper.findByRiderId : ==> Parameters: +821222468892(String)
2025:08:12 10:29:51.619 DEBUG --- [http-nio-9888-exec-5] c.g.k.d.r.m.TgMapper.findByRiderId : <==      Total: 1
2025:08:12 10:29:51.654 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.s.m.S.findBySellerCode : ==>  Preparing: SELECT * FROM seller_info WHERE si_seller_code = ?
2025:08:12 10:29:51.654 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.s.m.S.findBySellerCode : ==> Parameters: gogoriders(String)
2025:08:12 10:29:51.655 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.s.m.S.findBySellerCode : <==      Total: 1
2025:08:12 10:29:51.655 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.G.findGroupCallNotComplteTime : ==>  Preparing: SELECT count(*) FROM groupcall_info WHERE 1=1 AND ri_id = ? AND gci_last_endtime IS NULL
2025:08:12 10:29:51.655 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.G.findGroupCallNotComplteTime : ==> Parameters: 33046(Long)
2025:08:12 10:29:51.664 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.G.findGroupCallNotComplteTime : <==      Total: 1
2025:08:12 10:29:51.664 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.C.findCallDailyGroupIdCountToNow : ==>  Preparing: select count(*) from call_info where 1=1 and sales_date = ? and ri_id = ?
2025:08:12 10:29:51.664 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.C.findCallDailyGroupIdCountToNow : ==> Parameters: 2025-08-12(LocalDate), 33046(Long)
2025:08:12 10:29:51.671 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.C.findCallDailyGroupIdCountToNow : <==      Total: 1
2025:08:12 10:29:51.672 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.C.findLastGroupIdToNow : ==>  Preparing: select gci_groupid from call_info where 1=1 and sales_date = ? and ri_id = ? order by ci_appoint_time desc limit 1
2025:08:12 10:29:51.672 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.C.findLastGroupIdToNow : ==> Parameters: 2025-08-12(LocalDate), 33046(Long)
2025:08:12 10:29:51.672 DEBUG --- [http-nio-9888-exec-5] c.g.k.p.c.m.C.findLastGroupIdToNow : <==      Total: 1
2025:08:12 10:29:51.673 DEBUG --- [http-nio-9888-exec-5] c.g.k.d.r.m.T.insetStartCallInfo : ==>  Preparing: INSERT INTO call_info (ci_pickup_time, ci_appoint_time, ci_pickup_address, ci_call_id, ci_delivery_status, ci_company_name, ri_id, ci_ins_time, ci_upd_time, gci_groupid, sales_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
2025:08:12 10:29:51.673 DEBUG --- [http-nio-9888-exec-5] c.g.k.d.r.m.T.insetStartCallInfo : ==> Parameters: 2025-08-12T10:29:51.655259(LocalDateTime), 2025-08-12T10:29:51.655262(LocalDateTime), 오류가 발생했습니다.(String), safeKb_5364972145(String), 배차(String), (String), 33046(Long), 2025-08-12T10:29:51.655262(LocalDateTime), 2025-08-12T10:29:51.655262(LocalDateTime), GR20250812-33046-0002(String), 2025-08-12(LocalDate)
