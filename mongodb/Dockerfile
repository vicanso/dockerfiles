# mongodb
# VERSION 3.0.3

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list && \
  apt-get update && \
  apt-get install -y mongodb-org

ENV MONGO_MAJOR 3.0
ENV MONGO_VERSION 3.0.3

RUN mkdir -p /data/db && chown -R mongodb:mongodb /data/db

COPY ./mongod.conf /etc/mongod.conf
COPY ./mongodb-key /mongodb-key

RUN chmod 600 /mongodb-key

EXPOSE 27017

CMD /usr/bin/mongod -f /etc/mongod.conf