# varnish
# VERSION 4.0.2

FROM vicanso/base

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get update && \
  apt-get -y install varnish && \
  wget https://github.com/vicanso/generate-varnish/archive/0.1.0.tar.gz && \
  tar -xzvf 0.1.0.tar.gz && \
  rm 0.1.0.tar.gz && \
  apt-get clean

CMD service varnish start