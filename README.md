DatabaseClient.GenericExecuteSpec spec =
        databaseClient.sql(sql)
            .bind("ihId", dto.getIhId())
            .bind("ihInsuState", dto.getIhInsuState());

if (dto.getIhRejectCode() != null) {
    spec = spec.bind("ihRejectCode", dto.getIhRejectCode());
} else {
    spec = spec.bindNull("ihRejectCode", String.class);
}

return spec.fetch().rowsUpdated();
