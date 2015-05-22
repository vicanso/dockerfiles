# haproxy
# VERSION 1.5.10

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install haproxy && \
  wget https://github.com/vicanso/generate-haproxy/archive/0.1.2.tar.gz && \
  tar -xzvf 0.1.2.tar.gz && mv generate-haproxy-0.1.2 generate-haproxy && \
  rm 0.1.2.tar.gz && \
  cd generate-haproxy && npm install --production --registry=https://registry.npm.taobao.org && \
  apt-get clean

CMD service haproxy start && cd /generate-haproxy && pm2 start pm2.json && pm2 logs