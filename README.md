package com.gogofnd.kb.Insurance.service;

import com.gogofnd.kb.Insurance.entity.SellerInfo;
import com.gogofnd.kb.Insurance.repository.SellerInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class SellerInfoService {

    private final SellerInfoRepository sellerInfoRepository;

    public Flux<SellerInfo> getAll() {
        return sellerInfoRepository.findAll();
    }

    public Mono<SellerInfo> getById(Long si_id) {
        return sellerInfoRepository.findById(si_id);
    }
    
    public Mono<SellerInfo> findBySellerCode(String sellerCode) {
        return sellerInfoRepository.findBySellerCode(sellerCode);
    }

    public Mono<SellerInfo> save(SellerInfo sellerInfo){
        return sellerInfoRepository.save(sellerInfo);
    }

}
