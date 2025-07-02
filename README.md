                double ACC_X = (((double)sensorData[j][1])/32768)*16;
                double ACC_Y = (((double)sensorData[j][2])/32768)*16;
                double ACC_Z = (((double)sensorData[j][3])/32768)*16;

                double GRY_X = (((double)sensorData[j][4])/32768)*2000;
                double GRY_Y = (((double)sensorData[j][5])/32768)*2000;
                double GRY_Z = (((double)sensorData[j][6])/32768)*2000;

                double ANGLE_X = (double)sensorData[j][7];
                double ANGLE_Y = (double)sensorData[j][8];
                double ANGLE_Z = (double)sensorData[j][9] * -1;
