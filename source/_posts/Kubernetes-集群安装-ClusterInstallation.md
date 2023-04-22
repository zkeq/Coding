---
title: Kubernetes | 集群安装 - ClusterInstallation
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 此文档介绍了如何安装 Kubernetes 集群，包括节点加入和部署网络。此外，还介绍了如何使用 Harbor 企业级 Docker 私有仓库，并配置 HTTP 仓库。最后，提供了一些 Docker 命令的示例。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-22 01:36:24
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

```
请注意 由于版本过旧： 1.15.1 本篇文章的部分操作已不可复现！
```

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
# 这一行命令其实没生效 到下文会再修改执行一次
```

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E5%8C%96.pdf" type="application/pdf" width="100%" height="500" />


### 2、Kubeadm 部署安装

#### kube-proxy开启ipvs的前置条件

```sh
modprobe br_netfilter

cat > /etc/sysconfig/modules/ipvs.modules <<EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF 
chmod 755 /etc/sysconfig/modules/ipvs.modules && bash /etc/sysconfig/modules/ipvs.modules && lsmod | grep -e ip_vs -e nf_conntrack

# modprobe: FATAL: Module nf_conntrack_ipv4 not found.
# 在高版本内核已经把nf_conntrack_ipv4替换为nf_conntrack了  
# https://blog.csdn.net/weixin_45387943/article/details/123225090
```

####  安装 Docker 软件

```sh
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

```sh
# 解决一个 yum 报错
[root@k8s-master01 ~]#  yum install -y docker-ce
...
...
Downloading packages:
(1/10): container-selinux-2.119.2-1.911c772.el7_8.noarch.rpm                                                                               |  40 kB  00:00:00     
warning: /var/cache/yum/x86_64/7/docker-ce-stable/packages/docker-buildx-plugin-0.10.4-1.el7.x86_64.rpm: Header V4 RSA/SHA512 Signature, key ID 621e9f35: NOKEYTA 
Public key for docker-buildx-plugin-0.10.4-1.el7.x86_64.rpm is not installed
(2/10): docker-buildx-plugin-0.10.4-1.el7.x86_64.rpm                                                                                       |  12 MB  00:00:04     
docker-ce-23.0.4-1.el7.x86_64. FAILED                                          
https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/stable/Packages/docker-ce-23.0.4-1.el7.x86_64.rpm: [Errno -1] Package does not match intended download. Suggestion: run yum --enablerepo=docker-ce-stable clean metadata
Trying other mirror.
(3/10): docker-ce-cli-23.0.4-1.el7.x86_64.rpm                                                                                              |  13 MB  00:00:04     
(4/10): containerd.io-1.6.20-3.1.el7.x86_64.rpm                                                                                            |  34 MB  00:00:11     
(5/10): fuse-overlayfs-0.7.2-6.el7_8.x86_64.rpm                                                                                            |  54 kB  00:00:00     
(6/10): fuse3-libs-3.6.1-4.el7.x86_64.rpm                                                                                                  |  82 kB  00:00:00     
(7/10): slirp4netns-0.4.3-4.el7_8.x86_64.rpm                                                                                               |  81 kB  00:00:00     
(8/10): docker-ce-rootless-extras-23.0.4-1.el7.x86_64.rpm                                                                                  | 8.8 MB  00:00:03     
(9/10): docker-compose-plugin-2.17.2-1.el7.x86_64.rpm                                                                                      |  12 MB  00:00:04     


Error downloading packages:
  3:docker-ce-23.0.4-1.el7.x86_64: [Errno 256] No more mirrors to try.

[root@k8s-master01 ~]# sudo yum clean all
Loaded plugins: fastestmirror
Cleaning repos: base docker-ce-stable elrepo extras updates
Cleaning up list of fastest mirrors
Other repos take up 11 M of disk space (use --verbose for details)

[root@k8s-master01 ~]# yum --enablerepo=docker-ce-stable clean metadata
Loaded plugins: fastestmirror
Cleaning repos: base docker-ce-stable elrepo extras updates
16 metadata files removed
10 sqlite files removed
0 metadata files removed

[root@k8s-master01 ~]#  yum install -y docker-ce
...
...
Dependency Installed:
  container-selinux.noarch 2:2.119.2-1.911c772.el7_8       containerd.io.x86_64 0:1.6.20-3.1.el7                 docker-buildx-plugin.x86_64 0:0.10.4-1.el7       
  docker-ce-cli.x86_64 1:23.0.4-1.el7                      docker-ce-rootless-extras.x86_64 0:23.0.4-1.el7       docker-compose-plugin.x86_64 0:2.17.2-1.el7      
  fuse-overlayfs.x86_64 0:0.7.2-6.el7_8                    fuse3-libs.x86_64 0:3.6.1-4.el7                       slirp4netns.x86_64 0:0.4.3-4.el7_8               

Complete!
```

