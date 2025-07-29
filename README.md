DELETE from call_info 
WHERE ri_id in(
SELECT ci.ri_id 
FROM call_info ci
join rider_info ri 
on ci.ri_id = ri.ri_id
WHERE ci.ci_appoint_time >= '2025-07-29 00:00:00' AND ci.ci_appoint_time < '2025-07-29 06:00:00' AND ri.si_id = '5')
AND ci_appoint_time >= '2025-07-28 06:00:00' AND ci_appoint_time < '2025-07-29 06:00:00';
