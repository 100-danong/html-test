SELECT 
  table_name AS 'Table Name', 
  ROUND(data_length / 1024 / 1024, 2) AS 'Data Size(MB)', 
  ROUND(index_length / 1024 / 1024, 2) AS 'Index Size(MB)', 
  ROUND((data_length + index_length) / 1024 / 1024, 2) AS 'Total Size(MB)' 
FROM information_schema.TABLES 
WHERE table_schema = 'your_database_name' 
ORDER BY `Total Size(MB)` DESC;
