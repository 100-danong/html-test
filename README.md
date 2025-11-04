public Mono<ResultFormatRes<String>> api7(
        @Valid @RequestBody DriverIdReq dto,
        @RequestHeader("apiKey") String apiKey) {

    return riderService.sellerWithDrawRider(dto.getDriver_id(), dto.getSeller_code(), apiKey)
            .map(ResultFormatRes::new);
}
