# varnish
# VERSION 3.0.1

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN wget http://download.redis.io/releases/redis-3.0.1.tar.gz && \
  tar -xzvf redis-3.0.1.tar.gz && \
  cd /redis-3.0.1/deps/ && make hiredis jemalloc linenoise lua && \
  cd .. && make && make install && \
  cd .. && rm redis-3.0.1 -rf && rm redis-3.0.1.tar.gz && \
  
