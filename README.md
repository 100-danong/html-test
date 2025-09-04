SELECT gi.gci_groupid, ci.ci_recv_group_id, ri.ri_userid, gi.gci_first_starttime, gi.gci_last_endtime, gi.gci_total_time, gi.gci_gogo_total_balance
from groupcall_info gi 
join call_info ci 
on gi.gci_groupid = ci.gci_groupid 
join rider_info ri 
on gi.ri_id = ri.ri_id 
WHERE ri.si_id = '5' AND gi.sales_date = '2025-09-03'
group by gi.gci_groupid;
