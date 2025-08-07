public String reGrouping(LocalDate salesDate, Long riId, String seller_code) {
        SellerInfo sellerInfo = sellerMapper.findBySellerCode(seller_code);
        List<CallInfo> callInfo = callMapper.findReGroupAll(salesDate, riId);
        List<CallInfo> currentGroup = new ArrayList<>();
        GroupcallInfo groupcallInfo;
        CallCountInfo callCountInfo = null;
        LocalDateTime lastTime = null;

        if(callInfo != null){
            for(CallInfo call : callInfo){
                if(currentGroup.isEmpty()){
                    log.info("첫 운행");
                    //첫 운행일 경우 그룹id update
                    callCountInfo = getCallCountStart(call.getSalesDate(), call.getRiId(), call.getCiCallId(), sellerInfo.getSiId());

                    lastTime = call.getCiCompleteTime();
                    call.setGciGroupid(callService.getGroupIdNowTest(callCountInfo));

                    callMapper.updateReGrouping(call.getCiCallId(), call.getGciGroupid());

                    long diffTime = Duration.between(call.getCiAppointTime(), call.getCiCompleteTime()).getSeconds();
                    int runMinute = (int) Math.ceil((double) diffTime / 60);

                    CallBalanceDto balanceDto = callService.calcTotalBalance(runMinute, sellerInfo, call.getRiId(), call.getCiAppointTime(), call.getGciGroupid());

                    float gogoBalance = balanceDto.getGogoBalance();
                    int kbBalance = balanceDto.getKbBalance();

                    log.info("운행 시간 {}", runMinute);

                    groupcallInfo = GroupcallInfo.create(call.getGciGroupid(), call.getRiId(), call.getCiAppointTime(), call.getCiCompleteTime(), gogoBalance, kbBalance, runMinute, call.getSalesDate());

                    currentGroup.add(call);
                    groupCallMapper.InsertGroupCallInfoWhenDeliveryQuit(groupcallInfo);
                    callCountMapper.InsertCallCountInfo(callCountInfo);
                } else {
                    //그룹으로 묶기
                    if(!call.getCiAppointTime().isAfter(lastTime)) {
                        //종료 시간 초기화
                        if(call.getCiCompleteTime().isAfter(lastTime)){
                            log.info("그룹핑");
                            callCountInfo = getCallCount(call.getSalesDate(), call.getRiId(), call.getCiCallId());

                            lastTime = call.getCiCompleteTime();
                            call.setGciGroupid(callService.getGroupIdNowTest(callCountInfo));

                            callMapper.updateReGrouping(call.getCiCallId(), call.getGciGroupid());

                            groupcallInfo = groupCallMapper.findGroupcallInfoByGciGroupId(call.getGciGroupid());

                            long diffTime = Duration.between(groupcallInfo.getGciFirstStarttime(), call.getCiCompleteTime()).getSeconds();
                            int runMinute = (int) Math.ceil((double) diffTime / 60);

                            log.info("운행 시간 {}", runMinute);

                            CallBalanceDto balanceDto = callService.calcTotalBalance(runMinute, sellerInfo, call.getRiId(), call.getCiAppointTime(), call.getGciGroupid());

                            float gogoBalance = balanceDto.getGogoBalance();
                            int kbBalance = balanceDto.getKbBalance();

                            currentGroup.add(call);
                            groupCallMapper.UpdateGroupcallInfoWhenDeliveryQuit(call.getGciGroupid(), call.getCiCompleteTime(), gogoBalance, kbBalance, runMinute, LocalDateTime.now());
                            callCountMapper.InsertCallCountInfo(callCountInfo);

                            lastTime = call.getCiCompleteTime();

                        }
                    } else {
                        log.info("신규 그룹 생성");
                        //신규 그룹 생성
                        callCountInfo = getCallCountAfter(call.getSalesDate(), call.getRiId(), call.getCiCallId());

                        lastTime = call.getCiCompleteTime();
                        call.setGciGroupid(callService.getGroupIdNowTest(callCountInfo));

                        callMapper.updateReGrouping(call.getCiCallId(), call.getGciGroupid());

                        long diffTime = Duration.between(call.getCiAppointTime(), call.getCiCompleteTime()).getSeconds();
                        int runMinute = (int) Math.ceil((double) diffTime / 60);

                        CallBalanceDto balanceDto = callService.calcTotalBalance(runMinute, sellerInfo, call.getRiId(), call.getCiAppointTime(), call.getGciGroupid());

                        float gogoBalance = balanceDto.getGogoBalance();
                        int kbBalance = balanceDto.getKbBalance();

                        log.info("운행 시간 {}", runMinute);

                        groupcallInfo = GroupcallInfo.create(call.getGciGroupid(), call.getRiId(), call.getCiAppointTime(), call.getCiCompleteTime(), gogoBalance, kbBalance, runMinute, call.getSalesDate());

                        currentGroup.add(call);
                        groupCallMapper.InsertGroupCallInfoWhenDeliveryQuit(groupcallInfo);
                        callCountMapper.InsertCallCountInfo(callCountInfo);
                    }
                }
            }
            return "재 그룹핑 완료";
        }
        return "데이터 없음";
    }
