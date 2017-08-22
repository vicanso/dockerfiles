# filebeat

## docker build

```bash
docker build -t vicanso/filebeat .
```

## docker run

```
docker run -d --restart=always \
  -v ~/data/filebeat:/filebeat \
  -v ~/data/logs:/logs \
  vicanso/filebeat 
```