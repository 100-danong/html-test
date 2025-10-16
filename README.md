public Mono<String> getTotalUrlApi4(String riUserId) {
    return riderInfoRepository.findByRenewUserId(riUserId)
            .switchIfEmpty(
                riderInfoRepository.findByUserId(riUserId)
                    .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
            )
            .map(RiderInfo::getRi_total_webview_url);
}
