public interface GoPlanApi {

    @Headers({
            "Accept:application/json"
    })
    @POST("/api/goplan/tg/safeToPlanStart")
    Call<Void> goPlanDeliveryStart(@Body GoPlanCallRequest dto);

    @Headers({
            "Accept:application/json"
    })
    @POST("/api/goplan/tg/safeToPlanEnd")
    Call<Void> goPlanDeliveryEnd(@Body GoPlanCallRequest dto);

}
