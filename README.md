-- 온나 데이터 수정

-- 1. 백업
-- 백업 테이블 생성 후 백업 데이터 이동
insert into call_info_backup_250729 
SELECT ci.*
FROM call_info ci
join rider_info ri
on ci.ri_id = ri.ri_id 
WHERE ri.ri_userid in('ONNA000382', 'ONNA001051', 'ONNA001169', 'ONNA001580') AND ci.ci_appoint_time >= '2025-07-28 06:00:00' AND ci.ci_appoint_time < '2025-07-29 06:00:00';

insert into groupcall_info_backup_250729 
SELECT ci.*
FROM groupcall_info ci
join rider_info ri
on ci.ri_id = ri.ri_id 
WHERE ri.ri_userid in('ONNA000382', 'ONNA001051', 'ONNA001169', 'ONNA001580') AND ci.gci_first_starttime >= '2025-07-28 06:00:00' AND ci.gci_first_starttime < '2025-07-29 06:00:00';

-- 2. 기존 데이터 삭제
DELETE from call_info WHERE ri_id in(
SELECT ri_id
from rider_info 
where ri_userid in('ONNA000382', 'ONNA001051', 'ONNA001169', 'ONNA001580')
) AND ci_appoint_time >= '2025-07-28 06:00:00' AND ci_appoint_time < '2025-07-29 06:00:00';

DELETE from groupcall_info WHERE ri_id in(
SELECT ri_id
from rider_info 
where ri_userid in('ONNA000382', 'ONNA001051', 'ONNA001169', 'ONNA001580')
) AND gci_first_starttime >= '2025-07-28 06:00:00' AND gci_first_starttime < '2025-07-29 06:00:00';


-- 3. 수정된 데이터 삽입
insert into call_info
select *
from `call_info_2025-07-29_onna`;

insert into groupcall_info 
select *
from `groupcall_info_2025-07-29_onna`;
