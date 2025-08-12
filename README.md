@Async
    @Scheduled(cron = "0 30 15 * * *")
    public String reGrouping(){
        //LocalDate salesDate = LocalDate.now().minusDays(1);
        LocalDate salesDate = LocalDate.parse("2025-08-03");
        List<ReGroupingDTO> calls = callMapper.findReGroupAllDay(salesDate);
        SellerInfo sellerInfo = null;
        if(calls != null) {
            for (ReGroupingDTO allcall : calls) {
                sellerInfo = sellerMapper.findBySellerCode(allcall.getSiSellerCode());
                List<CallInfo> callInfo = callMapper.findReGroupAll(salesDate, allcall.getRiId());
                List<CallInfo> currentGroup = new ArrayList<>();
                GroupcallInfo groupcallInfo;
                CallCountInfo callCountInfo = null;
                LocalDateTime lastTime = null;

                if (callInfo != null) {
                    for (CallInfo call : callInfo) {
                        if (currentGroup.isEmpty()) {
                            //첫 운행일 경우 그룹id update
                            callCountInfo = getReCallCountStart(call.getSalesDate(), call.getRiId(), call.getCiCallId(), sellerInfo.getSiId());

                            lastTime = call.getCiCompleteTime();
                            call.setGciGroupid(callService.getGroupIdNowTest(callCountInfo));

                            /*callMapper.updateReGrouping(call.getCiCallId(), call.getGciGroupid());*/

                            long diffTime = Duration.between(call.getCiAppointTime(), call.getCiCompleteTime()).getSeconds();
                            int runMinute = (int) Math.ceil((double) diffTime / 60);

                            CallBalanceDto balanceDto = callService.calcTotalBalance(runMinute, sellerInfo, call.getRiId(), call.getCiAppointTime(), call.getGciGroupid());

                            float gogoBalance = balanceDto.getGogoBalance();
                            int kbBalance = balanceDto.getKbBalance();

                            groupcallInfo = GroupcallInfo.create(call.getGciGroupid(), call.getRiId(), call.getCiAppointTime(), call.getCiCompleteTime(), gogoBalance, kbBalance, runMinute, call.getSalesDate());

                            currentGroup.add(call);
                            testGroupCallMapper.InsertGroupCallInfoWhenDeliveryQuit(groupcallInfo);
                            callCountMapper.InsertCallCountInfo(callCountInfo);
                        } else {
                            //그룹으로 묶기
                            if (!call.getCiAppointTime().isAfter(lastTime)) {
                                callCountInfo = getReCallCount(call.getSalesDate(), call.getRiId(), call.getCiCallId());

                                call.setGciGroupid(callService.getGroupIdNowTest(callCountInfo));

                                /*callMapper.updateReGrouping(call.getCiCallId(), call.getGciGroupid());*/

                                //종료 시간 초기화
                                if (call.getCiCompleteTime().isAfter(lastTime)) {
                                    groupcallInfo = testGroupCallMapper.findGroupcallInfoByGciGroupId(call.getGciGroupid());

                                    long diffTime = Duration.between(groupcallInfo.getGciFirstStarttime(), call.getCiCompleteTime()).getSeconds();
                                    int runMinute = (int) Math.ceil((double) diffTime / 60);

                                    CallBalanceDto balanceDto = callService.calcTotalBalance(runMinute, sellerInfo, call.getRiId(), call.getCiAppointTime(), call.getGciGroupid());

                                    float gogoBalance = balanceDto.getGogoBalance();
                                    int kbBalance = balanceDto.getKbBalance();

                                    currentGroup.add(call);
                                    testGroupCallMapper.UpdateGroupcallInfoWhenDeliveryQuit(call.getGciGroupid(), call.getCiCompleteTime(), gogoBalance, kbBalance, runMinute, LocalDateTime.now());
                                    callCountMapper.InsertCallCountInfo(callCountInfo);

                                    lastTime = call.getCiCompleteTime();

                                }
                            } else {
                                //신규 그룹 생성
                                callCountInfo = getReCallCountAfter(call.getSalesDate(), call.getRiId(), call.getCiCallId());

                                lastTime = call.getCiCompleteTime();
                                call.setGciGroupid(callService.getGroupIdNowTest(callCountInfo));

                                /*callMapper.updateReGrouping(call.getCiCallId(), call.getGciGroupid());*/

                                long diffTime = Duration.between(call.getCiAppointTime(), call.getCiCompleteTime()).getSeconds();
                                int runMinute = (int) Math.ceil((double) diffTime / 60);

                                CallBalanceDto balanceDto = callService.calcTotalBalance(runMinute, sellerInfo, call.getRiId(), call.getCiAppointTime(), call.getGciGroupid());

                                float gogoBalance = balanceDto.getGogoBalance();
                                int kbBalance = balanceDto.getKbBalance();

                                groupcallInfo = GroupcallInfo.create(call.getGciGroupid(), call.getRiId(), call.getCiAppointTime(), call.getCiCompleteTime(), gogoBalance, kbBalance, runMinute, call.getSalesDate());

                                currentGroup.add(call);
                                testGroupCallMapper.InsertGroupCallInfoWhenDeliveryQuit(groupcallInfo);
                                callCountMapper.InsertCallCountInfo(callCountInfo);
                            }
                        }
                    }
                }
            }
            return "재 그룹핑 완료";
        }
        return "데이터 없음";
    }
