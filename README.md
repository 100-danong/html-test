private final InsuranceBalanceHistoryService insuranceBalanceHistoryService;

    public ResultDto balanceListTotal(List<BalanceInsureReq> balanceInsureReqList){

        //si_balance는 입출금용
        List<InsuranceBalanceHistory> kbBalancesHistories = balanceInsureReqList.stream().map((balanceInsureReq) -> {
            log.info("======================================= 13번 api 호출 ================================");
            log.info("date : {}", balanceInsureReq.getDate());
            log.info("balance : {}", balanceInsureReq.getBalance());
            log.info("cmpcd : {}", balanceInsureReq.getProxy_driv_coorp_cmpcd());
            log.info("useAmt : {}", balanceInsureReq.getUse_amt());

            if(balanceInsureReq.getBalance().isBlank()){
                balanceInsureReq.setBalance("0");
            }

            if(balanceInsureReq.getUse_amt().isBlank()){
                balanceInsureReq.setUse_amt("0");
            }

            String convertDate = convertDate(balanceInsureReq.getDate());

            return KbBalancesHistoryDto.create(balanceInsureReq, convertDate);
        }).collect(Collectors.toList());

        Integer resInstInsuBalanceHistory = insuranceBalanceHistoryService.saveAll(kbBalancesHistories);

        if(resInstInsuBalanceHistory <= 0){
            throw new BusinessException(ErrorCode.DB_INSERT_FAIL);
        }

        ResultDto resultDto = new ResultDto();
        resultDto.setResult("ok");

        return resultDto;
    }
