# 베이스 이미지 선택
FROM node:20.9

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# TypeScript 컴파일
RUN npm run build

# 애플리케이션 실행
CMD [ "node", "dist/index.js" ]
