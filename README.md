return riderInsuranceHistoryMapper.findByRiderId(e.getRi_id(), e.getRi_state())
        .doOnNext(riderInsuranceDto -> {
            if (riderInsuranceDto != null) {
                log.info("여기 들옴?");
                update.updateEndoCompl();
            }
            update.updateTime();
            update.updateIshInsTime();
        })
        .then(sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                .doOnNext(sellerPolicyNumber -> {
                    log.info("여기는??");
                    log.info("PolicyNumbar -> {}", d.getPolicy_number());
                    log.info("SellerPolicyNumbar -> {}", sellerPolicyNumber.getSpnPolicyNumber());
                    log.info(sellerPolicyNumber.toString());
                    
                    // ✅ W 데이터 있으면 갱신, 없으면 기존 테이블
                    if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                        historiesRenew.get().add(update);
                    } else {
                        histories.get().add(update);
                    }
                })
                .switchIfEmpty(Mono.defer(() -> {
                    log.info("W 데이터 없음 → 기존 테이블: {}", d.getPolicy_number());
                    histories.get().add(update);
                    return Mono.empty();
                }))
                .then());
