return sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
        .doOnNext(sellerPolicyNumber -> {
            if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                historiesRenew.add(update);
            } else {
                histories.add(update);
            }
        })
        .switchIfEmpty(Mono.defer(() -> {
            log.info("already_endorsed_driver_id - W 데이터 없음 → 기존 테이블: {}", d.getPolicy_number());
            histories.add(update);
            return Mono.empty();
        }))
        .then();
