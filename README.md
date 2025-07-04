package com.gogofnd.gogorent.global.user.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.gogofnd.gogorent.business.entity.Contract;
import com.gogofnd.gogorent.global.pay.entity.Card;
import com.gogofnd.gogorent.global.pay.entity.CardCheckPay;
import com.gogofnd.gogorent.global.pay.entity.PayRecord;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long id;
    @Column(unique = true, length = 30)
    private String loginId;
    @Column(length = 100)
    private String password;
    @Column(length = 30)
    private String name;
    @Column(length = 50)
    private String phoneNumber;
    private Boolean adminYn;

    @Column(unique = true, length = 50)
    private String email;
    private String address;
    private long totalPayAmount;
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private DeliveryPlatform deliveryPlatform;
    private String platformOtherReason;
    private String telecomCompany;
    private String birthDate;
    private String gender;

    @CreatedDate
    private LocalDateTime insDtm;
    @LastModifiedDate
    private LocalDateTime updDtm;
    private boolean useYn = true;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
    , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Card> cards = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Contract> contracts= new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Inquiry> inquiries= new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<CardCheckPay> cardCheckPays= new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<PayRecord> payRecords = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<DriverLicense> driverLicenses = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<LoginHistory> loginHistories = new ArrayList<>();

    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY
            , cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private UserOAuthInfo userOAuthInfo;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> roles = new HashSet<>();
    public void plusPoint(long point){
        this.totalPayAmount = this.totalPayAmount + point;
    }

    public void minusPoint(long point){
        this.totalPayAmount = this.totalPayAmount - point;
    }
}
