public static class LastSensorData {
        public String[] lastGps = {"0.0", "0.0", "0.0"};
        public LocalDateTime lastDate = LocalDateTime.now();

        public LastSensorData(String gpsLatitude, String gpsLongitude, String gpsAltitude, String dateLog){
            this.lastGps = new String[]{gpsLatitude, gpsLongitude, gpsAltitude};
            this.lastDate = LocalDateTime.parse(dateLog, DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        }

        public LastSensorData(String dateLog){
            this.lastDate = LocalDateTime.parse(dateLog, DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        }

        public LastSensorData(){}
    }


List<LastSensorData> lastSensorDataList = jdbcTemplate.query("select gpsLatitude, gpsLongitude, gpsAltitude, date_format(datelog, '%Y%m%d%H%i%s') as datelog from tb_sensordata_" + date + " where cSenID = ? order by datelog desc limit ?",
                (resultSet, i) -> {
                    try {
                        return new LastSensorData(aes256Hash.decrypt(resultSet.getString("gpsLatitude")), aes256Hash.decrypt(resultSet.getString("gpsLongitude")), aes256Hash.decrypt(resultSet.getString("gpsAltitude")), resultSet.getString("datelog"));
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                }, dto.getSenID(), limit);
