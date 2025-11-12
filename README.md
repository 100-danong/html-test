        if(riderWebRepositoryByPhone.isPresent()) {
            // 데이터값이 있을 때
            rStatus = riderWebRepositoryByPhone.get().getRiInsuStatus();

            if (!rStatus.equals("011")) {
                throw new BusinessException(ErrorCode.INVALID_REQUEST);
            }else if (rStatus.equals("011")) {
                throw new BusinessException(ErrorCode.ALREADY_REQUESTED);
            }
            riderWeb.updateRequestData(req);
        }
