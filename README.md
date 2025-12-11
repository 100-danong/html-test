    @GetMapping("/kakao1")
    public RedirectView api1ShortCut(@RequestParam String riUserId) {
        RedirectView redirectView = new RedirectView();

        log.info("kakao1 요청 아이디 " + riUserId);

        Mono<String> totalUrl = businessService.getTotalUrlApi1(riUserId);

        log.info("totalUrl = " + totalUrl);

        redirectView.setUrl(String.valueOf(totalUrl));

        log.info("kakao1 종료");

        return redirectView;
    }

	    public Mono<String> getTotalUrlApi1(String riUserId) {
        return riderInfoRepository.findByUserId(riUserId)
                .switchIfEmpty(Mono.error(new BusinessException(ErrorCode.NOT_FOUND_USER)))
                .map(RiderInfo::getRi_total_webview_url);
    }

	2025-12-11 11:07:06.757  INFO 4736 --- [nio-8888-exec-1] c.gogofnd.kb.Business.controller.WebApi  : kakao1 요청 아이디 +821222469860
2025-12-11 11:07:06.775  INFO 4736 --- [nio-8888-exec-1] c.gogofnd.kb.Business.controller.WebApi  : totalUrl = MonoContextWrite
2025-12-11 11:07:06.779  INFO 4736 --- [nio-8888-exec-1] c.gogofnd.kb.Business.controller.WebApi  : kakao1 종료
