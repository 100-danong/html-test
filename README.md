        Mono<Map<String, Object>> byId = historyMapper.findForInsertById(riderWeb.getRiId());

        WebHistoriesSaveDto saveDto =
                WebHistoriesSaveDto.create(riderWeb.getRiId(),
                        (Long) byId.get("si_id"),
                        "011" ,
                        byId.get("si_policy_number").toString(),
                        byId.get("si_application_number").toString(),
                        ageYn,
                        totalWebViewUrl.replace("https","http"));
