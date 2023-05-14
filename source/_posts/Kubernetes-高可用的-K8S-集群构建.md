---
title: Kubernetes | 高可用的 K8S 集群构建 [完结]
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本文介绍了如何构建高可用的Kubernetes集群，包括kube-proxy开启ipvs的前置条件、安装Docker软件、在主节点启动Haproxy与Keepalived容器、安装Kubeadm、初始化主节点、加入主节点以及其余工作节点、Etcd集群状态查看、以及部署网络。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-05-15 01:09:31
---

![image-20230515043315498](https://img.onmicrosoft.cn/k8s/202305150433549.png)

## 1、系统初始化

```
# 1. firewarlld - systemctl
# 2. iptables - systemctl
# 3. selinunx - getenforce
```

## 设置系统主机名以及 Host 文件的相互解析

```bash
hostnamectl set-hostname k8s-master01
hostnamectl set-hostname k8s-master02
hostnamectl set-hostname k8s-master03
# 做完 hosts 之后, 要测一下看能不能通
```

## 安装依赖包

```bash
yum install -y conntrack ntpdate ntp ipvsadm ipset jq iptables curl sysstat libseccomp wget vim net-tools git
```

## 设置防火墙为 Iptables 并设置空规则

```bash
systemctl stop firewalld && systemctl disable firewalld
yum -y install iptables-services && systemctl start iptables && systemctl enable iptables && iptables -F && service iptables save
```

## 关闭 SELINUX

```bash
swapoff -a && sed -i '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab # 关闭 swap 交换分区
setenforce 0 && sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config
```

## 调整内核参数，对于 K8S

```bash
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

sysctl -p /etc/sysctl.d/kubernetes.conf # 刷新生效
```

## 调整系统时区

```bash
# 设置系统时区为 中国/上海
timedatectl set-timezone Asia/Shanghai
# 将当前的 UTC 时间写入硬件时钟
timedatectl set-local-rtc 0
# 重启依赖于系统时间的服务
systemctl restart rsyslog
systemctl restart crond
```

## 关闭系统不需要服务

```bash
systemctl stop postfix && systemctl disable postfix
# 目的是为了节省资源
```

## 设置 rsyslogd 和 systemd journald

```bash
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

# 前面的步骤在创建单节点的时候已经讲过 步骤是没有区别的
```

## 升级系统内核为 4.4.182

> 相关操作见单节点的步骤

CentOS 7.x 系统自带的 3.10.x 内核存在一些 Bugs，导致运行的 Docker、Kubernetes 不稳定，例如：

- [http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm](http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm)

```bash
rpm -Uvh <http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm>
# 安装完成后检查 /boot/grub2/grub.cfg 中对应内核 menuentry 中是否包含 initrd16 配置，如果没有，再安装一次！
yum --enablerepo=elrepo-kernel install -y kernel-lt
# 设置开机从新内核启动
grub2-set-default "CentOS Linux (4.4.182-1.el7.elrepo.x86_64) 7 (Core)"
# 重启后安装内核源文件
yum --enablerepo=elrepo-kernel install kernel-lt-devel-$(uname -r) kernel-lt-headers-$(uname -r)
```

## 关闭 NUMA

```bash
cp /etc/default/grub{,.bak}
vim /etc/default/grub # 在 GRUB_CMDLINE_LINUX 一行添加 `numa=off` 参数，如下所示：
diff /etc/default/grub.bak /etc/default/grub
6c6
< GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root rhgb quiet"
---
> GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root rhgb quiet numa=off"
cp /boot/grub2/grub.cfg{,.bak}
grub2-mkconfig -o /boot/grub2/grub.cfg
```

> 这一步是在关闭 NUMA（Non-Uniform Memory Access）功能，以避免在 Kubernetes 中出现一些性能问题。NUMA 是一种多处理器系统结构，其中每个处理器都有本地内存和共享内存。在 NUMA 中，跨节点内存访问可能会导致性能问题，因此在某些情况下禁用 NUMA 功能可以提高性能。在 Linux 中，可以使用参数 "numa=off" 来关闭 NUMA。


- 若无法正常加载, 请点击查看 PDF 网页版本: [系统初始化.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/1%E3%80%81%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E5%8C%96.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E5%8C%96.pdf" type="application/pdf" width="100%" height="500" />


## 2、Kubeadm 部署安装

## kube-proxy 开启 ipvs 的前置条件

```bash
modprobe br_netfilter

cat > /etc/sysconfig/modules/ipvs.modules <<EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack_ipv4
EOF

chmod 755 /etc/sysconfig/modules/ipvs.modules && bash /etc/sysconfig/modules/ipvs.modules && lsmod | grep -e ip_vs -e nf_conntrack_ipv4
```

## 安装 Docker 软件

```bash
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

# 重启 docker 服务
systemctl daemon-reload && systemctl restart docker && systemctl enable docker
```

## 在主节点启动 Haproxy 与 Keepalived 容器

```bash
导入脚本 > 运行 > 查看可用节点
$ mkdir /usr/local/kubernetes
$ cd !$
cd /usr/local/kubernetes
$ mkdir install
# 导入相关镜像
$ # docker load -i $i
for tar in `ls /usr/local/kubernetes/install/`
> do
> docker load -i $tar
> done
# 解压并执行 `start.keep.tar.gz`
1. 修改 配置文件 haproxy.cfg : server 字段
2. 修改 脚本文件 start-haproxy.sh 并运行
3. 修改 脚本文件 start-keepalived.sh : ip,网卡 并运行
```

## 安装 Kubeadm （主从配置）

```bash
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

## 初始化主节点

```bash
kubeadm config print init-defaults > kubeadm-config.yaml
# 如果要部署高可用 要在 `controlPlaneEndpoint` 添加高可用节点地址
kubeadm init --config=kubeadm-config.yaml --experimental-upload-certs | tee kubeadm-init.log
# 1.15 版本之前无高可用命令 只能手动拷贝
```

## 加入主节点以及其余工作节点

```bash
执行安装日志中的加入命令即可
# 安装的时候把 haproxy 改成第一个可用的, 安装完成之后改回来 然后重启 docker 容器

# 部署完之后是 NotReady, 部署完 flannel 即恢复正常.
```

![image-20230515051621442](https://img.onmicrosoft.cn/k8s/202305150516509.png)

## Etcd 集群状态查看

```bash
kubectl -n kube-system exec etcd-k8s-master01 -- etcdctl \
	--endpoints=https://192.168.92.10:2379 \
	--ca-file=/etc/kubernetes/pki/etcd/ca.crt \
	--cert-file=/etc/kubernetes/pki/etcd/server.crt \
	--key-file=/etc/kubernetes/pki/etcd/server.key cluster-health

kubectl get endpoints kube-controller-manager --namespace=kube-system -o yaml
kubectl get endpoints kube-scheduler --namespace=kube-system -o yaml

# 添加 node 节点很简单
# cat /usr/local/kubernetes/install/kubeadmin-init.log
# 文件的那个命令执行一下就 ok 了
```

## 部署网络

```bash
kubectl apply -f kube-flannel.yml
# 见单节点笔记 ✨
```

