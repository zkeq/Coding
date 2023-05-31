---
title: KubeEdge | [基础] KubeEdge架构设计及其环境搭建
tags:
  - Kubernetes
  - KubeEdge
categories:
  - KubeEdge
cover: https://img.onmicrosoft.cn/ke/202305180000661.png
date: 2023-05-20 01:19:42
description: 该文档介绍了如何检查和更新 Kubernetes 证书以及如何在云端和边缘端安装 KubeEdge。其中包括了证书有效期检查、证书续签、KubeEdge 云端环境安装、KubeEdge 边缘端环境安装等内容。
---

> KubeEdge 架构设计及其环境搭建(KubeEdge基础篇)

## KubeEdge架构设计

### 类比

![image-20230520024212337](https://img.onmicrosoft.cn/ke/202305200242406.png)

### 架构设计图

![image-20230520024242678](https://img.onmicrosoft.cn/ke/202305200242696.png)

### 云边通信方式

- 云: `Cloud Hub`(公网)
- 边: `Edge Hub`(局域网)
- 通信方式: `Websocket` ( 双向通信 )
- 通信数据: `配置数据` + `业务数据`

![image-20230520024508796](https://img.onmicrosoft.cn/ke/202305200245816.png)

### 云端架构设计

- `EdgeController`

![image-20230520024634596](https://img.onmicrosoft.cn/ke/202305200246627.png)

- `DeviceController`

![image-20230520025036276](https://img.onmicrosoft.cn/ke/202305200250302.png)

### 边缘端架构设计

#### Edged

![image-20230520025317566](https://img.onmicrosoft.cn/ke/202305200253592.png)

Pod 管理
- `Pod Management`
- `Container Management`

Pod 监控
- `Probe Management`
- `Pod Status Management`
- `Pod Lifecycle Event Generator`

Edge 卷管理
- `Volume Management`
- `Secret Management`
- `ConfigMap Management`

Pod 垃圾回收
- `Container Garbage Collection`
- `Image Garbage Collection`

元数据管理
- `MetaClient`

#### MetaManager

![image-20230520025706926](https://img.onmicrosoft.cn/ke/202305200257953.png)

- 数据库缓存, 用于存储边缘端的元数据信息
- 通过 `MetaClient` 与 `Edged` 通信
- 通过 `EdgeHub` 与 `EdgeController` 通信
- 用的是 `sqlite3` 数据库(轻量级)
- 解决的是 `EdgeController` 与 `Edged` 通信的问题(网络不稳定, 通信不可靠)
- 这个解决的是 `Pod` 的运行问题

#### DeviceTwin

![image-20230520030113342](https://img.onmicrosoft.cn/ke/202305200301380.png)

- 用于存储边缘端的设备信息
- 通过 `EdgeHub` 与 `EdgeController` 通信
- 用的是 `sqlite3` 数据库(轻量级)
- 实现原理和 `MetaManager` 一样
- 上面两个数据库都是 `sqlite3` 数据库, 为什么不合并呢?
  - `MetaManager` 用于存储边缘端的元数据信息
  - `DeviceTwin` 用于存储边缘端的设备信息
  - 两者的数据结构不一样, 不能合并
- 这个解决的是 `边缘端介入设备` 的运行问题

#### EventBus/SeriveBus

![image-20230520030544319](https://img.onmicrosoft.cn/ke/202305200305361.png)

- 用于存储边缘端的事件信息
- 起到一个消息队列的作用
- 通过 `EdgeHub` 与 `EdgeController` 通信
- 因为有实时性的需求, 所以就不需要用缓存了

## K8S VS KubeEdge

### Kubernetes 架构设计

![image-20230520030844032](https://img.onmicrosoft.cn/ke/202305200308081.png)

- 1. 用户创建 `Pod` , `Deployment` , `Service` 等资源
- 2. `kube-apiserver` 接收到用户的请求, 将资源信息存储到 `etcd` 中
- 3. `kube-controller-manager` 通过 `kube-apiserver` 从 `etcd` 中获取资源信息, 并将资源信息同步到 `kubelet` 中
- 4. `Scheduler` 根据节点的运行情况, 将 `Pod` 分配到某个节点
- 5. `kubelet` 通过 `kube-apiserver` 从 `etcd` 中获取资源信息, 并将资源信息同步到 `kube-proxy` 中, 通过 `CRI` 创建 `Pod`

### 从 Kubernetes 向 KubeEdge 演进

#### 30%的人观点

![image-20230520031438327](https://img.onmicrosoft.cn/ke/202305200314354.png)

#### 70%的人观点

![image-20230520031502135](https://img.onmicrosoft.cn/ke/202305200315165.png)

`KubeEdge` 植入 `Kubernetes`

![image-20230520031524520](https://img.onmicrosoft.cn/ke/202305200315537.png)

- `KubeEdge` 实现了 `Kubernetes` 的功能并向边缘端下沉.

## Kubernetes环境搭建(进阶)

### K8S 版本升级 (KubeEdge 控制面环境安装)

```bash
[root@kubeedge-k8s ~]# kubeadm upgrade plan
[upgrade/config] Making sure the configuration is correct:
[upgrade/config] Reading configuration from the cluster...
[upgrade/config] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
[upgrade/config] FATAL: this version of kubeadm only supports deploying clusters with the control plane version >= 1.20.0. Current version: v1.19.4
To see the stack trace of this error execute with --v=5 or higher
[root@kubeedge-k8s ~]# kubeadm version
kubeadm version: &version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.6", GitCommit:"d921bc6d1810da51177fbd0ed61dc811c5228097", GitTreeState:"clean", BuildDate:"2021-10-27T17:49:18Z", GoVersion:"go1.16.9", Compiler:"gc", Platform:"linux/amd64"}

# 升级提示这个
# 所以不升级了 选择重装()
```

Master 节点
- 实验机器上面默认没有防火墙 所以将其注释了 如果需要手动取消注释即可

```bash
#!/bin/bash
# Kubernetes部署环境要求：
#（1）一台或多台机器，操作系统CentOS 7.x-86_x64
#（2）硬件配置：内存2GB或2G+，CPU 2核或CPU 2核+；
#（3）集群内各个机器之间能相互通信；
#（4）集群内各个机器可以访问外网，需要拉取镜像；
#（5）禁止swap分区；

# 安装步骤
#1. 安装docker
#1.1 如果没有安装docker，则安装docker。会附带安装一个docker-compose
#
#2. 安装k8s
#2.1 初始化环境
#2.2 添加安装源
#2.3 安装kubelet、kubectl、kubeadmin
#2.4 安装master
#2.5 安装网络插件

set -e

# 安装日志
install_log=/var/log/install_k8s.log
tm=$(date +'%Y%m%d %T')

# 日志颜色
COLOR_G="\x1b[0;32m"  # green
RESET="\x1b[0m"

function info(){
    echo -e "${COLOR_G}[$tm] [Info] ${1}${RESET}"
}

function run_cmd(){
  sh -c "$1 | $(tee -a "$install_log")"
}

function run_function(){
  $1 | tee -a "$install_log"
}

function install_docker(){
  info "1.使用脚本自动安装docker..."
  curl -sSL https://get.docker.com | sh

  info "2.启动 Docker CE..."
  sudo systemctl enable docker
  sudo systemctl start docker

  info "3.添加镜像加速器..."
  if [ ! -f "/etc/docker/daemon.json" ];then
    touch /etc/docker/daemon.json
  fi
  cat <<EOF > /etc/docker/daemon.json
{
  "registry-mirrors": [
    "https://5ajk0rns.mirror.aliyuncs.com"
    ]
}
EOF

  info "4.重新启动服务..."
  sudo systemctl daemon-reload
  sudo systemctl restart docker

  info "5.测试 Docker 是否安装正确..."
  docker run hello-world

  info "6.检测..."
  docker info

  read -p "是否安装docker-compose？默认为 no. Enter [yes/no]：" is_compose
  if [[ "$is_compose" == 'yes' ]];then
    info "7.安装docker-compose"
    sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod a+x /usr/local/bin/docker-compose

    # 8.验证是否安装成功
    info "8.验证docker-compose是否安装成功..."
    docker-compose -v
  fi
}

function install_k8s() {
    info "初始化k8s部署环境..."
    init_env

    info "添加k8s安装源..."
    add_aliyun_repo

    info "安装kubelet kubeadmin kubectl..."
    install_kubelet_kubeadmin_kubectl

    info "安装kubernetes master..."
    yum -y install net-tools
    if [[ ! "$(ps aux | grep 'kubernetes' | grep -v 'grep')" ]];then
      kubeadmin_init
    else
      info "kubernetes master已经安装..."
    fi

    info "安装网络插件flannel..."
    install_flannel

    info "去污点..."
    kubectl taint nodes --all node-role.kubernetes.io/master-
}

# 初始化部署环境
function init_env() {
  info "关闭防火墙"
  # systemctl stop firewalld
  # systemctl disable firewalld

  info "关闭selinux"
  sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/g' /etc/selinux/config
  source /etc/selinux/config

  info "关闭swap（k8s禁止虚拟内存以提高性能）"
  swapoff -a
  sed -i '/swap/s/^\(.*\)$/#\1/g' /etc/fstab

  info "设置网桥参数"
  cat <<-EOF > /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
  sysctl --system  #生效
  sysctl -w net.ipv4.ip_forward=1

  info "时间同步"
  yum install ntpdate -y
  ntpdate time.windows.com
}

# 添加aliyun安装源
function add_aliyun_repo() {
  cat > /etc/yum.repos.d/kubernetes.repo <<- EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
}

function install_kubelet_kubeadmin_kubectl() {
  
  yum install kubelet-1.21.6 kubeadm-1.21.6 kubectl-1.21.6 -y

  systemctl enable kubelet.service

  info "确认kubelet kubeadmin kubectl是否安装成功"
  yum list installed | grep kubelet
  yum list installed | grep kubeadm
  yum list installed | grep kubectl
  kubelet --version
}

function kubeadmin_init() {
  sleep 1
  read -p "请输入master ip地址：" ip
  kubeadm init --apiserver-advertise-address="${ip}" --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.21.6 --service-cidr=10.96.0.0/12 --pod-network-cidr=10.244.0.0/16
  mkdir -p "$HOME"/.kube
  sudo cp -i /etc/kubernetes/admin.conf "$HOME"/.kube/config
  sudo chown "$(id -u)":"$(id -g)" "$HOME"/.kube/config
}

function install_flannel() {
  yum -y install wget
  wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
  kubectl apply -f kube-flannel.yml
}

# 安装docker
read -p "是否安装docker？默认为：no. Enter [yes/no]：" is_docker
if [[ "$is_docker" == 'yes' ]];then
  run_function "install_docker"
fi

# 安装k8s
read -p "是否安装k8s？默认为：no. Enter [yes/no]：" is_k8s
if [[ "$is_k8s" == 'yes' ]];then
  run_function "install_k8s"
fi
```

Node 节点
- 加入集群的命令在 `/var/log/install_k8s.log`

```bash
#!/bin/bash
# Kubernetes部署环境要求：
#（1）一台或多台机器，操作系统CentOS 7.x-86_x64
#（2）硬件配置：内存2GB或2G+，CPU 2核或CPU 2核+；
#（3）集群内各个机器之间能相互通信；
#（4）集群内各个机器可以访问外网，需要拉取镜像；
#（5）禁止swap分区；

# 安装步骤
#1. 安装docker
#1.1 如果没有安装docker，则安装docker。会附带安装一个docker-compose
#
#2. 安装k8s
#2.1 初始化环境
#2.2 添加安装源
#2.3 安装kubelet、kubectl、kubeadmin
#2.4 安装worker-node
#2.5 安装网络插件

set -e

# 安装日志
install_log=/var/log/install_k8s.log
tm=$(date +'%Y%m%d %T')

# 日志颜色
COLOR_G="\x1b[0;32m"  # green
RESET="\x1b[0m"

function info(){
    echo -e "${COLOR_G}[$tm] [Info] ${1}${RESET}"
}

function run_cmd(){
  sh -c "$1 | $(tee -a "$install_log")"
}

function run_function(){
  $1 | tee -a "$install_log"
}

function install_docker(){
  info "1.使用脚本安装docker..."
  yum install -y yum-utils device-mapper-persistent-data lvm2
  yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  #yum install -y docker-ce
  #yum install -y docker-ce-19.03.9-3.el7
  yum install -y docker-ce-20.10.17-3.el7

  info "2.启动 Docker CE..."
  sudo systemctl enable docker
  sudo systemctl start docker

  info "3.添加镜像加速器..."
  if [ ! -f "/etc/docker/daemon.json" ];then
    touch /etc/docker/daemon.json
  fi
  cat <<EOF > /etc/docker/daemon.json
{
  "registry-mirrors": ["https://4txtc8r4.mirror.aliyuncs.com"]
}
EOF

  info "4.重新启动服务..."
  # sudo gpasswd -a ${USER} docker && newgrp - docker # 将当前用户加入到docker组(获取执行docker的权限)
  sudo systemctl daemon-reload
  sudo systemctl restart docker

  info "5.测试 Docker 是否安装正确..."
  docker -v

  info "6.检测..."
  docker info

  read -p "是否安装docker-compose？默认为 no. Enter [yes/no]：" is_compose
  if [[ "$is_compose" == 'yes' ]];then
    info "7.安装docker-compose"
    sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod a+x /usr/local/bin/docker-compose
    if [ -f "/usr/bin/docker-compose" ];then
      sudo rm -f /usr/bin/docker-compose
    fi
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose # 创建快捷方式

    # 8.验证是否安装成功
    info "8.验证docker-compose是否安装成功..."
    docker-compose -v
  fi
}

function install_k8s() {
    info "初始化k8s部署环境..."
    init_env

    info "添加k8s安装源..."
    add_aliyun_repo

    info "安装kubelet kubeadmin kubectl..."
    install_kubelet_kubeadmin_kubectl

    info "加入集群kubernetes..."
    yum install -y net-tools
    if [[ ! "$(ps aux | grep 'kubernetes' | grep -v 'grep')" ]];then
      kubeadmin_init
    else
      info "已加入集群kubernetes..."
    fi

    info "安装网络插件flannel..."
    install_flannel
}

# 初始化部署环境
function init_env() {
  info "关闭防火墙"
  #systemctl stop firewalld
  #systemctl disable firewalld

  info "关闭selinux"
  sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/g' /etc/selinux/config
  source /etc/selinux/config

  info "关闭swap（k8s禁止虚拟内存以提高性能）"
  swapoff -a
  sed -i '/swap/s/^\(.*\)$/#\1/g' /etc/fstab

  info "设置网桥参数"
  cat <<-EOF > /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
  sysctl --system  #生效
  sysctl -w net.ipv4.ip_forward=1

  info "时间同步"
  yum install -y ntpdate
  ntpdate time.windows.com
  
  info "关闭 SeLinux"
  setenforce 0
}

# 添加aliyun安装源
function add_aliyun_repo() {
  cat > /etc/yum.repos.d/kubernetes.repo <<- EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
}

function install_kubelet_kubeadmin_kubectl() {
  #yum install -y kubelet kubeadm kubectl
  yum install -y kubelet-1.21.6 kubeadm-1.21.6 kubectl-1.21.6
  #yum install -y kubelet-1.20.2 kubeadm-1.20.2 kubectl-1.20.2
  systemctl enable kubelet.service

  info "确认kubelet kubeadmin kubectl是否安装成功"
  yum list installed | grep kubelet
  yum list installed | grep kubeadm
  yum list installed | grep kubectl
  kubelet --version
}

function kubeadmin_init() {
  sleep 1
  read -p "请输入master ip地址：" ip
  mkdir -p "$HOME"/.kube
  sudo scp -r root@"${ip}":/etc/kubernetes/admin.conf "$HOME"/.kube/config
  sudo chown "$(id -u)":"$(id -g)" "$HOME"/.kube/config
  if [ ! -f "/home/centos/.kube/config" ];then
    sudo cp -r "$HOME"/.kube /home/centos
    sudo chown -R centos:centos /home/centos/.kube
  fi
  read -p "把工作节点加入集群，请手动输入命令：" ic
  sudo sh -c "${ic}"
}

function install_flannel() {
  if [ ! -f "./kube-flannel.yml" ];then
    yum -y install wget
    wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
  fi
  kubectl apply -f kube-flannel.yml
}

# 安装docker
read -p "是否安装docker？默认为：no. Enter [yes/no]：" is_docker
if [[ "$is_docker" == 'yes' ]];then
  run_function "install_docker"
fi

# 安装k8s
read -p "是否安装k8s？默认为：no. Enter [yes/no]：" is_k8s
if [[ "$is_k8s" == 'yes' ]];then
  run_function "install_k8s"
fi
```

```bash
[root@kubeedge-k8s-node ~]# kubectl get pod -A
NAMESPACE      NAME                                             READY   STATUS    RESTARTS   AGE
kube-flannel   kube-flannel-ds-bjmkc                            1/1     Running   0          2m14s
kube-flannel   kube-flannel-ds-fbz7g                            1/1     Running   0          33m
kube-system    coredns-6d56c8448f-w5rn5                         1/1     Running   0          33m
kube-system    coredns-6d56c8448f-zztpn                         1/1     Running   0          33m
kube-system    etcd-kubeedge-k8s.novalocal                      1/1     Running   0          33m
kube-system    kube-apiserver-kubeedge-k8s.novalocal            1/1     Running   0          33m
kube-system    kube-controller-manager-kubeedge-k8s.novalocal   1/1     Running   0          33m
kube-system    kube-proxy-4qsnm                                 1/1     Running   0          2m14s
kube-system    kube-proxy-hsh8j                                 1/1     Running   0          33m
kube-system    kube-scheduler-kubeedge-k8s.novalocal            1/1     Running   0          33m
[root@kubeedge-k8s-node ~]# kubectl get nodes
NAME                          STATUS   ROLES    AGE     VERSION
kubeedge-k8s-node.novalocal   Ready    <none>   2m17s   v1.19.4
kubeedge-k8s.novalocal        Ready    master   33m     v1.19.4
```

### 修改过期时间

查看证书过期时间

```bash
$ kubeadm certs check-expiration | awk 'FS=" [ ]+" {print $1,$3}'
[check-expiration] configuration
[check-expiration] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml' 
 
CERTIFICATE RESIDUAL TIME
admin.conf 364d
apiserver 364d
apiserver-etcd-client 364d
apiserver-kubelet-client 364d
controller-manager.conf 364d
etcd-healthcheck-client 364d
etcd-peer 364d
etcd-server 364d
front-proxy-client 364d
scheduler.conf 364d
 
CERTIFICATE AUTHORITY RESIDUAL TIME
ca 9y
etcd-ca 9y
front-proxy-ca 9y
```

- https://github.com/kubernetes/kubernetes
- https://github.com/kubernetes/kubernetes/releases/tag/v1.21.6

```bash
$ wget https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.21.6.tar.gz
$ tar -zxvf v1.21.6.tar.gz
$ du -sh kubernetes-1.21.6
264M    kubernetes-1.21.6
$ cd kubernetes-1.21.6/cmd/kubeadm/app/constants/
$ vim constants.go

 48         // CertificateValidity defines the validity for all the signed certificates generated by kubeadm
 49         CertificateValidity = time.Hour * 24 * 365

```

```bash
# kubeadm 是 go 语言编写的 所以要有 go 环境才能编译
$ wget https://dl.google.com/go/go1.17.3.linux-amd64.tar.gz
$ tar -zxvf go1.17.3.linux-amd64.tar.gz -C /usr/local

$ vi /etc/profile
  export PATH=$PATH:/usr/local/go/bin
$ source /etc/profile

$ go version
go version go1.17.3 linux/amd64
```

```bash
# 编译
[root@master opt]# cd kubernetes-1.21.6/
[root@master kubernetes-1.21.6]# pwd
/opt/kubernetes-1.21.6
[root@master kubernetes-1.21.6]# export GOPATH=/opt/kubernetes-1.21.6 
[root@master kubernetes-1.21.6]# echo $GOPATH
/opt/kubernetes-1.21.6

[root@master kubernetes-1.21.6]# make WHAT=cmd/kubeadm GOFLAGS=-v
# 报错 
/usr/local/go/src/runtime/internal/atomic/atomic_amd64x.go:51:6: too many errors
!!! [0531 13:12:42] Call tree:
!!! [0531 13:12:42]  1: /opt/kubernetes-1.21.6/hack/lib/golang.sh:726 kube::golang::build_some_binaries(...)
!!! [0531 13:12:42]  2: /opt/kubernetes-1.21.6/hack/lib/golang.sh:870 kube::golang::build_binaries_for_platform(...)
!!! [0531 13:12:42]  3: hack/make-rules/build.sh:27 kube::golang::build_binaries(...)
!!! [0531 13:12:42] Call tree:
!!! [0531 13:12:42]  1: hack/make-rules/build.sh:27 kube::golang::build_binaries(...)
!!! [0531 13:12:42] Call tree:
!!! [0531 13:12:42]  1: hack/make-rules/build.sh:27 kube::golang::build_binaries(...)
make[1]: *** [/_output/bin/prerelease-lifecycle-gen] Error 1
make: *** [generated_files] Error 2

解决办法 (在 docker 容器中进行构建):
https://github.com/kubernetes/kubernetes/issues/62577#issuecomment-840981756
$ docker run -itd --name golang golang
$ docker cp kubernetes-1.21.6/ golang:/opt/
$ docker exec -it golang bash
$ apt update && apt-get install rsync
$ cd /opt/kubernetes-1.21.6 && make WHAT=cmd/kubeadm GOFLAGS=-v
...
k8s.io/kubernetes/cmd/kubeadm/app/cmd
k8s.io/kubernetes/cmd/kubeadm/app
k8s.io/kubernetes/cmd/kubeadm


$ docker cp golang:/opt/kubernetes-1.21.6/_output/bin/kubeadm .
Successfully copied 43MB to /opt/.

# 续签
$ ./kubeadm certs renew all

# 再次检查
[root@master opt]#  kubeadm certs check-expiration | awk 'FS=" [ ]+" {print $1,$3}'
[check-expiration] configuration
[check-expiration] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml' 
 
CERTIFICATE RESIDUAL TIME
admin.conf 9y
apiserver 9y
apiserver-etcd-client 9y
apiserver-kubelet-client 9y
controller-manager.conf 9y
etcd-healthcheck-client 9y
etcd-peer 9y
etcd-server 9y
front-proxy-client 9y
scheduler.conf 9y
 
CERTIFICATE AUTHORITY RESIDUAL TIME
ca 9y
etcd-ca 9y
front-proxy-ca 9y
```

## KubeEdge 云端环境安装

```bash
$ wget https://github.com/kubeedge/kubeedge/releases/download/v1.13.0/checksum_kubeedge-v1.13.0-linux-amd64.tar.gz.txt
$ wget https://github.com/kubeedge/kubeedge/releases/download/v1.13.0/keadm-v1.13.0-linux-amd64.tar.gz
$ wget https://github.com/kubeedge/kubeedge/releases/download/v1.13.0/kubeedge-v1.13.0-linux-amd64.tar.gz
$ wget https://github.com/kubeedge/kubeedge/archive/refs/tags/v1.13.0.tar.gz

# keadmin
$ tar -zxvf keadm-v1.13.0-linux-amd64.tar.gz 
$ cp keadm-v1.13.0-linux-amd64/keadm/keadm /usr/local/bin
$ keadm version
version: version.Info{Major:"1", Minor:"13", GitVersion:"v1.13.0", GitCommit:"ee357a0d5341241143e88d45df99fde865c987de", GitTreeState:"clean", BuildDate:"2023-01-18T11:15:25Z", GoVersion:"go1.17.13", Compiler:"gc", Platform:"linux/amd64"}

$ keadm init --advertise-address=172.129.78.153 --profile version=v1.12.0 --kube-config=/root/.kube/config
# 没有国外网络环境会报错 但是我这里有 没有报错
[root@master ~]# keadm init --advertise-address=172.129.78.153 --profile version=v1.12.0
Kubernetes version verification passed, KubeEdge installation will start...
CLOUDCORE started
=========CHART DETAILS=======
NAME: cloudcore
LAST DEPLOYED: Wed May 31 13:47:26 2023
NAMESPACE: kubeedge
STATUS: deployed
REVISION: 2

[root@master ~]# ps aux | grep "cloudcore"
root     28384  0.0  0.0 112812   976 pts/0    S+   13:49   0:00 grep --color=auto cloudcore
```

## KubeEdge 边缘端环境安装

```bash
$ scp root@master:/usr/local/bin/keadm /usr/bin/
$ scp -r root@master:/opt/ke_install /opt
# 在 edge 安装 docker: 运行 上文所述的安装脚本第一部分 即可

# 查看
[root@master ke_install]# kubectl get pod -n kubeedge -o wide
NAME                        READY   STATUS    RESTARTS   AGE   IP               NODE   NOMINATED NODE   READINESS GATES
cloudcore-f88bbf5bb-vkf7q   1/1     Running   0          46m   172.129.78.119   node   <none>           <none>

# 于是是在 node 节点上
[root@node ~]# netstat -nplt
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name         
tcp6       0      0 :::10000                :::*                    LISTEN      22336/cloudcore     
tcp6       0      0 :::10256                :::*                    LISTEN      9538/kube-proxy     
tcp6       0      0 :::10002                :::*                    LISTEN      22336/cloudcore     
tcp6       0      0 :::10003                :::*                    LISTEN      22336/cloudcore     
tcp6       0      0 :::10004                :::*                    LISTEN      22336/cloudcore     

$ keadm join --runtimetype=docker --cloudcore-ipport=172.129.78.153:10000 --edgenode-name=edge --kubeedge-version=v1.12.0 --token=72de9c27eef0a841f91e68257f0156ec57d42bd46623fc90dc036c00842c59d5.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODU2MjcyNTl9.7sQIHoyImBmnGqQo3MW53J6stGBA9GZ-PMnRQkeDbQ8

# 在此过程前请将 cloudcore 调度至 master 节点 不然会有证书错误

[root@master ~]# kubectl get all -n kubeedge -o wide
NAME                             READY   STATUS    RESTARTS   AGE     IP               NODE     NOMINATED NODE   READINESS GATES
pod/cloudcore-786689f8cb-7kk8v   1/1     Running   0          2m31s   172.129.78.153   master   <none>           <none>

NAME                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                                             AGE   SELECTOR
service/cloudcore   ClusterIP   10.103.46.46   <none>        10000/TCP,10001/TCP,10002/TCP,10003/TCP,10004/TCP   72m   k8s-app=kubeedge,kubeedge=cloudcore

NAME                        READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS   IMAGES                       SELECTOR
deployment.apps/cloudcore   1/1     1            1           72m   cloudcore    kubeedge/cloudcore:v1.12.0   k8s-app=kubeedge,kubeedge=cloudcore

NAME                                   DESIRED   CURRENT   READY   AGE     CONTAINERS   IMAGES                       SELECTOR
replicaset.apps/cloudcore-786689f8cb   1         1         1       2m31s   cloudcore    kubeedge/cloudcore:v1.12.0   k8s-app=kubeedge,kubeedge=cloudcore,pod-template-hash=786689f8cb
replicaset.apps/cloudcore-f88bbf5bb    0         0         0       72m     cloudcore    kubeedge/cloudcore:v1.12.0   k8s-app=kubeedge,kubeedge=cloudcore,pod-template-hash=f88bbf5bb

[root@master ke_install]# kubectl get nodes
NAME      STATUS   ROLES                  AGE     VERSION
edge      Ready    agent,edge             67s     v1.22.6-kubeedge-v1.12.0
master    Ready    control-plane,master   7h13m   v1.21.6
node      Ready    <none>                 6h46m   v1.19.4
node-v3   Ready    <none>                 6h      v1.21.6
node2     Ready    <none>                 6h12m   v1.21.6

[root@edge log]# systemctl status edgecore -l
● edgecore.service
   Loaded: loaded (/etc/systemd/system/edgecore.service; enabled; vendor preset: disabled)
   Active: active (running) since Wed 2023-05-31 15:03:05 UTC; 17s ago
 Main PID: 25393 (edgecore)
    Tasks: 16
   Memory: 33.3M
   CGroup: /system.slice/edgecore.service
           └─25393 /usr/local/bin/edgecore

#修改edgecore配置文件,使edgecore可以访问云端,并且启用edgeStream,这样就可以在云端看到当前节点的状态
$ sed -i '/^  edgeStream:/,/^[^ ]/ s/enable: false/enable: true/' /etc/kubeedge/config/edgecore.yaml 

#重启edgecore
$ systemctl restart edgecore

// 参考文档
- https://github.com/1692565761/kubeedge-script/blob/master/edge.sh
```

- 若无法正常加载, 请点击查看 PDF 网页版本: [如何阅读KubeEdge框架源代码？框架源代码.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/ke/%E3%80%90%E6%8B%93%E5%B1%95%E3%80%91%E5%A6%82%E4%BD%95%E9%98%85%E8%AF%BBKubeEdge%E6%A1%86%E6%9E%B6%E6%BA%90%E4%BB%A3%E7%A0%81%EF%BC%9F.pdf)

<embed src="https://media.onmicrosoft.cn/ke/%E3%80%90%E6%8B%93%E5%B1%95%E3%80%91%E5%A6%82%E4%BD%95%E9%98%85%E8%AF%BBKubeEdge%E6%A1%86%E6%9E%B6%E6%BA%90%E4%BB%A3%E7%A0%81%EF%BC%9F.pdf" type="application/pdf" width="100%" height="500" />