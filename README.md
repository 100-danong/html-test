SELECT c.Dtime, c.ci_req_delivery_time, c.ci_pickup_time, c.rider_id, c.call_id, c.divs, c.ri_userid, c.group_id, si_seller_code, si_api_key, c.driver_deliveryaddress, c.driver_pickupaddress, c.company_name
        FROM
        (
        SELECT c1.ri_id AS rider_id, c1.ci_appoint_time AS Dtime, c1.ci_req_delivery_time, c1.ci_pickup_time, r.ri_userid, ci_recv_group_id AS group_id, s.si_seller_code, s.si_api_key, c1.ci_call_id AS call_id, 'start' AS divs,
        c1.ci_delivery_address as driver_deliveryaddress, c1.ci_pickup_address as driver_pickupaddress, c1.ci_company_name as company_name
        FROM call_info c1
        INNER JOIN rider_info r
        ON c1.ri_id = r.ri_id
        INNER JOIN seller_info s
        ON r.si_id = s.si_id
        WHERE c1.ci_appoint_time between '2025-05-06 06:00:00' and '2025-05-0 06:00:00'
        UNION ALL
        SELECT c2.ri_id AS rider_id, c2.ci_complete_time AS Dtime, c2.ci_req_delivery_time, c2.ci_pickup_time, r.ri_userid, ci_recv_group_id AS group_id, s.si_seller_code, s.si_api_key, c2.ci_call_id AS call_id, 'end' AS divs,
        c2.ci_delivery_address as driver_deliveryaddress, c2.ci_pickup_address asdriver_pickupaddress, c2.ci_company_name as company_name
        FROM call_info c2
        INNER JOIN rider_info r
        ON c2.ri_id = r.ri_id
        INNER JOIN seller_info s
        ON r.si_id = s.si_id
        WHERE c2.ci_appoint_time between '2025-05-06 06:00:00' and '2025-05-07 06:00:00'
        ) c
        WHERE c.Dtime IS NOT NULL
        ORDER BY c.Dtime
