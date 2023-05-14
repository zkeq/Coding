---
title: Kubernetes | 证书可用时间修改
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本文介绍了如何修改 Kubernetes 证书可用时间。需要部署 go 环境和下载源码，然后修改 Kubeadm 源码包，更新 kubeadm，更新各节点证书至 Master 节点，最后更新 HA 集群其余 master 节点证书。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-05-15 01:09:22
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

## 证书可用时限

### 1.部署 go 环境

```bash
wget https://dl.google.com/go/go1.12.7.linux-amd64.tar.gz
tar -zxvf go1.12.7.linux-amd64.tar.gz -C /usr/local

vi /etc/profile
  export PATH=$PATH:/usr/local/go/bin
source /etc/profile
```

### 2.下载源码

```bash
cd /data && git clone https://github.com/kubernetes/kubernetes.git
git checkout -b remotes/origin/release-1.15.1 v1.15.1
```

### 3.修改 Kubeadm 源码包更新证书策略

```bash
vim staging/src/k8s.io/client-go/util/cert/cert.go # kubeadm 1.14 版本之前
vim cmd/kubeadm/app/util/pkiutil/pki_helpers.go # kubeadm 1.14 至今
    const duration365d = time.Hour * 24 * 365
    NotAfter: time.Now().Add(duration365d).UTC(),

make WHAT=cmd/kubeadm GOFLAGS=-v
cp _output/bin/kubeadm /root/kubeadm-new
```

### 4.更新 kubeadm

```bash
# 将 kubeadm 进行替换
cp /usr/bin/kubeadm /usr/bin/kubeadm.old
cp /root/kubeadm-new /usr/bin/kubeadm
chmod a+x /usr/bin/kubeadm
```

### 5.更新各节点证书至 Master 节点

```bash
cp -r /etc/kubernetes/pki /etc/kubernetes/pki.old
cd /etc/kubernetes/pki
kubeadm alpha certs renew all --config=/root/kubeadm-config.yaml
openssl x509 -in apiserver.crt -text -noout | grep Not
```

### 6.HA 集群其余 master 节点证书更新

> 视频未讲, 自行操作

```bash
#!/bin/bash

masterNode="192.168.66.20 192.168.66.21"
#for host in ${masterNode}; do
# scp /etc/kubernetes/pki/{ca.crt,ca.key,sa.key,sa.pub,front-proxy-ca.crt,front-proxy-ca.key} "${USER}"@$host:/etc/kubernetes/pki/
# scp /etc/kubernetes/pki/etcd/{ca.crt,ca.key} "root"@$host:/etc/kubernetes/pki/etcd
# scp /etc/kubernetes/admin.conf "root"@$host:/etc/kubernetes/
#done
for host in ${CONTROL_PLANE_IPS}; do
  scp /etc/kubernetes/pki/{ca.crt,ca.key,sa.key,sa.pub,front-proxy-ca.crt,front-proxy-ca.key}
"${USER}"@$host:/root/pki/
  scp /etc/kubernetes/pki/etcd/{ca.crt,ca.key} "root"@$host:/root/etcd
  scp /etc/kubernetes/admin.conf "root"@$host:/root/kubernetes/
done

```

> 👉 此文档描述了如何修改 Kubernetes 证书可用时间。请注意，这是对于 Kubernetes 版本 1.15.1 的说明，因此如果您使用不同版本的 Kubernetes，则需要进行相应的调整。


- 若无法正常加载, 请点击查看 PDF 网页版本: [证书有效期修改.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/1%E3%80%81%E8%AF%81%E4%B9%A6%E6%9C%89%E6%95%88%E6%9C%9F%E4%BF%AE%E6%94%B9.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81%E8%AF%81%E4%B9%A6%E6%9C%89%E6%95%88%E6%9C%9F%E4%BF%AE%E6%94%B9.pdf" type="application/pdf" width="100%" height="500" />