package com.gogofnd.kb.service;

import com.gogofnd.kb.dto.DbTestRiderIInfoDTO;
import com.gogofnd.kb.dto.InsuranceStatusListRes;
import com.gogofnd.kb.repository.RiderInfoCustomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class InsuranceService {

    private final RiderInfoCustomRepository riderInfoCustomRepository;

    public List<InsuranceStatusListRes> riderInsStatus() {

        List<DbTestRiderIInfoDTO> listResDtos = (List<DbTestRiderIInfoDTO>) riderInfoCustomRepository.findComplexRiderInfo();
        List<InsuranceStatusListRes> listRes = new ArrayList<>();

        listResDtos.forEach(resDto -> {
            InsuranceStatusListRes res = InsuranceStatusListRes.create(resDto);
            listRes.add(res);
        });
        return listRes;
    }
}
