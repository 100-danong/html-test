package com.gogofnd.kb.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name="common_code_info")
@Getter
@Setter
public class CommonCodeInfo {

    @Column(name = "cci_code")
    private String cci_code;

    @Column(name = "cci_parent_code")
    private String cci_parent_code;

    private String cci_code_name;
    private String cci_content;
    private int cci_sort;
    private String cci_inuse;
    private LocalDateTime cci_ins_time;
    private LocalDateTime cci_upd_time;
    private int cci_state;
}
