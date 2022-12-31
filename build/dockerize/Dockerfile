# FROM denoland/deno:latest as base
FROM registry.baomihua.xyz/baopeng/deno:1.29.1 as base

WORKDIR /app

COPY . ./

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]
# deno run --allow-net server.ts
