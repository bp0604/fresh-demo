docker build --build-arg GIT_REVISION=$(git rev-parse HEAD) -t registry.baomihua.xyz/baopeng/fresh-app .

docker run -t -i -p 18000:8000 fresh-app
