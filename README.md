package com.gogofnd.gogorent.global.user.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class KakaoUserRegisterDTO {
    @NotNull
    @Size(min = 2, max = 20, message = "name must be between 2 and 20 characters")
    private String name;
    @NotNull
    @Email
    @Size(min = 3, max = 40, message = "email must be between 2 and 40 characters")
    private String email;

    @NotNull
    @Size(min = 3, max = 20, message = "phoneNumber must be between 2 and 20 characters")
    private String phoneNumber;
    private String providerId;
    private String address;
    private String deliveryPlatform;
    private String platformOtherReason;
    private String appleRefreshToken;
    private String birthDate;
    private String gender;
    private String telecomCompany;
}
