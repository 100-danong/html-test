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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.time.Duration;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("appleOAuth")
public class AppleOAuthController {

    private final AppleOauth appleOauth;
    private final UserOAuthInfoRepository userOAuthInfoRepository;
    private final JwtUtil jwtUtil;
    private final UserDetailsService userDetailsService;
    private final LoginHistoryService loginHistoryService;
    private final RefreshTokenService refreshTokenService;
    private final UserRepository userRepository;

    @PostMapping("login")
    @ApiOperation("애플 로그인")
    public ResponseEntity<?> appleLogin(@RequestBody AppleLoginRequest request, HttpServletRequest httpServletRequest) throws Exception {
        String authorizationCode = request.getAuthorizationCode();
        String identityToken = request.getIdentityToken();
        String clientType = request.getClientType();

        String clientId = appleOauth.getClientId(clientType);
        try {
            appleOauth.validIdentityToken(identityToken, clientId);
            AppleTokenResponse tokenResponse = appleOauth.exchangeCode(authorizationCode, clientId);
            Map<String, Object> userInfo = appleOauth.parseIdToken(tokenResponse.getIdToken());
            userInfo.put("refreshToken", tokenResponse.getRefreshToken());
            String providerId = (String) userInfo.get("provider_id");

            Optional<UserOAuthInfo> userOAuthInfo = userOAuthInfoRepository.findByProviderAndProviderIdAndUseYnIsTrue("apple", providerId);

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
                            "apple OAuth 탈퇴한 회원입니다."
                    );
                    return ResponseEntity.ok(tokenResponseApiResponse2);
                }
            } else {
                ApiResponse2<Map<String , Object>> tokenResponseApiResponse2 = new ApiResponse2<>(
                        "success",
                        userInfo,
                        "apple OAuth 회원가입"
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

    @PatchMapping("userUseY")
    @ApiOperation("애플 회원 재활성화")
    public ResponseEntity<?> appleUserUseY(@RequestParam String email, @RequestParam String refreshToken, HttpServletRequest httpServletRequest){
        User user = userRepository.findByLoginId(email).orElseThrow(() -> new IllegalArgumentException("User not found"));
        user.setUseYn(true);
        userRepository.save(user);

        UserOAuthInfo userOAuthInfo = user.getUserOAuthInfo();
        userOAuthInfo.setAppleRefreshToken(refreshToken);
        userOAuthInfoRepository.save(userOAuthInfo);

        //JWT 생성
        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getLoginId());
        final String jwt = jwtUtil.createAccessToken(userDetails);
        final String refreshToken1 = jwtUtil.createRefreshToken(userDetails);
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
        map.put("accessToken", jwt);
        map.put("refreshToken", refreshToken1);
        ApiResponse2<Object> stringApiResponse2 = new ApiResponse2<>(
                "success",
                map,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }

    @PostMapping("register")
    @ApiOperation("애플 회원가입")
    public ResponseEntity<?> appleRegister(@Valid @RequestBody AppleUserRegisterDTO dto, HttpServletRequest httpServletRequest) throws Exception {
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
        user.setBirthDate(dto.getBirthDate());
        user.setGender(dto.getGender());
        user.setTelecomCompany(dto.getTelecomCompany());
        user.setRoles(Collections.singleton("ROLE_USER"));
        userRepository.save(user);

        UserOAuthInfo userOAuthInfo = new UserOAuthInfo();
        userOAuthInfo.setProvider("apple");
        userOAuthInfo.setProviderId(dto.getProviderId());
        userOAuthInfo.setUser(user);
        userOAuthInfo.setAppleRefreshToken(dto.getAppleRefreshToken());
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

    @PostMapping("refreshToken")
    @ApiOperation("과연 쓸일이...")
    public ResponseEntity<?> appleRefreshToken (@AuthenticationPrincipal UserDetails userDetails, @RequestParam String clientType) throws Exception {
        User user = userRepository.findByLoginId(userDetails.getUsername()).orElseThrow(() -> new IllegalArgumentException("User not found"));
        String clientId = appleOauth.getClientId(clientType);
        AppleTokenResponse tokenResponse = appleOauth.appleRefreshToken(user.getUserOAuthInfo().getAppleRefreshToken(), clientId);
        ApiResponse2<Object> stringApiResponse2 = new ApiResponse2<>(
                "success",
                tokenResponse,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }

    @PostMapping("revokeToken")
    @ApiOperation("접근권한 제거")
    public ResponseEntity<?> appleRevokeToken (@AuthenticationPrincipal UserDetails userDetails, @RequestParam String clientType) throws Exception {
        User user = userRepository.findByLoginId(userDetails.getUsername()).orElseThrow(() -> new IllegalArgumentException("User not found"));
        String clientId = appleOauth.getClientId(clientType);
        String string = appleOauth.appleRevokeToken(user.getUserOAuthInfo().getAppleRefreshToken(), clientId);
        user.setUseYn(false);
        userRepository.save(user);
        ApiResponse2<Object> stringApiResponse2 = new ApiResponse2<>(
                "success",
                string,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }

    @PostMapping("revokeToken2")
    @ApiOperation("비로그인 접근권한 제거")
    public ResponseEntity<?> appleRevokeToken2 (@RequestParam String refreshToken, @RequestParam String clientType) throws Exception {
        String clientId = appleOauth.getClientId(clientType);
        String string = appleOauth.appleRevokeToken(refreshToken, clientId);
        ApiResponse2<Object> stringApiResponse2 = new ApiResponse2<>(
                "success",
                string,
                "success"
        );
        return ResponseEntity.ok(stringApiResponse2);
    }


}
