    @ExceptionHandler(RuntimeException.class)
    protected ResponseEntity<ErrorResponse> handleRuntimeException(HttpServletRequest request, Exception e){
        String server = request.getServerName();
        String profile = env.getProperty("spring.profiles.active", "default");
        slackService.sendError(server, profile, e);

        log.warn("RuntimeException", e);
        final ErrorResponse response = ErrorResponse.of(ErrorCode.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
