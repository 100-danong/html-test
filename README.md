DELETE FROM call_info
WHERE ri_id IN (
    SELECT ri_id FROM (
        SELECT ci.ri_id
        FROM call_info ci
        JOIN rider_info ri ON ci.ri_id = ri.ri_id
        WHERE ci.ci_appoint_time >= '2025-07-29 00:00:00'
          AND ci.ci_appoint_time < '2025-07-29 06:00:00'
          AND ri.si_id = '5'
    ) AS temp
)
AND ci_appoint_time >= '2025-07-28 06:00:00'
AND ci_appoint_time < '2025-07-29 06:00:00';
