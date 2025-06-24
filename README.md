        if (agencyId != null && !Objects.equals(agencyId, contract.getAgency())) {
            sb.append(", agencyId: ")
                    .append(contract.getAgency() == null ? "null" : contract.getAgency())
                    .append(" → ")
                    .append(agencyId);
        }
