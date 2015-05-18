# Etcd 2.0.11

FROM vicanso/base

MAINTAINER "vicansocanbico@gmail.com"

RUN wget https://github.com/coreos/etcd/releases/download/v2.0.11/etcd-v2.0.11-linux-amd64.tar.gz && \
  tar -xzvf etcd-v2.0.11-linux-amd64.tar.gz && \
  mv etcd-v2.0.11-linux-amd64 etcd && \
  rm etcd-v2.0.11-linux-amd64.tar.gz

CMD /etcd/etcd --listen-client-urls http://0.0.0.0:2379,http://localhost:4001 --advertise-client-urls http://0.0.0.0:2379,http://localhost:4001
