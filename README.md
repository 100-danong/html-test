            result.forEach(item -> {
                // call_id 로 calls_info 조회(종료 누락 시 타는 메소드니까 시작 데이터는 무조건 있는 거니까)
                // call_info 테이블만 업데이트 해주는게 아니라 정산 테이블에도 해줘야함
                CallInfo callInfo = callMapper.findByCallId(item.getCall_id());

                Integer resUpdCallInfo = callMapper.updateCallInfoNullCompleteTime(item.getCall_id(), convertDate(item.getDriver_enddate()));
                Integer resUpdGroupCallInfo = groupCallMapper.UpdateGroupcallInfoEmptyQuitTime(convertDate(item.getDriver_enddate()), callInfo.getGciGroupid());

                if(resUpdCallInfo <= 0 || resUpdGroupCallInfo <= 0){
                    throw new BusinessException(ErrorCode.DB_UPDATE_FAIL);
                }

                CallCountInfo insertCallCountInfo = getCallCountEnd(callInfo.getSalesDate(), riId);
                if(insertCallCountInfo != null) {
                    log.info("누락 건 call_count_info ::");
                    callCountMapper.InsertCallCountInfo(insertCallCountInfo);
                }

                log.info("누락 건 call_id :: " + item.getCall_id());
                log.info("누락 건 complete_time :: " + item.getDriver_enddate());

                KbApi11Req request = new KbApi11Req(callInfo);
                KBRetrofitConfig<KbApi11Req> KBRetrofitConfig = new KBRetrofitConfig<>();
