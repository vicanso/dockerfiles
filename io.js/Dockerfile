# io.js
# VERSION 2.1.0

FROM vicanso/base

MAINTAINER "vicansocanbico@gmail.com"

RUN wget http://npm.taobao.org/mirrors/iojs/v2.1.0/iojs-v2.1.0.tar.gz && \
  tar -xzvf iojs-v2.1.0.tar.gz && \
  cd iojs-v2.1.0 && ./configure && make && make install && \
  cd / && rm /iojs-v2.1.0 -rf && rm /iojs-v2.1.0.tar.gz && \
  npm install pm2 -g --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist
