# docker pull denoland/deno:1.29.1
# docker tag denoland/deno:1.29.1 registry.baomihua.xyz/baopeng/deno:1.29.1
# docker push registry.baomihua.xyz/baopeng/deno:1.29.1

# docker build -t registry.baomihua.xyz/baopeng/deno:1.29.1 .
# docker push registry.baomihua.xyz/baopeng/deno:1.29.1

docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) \
-t registry.baomihua.xyz/baopeng/fresh ../


