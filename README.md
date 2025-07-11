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

slack:
  webhook-url: https://hooks.slack.com/services/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
  mention-groups:
    oncall:
      - U08S1P72L5C
    executives:
      - U08U25KSTV5
    stakeholders:
      - U08S1P8G33Q
      - U08S1P9KF70
