    public String reGrouping(LocalDate salesDate, Long riId) {
        List<CallInfo> callInfo = callMapper.findReGroupAll(salesDate, riId);

        if(callInfo == null){
            for(CallInfo call : callInfo){

            }
            return "재 그룹핑 완료";
        }
        return "데이터 없음";
    }
