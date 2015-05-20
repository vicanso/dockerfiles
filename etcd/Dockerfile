# Etcd 2.0.11

FROM vicanso/base

MAINTAINER "vicansocanbico@gmail.com"

RUN wget http://jt-service.oss-cn-shenzhen.aliyuncs.com/etcd-v2.0.11-linux-amd64.tar.gz && \
  tar -xzvf etcd-v2.0.11-linux-amd64.tar.gz && \
  mv etcd-v2.0.11-linux-amd64 etcd && \
  rm etcd-v2.0.11-linux-amd64.tar.gz

CMD /etcd/etcd --listen-client-urls http://0.0.0.0:4001 --advertise-client-urls http://0.0.0.0:4001
