SELECT gi.gci_groupid, ci.ci_recv_group_id, ri.ri_userid, gi.gci_first_starttime, gi.gci_last_endtime, gi.gci_total_time, gi.gci_gogo_total_balance
from groupcall_info gi 
join call_info ci 
on gi.gci_groupid = ci.gci_groupid 
join rider_info ri 
on gi.ri_id = ri.ri_id 
WHERE ri.ri_userid in('ONNA000382', 'ONNA001051', 'ONNA001169', 'ONNA001580', 'ONNA001302') AND gi.gci_first_starttime >= '2025-07-28 06:00:00' AND gi.gci_first_starttime < '2025-07-29 06:00:00'
group by gi.gci_groupid;
