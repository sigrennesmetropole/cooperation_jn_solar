#!/bin/bash

# Inject environment variables to index.html
./import-meta-env-alpine -x .env.example -p /usr/share/nginx/html/index.html || exit 1

nginx -g "daemon off;"