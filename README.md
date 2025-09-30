package com.gogofnd.kb.Accident.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AccidentSearch {
    private String callId;
    private String riId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
