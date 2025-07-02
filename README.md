                try {
                    gpsLatitude = aes256Hash.encrypt(gpsLatitude);
                    gpsLongitude = aes256Hash.encrypt(gpsLongitude);
                    gpsAltitude = aes256Hash.encrypt(gpsAltitude);
                } catch(Exception e){
                    gpsLatitude = gpsList[i][1];
                    gpsLongitude = gpsList[i][0];
                    gpsAltitude = gpsList[i][2];
                }
