# haproxy
# VERSION 1.5.12

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install haproxy && \
  npm install generate-haproxy --registry=https://registry.npm.taobao.org

CMD service haproxy start && cd /node_modules/generate-haproxy && pm2 start pm2.json && pm2 logs