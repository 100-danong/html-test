            List<GroupcallInfo> calls = callMapper.findAllByCallPickUpTimeBetween(startTime, endTime, cmpcdList);
            calls.forEach(call -> {
                if(call.getRiDriverId() != "GG0000033950" || call.getRiDriverId() != "GG0000033954" || call.getRiDriverId() != "GG0000026975" || call.getRiDriverId() != "GG0000024688" || call.getRiDriverId() != "GG0000033903"){
                    continue;
                }
                DeliveryInsureHistoryDto dto = new DeliveryInsureHistoryDto(call);
                dto.TotalTimeSetting(callMapper.sumGroupCallTotalTime(call.getRiDriverId(), startTime, endTime).toString());
                DeliveryInsureHistoryDtoList.add(dto);
            });
