   SELECT ah.ah_claim_number, ah.ah_accident_time
   FROM accident_history AS ah
   INNER JOIN call_info AS ci ON ah.ah_call_id = ci.ci_id
   INNER JOIN rider_info AS ri ON ci.ri_id = ri.ri_id
   WHERE ri.ri_phone = sch_ri_phone
   ORDER BY ah.ah_accident_time DESC;



      SELECT
      COUNT(*) AS cnt
   FROM accident_history AS ah
   INNER JOIN call_info AS ci ON ah.ah_call_id = ci.ci_id
   INNER JOIN rider_info AS ri ON ci.ri_id = ri.ri_id
   WHERE ri.ri_phone = sch_ri_phone;
