# actp-nginx

生成nginx镜像，此nginx的upstream为varnish，所以配置十分简单，只是简单的做反向代理，hash基于request_uri

主要配置时调整`servers/varnish.conf`的配置则可


## docker build

```
docker build -t vicanso/nginx .
```


## docker run 

```
docker run -d --restart=always \
  --net="host" \
  -v ~/varnish.conf:/etc/nginx/servers/varnish.conf
  -v /data/nginx:/etc/nginx/logs \
  --name=snack vicanso/nginx 
```

