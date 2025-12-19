블로킹 처리 되던 커리들 논블로킹 처리로 변경 후 ci_appoint_time 컬럼의 값 초기화를
ci_pickup_time으로 되어있어 null 에러가 발생하여 수정하였고 R2DBC에서는 JDBC와 다르게 auto_increment를 자동으로 값을 가져와주지 않아서 insert 후 해당 값을 가져오는 쿼리를 추가함
