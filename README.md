public Mono<Void> withDrawRiderBatch() {

        return riderMapper
                .findRequestsRiderByInsuranceStatusYesterday("071")
                .collectList()
                .flatMap(riders ->

                        riderInsuranceHistoryMapper
                                .findByRiderIdsForWithdraw(
                                        riders.stream()
                                                .map(RiderInfoDto::getRiId)
                                                .collect(Collectors.toList())
                                )
                                .collectList()
                                .flatMap(histories -> {

                                        List<KbSignUpReq> signUpRequests = new ArrayList<>();
                                        List<RiderInsuranceDto> withdrawNormal = new ArrayList<>();
                                        List<RiderInsuranceDto> withdrawRenew = new ArrayList<>();

                                        Map<Long, RiderInsuranceDto> historyMap =
                                                histories.stream()
                                                        .collect(Collectors.toMap(
                                                                RiderInsuranceDto::getRiId,
                                                                h -> h
                                                        ));

                                        for (RiderInfoDto r : riders) {

                                                RiderInsuranceDto riderInsuranceDto =
                                                        historyMap.get(r.getRiId());

                                                if (riderInsuranceDto == null) {
                                                        continue;
                                                }

                                                riderInsuranceDto.updateWithdrawRequestTime();

                                                KbSignUpReq kbSignUpReq = new KbSignUpReq(r);

                                                try {
                                                        String rawSsn = ssnDecode(kbSignUpReq.getSsn());
                                                        kbSignUpReq.updateSsn(kbSsnEncode(rawSsn));
                                                        signUpRequests.add(kbSignUpReq);
                                                } catch (Exception e) {
                                                        return Mono.error(new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR));
                                                }

                                                if (r.getRiState() == 2) {
                                                        withdrawRenew.add(riderInsuranceDto);
                                                } else {
                                                        withdrawNormal.add(riderInsuranceDto);
                                                }
                                        }

                                        log.info("기명등재 취소 요청 명단 : {}", signUpRe
