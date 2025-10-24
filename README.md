CREATE EVENT IF NOT EXISTS add_next_partition
ON SCHEDULE EVERY 1 MONTH
STARTS '2025-11-01 00:00:00'
DO
  SET @next_partition_name = DATE_FORMAT(DATE_ADD(CURDATE(), INTERVAL 1 MONTH), 'p%Y_%m');
  SET @next_partition_limit = DATE_FORMAT(DATE_ADD(CURDATE(), INTERVAL 2 MONTH), '%Y-%m-01');

  SET @sql = CONCAT(
      'ALTER TABLE call_count_info REORGANIZE PARTITION pmax INTO (',
      'PARTITION ', @next_partition_name, ' VALUES LESS THAN (TO_DAYS(\'', @next_partition_limit, '\')), ',
      'PARTITION pmax VALUES LESS THAN MAXVALUE)',
      ';'
  );

  PREPARE stmt FROM @sql;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