```sh
# liunx 查看有哪些内核
cat /boot/grub2/grub.cfg | grep menuentry

[root@k8s-master01 ~]# cat /boot/grub2/grub.cfg | grep menuentry
if [ x"${feature_menuentry_id}" = xy ]; then
  menuentry_id_option="--id"
  menuentry_id_option=""
export menuentry_id_option
menuentry 'CentOS Linux (3.10.0-1160.88.1.el7.x86_64) 7 (Core)' --class centos --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.10.0-1160.el7.x86_64-advanced-9cff3d69-3769-4ad9-8460-9c54050583f9' {
menuentry 'CentOS Linux (5.4.241-1.el7.elrepo.x86_64) 7 (Core)' --class centos --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.10.0-1160.el7.x86_64-advanced-9cff3d69-3769-4ad9-8460-9c54050583f9' {
menuentry 'CentOS Linux (3.10.0-1160.el7.x86_64) 7 (Core)' --class centos --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-3.10.0-1160.el7.x86_64-advanced-9cff3d69-3769-4ad9-8460-9c54050583f9' {
menuentry 'CentOS Linux (0-rescue-cc2c86fe566741e6a2ff6d399c5d5daa) 7 (Core)' --class centos --class gnu-linux --class gnu --class os --unrestricted $menuentry_id_option 'gnulinux-0-rescue-cc2c86fe566741e6a2ff6d399c5d5daa-advanced-9cff3d69-3769-4ad9-8460-9c54050583f9' {
[root@k8s-master01 ~]# grub2-set-default 'CentOS Linux (5.4.241-1.el7.elrepo.x86_64) 7 (Core)' && reboot

[root@k8s-master01 ~]# uname -r
5.4.241-1.el7.elrepo.x86_64 
```

```sh
# 安装完 docker  启动
[root@k8s-master01 ~]# systemctl start docker
[root@k8s-master01 ~]# systemctl enable docker
Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.
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

```sh
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

```yaml
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 172.129.78.136
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: k8s-master01
  taints:
  - effect: NoSchedule
    key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: k8s.gcr.io
kind: ClusterConfiguration
kubernetesVersion: v1.15.1
networking:
  dnsDomain: cluster.local
  podSubnet: "10.244.0.0/16"
  serviceSubnet: 10.96.0.0/12
scheduler: {}
---
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
featureGates:       
  SupportIPVSProxyMode: true
mode: ipvs
```

```sh
[root@k8s-master01 ~]# kubeadm init --config=kubeadm-config.yaml --experimental-upload-certs | tee kubeadm-init.log
Flag --experimental-upload-certs has been deprecated, use --upload-certs instead
[init] Using Kubernetes version: v1.15.1
[preflight] Running pre-flight checks
        [WARNING SystemVerification]: this Docker version is not on the list of validated versions: 23.0.4. Latest validated version: 18.09
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Activating the kubelet service
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [k8s-master01 kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local] and IPs [10.96.0.1 172.129.78.136]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [k8s-master01 localhost] and IPs [172.129.78.136 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [k8s-master01 localhost] and IPs [172.129.78.136 127.0.0.1 ::1]
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 17.002118 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config-1.15" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
[upload-certs] Using certificate key:
9280d519bb53c33fec7149b1ac2e6f0385b863dcee2ff7bf901d07d715de4dea
[mark-control-plane] Marking the node k8s-master01 as control-plane by adding the label "node-role.kubernetes.io/master=''"
[mark-control-plane] Marking the node k8s-master01 as control-plane by adding the taints [node-role.kubernetes.io/master:NoSchedule]
[bootstrap-token] Using token: abcdef.0123456789abcdef
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 172.129.78.136:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:a93684cdb29000b025a9ed35054b9611bc913fe1ddbf880f8e9077b812704396 
```

```sh
[root@k8s-master01 ~]#  mkdir -p $HOME/.kube
[root@k8s-master01 ~]#  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
[root@k8s-master01 ~]#  sudo chown $(id -u):$(id -g) $HOME/.kube/config
[root@k8s-master01 ~]# kubectl get node
NAME           STATUS     ROLES    AGE     VERSION
k8s-master01   NotReady   master   2m53s   v1.15.1
```

#### 加入主节点以及其余工作节点

```sh
执行安装日志中的加入命令即可
```

#### 部署网络

