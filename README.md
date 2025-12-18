return sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W")
                                                                            .doOnNext(sellerPolicyNumber -> {
                                                                                if (d.getPolicy_number().equals(sellerPolicyNumber.getSpnPolicyNumber())) {
                                                                                    historiesRenew.add(update);
                                                                                } else {
                                                                                    histories.add(update);
                                                                                }
                                                                            })
                                                                            .then();
