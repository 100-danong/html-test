    private static final String WEB_CLIENT_ID = "GoGoRent.GoGo.io";
    private static final String AND_CLIENT_ID = "com.gogofnd.gogorental_and";

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
