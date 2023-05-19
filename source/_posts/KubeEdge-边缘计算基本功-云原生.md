---
title: KubeEdge | 边缘计算基本功--云原生
tags:
  - Kubernetes
  - KubeEdge
categories:
  - KubeEdge
cover: https://img.onmicrosoft.cn/ke/202305180000661.png
date: 2023-05-18 23:15:44
description: 本文介绍了边缘计算基本功-云原生，包括KubeEdge、声明式API、不可变基础设施、微服务和服务网格。同时，还介绍了Bookinfo应用程序、istio的路由规则和istio的可视化工具Dashboard。
---

```
本套课程: 云原生+边缘计算+KubeEdge，打造智能边缘管理平台.
链接：https://pan.baidu.com/s/133xD_Athr5dXYYNaUtBMRw
提取码：zkeq 
```

## 云原生概述

- https://www.cncf.io/about/who-we-are/

![image-20230518232331173](https://img.onmicrosoft.cn/ke/202305182324821.png)

> We bring together the world’s top developers, end users, and vendors and run the largest open source developer conferences. CNCF is part of the nonprofit [Linux Foundation](https://linuxfoundation.org/).
> 我们汇集了世界顶级开发人员、最终用户和供应商，并举办最大的开源开发人员会议。CNCF是非营利性Linux基金会的一部分。

### Cloud Native Definition 云原生定义

Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. `Containers`, `service meshes`, `microservices`, `immutable infrastructure`, and `declarative APIs` exemplify this approach.
云原生技术使组织能够在现代动态环境（如公有云、私有云和混合云）中构建和运行可扩展的应用程序。容器、服务网格、微服务、不可变基础结构和声明性 API 就是这种方法的例证。

These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.
这些技术支持松散耦合的系统，这些系统具有弹性、可管理和可观察性。结合强大的自动化功能，它们使工程师能够以最少的工作量频繁且可预测地进行高影响力的更改。

The Cloud Native Computing Foundation seeks to drive adoption of this paradigm by fostering and sustaining an ecosystem of open source, vendor-neutral projects. We democratize state-of-the-art patterns to make these innovations accessible for everyone.
云原生计算基金会旨在通过培育和维持开源、供应商中立项目的生态系统来推动这种范式的采用。我们将最先进的模式民主化，使每个人都能获得这些创新。

### 生态

- https://landscape.cncf.io

![image-20230518232851127](https://img.onmicrosoft.cn/ke/202305182328154.png)

## 容器

### 容器调用链路

![image-20230518233056197](https://img.onmicrosoft.cn/ke/202305182330218.png)

### 主流容器技术之间的联系

![image-20230518233206953](https://img.onmicrosoft.cn/ke/202305182332003.png)

![image-20230518233231362](https://img.onmicrosoft.cn/ke/202305182332381.png)

为什么要移除 `Dockershim` 呢?

![image-20230518233243137](https://img.onmicrosoft.cn/ke/202305182332159.png)

## 不可变基础设施

![image-20230518233615666](https://img.onmicrosoft.cn/ke/202305182336694.png)

![image-20230518233810639](https://img.onmicrosoft.cn/ke/202305182338676.png)

## 声明式API

- 通过一行命令执行多个命令的集合

### 声明式API实战演练

单机部署: `docker-compose`

```bash
$ apt install docker-compose -y
$ docker-compose version
$ vim docker-compose.yaml

version: "2"
services:
	nginx-1:
    image: nginx:1.14
    ports:
      - "8081:80"
  nginx-2:
    image: nginx:1.15
    ports:
      - "8082:80"

$ docker-compose up
# $ docker-compose up -d

# 以上案例实现了一行命令完成了需要多行命令才能完成的事情
```

多机部署: `Kubernetes`

![image-20230518234845095](https://img.onmicrosoft.cn/ke/202305182348118.png)

- https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

安装步骤

```bash
# 删除swap分区
$ swapoff -a
$ vim /etc/fstab
# 注释掉 swap 行
$ free -g # 全部为 0

# 安装 docker 运行时
# https://docs.docker.com/engine/install/ubuntu/

# 安装 kubeadm - 无包管理器的情况
$ vim k8s_install.sh
```

- https://juejin.cn/post/7055180924681453582
- https://github.com/angenalZZZ/doc/blob/355d142c0e7ecea202999f855b404066e41214ff/k8s/README.md

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
  yum install kubelet-1.19.4 kubeadm-1.19.4 kubectl-1.19.4 -y
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
  kubeadm init --apiserver-advertise-address="${ip}" --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.19.4 --service-cidr=10.96.0.0/12 --pod-network-cidr=10.244.0.0/16
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

```bash
[root@kubeedge-k8s ~]# kubectl get pod -A
NAMESPACE      NAME                                             READY   STATUS    RESTARTS   AGE
kube-flannel   kube-flannel-ds-fbz7g                            1/1     Running   0          91s
kube-system    coredns-6d56c8448f-w5rn5                         0/1     Running   0          91s
kube-system    coredns-6d56c8448f-zztpn                         0/1     Running   0          91s
kube-system    etcd-kubeedge-k8s.novalocal                      1/1     Running   0          107s
kube-system    kube-apiserver-kubeedge-k8s.novalocal            1/1     Running   0          107s
kube-system    kube-controller-manager-kubeedge-k8s.novalocal   1/1     Running   0          107s
kube-system    kube-proxy-hsh8j                                 1/1     Running   0          91s
kube-system    kube-scheduler-kubeedge-k8s.novalocal            1/1     Running   0          107s
[root@kubeedge-k8s ~]# kubectl get nodes
NAME                     STATUS   ROLES    AGE    VERSION
kubeedge-k8s.novalocal   Ready    master   115s   v1.19.4
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
  "exec-opts": ["native.cgroupdriver=systemd"],
  "registry-mirrors": ["https://4txtc8r4.mirror.aliyuncs.com"]
}
EOF

  info "4.重新启动服务..."
  sudo gpasswd -a ${USER} docker && newgrp - docker # 将当前用户加入到docker组(获取执行docker的权限)
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
  yum install -y kubelet-1.19.4 kubeadm-1.19.4 kubectl-1.19.4
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

```bash
$ kubeadm version
$ kubectl version
$ systemctl status kubelet

[root@kubeedge-k8s ~]# kubeadm version
kubeadm version: &version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.4", GitCommit:"d360454c9bcd1634cf4cc52d1867af5491dc9c5f", GitTreeState:"clean", BuildDate:"2020-11-11T13:15:05Z", GoVersion:"go1.15.2", Compiler:"gc", Platform:"linux/amd64"}
[root@kubeedge-k8s ~]# kubectl version
Client Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.4", GitCommit:"d360454c9bcd1634cf4cc52d1867af5491dc9c5f", GitTreeState:"clean", BuildDate:"2020-11-11T13:17:17Z", GoVersion:"go1.15.2", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.4", GitCommit:"d360454c9bcd1634cf4cc52d1867af5491dc9c5f", GitTreeState:"clean", BuildDate:"2020-11-11T13:09:17Z", GoVersion:"go1.15.2", Compiler:"gc", Platform:"linux/amd64"}
[root@kubeedge-k8s ~]# systemctl status kubelet
● kubelet.service - kubelet: The Kubernetes Node Agent
   Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/kubelet.service.d
           └─10-kubeadm.conf
   Active: active (running) since Thu 2023-05-18 16:21:41 UTC; 2min 21s ago
     Docs: https://kubernetes.io/docs/
 Main PID: 10382 (kubelet)
    Tasks: 19
   Memory: 41.6M
   CGroup: /system.slice/kubelet.service
           └─10382 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kub...

May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: I0518 16:23:26.269861   10382 reconciler.go:224] operationExecut...
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: I0518 16:23:26.269883   10382 reconciler.go:224] operationExecut...
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: I0518 16:23:26.269917   10382 reconciler.go:224] operationExecut...
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: W0518 16:23:26.890194   10382 pod_container_deletor.go:79] C...ners
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: W0518 16:23:26.894436   10382 pod_container_deletor.go:79] C...ners
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: map[string]interface {}{"cniVersion":"0.3.1", "hairpinMode":true...
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: delegateAdd: netconf sent to delegate plugin:
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: {"cniVersion":"0.3.1","hairpinMode":true,"ipMasq":false,"ipa...ge"}
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: map[string]interface {}{"cniVersion":"0.3.1", "hairpinMode":true...
May 18 16:23:26 kubeedge-k8s.novalocal kubelet[10382]: delegateAdd: netconf sent to delegate plugin:
Hint: Some lines were ellipsized, use -l to show in full.
[root@kubeedge-k8s ~]# 
```

```bash
$ vim nginx-deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment-demo
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template: # Pod 模板
    metadata:
      labels:
        app: nginx
    spec:
      hostNetwork: true
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80

$ kubectl apply -f nginx-deployment.yaml
deployment.apps/nginx-deployment-demo created

$ kubectl get pod -o wide
NAME                                     READY   STATUS    RESTARTS   AGE     IP               NODE                          NOMINATED NODE   READINESS GATES
nginx-deployment-demo-6d47cff9fd-5kxkw   1/1     Running   0          4m34s   172.129.78.142   kubeedge-k8s.novalocal        <none>           <none>
nginx-deployment-demo-6d47cff9fd-87m6m   1/1     Running   0          4m34s   172.129.78.121   kubeedge-k8s-node.novalocal   <none>           <none>

$ curl 172.129.78.142
<h1>Welcome to nginx!</h1>

# 完成了在集群环境下的声明式API的演示
```

## 微服务

### Bookinfo 示例

- https://istio.io/docs/samples/bookinfo.html

![image-20230519012355931](https://img.onmicrosoft.cn/ke/202305190123981.png)

- https://github.com/istio/istio/blob/5465d533cb9752f61fda6fec910ab7a2dc72dcd2/samples/bookinfo/platform/kube/bookinfo.yaml

```bash
$ kubectl apply -f https://raw.githubusercontent.com/istio/istio/master/samples/bookinfo/platform/kube/bookinfo.yaml

[root@kubeedge-k8s ~]# kubectl get pod -A
NAMESPACE      NAME                                             READY   STATUS    RESTARTS   AGE
default        details-v1-5bb7b59846-gxrfw                      1/1     Running   0          17m
default        nginx-deployment-demo-6d47cff9fd-5kxkw           1/1     Running   0          29m
default        nginx-deployment-demo-6d47cff9fd-87m6m           1/1     Running   0          29m
default        productpage-v1-7bc9dc4cd5-wfkt5                  1/1     Running   0          17m
default        ratings-v1-87465dfb6-2pj4l                       1/1     Running   0          14m
default        reviews-v1-5d54969f54-d44pr                      1/1     Running   0          17m
default        reviews-v2-7d8796f748-7d2tw                      1/1     Running   0          17m
default        reviews-v3-6c7d5d5d74-jd46q                      1/1     Running   0          14m
kube-flannel   kube-flannel-ds-bjmkc                            1/1     Running   0          52m
kube-flannel   kube-flannel-ds-fbz7g                            1/1     Running   0          83m
kube-system    coredns-6d56c8448f-w5rn5                         1/1     Running   0          83m
kube-system    coredns-6d56c8448f-zztpn                         1/1     Running   0          83m
kube-system    etcd-kubeedge-k8s.novalocal                      1/1     Running   0          84m
kube-system    kube-apiserver-kubeedge-k8s.novalocal            1/1     Running   0          84m
kube-system    kube-controller-manager-kubeedge-k8s.novalocal   1/1     Running   0          84m
kube-system    kube-proxy-4qsnm                                 1/1     Running   0          52m
kube-system    kube-proxy-hsh8j                                 1/1     Running   0          83m
kube-system    kube-scheduler-kubeedge-k8s.novalocal            1/1     Running   0          84m
```

检测服务是否可以 Ping 通

- https://blog.csdn.net/Urms_handsomeyu/article/details/106294085

```bash
$ kubectl edit cm kube-proxy -n kube-system
// 修改为 ipvs
mode: ipvs

# 重启kube-proxy
$ kubectl delete pod -n kube-system $(kubectl get pod -n kube-system | grep kube-proxy | awk '{print $1}')
# 或者
# $ kubectl get pod -n kube-system | grep kube-proxy |awk '{system("kubectl delete pod "$1" -n kube-system")}'

```

```bash
$ vim busybox.yaml

apiVersion: v1
kind: Pod
metadata:
  name: busybox
  labels:
    app: busybox
spec:
  containers:
  - name: busybox
    image: busybox:1.34
    tty: true
    imagePullPolicy: IfNotPresent

$ kubectl apply -f busybox.yaml
pod/busybox created

# 查看能否 ping 通其他服务
$ kubectl exec -it busybox -- ping -c 3 productpage.default.svc.cluster.local
PING productpage.default.svc.cluster.local (10.106.13.142): 56 data bytes
64 bytes from 10.106.13.142: seq=0 ttl=64 time=0.111 ms
64 bytes from 10.106.13.142: seq=1 ttl=64 time=0.064 ms
64 bytes from 10.106.13.142: seq=2 ttl=64 time=0.102 ms // 三次都能 ping 通
--- productpage.default.svc.cluster.local ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss
round-trip min/avg/max = 0.064/0.092/0.111 ms

$ kubectl exec -it busybox -- /bin/sh
/ # nslookup ratings
Server:         10.96.0.10
Address:        10.96.0.10:53 // #10.96.0.10 是 Kubernetes 集群内部 Service DNS 的默认 IP 地址。
Name:   ratings.default.svc.cluster.local
Address: 10.109.191.105 // #通过 DNS 解析到了 ratings 服务的 IP 地址

$ kubectl get svc -o wide -A
NAMESPACE     NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE   SELECTOR
default       details       ClusterIP   10.110.197.146   <none>        9080/TCP                 13h   app=details
default       kubernetes    ClusterIP   10.96.0.1        <none>        443/TCP                  14h   <none>
default       nginx-demo    ClusterIP   10.104.166.177   <none>        80/TCP                   12h   app=nginx
default       productpage   ClusterIP   10.106.13.142    <none>        9080/TCP                 13h   app=productpage
default       ratings       ClusterIP   10.109.191.105   <none>        9080/TCP                 13h   app=ratings
default       reviews       ClusterIP   10.105.125.246   <none>        9080/TCP                 13h   app=reviews
kube-system   kube-dns      ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   14h   k8s-app=kube-dns

$ kubectl get svc/kube-dns -n kube-system
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   15h

$ kubectl get svc kube-dns -n kube-system -o jsonpath='{.spec.clusterIP}'
10.96.0.10
```

```bash
[root@kubeedge-k8s-node ~]# kubectl describe svc productpage
Name:              productpage
Namespace:         default
Labels:            app=productpage
                   service=productpage
Annotations:       <none>
Selector:          app=productpage
Type:              ClusterIP
IP:                10.106.13.142
Port:              http  9080/TCP
TargetPort:        9080/TCP
Endpoints:         10.244.0.7:9080
Session Affinity:  None
Events:            <none>

[root@kubeedge-k8s-node ~]# kubectl get pod -o wide
NAME                                     READY   STATUS    RESTARTS   AGE   IP               NODE                          NOMINATED NODE   READINESS GATES
busybox                                  1/1     Running   0          13h   10.244.0.8       kubeedge-k8s.novalocal        <none>           <none>
details-v1-5bb7b59846-jwdzg              1/1     Running   0          13h   10.244.1.13      kubeedge-k8s-node.novalocal   <none>           <none>
nginx-deployment-demo-6d47cff9fd-5kxkw   1/1     Running   0          14h   172.129.78.142   kubeedge-k8s.novalocal        <none>           <none>
nginx-deployment-demo-6d47cff9fd-87m6m   1/1     Running   0          14h   172.129.78.121   kubeedge-k8s-node.novalocal   <none>           <none>
productpage-v1-7bc9dc4cd5-kqj9b          1/1     Running   0          13h   10.244.0.7       kubeedge-k8s.novalocal        <none>           <none>
ratings-v1-87465dfb6-6trj8               1/1     Running   0          13h   10.244.1.14      kubeedge-k8s-node.novalocal   <none>           <none>
reviews-v1-5d54969f54-cbm48              1/1     Running   0          13h   10.244.1.15      kubeedge-k8s-node.novalocal   <none>           <none>
reviews-v2-7d8796f748-xln4d              1/1     Running   0          13h   10.244.1.17      kubeedge-k8s-node.novalocal   <none>           <none>
reviews-v3-6c7d5d5d74-pbp4s              1/1     Running   0          13h   10.244.1.16      kubeedge-k8s-node.novalocal   <none>           <none>
```

```bash
$ kubectl edit svc productpage
# 修改 spec.type 为 NodePort
service/productpage edited

$ kubectl get svc 
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
details       ClusterIP   10.110.197.146   <none>        9080/TCP         14h
kubernetes    ClusterIP   10.96.0.1        <none>        443/TCP          15h
nginx-demo    ClusterIP   10.104.166.177   <none>        80/TCP           13h
productpage   NodePort    10.106.13.142    <none>        9080:31274/TCP   14h
ratings       ClusterIP   10.109.191.105   <none>        9080/TCP         14h
reviews       ClusterIP   10.105.125.246   <none>        9080/TCP         14h

# 任意节点访问 31274 端口
```

![image-20230519160009514](https://img.onmicrosoft.cn/ke/202305191600600.png)

![image-20230519160120415](https://img.onmicrosoft.cn/ke/202305191601447.png)

- 和一般的 SpringCloud 微服务架构图

![image-20230519160303986](https://img.onmicrosoft.cn/ke/202305191603035.png)

## 服务网格

![image-20230519160445539](https://img.onmicrosoft.cn/ke/202305191604593.png)

### 服务网格解决方案 Istio

![image-20230519160516731](https://img.onmicrosoft.cn/ke/202305191605773.png)

![image-20230519160600488](https://img.onmicrosoft.cn/ke/202305191606530.png)

- https://istio.io/latest/docs/setup/getting-started/

```bash
# 下载 istio
$ wget https://github.com/istio/istio/releases/download/1.11.3/istio-1.11.3-linux-amd64.tar.gz
$ tar -zxvf istio-1.11.3-linux-amd64.tar.gz
$ mv istio-1.11.3/bin/istioctl /usr/local/bin/

$ istioctl version
no running Istio pods in "istio-system"
1.11.3

# 安装 istio
$ istioctl install --set profile=demo -y

# 给 default 命名空间开启自动注入
$ kubectl label namespace default istio-injection=enabled

# # 查看 istio 安装情况
# $ kubectl get pods -n istio-system

# # 查看 istio 组件
# $ kubectl get svc -n istio-system

# 部署 bookinfo 应用
$ cd istio-1.11.3
$ kubectl apply -f samples/bookinfo/platform/kube/bookinfo.yaml

$ kubectl get pod
NAME                              READY   STATUS    RESTARTS   AGE
busybox                           1/1     Running   0          14h
details-v1-79f774bdb9-ksx4r       2/2     Running   0          2m11s
productpage-v1-6b746f74dc-6w7hc   2/2     Running   0          2m11s
ratings-v1-b6994bb9-wgsqc         2/2     Running   0          2m11s
reviews-v1-545db77b95-qkn7v       2/2     Running   0          2m10s
reviews-v2-7bf8c9648f-qnzxs       2/2     Running   0          2m11s
reviews-v3-84779c7bbc-nhxr9       2/2     Running   0          2m11s
$ kubectl get svc
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
details       ClusterIP   10.98.193.215    <none>        9080/TCP   2m14s
kubernetes    ClusterIP   10.96.0.1        <none>        443/TCP    16h
nginx-demo    ClusterIP   10.104.166.177   <none>        80/TCP     14h
productpage   ClusterIP   10.102.62.42     <none>        9080/TCP   2m14s
ratings       ClusterIP   10.106.200.58    <none>        9080/TCP   2m14s
reviews       ClusterIP   10.99.231.14     <none>        9080/TCP   2m14s

# 验证 bookinfo 应用
$ kubectl exec "$(kubectl get pod -l app=ratings -o jsonpath='{.items[0].metadata.name}')" -c ratings -- curl -sS productpage:9080/productpage | grep -o "<title>.*</title>"
<title>Simple Bookstore App</title>

# 部署网关
$ kubectl apply -f samples/bookinfo/networking/bookinfo-gateway.yaml

# 查看网关
$ kubectl get gateway
$ kubectl get virtualservices

# 验证网关
$ istioctl analyze
✔ No validation issues found when analyzing namespace: default.

# 访问网关
$ kubectl get svc istio-ingressgateway -n istio-system
NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)                                                                      AGE
istio-ingressgateway   LoadBalancer   10.96.54.181   <pending>     15021:30663/TCP,80:31409/TCP,443:32514/TCP,31400:31110/TCP,15443:31627/TCP   12m
# 改写为 NodePort
$ kubectl edit svc istio-ingressgateway -n istio-system
// 修改 type 为 NodePort
60   type: NodePort
service/istio-ingressgateway edited

$ kubectl get svc istio-ingressgateway -n istio-system

# 访问网关
# 访问 / 提示 404
# 访问 /productpage 会被转发到 productpage 服务
```

![image-20230519164307751](https://img.onmicrosoft.cn/ke/202305191643798.png)

```bash
# 安装 istio 的可视化工具 Dashboard
$ kubectl apply -f samples/addons
$ kubectl rollout status deployment/kiali -n istio-system
Waiting for deployment "kiali" rollout to finish: 0 of 1 updated replicas are available...
deployment "kiali" successfully rolled out

# 访问 Dashboard
$ kubectl edit svc kiali -n istio-system
// 修改 type 为 NodePort
service/kiali edited

$ kubectl get svc kiali -n istio-system
NAME    TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)                          AGE
kiali   NodePort   10.106.35.16   <none>        20001:30715/TCP,9090:32042/TCP   47m
```

![image-20230519173519935](https://img.onmicrosoft.cn/ke/202305191735015.png)

```bash
# 查看网络是如何配置的
$ kubectl get gateway
NAME               AGE
bookinfo-gateway   66m
$ kubectl get virtualservices.networking.istio.io 
NAME       GATEWAYS               HOSTS   AGE
bookinfo   ["bookinfo-gateway"]   ["*"]   66m

$ cd samples/bookinfo/networking/
$ ls -al
total 88
drwxr-xr-x. 2 root root 4096 Sep 21  2021 .
drwxr-xr-x. 6 root root  137 Sep 21  2021 ..
-rw-r--r--. 1 root root  708 Sep 21  2021 bookinfo-gateway.yaml
-rw-r--r--. 1 root root  622 Sep 21  2021 certmanager-gateway.yaml
-rw-r--r--. 1 root root 1176 Sep 21  2021 destination-rule-all-mtls.yaml
-rw-r--r--. 1 root root  972 Sep 21  2021 destination-rule-all.yaml
-rw-r--r--. 1 root root  307 Sep 21  2021 destination-rule-reviews.yaml
-rw-r--r--. 1 root root  885 Sep 21  2021 egress-rule-google-apis.yaml
-rw-r--r--. 1 root root  522 Sep 21  2021 fault-injection-details-v1.yaml
-rw-r--r--. 1 root root  804 Sep 21  2021 virtual-service-all-v1.yaml
-rw-r--r--. 1 root root  194 Sep 21  2021 virtual-service-details-v2.yaml
-rw-r--r--. 1 root root  396 Sep 21  2021 virtual-service-ratings-db.yaml
-rw-r--r--. 1 root root  405 Sep 21  2021 virtual-service-ratings-mysql-vm.yaml
-rw-r--r--. 1 root root  402 Sep 21  2021 virtual-service-ratings-mysql.yaml
-rw-r--r--. 1 root root  423 Sep 21  2021 virtual-service-ratings-test-abort.yaml
-rw-r--r--. 1 root root  422 Sep 21  2021 virtual-service-ratings-test-delay.yaml
-rw-r--r--. 1 root root  290 Sep 21  2021 virtual-service-reviews-50-v3.yaml
-rw-r--r--. 1 root root  290 Sep 21  2021 virtual-service-reviews-80-20.yaml
-rw-r--r--. 1 root root  290 Sep 21  2021 virtual-service-reviews-90-10.yaml
-rw-r--r--. 1 root root  332 Sep 21  2021 virtual-service-reviews-jason-v2-v3.yaml
-rw-r--r--. 1 root root  334 Sep 21  2021 virtual-service-reviews-test-v2.yaml
-rw-r--r--. 1 root root  290 Sep 21  2021 virtual-service-reviews-v2-v3.yaml
-rw-r--r--. 1 root root  196 Sep 21  2021 virtual-service-reviews-v3.yaml

$ vim bookinfo-gateway.yaml
# 看到路由规则

  http:
  - match:
    - uri:
        exact: /productpage
    - uri:
        prefix: /static
    - uri:
        exact: /login
    - uri:
        exact: /logout
    - uri:
        prefix: /api/v1/products

```

## 本章小结

### 概述

- 定义: 云原生技术使得企业能够在公有云、私有云、混合云的环境下, 构建和运行可扩展的应用程序, 云原生技术包括容器、服务网格、微服务、不可变基础设施和声明式 API 5 个关键技术
- 生态: 云原生技术的生态系统包括开源项目、云服务提供商、云原生计算基金会

### 容器
- 容器调用链路: 容器运行时 -> 容器镜像
- K8s与Docker: K8s 是一个容器编排工具, Docker 是一个容器运行时, K8s 可以管理多个 Docker 容器, Dockershim 是 K8s 与 Docker 之间的桥梁, 后续 K8s 会使用 CRI 替代 Dockershim, CRI 是容器运行时接口, 用于定义容器运行时与 K8s 之间的接口, 因为 Docker 和 K8s 之间的功能重叠

### 不可变基础设施
- 可变基础设施: 通过手动或自动的方式, 在服务器上安装操作系统和应用程序, 通常使用配置管理工具, 如 Ansible, Chef, Puppet
- 不可变基础设施: 通过镜像的方式, 在服务器上安装操作系统和应用程序, 通常使用 Packer, Vagrant, Dockerfile
- 容器: 不可变基础设施的最佳实践

难点: 
- 基础设施的理解: 基础设施是指服务器、网络、存储、操作系统、中间件、应用程序等
- 从可变基础设施到不可变基础设施的转变: 从手动安装到自动化安装, 从配置管理工具到镜像, 从物理机到虚拟机到容器

### 声明式 API
- 举例: K8s 的 API 对象包括 Pod、Service、Deployment、Namespace、ConfigMap、Secret 等, 这些 API 对象都是声明式的, 通过 YAML 或 JSON 文件定义, 通过 kubectl 命令行工具或 API 接口进行管理
- 声明式 API 的优势: 1. 通过 YAML 或 JSON 文件定义, 便于版本控制, 便于管理, 便于迁移 2. 通过 kubectl 命令行工具或 API 接口进行管理, 便于自动化管理, 便于集成到 CI/CD 流程中
- Docker-Compose: Docker-Compose 是 Docker 官方提供的一个工具, 用于定义和运行多个 Docker 容器
- kubectl: kubectl 是 K8s 官方提供的命令行工具, 用于管理 K8s 集群
- Docker-Compose 与 K8s 的区别: 
  - 1. Docker-Compose 是 Docker 官方提供的工具, K8s 是 CNCF 提供的工具 
  - 2. Docker-Compose 适用于单机环境, K8s 适用于多机环境 

难点
- Docker-Compose 实践: 
  - 1. 安装 Docker-Compose 
  - 2. 编写 Docker-Compose YAML 文件 
  - 3. 运行 Docker-Compose YAML 文件 
  -  4. 查看 Docker-Compose 运行状态 
  -  5. 停止 Docker-Compose 运行
- K8s 环境搭建与实践:

### 微服务
- Bookinfo 应用程序: Bookinfo 是一个简单的应用程序, 用于演示 K8s 的功能, Bookinfo 应用程序包括四个微服务, 分别是 productpage、details、reviews、ratings
- seriveName: 服务名称, 用于标识服务, 通常使用 DNS 域名格式, 如 reviews.default.svc.cluster.local
- kube-dns: K8s 集群中的 DNS 服务, 用于解析服务名称, 通常使用 CoreDNS 作为 DNS 服务
- pod: K8s 中的最小调度单元, 通常包含一个或多个容器, 通常使用 YAML 或 JSON 文件定义, 通常使用 kubectl 命令行工具或 API 接口进行管理
- 与 SpringCloud 对比: 
  - 1. SpringCloud 是 Java 生态圈的微服务框架, K8s 是云原生技术的微服务框架 
  - 2. SpringCloud 适用于 Java 生态圈, K8s 适用于多语言生态圈 

### 服务网格
- 概念: 服务网格是一种基础设施层面的微服务框架, 用于管理微服务之间的通信, 服务网格通常使用 Sidecar 模式实现, 服务网格通常使用 Envoy 作为 Sidecar
- istio: istio 是一个开源的服务网格框架, 用于管理微服务之间的通信, istio 通常使用 Sidecar 模式实现, istio 通常使用 Envoy 作为 Sidecar
- bookinfo 升级版: 与之前不同的是 不同服务之间的通信不再使用 K8s 的 Service, 而是使用 istio 的 Service, 通信方式不再是 HTTP, 而是使用 Envoy 的代理协议, 不再是组件之间的直接通信, 而是通过 Sidecar 通信
- istio路由规则: 
  - 1. 路由规则: 用于定义流量的路由规则, 通常使用 YAML 或 JSON 文件定义, 通常使用 istioctl 命令行工具或 API 接口进行管理 
  - 2. 路由规则类型: 路由规则包括 VirtualService、DestinationRule、Gateway、ServiceEntry、Sidecar、EnvoyFilter 等类型 
  - 3. 路由规则作用: 路由规则用于定义流量的路由规则, 用于流量控制、流量管理、流量监控、流量安全等 
  - 4. 路由规则实践: 通过 YAML 文件定义路由规则, 通过 istioctl 命令行工具管理路由规则
- 与 SpringCloud 对比: 可以通过 Prometheus 和 Grafana 进行监控, 可以通过 Jaeger 进行链路追踪, 可以通过 Kiali 进行流量监控, 可以通过 Kiali 进行流量安全