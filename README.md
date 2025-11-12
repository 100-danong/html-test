if (riderWebRepositoryByPhone != null) {
    String rStatus = riderWebRepositoryByPhone.getRiInsuStatus();

    if (!"011".equals(rStatus)) {
        throw new BusinessException(ErrorCode.INVALID_REQUEST);
    } else if ("011".equals(rStatus)) {
        throw new BusinessException(ErrorCode.ALREADY_REQUESTED);
    }
    riderWeb.updateRequestData(req);
}
