package com.gogofnd.gogorent.global.user.api;

import com.gogofnd.gogorent.business.dto.ApiResponse2;
import com.gogofnd.gogorent.global.config.JwtUtil;
import com.gogofnd.gogorent.global.user.dto.*;
import com.gogofnd.gogorent.global.user.entity.DeliveryPlatform;
import com.gogofnd.gogorent.global.user.entity.User;
import com.gogofnd.gogorent.global.user.entity.UserOAuthInfo;
import com.gogofnd.gogorent.global.user.repository.UserOAuthInfoRepository;
import com.gogofnd.gogorent.global.user.repository.UserRepository;
import com.gogofnd.gogorent.global.user.service.*;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import eu.bitwalker.useragentutils.UserAgent;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.time.Duration;
import java.util.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("googleOAuth")
public class GoogleOAuthController {

    private final GoogleOauth googleOauth;
    private final UserRepository userRepository;
    private final UserOAuthInfoRepository userOAuthInfoRepository;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final LoginHistoryService loginHistoryService;
    private final RefreshTokenService refreshTokenService;

    @PostMapping("login")
    @ApiOperation("구글 로그인")
    public ResponseEntity<?> googleLogin(@RequestBody GoogleLoginRequest request, HttpServletRequest httpServletRequest) throws Exception {
        try {
            String idToken = request.getIdToken();
            String clientType = request.getClientType();

            String clientId = googleOauth.getClientId(clientType);

            GoogleIdToken.Payload payload = googleOauth.verifyIdToken(idToken, clientId);

            String email = payload.getEmail();
            String name = (String) payload.get("name");
            String decodeId = payload.getSubject();

            String providerId = Base64.getEncoder().encodeToString(decodeId.getBytes());

            Map<String, Object> info = new HashMap<>();
            info.put("email", email);
            info.put("name", name);
            info.put("provider_id", providerId);


            Optional<UserOAuthInfo> userOAuthInfo = userOAuthInfoRepository.findByProviderAndProviderIdAndUseYnIsTrue("google", providerId);

            if (userOAuthInfo.isPresent()){
                User user = userOAuthInfo.get().getUser();
                if (user.isUseYn()) {
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

                    ApiResponse2<TokenDTO> tokenResponseApiResponse2 = new ApiResponse2<>(
                            "success",
                            new TokenDTO(jwt, refreshToken),
                            "success"
                    );
                    return ResponseEntity.ok(tokenResponseApiResponse2);
                } else {
                    return ResponseEntity.ok(new ApiResponse2<>(
                            "success",
                            info,
                            "google OAuth 탈퇴한 회원입니다."
                    ));
                }
            } else {
                return ResponseEntity.ok(new ApiResponse2<>(
                        "success",
                        info,
                        "google OAuth 회원가입"
                ));
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

    @PatchMapping("userUseY")
    @ApiOperation("구글 회원 재활성화")
    public ResponseEntity<?> googleUserUseY(@RequestParam String email, HttpServletRequest httpServletRequest){
        User user = userRepository.findByLoginId(email).orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.setUseYn(true);
        userRepository.save(user);

        UserOAuthInfo userOAuthInfo = user.getUserOAuthInfo();
        userOAuthInfo.setUseYn(true);
        userOAuthInfoRepository.save(userOAuthInfo);

        // JWT 발급
        UserDetails userDetails = userDetailsService.loadUserByUsername(user.getLoginId());
        String accessToken = jwtUtil.createAccessToken(userDetails);
        String refreshToken = jwtUtil.createRefreshToken(userDetails);
        refreshTokenService.saveRefreshToken(user.getLoginId(), refreshToken, Duration.ofDays(7));

        // 로그인 히스토리 저장
        String ip = httpServletRequest.getRemoteAddr();
        UserAgent agent = UserAgent.parseUserAgentString(httpServletRequest.getHeader("User-Agent"));
        loginHistoryService.saveLoginHistory(user, ip,
                String.format("Browser: %s, OS: %s, Device: %s",
                        agent.getBrowser().getName(),
                        agent.getOperatingSystem().getName(),
                        agent.getOperatingSystem().getDeviceType().getName())
        );

        HashMap<Object, Object> map = new HashMap<>();
        map.put("name", user.getName());
        map.put("phoneNum", user.getPhoneNumber());
        map.put("email", user.getEmail());
        map.put("address", user.getAddress());
        map.put("deliveryPlatform", user.getDeliveryPlatform().name());
        map.put("accessToken", accessToken);
        map.put("refreshToken", refreshToken);
        ApiResponse2<Object> stringApiResponse2 = new ApiResponse2<>(
                "success",
                map,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }

    @PostMapping("register")
    @ApiOperation("구글 회원가입")
    public ResponseEntity<?> googleRegister(@RequestBody GoogleUserRegisterDTO dto, HttpServletRequest request) {
        try {
            // 중복 사용자 체크
            if (userRepository.findByNameAndPhoneNumberAndUseYnIsTrue(dto.getName(), dto.getPhoneNumber()).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiResponse2<>("error", null, "이름 + 폰번호 + useY 중복입니다."));
            }

            // User 생성 및 저장
            User user = new User();
            user.setLoginId(dto.getEmail());
            user.setName(dto.getName());
            user.setPhoneNumber(dto.getPhoneNumber());
            user.setEmail(dto.getEmail());
            user.setAddress(dto.getAddress());
            user.setDeliveryPlatform(DeliveryPlatform.valueOf(dto.getDeliveryPlatform()));
            user.setPlatformOtherReason(dto.getPlatformOtherReason());
            user.setBirthDate(dto.getBirthDate());
            user.setGender(dto.getGender());
            user.setTelecomCompany(dto.getTelecomCompany());
            user.setRoles(Collections.singleton("ROLE_USER"));
            user.setAdminYn(false);
            userRepository.save(user);

            // OAuth 정보 저장
            UserOAuthInfo oAuthInfo = new UserOAuthInfo();
            oAuthInfo.setProvider("google");
            oAuthInfo.setProviderId(dto.getProviderId());
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
            response.put("providerId", dto.getProviderId());
            response.put("accessToken", accessToken);
            response.put("refreshToken", refreshToken);

            return ResponseEntity.ok(new ApiResponse2<>("success", response, "success"));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse2<>("error", null, e.getMessage()));
        }
    }

    @PostMapping("suspend")
    @ApiOperation("회원탈퇴")
    public ResponseEntity<?> suspend(@AuthenticationPrincipal UserDetails userDetails){
        User user = userRepository.findByLoginId(userDetails.getUsername()).orElseThrow(() -> new UsernameNotFoundException("Customer not found"));
        user.setUseYn(false);
        userRepository.save(user);

        UserOAuthInfo userOAuthInfo = user.getUserOAuthInfo();
        userOAuthInfo.setUseYn(false);
        userOAuthInfoRepository.save(userOAuthInfo);

        ApiResponse2<String> stringApiResponse2 = new ApiResponse2<>(
                "success",
                null,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }

}
