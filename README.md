select 
tu.shopName as `업체명`,
tu.bossName as `대표명`,
tu.businessNumber as `사업자등록번호`,
trr.remitPoint as `출금액`,
trr.remitDate as `출금일시`
from tableRemitRecord trr
join tableUser tu 
on trr.userId = tu.id
where trr.remitDate >= '2023-01-01' and trr.resultMessage = '정상'
order by trr.remitDate asc;
