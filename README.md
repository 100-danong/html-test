@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("googleOAuth")
public class GoogleOAuthController {

    private final GoogleOauthService googleOauthService;
    private final UserRepository userRepository;
    private final UserOAuthInfoRepository userOAuthInfoRepository;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final LoginHistoryService loginHistoryService;
    private final RefreshTokenService refreshTokenService;

    @PostMapping("register")
    @ApiOperation("구글 회원가입")
    public ResponseEntity<?> googleRegister(@RequestBody GoogleUserRegisterDTO dto, HttpServletRequest request) {
        try {
            // id_token 검증 및 사용자 정보 추출
            GoogleUserInfo userInfo = googleOauthService.verifyIdToken(dto.getIdToken());

            // 중복 사용자 체크
            if (userRepository.findByNameAndPhoneNumberAndUseYnIsTrue(dto.getName(), dto.getPhoneNumber()).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse2<>("error", null, "이름 + 폰번호 + useY 중복입니다."));
            }

            // User 생성 및 저장
            User user = new User();
            user.setLoginId(userInfo.getEmail());
            user.setName(dto.getName());
            user.setPhoneNumber(dto.getPhoneNumber());
            user.setEmail(userInfo.getEmail());
            user.setAddress(dto.getAddress());
            user.setDeliveryPlatform(DeliveryPlatform.valueOf(dto.getDeliveryPlatform()));
            user.setPlatformOtherReason(dto.getPlatformOtherReason());
            user.setBirthDate(dto.getBirthDate());
            user.setGender(dto.getGender());
            user.setTelecomCompany(dto.getTelecomCompany());
            user.setRoles(Collections.singleton("ROLE_USER"));
            userRepository.save(user);

            // OAuth 정보 저장
            UserOAuthInfo oAuthInfo = new UserOAuthInfo();
            oAuthInfo.setProvider("google");
            oAuthInfo.setProviderId(userInfo.getSub());
            oAuthInfo.setUser(user);
            userOAuthInfoRepository.save(oAuthInfo);

            // JWT 발급
            UserDetails userDetails = userDetailsService.loadUserByUsername(user.getLoginId());
            String accessToken = jwtUtil.createAccessToken(userDetails);
            String refreshToken = jwtUtil.createRefreshToken(userDetails);
            refreshTokenService.saveRefreshToken(user.getLoginId(), refreshToken, Duration.ofDays(7));

            // 로그인 히스토리 저장
            String ip = request.getRemoteAddr();
            UserAgent agent = UserAgent.parseUserAgentString(request.getHeader("User-Agent"));
            loginHistoryService.saveLoginHistory(user, ip,
                    String.format("Browser: %s, OS: %s, Device: %s",
                            agent.getBrowser().getName(),
                            agent.getOperatingSystem().getName(),
                            agent.getOperatingSystem().getDeviceType().getName())
            );

            // 응답
            Map<String, Object> response = new HashMap<>();
            response.put("name", user.getName());
            response.put("phoneNum", user.getPhoneNumber());
            response.put("email", user.getEmail());
            response.put("address", user.getAddress());
            response.put("deliveryPlatform", user.getDeliveryPlatform().name());
            response.put("provider", "google");
            response.put("providerId", userInfo.getSub());
            response.put("accessToken", accessToken);
            response.put("refreshToken", refreshToken);

            return ResponseEntity.ok(new ApiResponse2<>("success", response, "success"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse2<>("error", null, e.getMessage()));
        }
    }
}
