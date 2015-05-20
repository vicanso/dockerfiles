# base
# VERSION 0.0.1

FROM ubuntu:15.04

MAINTAINER "vicansocanbico@gmail.com"

COPY aliyun /

RUN cat aliyun > /etc/apt/sources.list && rm aliyun && \ 
  apt-get update && \
  apt-get -y install wget python g++ make && \
  cat /usr/share/zoneinfo/Asia/Shanghai > /etc/localtime && \
  apt-get clean