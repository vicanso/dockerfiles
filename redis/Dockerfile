# varnish
# VERSION 2.8.19

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install redis-server


CMD service redis-server start && pm2 logs
