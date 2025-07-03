    @PostMapping("register")
    @ApiOperation("카카오 회원가입")
    public ResponseEntity<?> kakaoRegister(@Valid @RequestBody KakaoUserRegisterDTO dto, HttpServletRequest httpServletRequest) throws Exception {
        if (userRepository.findByNameAndPhoneNumberAndUseYnIsTrue(dto.getName(), dto.getPhoneNumber()).isPresent()){
            ApiResponse2<Object> error = new ApiResponse2<>(
                    "error",
                    null,
                    "이름 + 폰번호 + useY 중복입니다."
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
        User user = new User();
        user.setLoginId(dto.getEmail());
        user.setName(dto.getName());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setEmail(dto.getEmail());
        user.setAddress(dto.getAddress());
        user.setDeliveryPlatform(DeliveryPlatform.valueOf(dto.getDeliveryPlatform()));
        user.setPlatformOtherReason(dto.getPlatformOtherReason());
        user.setRoles(Collections.singleton("ROLE_USER"));
        user.setAdminYn(false);
        userRepository.save(user);

        UserOAuthInfo userOAuthInfo = new UserOAuthInfo();
        userOAuthInfo.setProvider("kakao");
        userOAuthInfo.setProviderId(dto.getProviderId());
        userOAuthInfo.setUser(user);
        userOAuthInfoRepository.save(userOAuthInfo);

        //JWT 생성
        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getLoginId());
        final String jwt = jwtUtil.createAccessToken(userDetails);
        final String refreshToken = jwtUtil.createRefreshToken(userDetails);
        refreshTokenService.saveRefreshToken(userDetails.getUsername(), refreshToken, Duration.ofDays(7));

        //접속정보 저장
        String ip = httpServletRequest.getRemoteAddr();
        UserAgent userAgent = UserAgent.parseUserAgentString(httpServletRequest.getHeader("User-Agent"));
        String browser = userAgent.getBrowser().getName();
        String os = userAgent.getOperatingSystem().getName();
        String device = userAgent.getOperatingSystem().getDeviceType().getName();
        loginHistoryService.saveLoginHistory(user, ip, String.format("Browser : %s, OS : %s, Device : %s", browser, os, device));


        HashMap<Object, Object> map = new HashMap<>();
        map.put("name", user.getName());
        map.put("phoneNum", user.getPhoneNumber());
        map.put("email", user.getEmail());
        map.put("address", user.getAddress());
        map.put("deliveryPlatform", user.getDeliveryPlatform().name());
        map.put("provider", "apple");
        map.put("providerId", dto.getProviderId());
        map.put("accessToken", jwt);
        map.put("refreshToken", refreshToken);
        ApiResponse2<Object> stringApiResponse2 = new ApiResponse2<>(
                "success",
                map,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }
