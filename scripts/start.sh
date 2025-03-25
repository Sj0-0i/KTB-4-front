#!/bin/bash

IMAGE="120569628358.dkr.ecr.ap-northeast-2.amazonaws.com/frontapp:latest"
CONTAINER_NAME="frontend_container"

# ECR에서 최신 이미지 pull
echo "Pulling latest image from ECR"
docker pull $IMAGE

docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# 새 컨테이너 실행
echo "Running new container"
docker run -d \
  --name $CONTAINER_NAME \
  -p 3000:3000 \
  $IMAGE
