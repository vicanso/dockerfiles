# varnish
# VERSION 3.0.1

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN wget http://download.redis.io/releases/redis-3.0.1.tar.gz && \
  tar xzf redis-3.0.1.tar.gz && \
  cd redis-3.0.1 && make && make install

ENV REDIS_MAJOR 3.0
ENV REDIS_VERSION 3.0.1


CMD service redis-server start && pm2 logs
