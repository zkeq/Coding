---
title: Kubernetes | 集群安装 - ClusterInstallation
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-22 01:36:24
---

## 前期准备

![image-20230422033943863](https://img.onmicrosoft.cn/k8s/202304220339885.png)

- 使用 KubeAdm 安装集群
- 使用 Centos 7 来安装(内核 4.4 以上)
- 需要4台 Centos7 + 1台软路由
- 软路由使用 KoolShare 来构建

## 开始操作

### 1、系统初始化

#### 设置系统主机名以及 Host 文件的相互解析

```sh
hostnamectl set-hostname k8s-master01
```

#### 安装依赖包

```sh
yum install -y conntrack ntpdate ntp ipvsadm ipset jq iptables curl sysstat libseccomp wget vim net-tools git
```

####  设置防火墙为 Iptables 并设置空规则

```sh
systemctl stop firewalld && systemctl disable firewalld
yum -y install iptables-services && systemctl start iptables && systemctl enable iptables   && iptables -F && service iptables save
```

#### 关闭 SELINUX

```sh
swapoff -a && sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
# 为了性能, k8s 集群在安装的时候会去检测虚拟内存是否关闭 可制定 ingress 参数使其不检测 但是一般不指定
setenforce 0 && sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
```

#### 调整内核参数，对于 K8S

```sh
cat > kubernetes.conf <<EOF
net.bridge.bridge-nf-call-iptables=1
net.bridge.bridge-nf-call-ip6tables=1
net.ipv4.ip_forward=1
net.ipv4.tcp_tw_recycle=0
vm.swappiness=0 # 禁止使用 swap 空间，只有当系统 OOM 时才允许使用它
vm.overcommit_memory=1 # 不检查物理内存是否够用
vm.panic_on_oom=0 # 开启 OOM
fs.inotify.max_user_instances=8192
fs.inotify.max_user_watches=1048576
fs.file-max=52706963
fs.nr_open=52706963
net.ipv6.conf.all.disable_ipv6=1
net.netfilter.nf_conntrack_max=2310720
EOF
cp kubernetes.conf /etc/sysctl.d/kubernetes.conf
sysctl -p /etc/sysctl.d/kubernetes.conf
```

#### 调整系统时区

```sh
# 设置系统时区为 中国/上海
timedatectl set-timezone Asia/Shanghai
# 将当前的 UTC 时间写入硬件时钟
timedatectl set-local-rtc 0
# 重启依赖于系统时间的服务
systemctl restart rsyslog
systemctl restart crond
```

#### 关闭系统不需要服务

```sh
systemctl stop postfix && systemctl disable postfix
```

#### 设置 rsyslogd 和 systemd journald

```sh
mkdir /var/log/journal # 持久化保存日志的目录
mkdir /etc/systemd/journald.conf.d
cat > /etc/systemd/journald.conf.d/99-prophet.conf <<EOF
[Journal]
# 持久化保存到磁盘
Storage=persistent
# 压缩历史日志
Compress=yes
SyncIntervalSec=5m
RateLimitInterval=30s
RateLimitBurst=1000
# 最大占用空间 10G
SystemMaxUse=10G
# 单日志文件最大 200M
SystemMaxFileSize=200M
# 日志保存时间 2 周
MaxRetentionSec=2week
# 不将日志转发到 syslog
ForwardToSyslog=no
EOF
systemctl restart systemd-journald

```

#### 升级系统内核为 4.44

CentOS 7.x 系统自带的 3.10.x 内核存在一些 Bugs，导致运行的 Docker、Kubernetes 不稳定，例如： rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm

```sh
rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm
# 安装完成后检查 /boot/grub2/grub.cfg 中对应内核 menuentry 中是否包含 initrd16 配置，如果没有，再安装
一次！
yum --enablerepo=elrepo-kernel install -y kernel-lt
# 设置开机从新内核启动
grub2-set-default 'CentOS Linux (4.4.189-1.el7.elrepo.x86_64) 7 (Core)'

# 2023-04-22: 升级内核之后 我得到的是 5.4 (因为是最新版的)
# 如果用的是 Centos7.9 的话 默认的内核也能用
```

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E5%8C%96.pdf" type="application/pdf" width="100%" height="500" />


### 2、Kubeadm 部署安装

#### kube-proxy开启ipvs的前置条件

```shell
modprobe br_netfilter

cat > /etc/sysconfig/modules/ipvs.modules <<EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
EOF
chmod 755 /etc/sysconfig/modules/ipvs.modules && bash /etc/sysconfig/modules/ipvs.modules &&
lsmod | grep -e ip_vs -e nf_conntrack_ipv4
```

#### 安装 Docker 软件

```shell
yum install -y yum-utils device-mapper-persistent-data lvm2

yum-config-manager \
	--add-repo \
	http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum update -y && yum install -y docker-ce

## 创建 /etc/docker 目录
mkdir /etc/docker

# 配置 daemon.
cat > /etc/docker/daemon.json <<EOF
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
  	"max-size": "100m"
  }
}
EOF
mkdir -p /etc/systemd/system/docker.service.d

# 重启docker服务
systemctl daemon-reload && systemctl restart docker && systemctl enable docker
```

#### 安装 Kubeadm （主从配置）

```sh
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

yum -y install kubeadm-1.15.1 kubectl-1.15.1 kubelet-1.15.1
systemctl enable kubelet.service
```

#### 初始化主节点

```shell
kubeadm config print init-defaults > kubeadm-config.yaml
  localAPIEndpoint:
  	advertiseAddress: 192.168.66.10
  kubernetesVersion: v1.15.1
  networking:
    podSubnet: "10.244.0.0/16"
    serviceSubnet: 10.96.0.0/12
  ---
  apiVersion: kubeproxy.config.k8s.io/v1alpha1
  kind: KubeProxyConfiguration
  featureGates:
  	SupportIPVSProxyMode: true
  mode: ipvs

kubeadm init --config=kubeadm-config.yaml --experimental-upload-certs | tee kubeadm-init.log
```

#### 加入主节点以及其余工作节点

```sh
执行安装日志中的加入命令即可
```

#### 部署网络

```sh
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

<embed src="https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubeadm%20%E9%83%A8%E7%BD%B2%E5%AE%89%E8%A3%85.pdf" type="application/pdf" width="100%" height="500" />

### Harbor - 企业级 Docker 私有仓库

<embed src="https://media.onmicrosoft.cn/k8s/Harbor%20-%20%E4%BC%81%E4%B8%9A%E7%BA%A7%20Docker%20%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93.pdf" type="application/pdf" width="100%" height="500" />

