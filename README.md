    @PostMapping("login")
    @ApiOperation("카카오 로그인")
    public ResponseEntity<?> kakaoLogin(@RequestBody String code, @RequestParam String type, HttpServletRequest httpServletRequest) throws Exception {
        try {
            String accessToken = kakaoOAuth.getAccessToken(code, type);
            Map<String, Object> userInfo = kakaoOAuth.getUserInfo(accessToken);

            String providerId = userInfo.get("id").toString();
            Optional<UserOAuthInfo> userOAuthInfo = userOAuthInfoRepository.findByProviderAndProviderIdAndUseYnIsTrue("kakao", providerId);

            if (userOAuthInfo.isPresent()){
                User user2 = userOAuthInfo.get().getUser();
                if (user2.isUseYn()) {
                    //JWT 생성
                    final UserDetails userDetails = userDetailsService.loadUserByUsername(user2.getLoginId());
                    final String jwt = jwtUtil.createAccessToken(userDetails);
                    final String refreshToken = jwtUtil.createRefreshToken(userDetails);
                    refreshTokenService.saveRefreshToken(userDetails.getUsername(), refreshToken, Duration.ofDays(7));

                    //접속정보 저장
                    String ip = httpServletRequest.getRemoteAddr();
                    UserAgent userAgent = UserAgent.parseUserAgentString(httpServletRequest.getHeader("User-Agent"));
                    String browser = userAgent.getBrowser().getName();
                    String os = userAgent.getOperatingSystem().getName();
                    String device = userAgent.getOperatingSystem().getDeviceType().getName();

                    loginHistoryService.saveLoginHistory(user2, ip, String.format("Browser : %s, OS : %s, Device : %s", browser, os, device));

                    ApiResponse2<TokenDTO> tokenResponseApiResponse2 = new ApiResponse2<>(
                            "success",
                            new TokenDTO(jwt, refreshToken),
                            "success"
                    );
                    return ResponseEntity.ok(tokenResponseApiResponse2);
                } else {
                    ApiResponse2<Map<String , Object>> tokenResponseApiResponse2 = new ApiResponse2<>(
                            "success",
                            userInfo,
                            "kakao OAuth 탈퇴한 회원입니다."
                    );
                    return ResponseEntity.ok(tokenResponseApiResponse2);
                }
            } else {
                ApiResponse2<Map<String , Object>> tokenResponseApiResponse2 = new ApiResponse2<>(
                        "success",
                        userInfo,
                        "kakao OAuth 회원가입"
                );
                return ResponseEntity.ok(tokenResponseApiResponse2);
            }
        } catch (Exception e) {
            ApiResponse2<Object> error = new ApiResponse2<>(
                    "error",
                    null,
                    e.getMessage()
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
