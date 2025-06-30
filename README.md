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
