# mongodb
# VERSION 3.0.2

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1404-3.0.2.tgz && \

  tar -xzvf mongodb-linux-x86_64-ubuntu1404-3.0.2.tgz && \
  cp mongodb-linux-x86_64-ubuntu1404-3.0.2/bin/* /usr/local/bin/ && \
  rm mongodb-linux-x86_64-ubuntu1404-3.0.2 -rf && \
  rm mongodb-linux-x86_64-ubuntu1404-3.0.2.tgz
  