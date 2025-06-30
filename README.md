package com.gogofnd.gogorent.global.user.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.util.Utils;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;


@Component
@RequiredArgsConstructor
@Slf4j
public class GoogleOauth {

    private static final String WEB_CLIENT_ID = "GoGoRent.GoGo.io";
    private static final String AND_CLIENT_ID = "261792715437-293k79sntsmcqiehlaitaugeh91cuce3.apps.googleusercontent.com";

    private final JsonFactory jsonFactory = Utils.getDefaultJsonFactory();

    private final NetHttpTransport transport = new NetHttpTransport();

    public String getClientId(String clientType) throws Exception{
        if ("web".equalsIgnoreCase(clientType)){
            return WEB_CLIENT_ID;
        } else if ("and".equalsIgnoreCase(clientType)) {
            return AND_CLIENT_ID;
        } else {
            throw new Exception("알 수 없는 클라이언트 타입입니다.");
        }
    }

    public GoogleIdToken.Payload verifyIdToken(String idTokenString, String clientId) throws Exception {
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                .setAudience(Collections.singletonList(clientId))
                .build();

        GoogleIdToken idToken = verifier.verify(idTokenString);
        if (idToken == null){
            throw new IllegalArgumentException("유효하지 않은 ID 토큰입니다.");
        }
        return idToken.getPayload();
    }
}
