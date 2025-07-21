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
