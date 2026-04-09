# Stage 1: Build ứng dụng (Giữ nguyên như cũ)
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve bằng Nginx
FROM nginx:stable-alpine

# 1. Cài đặt gettext để dùng envsubst
RUN apk add --no-cache gettext

# 2. Copy file build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 3. Tạo file template cấu hình Server
# Sử dụng biến $PORT và thêm endpoint health check
RUN printf 'server {\n\
    listen ${PORT};\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
    location /healthz {\n\
        access_log off;\n\
        return 200 "OK";\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf.template

# 4. Sửa lỗi Duplicate worker_processes: 
# Thay thế dòng cũ bằng giá trị cố định thay vì chèn thêm
RUN sed -i 's/^worker_processes.*/worker_processes 1;/' /etc/nginx/nginx.conf

# 5. Lệnh khởi chạy
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]