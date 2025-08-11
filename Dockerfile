### مرحله Build
FROM node:18-alpine AS builder

# ساخت دایرکتوری کار
WORKDIR /app

# کپی فایل‌های وابستگی
COPY package*.json ./
RUN npm install

# کپی بقیه سورس
COPY . .

# ساخت خروجی production
RUN npm run build

### مرحله Serve با NGINX
FROM nginx:alpine

# کپی خروجی build شده به مسیر پیش‌فرض NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# اگر فایل‌های پیکربندی خاص نداری، این کافی هست.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
