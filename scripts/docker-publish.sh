#!/bin/bash
DOCKER_ENV=''
DOCKER_TAG=''

case "$TRAVIS_BRANCH" in
  "master")
    DOCKER_ENV=production
    DOCKER_TAG=latest
    ;;
  "develop")
    DOCKER_ENV=development
    DOCKER_TAG=dev
    ;;    
esac

docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
docker build -f ./src/DShop.Services.Signalr/Dockerfile.$DOCKER_ENV -t dshop.services.signalr:$DOCKER_TAG ./src/DShop.Services.Signalr
docker tag dshop.services.signalr:$DOCKER_TAG $DOCKER_USERNAME/dshop.services.signalr:$DOCKER_TAG
docker push $DOCKER_USERNAME/dshop.services.signalr:$DOCKER_TAG