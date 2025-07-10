Map<String, String> roleLabels = Map.of(
                "oncall",       "담당자",
                "executives",   "대표",
                "stakeholders", "관계자"
        );

        List<String> mentionFields = props.getMentionGroups().entrySet().stream()
                .filter(e -> e.getValue() != null && !e.getValue().isEmpty())
                .map(e -> {
                    String label = roleLabels.getOrDefault(e.getKey(), e.getKey());
                    String mentions = e.getValue().stream()
                            .map(id -> "<@" + id + ">")
                            .collect(Collectors.joining(" "));
                    return String.format(
                            "{\"title\":\"%s\",\"value\":\"%s\",\"short\":false}",
                            label, escape(mentions)
                    );
                })
                .collect(Collectors.toList());
