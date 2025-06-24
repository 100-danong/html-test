        if (addBikeTypeDTO.getBikeBrand() != null && !addBikeTypeDTO.getBikeBrand().equals(bikeType.getBikeBrand())) {
            bikeType.setBikeBrand(addBikeTypeDTO.getBikeBrand());
            sb.append(", 바이크 브랜드: ").append(bikeType.getBikeBrand()).append(" → ").append(addBikeTypeDTO.getBikeBrand());
        }
