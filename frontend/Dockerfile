# Stage 1: Build ứng dụng
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve bằng Nginx
FROM nginx:stable-alpine

# 1. Cài đặt thêm công cụ để xử lý file config động
RUN apk add --no-cache gettext

# 2. Copy file đã build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 3. Tạo một file template cho Nginx (Sử dụng $PORT thay vì cứng cổng 80)
# Việc dùng $PORT giúp Render nhận diện được ứng dụng đang chạy đúng cổng nó cấp.
RUN printf 'server {\n\
    listen ${PORT};\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
    location /healthz {\n\
        return 200 "OK";\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf.template

# 4. Giới hạn worker để tiết kiệm RAM (Render gói Free rất ít RAM)
RUN sed -i '1s/^/worker_processes 1;\n/' /etc/nginx/nginx.conf

# 5. Sử dụng Script để thay thế biến $PORT trước khi chạy Nginx
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]