FROM nginx:alpine

EXPOSE 80

ADD nginx.conf /etc/nginx/nginx.conf
ADD basic.conf /etc/nginx/sites-enabled/basic.conf
ADD servers /etc/nginx/servers
RUN mkdir /etc/nginx/logs
