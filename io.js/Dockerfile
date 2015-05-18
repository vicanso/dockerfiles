# io.js
# VERSION 2.0.2

FROM ubuntu:15.04

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install wget && \
  wget https://iojs.org/dist/v2.0.2/iojs-v2.0.2-linux-x64.tar.gz && \
  tar -xzvf iojs-v2.0.2-linux-x64.tar.gz && \
  mv iojs-v2.0.2-linux-x64 iojs && \
  cp iojs/bin/* /usr/bin && \ 
  cp iojs/lib/* /usr/lib/ -r && \
  rm /usr/bin/npm && \
  ln -s /usr/lib/node_modules/npm/bin/npm-cli.js /usr/bin/npm && \
  rm iojs-v2.0.2-linux-x64.tar.gz && \
  rm iojs -r && \
  npm install pm2 -g --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist && \
  apt-get clean