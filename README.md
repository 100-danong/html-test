spring:
  profiles:
    group:
      "local": "local"
      "dev": "dev,logging_daily,logging_error,logging_info"
      "prod": "prod"
      "dev2": "dev2,logging_daily,logging_error,logging_info"
      "prod2": "prod2,logging_daily,logging_error,logging_info"
    active: dev
  servlet:
    multipart:
      max-file-size: 20MB
      max-request-size: 20MB

apikey: ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LklsRk9XVTFhUmxWWFExWklNemhZTkVFNU1VVTJNa1kwTlVSRVFqQkZRelpHSWcuSWxDc204Ty1oN2NLUnhrMkE2bFNkZUhtVXpiTzRkaTlKMC1LS3FZVlFMWQ==
