FROM alpine:edge

EXPOSE 80

ENV VERSION 5.1.3 
ENV PORT 80
ENV VCL_CONFIG      /etc/varnish/default.vcl
ENV CACHE_SIZE      128m
ENV PARAMS -p default_ttl=0 -p default_grace=1800 -p default_keep=10

ADD default.vcl /etc/varnish/default.vcl
ADD start.sh /start.sh

RUN apk add --no-cache varnish \
    && chmod +x start.sh

CMD ["/start.sh"]
