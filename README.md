// 모든 sellerPolicyNumberRepository 호출 부분 수정
return sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
        .map(sellerPolicyNumber -> {
            log.info("여기는??");
            log.info("PolicyNumbar -> {}", d.getPolicy_number());
            log.info("PolicyNumbar -> {}", sellerPolicyNumber.getSpnPolicyNumber());
            log.info(sellerPolicyNumber.toString());
            
            if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                historiesRenew.get().add(update);
            } else {
                histories.get().add(update);
            }
        })
        .defaultIfEmpty(null)  // ✅ 데이터 없으면 null emit → map 실행됨
        .doOnNext(seller -> {
            if (seller == null) {
                log.info("W 데이터 없음 → 기존 테이블: {}", d.getPolicy_number());
                histories.get().add(update);  // ✅ 갱신 아닌 경우 기존 테이블
            }
        })
        .then();
