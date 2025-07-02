    private double getSpeed(double latitude1, double longitude1, double latitude2, double longitude2, LocalDateTime date1, LocalDateTime date2, int j){
        double speed = 0;
        if(latitude1 > 0 && longitude1 > 0 && latitude2 > 0 && longitude2 > 0){
            double distance = computeDistanceAndBearing(latitude1, longitude1, latitude2, longitude2);
            double duration = (double) (Math.abs(this.getSeconds(date1, j) - this.getSeconds(date2, j))) / 1000;

            if(duration > 0 && distance > 0){
                speed = distance / duration;
                speed = speed * 3600 / 1000;
                speed = (double) Math.round(speed * 100) / 100 ;
            }

        }

        return speed;
    }
