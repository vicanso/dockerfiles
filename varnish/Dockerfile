# varnish
# VERSION 4.0.2

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get -y install varnish && \
  wget https://github.com/vicanso/generate-varnish/archive/0.1.1.tar.gz && \
  tar -xzvf 0.1.1.tar.gz && mv generate-varnish-0.1.1 generate-varnish && \
  rm 0.1.1.tar.gz && \
  cd generate-varnish && npm install --production && \
  apt-get clean

CMD service varnish start && cd /generate-varnish && pm2 start pm2.json && pm2 logs