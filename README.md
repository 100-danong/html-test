SQL Error [1064] [42000]: (conn=2658460) You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near '(ORDER BY gci_groupid) AS prev_val,
LEAD(gci_groupid) OVER (ORDER BY gci_groupi' at line 5

SELECT *
FROM (
SELECT 
ci_id,
gci_groupid,
LAG(gci_groupid) OVER (ORDER BY gci_groupid) AS prev_val,
LEAD(gci_groupid) OVER (ORDER BY gci_groupid) AS next_val 
from call_info
) t
WHERE prev_val = next_val AND gci_groupid <> prev_val AND sales_date = '2025-08-12';
