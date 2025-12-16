if (dto.getIhRejectCode() != null) {
    spec = spec.bind("ihRejectCode", dto.getIhRejectCode());
} else {
    spec = spec.bindNull("ihRejectCode", String.class);
}
