# Build Stage
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=dist /app/dist /usr/share/nginx/html
EXPOSE 80
