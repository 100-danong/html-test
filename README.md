package com.gogofnd.gogorent.global.user.service;


import com.gogofnd.gogorent.global.user.dto.AppleTokenResponse;
import com.nimbusds.jose.JOSEObjectType;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.crypto.ECDSASigner;
import com.nimbusds.jose.crypto.RSASSAVerifier;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.KeyFactory;
import java.security.interfaces.ECPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Component
@RequiredArgsConstructor
@Slf4j
public class AppleOauth {

    private static final String WEB_CLIENT_ID = "GoGoRent.GoGo.io";
    private static final String IOS_CLIENT_ID = "io.GoGo.GoGoRent";
    private static final String TEAM_ID = "KL4Y9PB9B8";
    private static final String KEY_ID = "68K7WRX762";

    @Value("${appleOAuth-private-key}")
    private String PRIVATE_KEY;

    public String getClientId(String clientType) throws Exception{
        if ("web".equalsIgnoreCase(clientType)){
            return WEB_CLIENT_ID;
        } else if ("ios".equalsIgnoreCase(clientType)) {
            return IOS_CLIENT_ID;
        } else {
            throw new Exception("알 수 없는 클라이언트 타입입니다.");
        }
    }
    public void validIdentityToken(String identityToken, String clientId) throws Exception {
        SignedJWT signedJWT = SignedJWT.parse(identityToken);
        JWTClaimsSet claimsSet = signedJWT.getJWTClaimsSet();

        JWKSet jwkSet = JWKSet.load(new URL("https://appleid.apple.com/auth/keys"));

        JWK jwk = jwkSet.getKeyByKeyId(signedJWT.getHeader().getKeyID());

        if (jwk == null){
            throw new Exception("해당 키 ID를 가진 JWK를 찾을 수 없습니다");
        }

        if (!(jwk instanceof RSAKey)){
            throw new Exception("JWK는 RSA 키가 아닙니다.");
        }
        RSAKey rsaKey = jwk.toRSAKey();

        RSAPublicKey publicKey = rsaKey.toRSAPublicKey();

        RSASSAVerifier verifier = new RSASSAVerifier(publicKey);

        if (!signedJWT.verify(verifier)){
            throw new Exception("유효하지 않은 identity token 서명입니다.");
        }

        if (!"https://appleid.apple.com".equals(claimsSet.getIssuer())){
            throw new Exception("유효하지 않은 issuer입니다.");
        }
        if (!clientId.equals(claimsSet.getAudience().get(0))){
            throw new Exception("유효하지 않은 audience 입니다.");
        }
        if (new Date().after(claimsSet.getExpirationTime())){
            throw new Exception("토큰이 만료되었습니다.");
        }
              //토큰 유효
    }

    public String generateClientSecret(String clientId) throws Exception{
        Date now = new Date();
        Date exprirationDate = new Date(now.getTime() + TimeUnit.DAYS.toMillis(180));

        JWSSigner signer = new ECDSASigner(getPrivateKey());

        JWTClaimsSet claimsSet = new JWTClaimsSet.Builder()
                .issuer(TEAM_ID)
                .subject(clientId)
                .audience("https://appleid.apple.com")
                .issueTime(now)
                .expirationTime(exprirationDate)
                .build();

        JWSHeader header = new JWSHeader.Builder(JWSAlgorithm.ES256)
                .keyID(KEY_ID)
                .type(JOSEObjectType.JWT)
                .build();

        SignedJWT signedJWT = new SignedJWT(header, claimsSet);
        signedJWT.sign(signer);

        return signedJWT.serialize();
    }

    private ECPrivateKey getPrivateKey () throws Exception{
        String privateKeyContent = new String(Files.readAllBytes(Paths.get(PRIVATE_KEY)), StandardCharsets.UTF_8);

        privateKeyContent = privateKeyContent
                .replaceAll("\\s+", "")
                .replace("-----BEGIN PRIVATE KEY-----", "")
                .replace("-----END PRIVATE KEY-----", "")
                .replace("-----BEGINPRIVATEKEY-----", "")
                .replace("-----ENDPRIVATEKEY-----", "");

        byte[] decoded = Base64.getDecoder().decode(privateKeyContent);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decoded);
        KeyFactory keyFactory = KeyFactory.getInstance("EC");
        return (ECPrivateKey) keyFactory.generatePrivate(keySpec);
    }




    public AppleTokenResponse exchangeCode(String authorizationCode, String clientId) throws Exception {
        String clientSecret = generateClientSecret(clientId);

        RestTemplate restTemplate = new RestTemplate();
        MultiValueMap<String , String> params = new LinkedMultiValueMap<>();
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("code", authorizationCode);
        params.add("grant_type", "authorization_code");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        ResponseEntity<AppleTokenResponse> response = restTemplate.exchange(
                "https://appleid.apple.com/auth/token",
                HttpMethod.POST,
                request,
                AppleTokenResponse.class
        );
        if (response.getBody() == null){
            throw new Exception("apple로부터 토큰을 받지 못했습니다.");
        }
        return response.getBody();
    }


    public Map<String , Object> parseIdToken(String idToken) throws Exception{
        SignedJWT signedJWT = SignedJWT.parse(idToken);
        JWTClaimsSet claimsSet = signedJWT.getJWTClaimsSet();

        String email = claimsSet.getStringClaim("email");
        JSONObject name = claimsSet.getJSONObjectClaim("name");
        Boolean emailVerified = claimsSet.getBooleanClaim("email_verified");
        String providerId = claimsSet.getSubject();


        HashMap<String , Object> userInfo = new HashMap<>();
        userInfo.put("email", email);
        userInfo.put("email_verified", emailVerified);
        userInfo.put("provider_id", providerId);
        if (name != null) {
            userInfo.put("first_name", name.get("firstName"));
            userInfo.put("last_name", name.get("lastName"));
        }
        return userInfo;
    }

    public AppleTokenResponse appleRefreshToken(String refreshToken, String clientId) throws Exception{
        String clientSecret = generateClientSecret(clientId);
        RestTemplate restTemplate = new RestTemplate();

        MultiValueMap<String , String> params = new LinkedMultiValueMap<>();
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("refresh_token", refreshToken);
        params.add("grant_type", "refresh_token");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        ResponseEntity<AppleTokenResponse> response = restTemplate.exchange(
                "https://appleid.apple.com/auth/token",
                HttpMethod.POST,
                request,
                AppleTokenResponse.class
        );

        return response.getBody();
    }

    public String appleRevokeToken(String refreshToken, String clientId) throws Exception{
        String clientSecret = generateClientSecret(clientId);
        RestTemplate restTemplate = new RestTemplate();

        MultiValueMap<String , String> params = new LinkedMultiValueMap<>();
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("token", refreshToken);
        params.add("token_type_hint", "refresh_token");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                "https://appleid.apple.com/auth/revoke",
                HttpMethod.POST,
                request,
                String.class
        );

        return response.getBody();
    }
}
