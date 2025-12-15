public Mono<String> updateInsureDate(UpdateInsureDateReq req) {

    return riderInfoRepository.findInsuTypeByDriverId(req.getDriverId())
        .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
        .flatMap(type -> {
            // type 값으로 분기
            if ("D".equals(type)) {
                return riderInfoRepository.updateRiderForOneDayInsurance(req)
                    .flatMap(rows -> {
                        if (rows == 0) {
                            return Mono.error(new BusinessException(ErrorCode.DB_UPDATE_FAIL));
                        }
                        return Mono.just("OK");
                    });
            } else {
                // D가 아니면 업데이트 안 함 (그냥 OK 리턴 or 에러)
                return Mono.just("OK");  // 요구사항에 맞게 수정
            }
        });
}
