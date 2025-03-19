# 1. 빌드 단계 (builder)
FROM node:18-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json 및 package-lock.json 복사 (캐싱 활용)
COPY package.json package-lock.json ./

# 4. 의존성 설치 (CI/CD 환경에서는 npm ci 사용)
RUN npm ci

# 5. 소스 코드 복사
COPY . .

# 6. Next.js 빌드 (Static Export 지원)
RUN npm run build

# 7. 런타임 단계 (runner)
FROM node:18-alpine AS runner

# 8. 작업 디렉토리 설정
WORKDIR /app

# 9. 실행에 필요한 파일만 복사
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# 10. 환경 변수 설정 (Production)
ENV NODE_ENV=production
ENV PORT=3000

# 11. 포트 설정
EXPOSE 3000

# 12. Next.js 실행
CMD ["npm", "run", "start"]
