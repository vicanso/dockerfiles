# varnish
# VERSION 4.0.3

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install varnish && \
  npm install generate-varnish --registry=https://registry.npm.taobao.org

CMD service varnish start && cd /node_modules/generate-varnish && pm2 start pm2.json && pm2 logs