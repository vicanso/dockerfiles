# base
# VERSION 0.0.1

FROM ubuntu

MAINTAINER "vicansocanbico@gmail.com"

RUN apt-get update && \
  apt-get -y install wget python g++ make && \
  cat /usr/share/zoneinfo/Asia/Shanghai > /etc/localtime && \
  apt-get clean