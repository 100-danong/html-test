Mono<Integer> updateMono =
                            (r.getRiState() == 2)
                                ? riderInsuranceHistoryMapper.riderInsuranceHistoryWithdrawUpdateRenew(dto)
                                : riderInsuranceHistoryMapper.riderInsuranceHistoryWithdrawUpdate(dto);

                    // ✅ 업데이트 실행 후 실제 KbSignUpReq를 방출
                    return updateMono.thenReturn(kbSignUpReq);
