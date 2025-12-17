@Async// 2번 12번 api 비동기로 동시에 배치되게 설정
    //@Scheduled(cron = "0 20 03 * * *") //초 분 시 일 월 요일
    public Mono<Void> underWritingRequest() throws Exception {

        //이력 기반으로 라이더들 리스트 만듬
        Flux<RiderInfoDto> riders = riderMapper.findRequestsRiderByInsuranceStatusYesterday("021");

        List<KbApiRiderDto> riderDtoList = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistories = new ArrayList<>();
        List<RiderInsuranceDto> insuranceHistoriesRenew = new ArrayList<>();
        // 신규 가입 신청
        riders.forEach(r -> {
            //아래 주석에 있는 쿼리를 왜 어디서 어떻게 사용하는지 모르겠음 select문인데 변수 초기화도 안 하고 사용도 안 함 이해를 못 하겠음
            //sellerPolicyNumberMapper.findSellerPolicyNumber(r.getSiSellerCode(),"W");

            // renew 테이블과 기존 테이블의 rih_id의 순번을 맞추기위해 rih_id값 가져옴
            Mono<Long> rihId = riderInsuranceHistoryMapper.findMaxRihId();
            System.out.println("r.getRiState() = " + r.getRiState());
            // 보험 상태 컬럼 생성
            RiderInsuranceDto riderInsuranceDto = RiderInsuranceDto.create(rihId,r.getRiId(), r.getIhId());

            riderInsuranceDto.updateUnderWritingRequestTime();

            if(r.getRiState() == 4) {
                insuranceHistoriesRenew.add(riderInsuranceDto);
            } else {
                insuranceHistories.add(riderInsuranceDto);
            }

            //231026 - 딜버, 온나 자동기명등재로 로직 변경 : KB는 policy_number로 자동기명등재대상 판단
            KbApiRiderDto dto = new KbApiRiderDto(r);
            String ssn = dto.getSsn();

            //암호화되서 저장된 주민등록번호를 복호화 한 뒤, kb에서 정한 방식으로 암호화한다.
            try {
                updateSsn(dto, ssn);
                riderDtoList.add(dto);
            } catch (Exception e) {
                throw new BusinessException(ErrorCode.INTERNAL_SERVER_ERROR);
            }
        });

        log.info("언더라이팅 심사 요청 명단 : {}", riderDtoList);
        log.info("언더라이팅 심사 요청 인원 : {}", riderDtoList.size());

        /*KBRetrofitConfig<KbApiRiderDto> KBRetrofitConfig = new KBRetrofitConfig<>();

        //레트로핏에서 execute까지 있으면 함수실행, 바디 까지 찍으면 값 응답 값 추출가능
        KBRetrofitConfig.create(KbSendApi.class).kbApi2Retrofit(riderDtoList).execute().body();*/

        // 언더라이팅 요청 update
        riderInsuranceHistoryMapper.riderInsuranceHistoryUnderUpdateAll(insuranceHistories);

        if (!insuranceHistoriesRenew.isEmpty()) {
            riderInsuranceHistoryMapper.riderInsuranceHistoryUnderUpdateAllRenew(insuranceHistoriesRenew);
        }
        
        return Mono.just("OK").then();
    }
