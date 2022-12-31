# FROM denoland/deno:1.29.1
FROM registry.baomihua.xyz/baopeng/deno:1.29.1 as base

# COPY ./build/sources.list /etc/apt/sources.list

# RUN apt update \
# && apt install curl -y

WORKDIR /app

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

COPY . .

RUN deno cache main.ts --import-map=import_map.json

EXPOSE 8000

CMD ["run", "-A", "main.ts"]

################################

FROM nginx:alpine as nginx

WORKDIR /etc/nginx/conf.d

COPY ./nginx_default.conf ./

