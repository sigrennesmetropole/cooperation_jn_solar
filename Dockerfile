FROM node:16-alpine AS build

ARG NPM_TOKEN
COPY package.json package-lock.json .npmrc /app/
WORKDIR /app
RUN npm ci
COPY . /app
RUN npm run build

# nginx state for serving content
FROM nginx:alpine AS run
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
