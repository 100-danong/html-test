            Mono<Integer> updateMono;
            if (r.getRiState() == 2) {
                updateMono =
                        riderInsuranceHistoryMapper
                                .riderInsuranceHistoryWithdrawUpdateRenew(dto);
            } else {
                updateMono =
                        riderInsuranceHistoryMapper
                                .riderInsuranceHistoryWithdrawUpdate(dto);
            }

            return updateMono.thenReturn(new KbSignUpReq(r));
