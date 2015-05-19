# io.js
# VERSION 2.0.2

FROM ubuntu:15.04

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install wget python g++ make && \
  wget https://iojs.org/dist/v2.0.2/iojs-v2.0.2.tar.gz && \
  tar -xzvf iojs-v2.0.2.tar.gz && \
  cd iojs-v2.0.2 && ./configure && make -j4 && make install \
  cd / && rm iojs-v2.0.2 -rf && rm iojs-v2.0.2.tar.gz \
  npm install pm2 -g --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist && \
  apt-get clean