```sh
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 已经过去4年了 上述命令已经不可用了 查阅 Commit 历史 得到可用链接

[root@k8s-master01 ~]# kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/d893bcbfe6b04791054aea6c7569dea4080cc289/Documentation/kube-flannel.yml
podsecuritypolicy.policy/psp.flannel.unprivileged created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/flannel created
serviceaccount/flannel created
configmap/kube-flannel-cfg created
daemonset.apps/kube-flannel-ds-amd64 created
daemonset.apps/kube-flannel-ds-arm64 created
daemonset.apps/kube-flannel-ds-arm created
daemonset.apps/kube-flannel-ds-ppc64le created
daemonset.apps/kube-flannel-ds-s390x created


[root@k8s-master01 ~]# kubectl get pod  -n kube-system
NAME                                       READY   STATUS    RESTARTS   AGE
coredns-5c98db65d4-f5hfc                   1/1     Running   0          8m6s
coredns-5c98db65d4-pn98l                   1/1     Running   0          8m12s
etcd-k8s-master01                          1/1     Running   2          3h24m
kube-apiserver-k8s-master01                1/1     Running   1          3h25m
kube-controller-manager-k8s-master01       1/1     Running   2          3h25m
kube-flannel-ds-amd64-247rb                1/1     Running   0          74s
kube-proxy-445g7                           1/1     Running   1          3h25m
kube-scheduler-k8s-master01                1/1     Running   1          3h25m

[root@k8s-master01 ~]# kubectl get node
NAME           STATUS   ROLES    AGE   VERSION
k8s-master01   Ready    master   15m   v1.15.1


[root@k8s-master01 ~]# ifconfig 
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        inet 172.17.0.1  netmask 255.255.0.0  broadcast 172.17.255.255
        ether 02:42:d3:2f:dc:ce  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.129.78.136  netmask 255.255.255.0  broadcast 172.129.78.255
        ether fa:16:3e:36:5c:71  txqueuelen 1000  (Ethernet)
        RX packets 169718  bytes 339692579 (323.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 83371  bytes 1680809729 (1.5 GiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

flannel.1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1450
        inet 10.244.0.0  netmask 255.255.255.255  broadcast 0.0.0.0
        ether ba:df:2f:da:90:4c  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 141284  bytes 26146180 (24.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 141284  bytes 26146180 (24.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

```sh
# 配好网络之后 就可以加入子节点
[root@k8s-node01 ~]# kubeadm join 172.129.78.136:6443 --token abcdef.0123456789abcdef \
>     --discovery-token-ca-cert-hash sha256:a93684cdb29000b025a9ed35054b9611bc913fe1ddbf880f8e9077b812704396 
[preflight] Running pre-flight checks
        [WARNING SystemVerification]: this Docker version is not on the list of validated versions: 23.0.4. Latest validated version: 18.09
        [WARNING Hostname]: hostname "k8s-node01.novalocal" could not be reached
        [WARNING Hostname]: hostname "k8s-node01.novalocal": lookup k8s-node01.novalocal on 223.5.5.5:53: no such host
