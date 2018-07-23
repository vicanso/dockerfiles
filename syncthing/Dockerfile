FROM alpine as builder

ENV VERSION 0.14.48

RUN apk update \
  && apk add wget \
  && wget https://github.com/syncthing/syncthing/releases/download/v${VERSION}/syncthing-linux-amd64-v${VERSION}.tar.gz \
  && tar -xzvf syncthing-linux-amd64-v${VERSION}.tar.gz \
  && mv syncthing-linux-amd64-v${VERSION} syncthing

FROM alpine

COPY --from=builder /syncthing/syncthing /usr/local/bin/

CMD ["syncthing"]
