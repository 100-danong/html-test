2025-08-05 14:33:15.749 DEBUG 12632 --- [nio-9888-exec-1] c.g.k.d.r.m.T.findRunDeliveryByDriverId  : ==>  Preparing: select ci.* from call_info as ci inner join rider_info as ri on ci.ri_id = ri.ri_id where 1=1 and ri.ri_id = ? AND ri.ri_state = 1 and ci.ci_complete_time is null
2025-08-05 14:33:15.751 DEBUG 12632 --- [nio-9888-exec-1] c.g.k.d.r.m.T.findRunDeliveryByDriverId  : ==> Parameters: 31494(Long)
2025-08-05 14:33:15.757 DEBUG 12632 --- [nio-9888-exec-1] c.g.k.d.r.m.T.findRunDeliveryByDriverId  : <==      Total: 1
