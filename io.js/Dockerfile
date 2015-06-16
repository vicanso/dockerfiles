# io.js
# VERSION 2.3.0

FROM vicanso/base

MAINTAINER "vicansocanbico@gmail.com"

ENV IOJS_VERSION 2.3.0

RUN wget http://npm.taobao.org/mirrors/iojs/v$IOJS_VERSION/iojs-v$IOJS_VERSION.tar.gz && \
  tar -xzvf iojs-v$IOJS_VERSION.tar.gz && \
  cd iojs-v$IOJS_VERSION && ./configure && make && make install && \
  cd / && rm /iojs-v$IOJS_VERSION -rf && rm /iojs-v$IOJS_VERSION.tar.gz && \
  npm install pm2 -g --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist
