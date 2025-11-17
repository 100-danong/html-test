calls.forEach(call -> {
    String driverId = call.getRiDriverId();

    if (!driverId.equals("GG0000033950") &&
        !driverId.equals("GG0000033954") &&
        !driverId.equals("GG0000026975") &&
        !driverId.equals("GG0000024688") &&
        !driverId.equals("GG0000033903")) {
        continue;
    }

    DeliveryInsureHistoryDto dto = new DeliveryInsureHistoryDto(call);
    dto.TotalTimeSetting(callMapper.sumGroupCallTotalTime(driverId, startTime, endTime).toString());
    DeliveryInsureHistoryDtoList.add(dto);
});
