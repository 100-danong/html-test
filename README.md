public Mono<String> getTotalUrlApi1(String riUserId) {
    return riderInfoRepository.findByUserId(riUserId)
            .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
            .map(RiderInfo::getRi_total_webview_url);
}
