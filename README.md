    public Mono<Void> signUpRequest() {
        Flux<RiderInfoDto> riders = riderMapper.findRequestsRiderByInsuranceStatusYesterday("051");

        List<KbSignUpReq> signUpRequests = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();

        return riders
                .flatMap(r -> {

                    log.info("1");

                    if (!r.getSiPolicyNumber().isEmpty()) {

                        return riderInsuranceHistoryMapper.findByRiderId(r.getRiId(), r.getRiState())
                                .flatMap(riderInsurancedto -> {

                                    log.info("2");

                                    riderInsurancedto.updateEndorsementRequestTime();

                                    if (r.getRiState() == 4) {
                                        insuranceHistoriesRenew.add(riderInsurancedto);
                                    } else {
                                        log.info("3");
                                        insuranceHistories.add(riderInsurancedto);
                                    }

                                    log.info("4");

                                    KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                                    try {
                                        String rawSsn = ssnDecode(kbSignUpReq.getSsn());
                                        kbSignUpReq.updateSsn(kbSsnEncode(rawSsn));
                                        signUpRequests.add(kbSignUpReq);
                                    } catch (Exception e) {
                                        return Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                                    }
                                    return Mono.empty();
                                });
                    }
                    return Mono.empty();
                })
                .then(
                        Mono.defer(() -> {

                            log.info("기명등재 요청 대상 명단 : {}", signUpRequests);
                            log.info("기명등재 요청 대상 인원 : {}", signUpRequests.size());

                            Mono<Void> normal =
                                    insuranceHistories.isEmpty()
                                            ? Mono.empty()
                                            : riderInsuranceHistoryMapper
                                            .riderInsuranceHistoryEndoUpdateAll(insuranceHistories)
                                            .then();

                            Mono<Void> renew =
                                    insuranceHistoriesRenew.isEmpty()
                                            ? Mono.empty()
                                            : riderInsuranceHistoryMapper
                                            .riderInsuranceHistoryEndoUpdateAllRenew(insuranceHistoriesRenew)
                                            .then();

                            return Mono.when(normal, renew);
                        })
                );
    }

public Mono<Void> riderInsuranceHistoryEndoUpdateAll(List<RiderInsuranceDto> list) {

        log.info("업뎃 왜 안 됌?");

        StringBuffer sql = new StringBuffer();
        sql.append("UPDATE rider_insurance_history ")
                .append("SET rih_endo_request_time = :endoRequestTime, ")
                .append("    rih_upd_time = :updTime ")
                .append("WHERE rih_id = :rihId");

        return Flux.fromIterable(list)
                .flatMap(item ->
                    databaseClient.sql(sql.toString())
                            .bind("endoRequestTime", item.getRihEndoRequestTime())
                            .bind("updTime", item.getRihUpdTime())
                            .bind("rihId", item.getRihId())
                            .fetch()
                            .rowsUpdated()
                )
                .then();
    }

    해당 코드에서 업뎃 왜 안 됌? 이라는 로그까지 뜨는데도 DB에선 업데이트가 안 되어있어 그래서 list를 조회까지 해봤는데 정상적으로 되어 있어 왜 안 되는 걸까? 에러도 안 나고 아무것도 없어 그냥 로그도 잘 출력 되는데 업데이트만 안 돼

    
