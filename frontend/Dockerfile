# Stage 1: Build ứng dụng
FROM node:22-alpine AS build-stage

WORKDIR /app

# Copy package.json trước để tận dụng cache của Docker (giúp npm install nhanh hơn)
COPY package*.json ./
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# Build dự án (Vite sẽ tạo ra thư mục dist)
RUN npm run build

# Stage 2: Serve bằng Nginx (Nhẹ và nhanh)
FROM nginx:stable-alpine

# Copy file đã build từ stage 1 sang Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Cấu hình để React Router hoạt động bình thường (tránh lỗi 404 khi refresh trang)
RUN printf 'server {\n\
    listen 80;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]