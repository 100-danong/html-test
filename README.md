    public String getTotalUrlApi4(String riUserId) {
        RiderInfo rider;

        // 갱신 중인 기사인지 체크
        rider = riderInfoRepository.findByRenewUserId(riUserId);

        if (ObjectUtils.isEmpty(rider)) {
            rider = riderInfoRepository.findByUserId(riUserId).orElseThrow(() -> new BusinessException(ErrorCode.NOT_FOUND_USER));
        }

        return rider.getRi_total_webview_url();
    }
