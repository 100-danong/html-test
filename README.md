2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : <-- 200 OK http://10.0.2.101:57509/gogofnd/kbInsOnline.do (46ms)
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : Connection: keep-alive
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : Set-Cookie: WMONID=RjYhOBU7JBI; Expires=Tue, 11-Aug-2026 19:15:40 GMT; Path=/
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : Date: Mon, 11 Aug 2025 10:15:40 GMT
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : Content-Type: application/json;charset=UTF-8
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : Transfer-Encoding: chunked
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient :
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : {"result":"ok"}
2025:08:11 19:15:39.806 INFO  --- [http-nio-9888-exec-78] okhttp3.OkHttpClient : <-- END HTTP (15-byte body)
2025:08:11 19:15:39.807 INFO  --- [http-nio-9888-exec-78] c.g.k.global.config.HttpInterceptor : [RES] <--- [STATUS] 200
2025:08:11 19:15:40.006 DEBUG --- [http-nio-9888-exec-93] c.g.k.p.c.m.C.findCallDailyGroupIdCountToNow : <==      Total: 1
2025:08:11 19:15:40.006 DEBUG --- [http-nio-9888-exec-93] c.g.k.p.c.m.C.findLastGroupIdToNow : ==>  Preparing: select gci_groupid from call_info where 1=1 and sales_date = ? and ri_id = ? order by ci_appoint_time desc limit 1
2025:08:11 19:15:40.006 DEBUG --- [http-nio-9888-exec-93] c.g.k.p.c.m.C.findLastGroupIdToNow : ==> Parameters: 2025-08-11(LocalDate), 30811(Long)
2025:08:11 19:15:40.021 DEBUG --- [http-nio-9888-exec-93] c.g.k.p.c.m.C.findLastGroupIdToNow : <==      Total: 1
2025:08:11 19:15:40.021 DEBUG --- [http-nio-9888-exec-93] c.g.k.d.r.m.T.insetStartCallInfo : ==>  Preparing: INSERT INTO call_info (ci_pickup_time, ci_appoint_time, ci_pickup_address, ci_call_id, ci_delivery_status, ci_company_name, ri_id, ci_ins_time, ci_upd_time, gci_groupid, sales_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
2025:08:11 19:15:40.021 DEBUG --- [http-nio-9888-exec-93] c.g.k.d.r.m.T.insetStartCallInfo : ==> Parameters: 2025-08-11T19:15:39.320519(LocalDateTime), 2025-08-11T19:15:39.320520(LocalDateTime), 오류가 발생했습니다.(String), safeKb_3487883074(String), 배차(String), (String), 30811(Long), 2025-08-11T19:15:39.320520(LocalDateTime), 2025-08-11T19:15:39.320520(LocalDateTime), GR20250811-30811-0054(String), 2025-08-11(LocalDate)


로그는 이렇게 찍히는데 저기 파라미터에 오류가 발생했습니다. 라고 뜨거든? 저 부분이 있는게

package com.gogofnd.kb.business.service;

import com.gogofnd.kb.business.dto.KakaoAddressResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class KakaoGeocodingService {

    @Value("${kakao.api.key}")
    private String kakaoApiKey;

    private final RestTemplate restTemplate;

    public String convertCoordToAddress(double latitude, double longitude){
        try {
            String url = "https://dapi.kakao.com/v2/local/geo/coord2address.json";

            String query = String.format("x=%s&y=%s&input_coord=WGS84",
                    URLEncoder.encode(String.valueOf(longitude), StandardCharsets.UTF_8),
                    URLEncoder.encode(String.valueOf(latitude), StandardCharsets.UTF_8));

            URI uri = new URI(url + "?" + query);

            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "KakaoAK " + kakaoApiKey);
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<KakaoAddressResponse> response = restTemplate.exchange(
                    uri,
                    HttpMethod.GET,
                    entity,
                    KakaoAddressResponse.class
            );

            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null){
                KakaoAddressResponse kakaoResponse = response.getBody();
                if (!kakaoResponse.getDocuments().isEmpty()){
                    return kakaoResponse.getDocuments().get(0).getAddress().getAddressName();
                }
            }

            return "주소를 찾을 수 없습니다.";
        } catch (Exception e){
            e.printStackTrace();
            return "오류가 발생했습니다.";
        }
    }
}


이 코드야 대체 왜 저 리턴값이 들어간걸까?

그것도 잘 되다가 갑자기 어제 1시 34분부터 발생했어
