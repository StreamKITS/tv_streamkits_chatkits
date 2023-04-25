FROM node:18-alpine
LABEL org.opencontainers.image.authors="StreamKITS <contact@streamkits.tv>"

WORKDIR /usr/src/app

RUN apk update && apk add --no-cache \
  git \
  nano \
  jq

COPY . .

RUN yarn install \
  --frozen-lockfile \
  --non-interactive \
  --production=true \
  && yarn cache clean

EXPOSE 3000

CMD [ "yarn", "start:prod" ]
