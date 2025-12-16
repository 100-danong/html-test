    @Transactional(readOnly = true)
    public Mono<RateInfoRes> getRateInfo(SellerCodeReq dto, String apiKey) throws Exception {
        //복호화 . sellecode랑 비교
        String decryptedApiKey = SellerAES_Encryption.decrypt(apiKey);
        log.info("decrypt : {}",decryptedApiKey);
        if(!dto.getSellerCode().equals(decryptedApiKey)){
            throw new BusinessException(ErrorCode.HANDLE_ACCESS_DENIED);
        }

        // 운영사 조회후, 운영사가 kb와 계약한 시간당 요금 분 단위로 구하여 balance로 선언
        return accidentRepository.findSellerBySellerCode(dto.getSellerCode())
                .flatMap(sellerInfo -> {
                    String balance = String.valueOf((sellerInfo.getSi_db1_premium() + sellerInfo.getSi_db2_premium() + sellerInfo.getSi_pd_premium()) / 60);

                    // 운영사의 총 사고보상금 조회
                    return accidentRepository.findTotalCompensation(dto.getSellerCode())
                            .flatMap(totalCompensation -> {
                                // 손해율 = (총 보상금) / (운영사가 입금한 예납금) * 100
                                int sellerBalance = Math.toIntExact(sellerInfo.getSi_balance());
                                String strLossRate = String.format("%.2f", (sellerBalance == 0 ? 0 : (double) totalCompensation / sellerBalance * 100));

                                return new RateInfoRes(strLossRate,balance);
                            });
                });
    }
