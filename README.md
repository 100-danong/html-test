riderInfo = callMapper.findByDriveridAndSellerID(dto.getDriver_id(), dto.getSeller_code()).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