[preflight] Reading configuration from the cluster...
[preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -oyaml'
[kubelet-start] Downloading configuration for the kubelet from the "kubelet-config-1.15" ConfigMap in the kube-system namespace
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Activating the kubelet service
[kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap...

This node has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.

Run 'kubectl get nodes' on the control-plane to see this node join the cluster.

[root@k8s-master01 ~]# kubectl get nodes
NAME                   STATUS     ROLES    AGE   VERSION
k8s-master01           Ready      master   19m   v1.15.1
k8s-node01.novalocal   NotReady   <none>   13s   v1.15.1
k8s-node02.novalocal   NotReady   <none>   6s    v1.15.1
[root@k8s-master01 ~]# kubectl get pod -n kube-system -o wide
NAME                                   READY   STATUS              RESTARTS   AGE     IP               NODE                   NOMINATED NODE   READINESS GATES
coredns-5c98db65d4-gjnpg               0/1     ContainerCreating   0          19m     <none>           k8s-master01           <none>           <none>
coredns-5c98db65d4-v89m2               0/1     ContainerCreating   0          19m     <none>           k8s-master01           <none>           <none>
etcd-k8s-master01                      1/1     Running             0          18m     172.129.78.136   k8s-master01           <none>           <none>
kube-apiserver-k8s-master01            1/1     Running             0          18m     172.129.78.136   k8s-master01           <none>           <none>
kube-controller-manager-k8s-master01   1/1     Running             0          18m     172.129.78.136   k8s-master01           <none>           <none>
kube-flannel-ds-amd64-fcgkv            1/1     Running             0          35s     172.129.78.105   k8s-node01.novalocal   <none>           <none>
kube-flannel-ds-amd64-qmksn            1/1     Running             0          5m17s   172.129.78.136   k8s-master01           <none>           <none>
kube-flannel-ds-amd64-wgjmq            1/1     Running             0          28s     172.129.78.104   k8s-node02.novalocal   <none>           <none>
kube-proxy-445g7                       1/1     Running             0          19m     172.129.78.136   k8s-master01           <none>           <none>
kube-proxy-dwljn                       1/1     Running             0          35s     172.129.78.105   k8s-node01.novalocal   <none>           <none>
kube-proxy-wfx4j                       1/1     Running             0          28s     172.129.78.104   k8s-node02.novalocal   <none>           <none>
kube-scheduler-k8s-master01            1/1     Running             0          18m     172.129.78.136   k8s-master01           <none>           <none>
[root@k8s-master01 ~]# kubectl get nodes
NAME                   STATUS   ROLES    AGE   VERSION
k8s-master01           Ready    master   19m   v1.15.1
k8s-node01.novalocal   Ready    <none>   38s   v1.15.1
k8s-node02.novalocal   Ready    <none>   31s   v1.15.1
```

<embed src="https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubeadm%20%E9%83%A8%E7%BD%B2%E5%AE%89%E8%A3%85.pdf" type="application/pdf" width="100%" height="500" />

### Harbor - 企业级 Docker 私有仓库

```sh
/[root@harbor harbor]# vi harbor.cfg
## Configuration file of Harbor

#The IP address or hostname to access admin UI and registry service.
#DO NOT use localhost or 127.0.0.1, because Harbor needs to be accessed by external clients.
hostname = 172.129.78.187
// 只修改这个即可 使用 http 不实用证书

[root@harbor harbor]# ./install.sh
...
[Step 4]: starting Harbor ...
Creating network "harbor_harbor" with the default driver
Creating harbor-log ... done
Creating harbor-adminserver ... done
Creating registry           ... done
Creating harbor-db          ... done
Creating harbor-ui          ... done
Creating harbor-jobservice  ... done
Creating nginx              ... done

✔ ----Harbor has been installed and started successfully.----

Now you should be able to visit the admin portal at http://172.129.78.187. 
For more details, please visit https://github.com/vmware/harbor .

Harbor Login
User: admin
Pass: Harbor12345
```

#### 配置 HTTP 仓库

要在 Docker 中使用 HTTP 仓库，需要在 `daemon.json` 文件中进行配置。以下是实现方法：

1. 首先，打开终端并输入以下命令：

```sh
vi /etc/docker/daemon.json
```

1. 在打开的文件中，添加以下内容：

```sh
{
  "insecure-registries": ["<http://example.com:5000>"]
}
```

其中，`http://example.com:5000` 是你所使用的 HTTP 仓库的地址。

1. 保存并退出文件。
2. 重启 Docker 服务：

```sh
systemctl restart docker
```

现在，你已经成功地配置了 Docker 使用 HTTP 仓库。可以使用以下命令检查是否已成功配置：

```sh
docker info
```

在输出的结果中，应该能看到配置的 HTTP 仓库地址。

```sh
[root@k8s-node02 ~]# vim /etc/docker/daemon.json 
{
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
  "max-size": "100m"
  },
  "insecure-registries": ["http://172.129.78.187"]
}

[root@k8s-node02 ~]# systemctl restart docker
[root@k8s-node02 ~]# docker info
...
 Insecure Registries:
  172.129.78.187
  127.0.0.0/8
...

[root@k8s-node02 ~]# docker login http://172.129.78.187
Username: admin
Password: 
Error response from daemon: Get "http://172.129.78.187/v2/": unauthorized: authentication required
[root@k8s-node02 ~]# docker login http://172.129.78.187
Username: admin
Password: 
WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credentials-store

Login Succeeded

[root@k8s-node02 ~]# docker pull hello-world
Using default tag: latest
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:4e83453afed1b4fa1a3500525091dbfca6ce1e66903fd4c01ff015dbcb1ba33e
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
[root@k8s-node02 ~]# docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

[root@k8s-node02 ~]# docker tag  hello-world:latest 172.129.78.187/library/hello-world-local:latest
[root@k8s-node02 ~]# docker push 172.129.78.187/library/hello-world-local:latest
The push refers to repository [172.129.78.187/library/hello-world-local]
e07ee1baac5f: Pushed 
latest: digest: sha256:f54a58bc1aac5ea1a25d796ae155dc228b3f0e11d046ae276b39c4bf2f13d8c4 size: 525

# 在网页中查看已经可以看到
```

<embed src="https://media.onmicrosoft.cn/k8s/Harbor%20-%20%E4%BC%81%E4%B8%9A%E7%BA%A7%20Docker%20%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93.pdf" type="application/pdf" width="100%" height="500" />

