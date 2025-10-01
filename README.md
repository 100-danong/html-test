public Flux<RiderGogoraRes> getRiderGoGoraInsuranceList(String siSellerCode) {
    return riderInfoRepository.findRiderGoGoraInsuranceList(siSellerCode) // Flux<RiderGogoraResDto> 여야 함
            .map(RiderGogoraRes::create);
}
