    public static AccidentHistory create(AccidentCreate dto, String ah_call_id){
        return AccidentHistory.builder()
                .ahAccidentTime(LocalDateTime.ofInstant(Instant.ofEpochSecond(dto.getAccident_time()), TimeZone.getDefault().toZoneId()))
                .ahClaimNumber(dto.getClaim_number())
                .ahClaimTime(LocalDateTime.ofInstant(Instant.ofEpochSecond(dto.getClaim_time()), TimeZone.getDefault().toZoneId()))
                .ahCallId(ah_call_id)
                .ahInsTime(LocalDateTime.now())
                .ahUpdTime(LocalDateTime.now())
                .ahState(0)
                .build();
    }
