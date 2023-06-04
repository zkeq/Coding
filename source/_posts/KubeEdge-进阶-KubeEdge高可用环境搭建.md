---
title: KubeEdge | [进阶] KubeEdge高可用环境搭建
tags:
  - Kubernetes
  - KubeEdge
categories:
  - KubeEdge
cover: https://img.onmicrosoft.cn/ke/202305180000661.png
date: 2023-06-03 01:09:39
description: 
---

## 高可用方案梳理

### Kubernetes高可用

![image-20230603011212321](https://img.onmicrosoft.cn/ke/202306030112371.png)

![image-20230603011230210](https://img.onmicrosoft.cn/ke/202306030112235.png)

修改 `kubernetes-init.yaml` 两个地方
- 修改 `ETCD` 的地址 改成集群地址
- 修改 控制节点 的地址 改成 `LoadBalancer` 地址
- `join` 命令使用新增控制面节点的命令来新增多主节点

### KubeEdge高可用

![image-20230603011554045](https://img.onmicrosoft.cn/ke/202306030115067.png)

![image-20230603011603109](https://img.onmicrosoft.cn/ke/202306030116124.png)

![image-20230603012314915](https://img.onmicrosoft.cn/ke/202306030123933.png)

云端 cloudcore 容器化

```bash
# 测试环境中使用的 KubeEdge 版本为 1.13.0 版本较新 默认即为容器启动 故此步省略
[root@master ~]# docker ps -a | grep kubeedge
efcb55359d5f   kubeedge/cloudcore                                    "cloudcore"              2 days ago   Up 2 days                         k8s_cloudcore_cloudcore-786689f8cb-7kk8v_kubeedge_d940365f-950d-4a5b-8810-3632ce2f13b4_0
6802fcb66b18   registry.aliyuncs.com/google_containers/pause:3.4.1   "/pause"                 2 days ago   Up 2 days                         k8s_POD_cloudcore-786689f8cb-7kk8v_kubeedge_d940365f-950d-4a5b-8810-3632ce2f13b4_0
[root@master ~]# netstat -nplt  | grep cloudcore
tcp6       0      0 :::10000                :::*                    LISTEN      10783/cloudcore     
tcp6       0      0 :::10002                :::*                    LISTEN      10783/cloudcore     
tcp6       0      0 :::10003                :::*                    LISTEN      10783/cloudcore     
tcp6       0      0 :::10004                :::*                    LISTEN      10783/cloudcore  

# Edge 节点通过自定义配置项纳管到云端
$ /opt/ke_install
$ tar -zxvf kubeedge-v1.13.0-linux-amd64
$ cp kubeedge-v1.13.0-linux-amd64/edge/edgecore /usr/local/bin/

- https://kubeedge.io/zh/docs/setup/config_zh/

$ edgecore --defaultconfig > /etc/kubeedge/config/edgecore.yaml

apiVersion: edgecore.config.kubeedge.io/v1alpha2
kind: EdgeCore
modules:
  edgeHub:
    httpServer: https://172.129.78.153:10002
    token: "72de9c27eef0a841f91e68257f0156ec57d42bd46623fc90dc036c00842c59d5.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU4MDQyNDR9.rSQ5ntF6_LrgEr4I6WTxD0yrZWgRYV45wBM6pzYiam4"
    websocket:
      server: 172.129.78.153:10000
      
# 修改这三个地方.

[root@master ~]# kubectl get secret -n kubeedge
NAME                              TYPE                                  DATA   AGE
casecret                          Opaque                                2      2d4h
cloudcore                         Opaque                                3      2d4h
cloudcore-token-6rnlp             kubernetes.io/service-account-token   3      2d4h
cloudcoresecret                   Opaque                                2      2d4h
default-token-74jtf               kubernetes.io/service-account-token   3      2d4h
sh.helm.release.v1.cloudcore.v1   helm.sh/release.v1                    1      2d4h
sh.helm.release.v1.cloudcore.v2   helm.sh/release.v1                    1      2d4h
tokensecret                       Opaque                                1      2d4h

[root@master ~]# kubectl get secret tokensecret -n kubeedge -oyaml
apiVersion: v1
data:
  tokendata: NzJkZTljMjdlZWYwYTg0MWY5MWU2ODI1N2YwMTU2ZWM1N2Q0MmJkNDY2MjNmYzkwZGMwMzZjMDA4NDJjNTlkNS5leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGVIQWlPakUyT0RVNE1EUXlORFI5LnJTUTVudEY2X0xyZ0VyNEk2V1R4RDB5clpXZ1JZVjQ1d0JNNnB6WWlhbTQ=
kind: Secret
metadata:
  creationTimestamp: "2023-05-31T13:47:39Z"
  name: tokensecret
  namespace: kubeedge
  resourceVersion: "315983"
  uid: b1edfa89-c4b2-4937-a919-7b04feba28cd
type: Opaque

[root@master ~]# echo NzJkZTljMjdlZWYwYTg0MWY5MWU2ODI1N2YwMTU2ZWM1N2Q0MmJkNDY2MjNmYzkwZGMwMzZjMDA4NDJjNTlkNS5leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGVIQWlPakUyT0RVNE1EUXlORFI5LnJTUTVudEY2X0xyZ0VyNEk2V1R4RDB5clpXZ1JZVjQ1d0JNNnB6WWlhbTQ= | base64 -d

72de9c27eef0a841f91e68257f0156ec57d42bd46623fc90dc036c00842c59d5.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU4MDQyNDR9.rSQ5ntF6_LrgEr4I6WTxD0yrZWgRYV45wBM6pzYiam4

# 修改名字
  edged:
    hostnameOverride: edgeMyCompute
# 通道
  edgeStream:
    enable: true
    
$ cp /opt/ke_install/kubeedge-1.13.0/build/toolsedgecore.service /etc/systemd/system/

$ systemctl enable --now edgecore
Created symlink from /etc/systemd/system/multi-user.target.wants/edgecore.service to /etc/systemd/system/edgecore.service
```

## keepalived原理

- 通过 `keepalived`得到一个虚拟 IP

![image-20230604234832994](https://img.onmicrosoft.cn/ke/202306042348047.png)

![image-20230604234845923](https://img.onmicrosoft.cn/ke/202306042348944.png)

## nodePort高可用实战

- 运行多个 `pod` 然后定义 service 转发端口至 `NodePort` `-->`  达到高可用

相关案例见视频  

- 若无法正常加载, 请点击查看 PDF 网页版本: [【拓展】漫谈高可用与负载均衡.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/ke/%E3%80%90%E6%8B%93%E5%B1%95%E3%80%91%E6%BC%AB%E8%B0%88%E9%AB%98%E5%8F%AF%E7%94%A8%E4%B8%8E%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.pdf)

<embed src="https://media.onmicrosoft.cn/ke/%E3%80%90%E6%8B%93%E5%B1%95%E3%80%91%E6%BC%AB%E8%B0%88%E9%AB%98%E5%8F%AF%E7%94%A8%E4%B8%8E%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.pdf" type="application/pdf" width="100%" height="500" />