SELECT 
'고고세이프' AS '플랫폼명',
gi.ri_id AS '라이더ID',
ri.ri_name AS '라이더명',
substr(gi.gci_first_starttime, 1, 10) AS '보험일자(운행일자)',
SUM(gi.gci_total_time) AS '시간제 운행 시간',
SUM(gi.gci_gogo_total_balance) AS '시간제 총 보험료',
SUM(gi.gci_total_balance) AS '시간제 총 정산 보험료'
from groupcall_info gi 
join rider_info ri 
on gi.ri_id = ri.ri_id 
where ri.si_id = '4'
group by 
gi.ri_id,
ri.ri_name,
DATE_FORMAT(DATE_SUB(gi.gci_first_starttime, INTERVAL 6 HOUR), '%Y-%m-%d');
