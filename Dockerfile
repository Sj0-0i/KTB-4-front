# 1. 기본 Node.js 이미지 선택 (LTS 버전 권장)
FROM node:18-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json 및 package-lock.json 복사
COPY package.json package-lock.json ./

# 4. 의존성 설치
RUN npm ci

# 5. 소스 코드 복사
COPY . .

# 6. Next.js 빌드
RUN npm run build

# 7. 경량 Node.js 이미지를 사용하여 실행 환경 구성
FROM node:18-alpine AS runner

WORKDIR /app

# 8. 빌드된 파일 복사
COPY --from=builder /app ./

# 9. 환경 변수 설정 (Production 환경)
ENV NODE_ENV=production

# 10. 포트 설정 (Next.js 기본 포트)
EXPOSE 3000

# 11. Next.js 실행
CMD ["npm", "run", "start"]