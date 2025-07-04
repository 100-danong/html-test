package com.gogofnd.gogorent.global.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public class KakaoOAuth2 {

    //web
    private static final String WEB = "ec86a7af731bdef703d097a73e9c04fd";
    //ios
    private static final String IOS = "c96461f4cc2ce0034d3214b07cee9182";

    //android
    private static final String AND = "261792715437-8buf87j2u3escsvo1s2ufdcetsoo2s2i.apps.googleusercontent.com";

    private static final String REDIRECT_URI = "{baseUrl}/oauth2/callback/kakao-web";

    //            #            scope: profile_nickname,account_email
    public String getAccessToken(String code, String type){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        String type1;
        if (Objects.equals(type, "web")){
            type1=WEB;
        } else if (Objects.equals(type, "ios")){
            type1=IOS;
        } else if (Objects.equals(type, "and")){
            type1=AND;
        } else {
            throw new IllegalArgumentException("잘못된 type");
        }

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", type1);
        params.add("redirect_uri", REDIRECT_URI);
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(
                "https://kauth.kakao.com/oauth/token",
                request,
                Map.class
        );
        Map responseBody = response.getBody();
        return (String) responseBody.get("access_token");
    }

    public Map<String, Object> getUserInfo(String accessToken){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        HttpEntity<Object> request = new HttpEntity<>(headers);
        ResponseEntity<Map> response = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.GET,
                request,
                Map.class
        );
        return response.getBody();
    }

    public boolean unlinkKakaoAccount(String accessToken){
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);

        HttpEntity<String> request = new HttpEntity<>(headers);

        try {
            ResponseEntity<Map> response = restTemplate.exchange(
                    "https://kapi.kakao.com/v1/user/unlink",
                    HttpMethod.POST,
                    request,
                    Map.class
            );

            if (response.getStatusCode() == HttpStatus.OK){
                return true;
            }
        } catch (RestClientException e){
            e.printStackTrace();
        }
        return false;
    }
}
