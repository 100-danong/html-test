RiderInfo riderInfo = callMapper.findByDriveridAndSellerID(dto.getDriver_id(), dto.getSeller_code())
        .blockOptional()
        .orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
