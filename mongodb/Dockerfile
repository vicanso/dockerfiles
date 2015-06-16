# mongodb
# VERSION 3.0.3

FROM vicanso/io.js

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get install -y mongodb

ENV MONGO_MAJOR 3.0
ENV MONGO_VERSION 3.0.3

RUN mkdir -p /data/db && chown -R mongodb:mongodb /data/db

COPY ./mongod.conf /etc/mongod.conf
COPY ./mongodb-key /mongodb-key

RUN chmod 600 /mongodb-key

CMD /usr/bin/mongod -f /etc/mongod.conf