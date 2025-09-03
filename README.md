    hikari:
      maximum-pool-size: 30         # 커넥션 풀 크기
      minimum-idle: 10              # 최소 idle 커넥션 수
      idle-timeout: 30000           # idle 커넥션 유지 시간 (30초)
      connection-timeout: 30000     # 커넥션 못 받을 시 timeout (30초)
      leak-detection-threshold: 30000  # 커넥션 누수 감지 (30초 이상 쥐고 있으면 로그 출력)
    max-lifetime: 177000 #177초, hikari는 RDS wait_timeout(180초) 보다 2 ~ 3초 정도 짧게 줄 것을 권장
