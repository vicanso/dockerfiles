# varnish-alpine

The varnish docker image base on alpine. Please use the [varnish-generator](https://github.com/vicanso/varnish-generator) to create the vcl.

## build

docker build -t vicanso/varnish .

## run

docker run -d -v custom.vcl:/etc/varnish/default.vcl -p 8080:80 --restart=always vicanso/varnish

### ENV

- `VCL_CONFIG` the vcl config file, default is `/etc/varnish/default.vcl`
- `PORT` the listen port, default is `80`
- `CACHE_SIZE` the cache size, default is `64m`
- `PARAMS` the varnish params, default is `-p default_ttl=0 -p default_grace=1800 -p default_keep=10`
