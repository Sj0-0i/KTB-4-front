#!/bin/bash

# 작업 디렉토리를 /home/ec2-user/app으로 변경
cd /home/ubuntu/app/docker

# 환경변수 DOCKER_APP_NAME을 nextjs로 설정
DOCKER_APP_NAME=nextjs

# 실행 중인 blue 컨테이너 확인
EXIST_BLUE=$(sudo docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml ps | grep running)

# 배포 시작 로그 기록
echo "배포 시작일자 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log

# green이 실행 중이면 blue up
if [ -z "$EXIST_BLUE" ]; then
  echo "blue 배포 시작 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log

  # docker-compose.blue.yml을 사용하여 blue 컨테이너 실행
  sudo docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml up -d --build

  # 컨테이너가 정상적으로 실행될 시간을 확보하기 위해 대기
  sleep 10

  echo "green 중단 시작 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ec2-user/app/deploy.log
  sudo docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml down

  # 사용하지 않는 이미지 삭제 (디스크 공간 절약)
  sudo docker image prune -af

  echo "green 중단 완료 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log

  # Nginx가 Blue 컨테이너를 바라보도록 설정 변경
    echo "upstream nextjs_frontend {
      server 127.0.0.1:3001 max_fails=3 fail_timeout=10s;
    }" | sudo tee /etc/nginx/conf.d/upstream.conf > /dev/null

# blue가 실행 중이면 green up
else
  echo "green 배포 시작 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log

  # docker-compose.green.yml을 사용하여 green 컨테이너 실행
  sudo docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d --build

  sleep 10

  echo "blue 중단 시작 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log
  sudo docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml down
  sudo docker image prune -af

  echo "blue 중단 완료 : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log

  echo "upstream nextjs_frontend {
    server 127.0.0.1:3002 max_fails=3 fail_timeout=10s;
  }" | sudo tee /etc/nginx/conf.d/upstream.conf > /dev/null

fi

echo "배포 종료  : $(date '+%Y-%m-%d %H:%M:%S')" >> /home/ubuntu/app/deploy.log
echo "===================== 배포 완료 =====================" >> /home/ubuntu/app/deploy.log
echo >> /home/ubuntu/deploy.log
