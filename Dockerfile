FROM node:16-alpine AS build

ARG NPM_TOKEN
COPY package.json package-lock.json .npmrc /app/
WORKDIR /app
RUN npm ci
RUN npx pkg ./node_modules/@import-meta-env/cli/bin/import-meta-env.js \
  -t node18-alpine-x64 \
  -o import-meta-env-alpine
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
COPY --from=build /app/import-meta-env-alpine /usr/share/nginx/html
COPY .env.example start.sh /usr/share/nginx/html/

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["sh","/usr/share/nginx/html/start.sh"]
