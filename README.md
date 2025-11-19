    public static RiderInfo create(KbApi1Req req, SellerInfo seller, String rawSsn){
        //아이디 중복 방지
        String id = req.getDriver_id();
        String setMtdt = "";
        String setOprnPurp = "";
        String setDriverId = "";


        //운송용도, 보험만료일 못받아오는 경우 이렇게 처리
        if(req.getMtdt() !=null)
            setMtdt = req.getMtdt();
        if(req.getOprn_purp() !=null)
            setOprnPurp = req.getOprn_purp();

        // 드라이버 아이디 없으면 기본형식으로 저장
        if(req.getDriver_id() != null) {
            setDriverId = req.getDriver_id();
        }else{
            setDriverId = req.getDriver_phone().substring(3);
        }

        return RiderInfo.builder()
                .si_id(seller.getSi_id())
                .ri_balance(0)
//                .policyNumber(seller.getPolicy_number())
//                .applicationNumber(seller.getApplication_number())
                .ri_insu_status("")
                .ri_birthdate(createBirth(rawSsn))
                .ri_userid(setDriverId)
                .ri_gender(req.getDriver_gender())
                .ri_active_area(req.getDriver_region())
                .ri_bike_number(req.getDriver_vcnum())
                .ri_phone(req.getDriver_phone())
                .ri_ss_number(req.getDriver_ssn())
                .ri_name(req.getDriver_name())
                .ri_state(1) // 1 사용, 9 미사용
                .ri_compinsu_enddate(setMtdt)
                .ri_operpurp_code(setOprnPurp)
                .ri_ins_time(LocalDateTime.now())
                .ri_upd_time(LocalDateTime.now())
                .build();
    }
