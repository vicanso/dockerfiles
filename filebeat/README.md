# filebeat

主要调整filebeat.yml中的`prospectors`与`output.elasticsearch`的配置则可

## docker build

```bash
docker build -t vicanso/filebeat .
```

## docker run

```
docker run -d --restart=always \
  -v ~/config/filebeat.yml:/filebeat.yml
  -v ~/data/filebeat:/filebeat \
  -v ~/data/logs:/logs \
  vicanso/filebeat 
```