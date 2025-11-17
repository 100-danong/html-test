SellerPolicyNumber sellerPolicyNumber = sellerPolicyNumberRepository.findSellerPolicyNumberByCmpcd(d.getProxy_driv_coorp_cmpcd(), "W").orElse(new SellerPolicyNumber());****
