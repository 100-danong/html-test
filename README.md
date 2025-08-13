SELECT mid.gci_groupid, mid.ci_id
FROM call_info AS mid
JOIN call_info AS prev
  ON prev.ci_id = (
      SELECT ci_id
      FROM call_info
      WHERE sales_date = '2025-08-12'
      AND gci_groupid < mid.gci_groupid
      ORDER BY gci_groupid DESC
      LIMIT 1
  )
JOIN call_info AS next
  ON next.ci_id = (
      SELECT ci_id
      FROM call_info
      WHERE sales_date = '2025-08-12'
      AND gci_groupid > mid.gci_groupid
      ORDER BY gci_groupid ASC
      LIMIT 1
  )
WHERE prev.gci_groupid = next.gci_groupid
  AND mid.gci_groupid <> prev.gci_groupid
  AND mid.sales_date = '2025-08-12'
ORDER BY mid.gci_groupid;
