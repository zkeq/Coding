---
title: (转) Kubernetes | 【尚硅谷】Kubernetes（k8s）入门到实战教程丨全新升级完整版
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本文介绍了 Kubernetes（k8s）的入门到实战教程，包括 Linux 系统介绍、系统安装、目录介绍、常用命令介绍、Docker 的安装、概述及使用、Dokcerfile、k8s 集群部署（CentOS 和 Ubuntu）等内容。其中包括了如何确保每个节点上 MAC 地址和 product_uuid 的唯一性、检查网络适配器、允许 iptables 检查桥接流量，安装 runtime 配置 Docker 守护程序，初始化控制平面节点等内容。本教程帮助读者快速了解和掌握 k8s 的相关知识。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-05-15 05:41:48
---

{% tabs kubernetes %}

<!-- tab 转载声明 -->

> 转自仓库: https://gitee.com/bbigsun/kubernetes-study-notes
> 
> 在线阅读: https://img.onmicrosoft.cn/kubernetes-study-notes-master/index.html
>
> 相关视频: https://www.bilibili.com/video/BV1GT4y1A756/
> 
> 本博客转载此项目仅为了方便自己学习以及索引搜索，如有不妥，请联系删除。
> 
> 学完旧版之后发现新版已经有了 而且有大佬做的笔记真详细啊 忍不住拷贝一份放博客里面占位
<!-- endtab -->

<!-- tab Linux 操作系统 -->

### 简单学下 Linux

> 参考资料：https://www.runoob.com/linux/linux-tutorial.html

##### 一、Linux 系统介绍

大体上来讲，Linux分为两个生态体系，红帽和 debian。商业版本以 Redhat 为代表，开源社区版本则以 debian 为代表。

**红帽家族**

- redhat ：红帽自家服务器
- centos ：基于红帽重新封装的去掉版权信息的免费版本
- fedora ：基于红帽社区支持的桌面版，里面的包是红帽的实验版本，相对较新

包的管理方式：yum --> rpm

**debian家族**

- debian ：debian自家纯净系统，一般来说Debian作为适合于服务器的操作系统，它比Ubuntu要稳定得多。
- Ubuntu : 在debian系统上封装了许多工具，Ubuntu有着漂亮的用户界面，完善的包管理系统，强大的软件源支持，丰富的技术社区，但这也决定了它最佳的应用领域 是桌面操作系统而非服务器操作系统。
- Kali : Kali Linux 前身是 BackTrack（基于ubuntu），是一个基于 Debian 的 Linux 发行版，包含很多安全和取证方面的相关工具。

包的管理方式: apt --> deb

*PS：小白可以记住这三个系统，工作使用 CentOS（免费），日常使用 Ubuntu（有桌面），特殊用途 Kali（黑客）*

##### 二、Linux 系统安装

学习 Linux，首先我们需要一个 Linux 系统。

- 👉 [CentOS 系统安装](https://www.bbigsun.com/245.html)
- 👉 [Ubuntu 系统安装](https://www.bbigsun.com/245.html)

##### 三、Linux 目录介绍

```bash
[root@localhost ~]# ls /
bin  boot  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin selinux  srv  sys  tmp  usr  var
```

以下是对这些目录的解释：

| 目录          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| `/bin`        | bin 是 Binaries (二进制文件) 的缩写， 这个目录存放着最经常使用的命令。 |
| `/boot`       | 这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。 |
| `/dev`        | dev 是 Device(设备) 的缩写，该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。 |
| `/etc`        | etc 是 Etcetera(等等) 的缩写，这个目录用来存放所有的系统管理所需要的配置文件和子目录。 |
| `/home`       | 用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。 |
| `/lib`        | lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。 |
| `/lost+found` | 这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。 |
| `/media`      | linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。 |
| `/mnt`        | 系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。 |
| `/opt`        | opt 是 optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。 |
| `/proc`       | proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。 |
| `root`        | 该目录为系统管理员，也称作超级权限者的用户主目录。           |
| `run`         | 是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。 |
| `sbin`        | s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。 |
| `selinux`     | 这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。 |
| `srv`         | 该目录存放一些服务启动之后需要提取的数据。                   |
| `sys`         | 这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。该文件系统是内核设备树的一个直观反映。当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。 |
| `tmp`         | tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。 |
| `usr`         | usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。`/usr/bin`：系统用户使用的应用程序。`/usr/sbin`：超级用户使用的比较高级的管理程序和系统守护程序。`/usr/src：`内核源代码默认的放置目录。 |
| `var`         | var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。 |

*PS：在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件。`/etc`： 上边也提到了，这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。`/bin`, `/sbin`,` /usr/bin`, `/usr/sbin`：这是系统预设的执行文件的放置目录，比如 ls 就是在 /bin/ls 目录下的。值得提出的是：/bin, /usr/bin 是给系统用户使用的指令（除root外的通用户），而 /sbin, /usr/sbin 则是给 root 使用的指令。`/var`： 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 `/var/log` 目录下，另外 mail 的预设放置也是在这里。*



##### 四、Linux 常用命令介绍


1、查看当前目录

```bash
[root@localhost ~]# pwd
/root
```

2、查看当前目录下的文件

```bash
[root@localhost ~]# ls
anaconda-ks.cfg
```

3、查看指定目录下的文件

```bash
[root@localhost ~]# ls /usr
bin  etc  games  include  lib  lib64  libexec  local  sbin  share  src  tmp
```

4、切换目录

```bash
[root@localhost ~]# cd /home
[root@localhost home]# pwd 
/home
```

5、创建空白目录

```bash
[root@localhost home]# mkdir firstdir
[root@localhost home]# ls
firstdir
```

6、创建空白文件

```bash
[root@localhost home]# touch firstfile
[root@localhost home]# ls
firstdir  firstfile
```

7、修改目录或文件名称

```bash
[root@localhost home]# mv firstdir seconddir
[root@localhost home]# ls
firstfile  seconddir
```

8、移动目录或文件

```bash
[root@localhost home]# mv firstfile seconddir/
[root@localhost home]# ls
seconddir
[root@localhost home]# ls seconddir/
firstfile
```

9、复制目录或文件

```bash
[root@localhost home]# cp -r seconddir  threedir
[root@localhost home]# ls
seconddir  threedir
[root@localhost home]# cp threedir/firstfile secondfile
[root@localhost home]# ls
seconddir  secondfile  threedir
```

10、删除目录或文件

```bash
[root@localhost home]# rm -f secondfile
[root@localhost home]# ls
seconddir  threedir
[root@localhost home]# rm -rf seconddir
[root@localhost home]# ls
threedir
```

11、添加新用户

```bash
[root@localhost home]# useradd test
[root@localhost home]# ls
test  threedir
[root@localhost home]# id test
uid=1000(test) gid=1000(test) 组=1000(test)
```

12、修改用户密码

我设置的密码为：test，虽然显示无效密码，不用管它，连续输入两次仍然可以生效。

```bash
[root@localhost home]# passwd test
更改用户 test 的密码 。
新的 密码：
无效的密码： 密码少于 8 个字符
重新输入新的 密码：
passwd：所有的身份验证令牌已经成功更新。
```

13、切换用户

```bash
[root@localhost home]# su test
[test@localhost home]$ su root
密码：
[root@localhost home]# 
```

14、查看指定的进程

```bash
[root@localhost home]# ps -ef | grep test
root      24760   1561  0 10:23 pts/0    00:00:00 su test
test      24761  24760  0 10:23 pts/0    00:00:00 bash
```

15、杀死进程

```bash
[root@localhost home]# kill -9 24761
已杀死
```

16、删除用户

```bash
[root@localhost home]# userdel test
[root@localhost home]# ls
test  threedir
[root@localhost home]# id test
id: test: no such user
```

17、编辑文件

进入文件编辑页面后，输入 `i`：进入插入模式，输入内容，输入 `ECS` 退出插入模式，输入 `shifit + :` 进入命令行模式，输入指令 `wq` 退出并保存。

```bash
[root@localhost home]# vi hello.sh
# ----------- 分割线（Enter） -------------- #
~
~
~
~
# ----------- 分割线（i） -------------- #
#!/bin/bash

echo "hello linux"
~                                                                                
-- INSERT --
# ----------- 分割线（ecs） -------------- #
#!/bin/bash

echo "hello linux"
~                                                                                
~ 
# ----------- 分割线（shifit + :） -------------- #
#!/bin/bash

echo "hello linux"
~                                                                                
~                                                                               
:wq
```

18、修改文件权限

```bash
[root@localhost home]# chmod +x hello.sh 
```

19、执行脚本文件

```bash
[root@localhost home]# ./hello.sh 
hello linux
[root@localhost home]# bash hello.sh 
hello linux
```

20、安装 vim 编辑器

```bash
[root@localhost home]# yum -y install vim
```

<!-- endtab -->

<!-- tab Docker -->

### 简单学下 Docker 


> 参考资料：https://www.runoob.com/docker/docker-tutorial.html

##### 一、Docker 安装

- 操作系统为 CentOS 7.9。

1、配置 yum 镜像源【阿里云】

```bash
cat >/etc/yum.repos.d/docker.repo << EOF
[docker-ce-edge]
name=Docker CE Edge - \$basearch
baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\$basearch/edge
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg
EOF
```

2、安装 docker

```bash
yum -y install docker-ce
```

3、查看 docker 版本

```bash
docker --version
```

4、启动 docker

```bash
systemctl start docker
```

5、允许 docker 自启

```bash
systemctl enable docker
```

6、查看 docker 状态

```bash
systemctl status docker
```

7、配置 docker 镜像源【阿里云】

```bash
cat >> /etc/docker/daemon.json << EOF
{
  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"]
}
EOF
```

8、重启 docker，使配置生效

```sh
systemctl restart docker
```

##### 二、Docker 概述

- Docker 官网：[https://www.docker.com](https://www.docker.com/)

- Github Docker 源码：https://github.com/docker/docker-ce

###### Docker 简介

Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

Docker 从 17.03 版本之后分为 CE（Community Edition: 社区版） 和 EE（Enterprise Edition: 企业版），我们用社区版就可以了。

###### Docker 优点

- 快速一致的交付您的应用程序
- 响应式部署和扩展
- 在同一硬件上运行更多的工作负载

###### Docker 架构

Docker 包含三个基本概念：

- **镜像（Image）**：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。
- **容器（Container）**：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。
- **仓库（Repository）**：仓库可看成一个代码控制中心，用来保存镜像。

> 一句话概括三者的关系，即：Docker 使用**仓库**存放**镜像**，使用**镜像**创建**容器**，使用**容器**运行**程序**。

##### 三、Docker 使用

> 参考资料：https://www.runoob.com/docker/docker-tutorial.html

###### Docker Hello World

```sh
docker run ubuntu /bin/echo "hello world"

# 查看docker全部命令
dokcer

# 查看docker具体命令用法
docker images --help
```

###### Docker image

```sh
# docker images  查看本地下载的镜像
[root@centos79 ~]# docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
docker.io/ubuntu    latest              d13c942271d6        About an hour ago   72.8 MB

#  REPOSITORY：表示镜像的仓库源
#  TAG：镜像的标签
#  IMAGE ID：镜像ID
#  CREATED：镜像创建时间
#  SIZE：镜像大小


# docker search ubuntu 查找镜像
[root@centos79 ~]# docker search ubuntu
INDEX       NAME                                                                DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
docker.io   docker.io/ubuntu                                                    Ubuntu is a Debian-based Linux operating s...   13451     [OK]       
docker.io   docker.io/dorowu/ubuntu-desktop-lxde-vnc                            Docker image to provide HTML5 VNC interfac...   599                  [OK]
docker.io   docker.io/websphere-liberty                                         WebSphere Liberty multi-architecture image...   282       [OK] 

#  NAME: 镜像仓库源的名称
#  DESCRIPTION: 镜像的描述
#  OFFICIAL: 是否 docker 官方发布
#  stars: 类似 Github 里面的 star，表示点赞、喜欢的意思
#  AUTOMATED: 自动构建


# 获取指定版本镜像 repository:tag
docker pull ubuntu:15.10

# 删除镜像
docker rmi ubuntu:15.10
```

###### Docker Container

```sh
# docker run 启动容器【使用ubuntu:15.10镜像创建容器】【容器短暂存活】
docker run ubuntu:15.10 /bin/echo "hello world"
# 如果未提前下载镜像，运行镜像时，会自动下载【使用镜像创建容器】【容器一直存活】
docker run nginx
# 使用docker ps查看存活的容器

# 使用命令行模式进入容器
docker run -it ubuntu /bin/bash
## 参数说明
#  -i: 交互式操作。
#  -t: 终端。
#  ubuntu: ubuntu 镜像。
#  /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。

#  exit 退出终端
root@2c20633e5576:/# exit

# 启动已经停止的容器
[root@centos79 ~]# docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                        PORTS               NAMES
2c20633e5576        ubuntu              "/bin/bash"              2 minutes ago       Exited (0) 3 seconds ago                          compassionate_kowalevski
# 根据容器ID启动容器
docker start 2c20633e5576
# docker ps 查看正在运行的容器

# 后台运行容器，并指定名字
docker run -itd --name ubuntu-test ubuntu /bin/bash 

[root@centos79 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
be23ba2e8f19        ubuntu              "/bin/bash"         3 seconds ago       Up 2 seconds                            ubuntu-test
2c20633e5576        ubuntu              "/bin/bash"         5 minutes ago       Up 2 minutes                            compassionate_kowalevski

# 停止容器
docker stop <容器 ID>

# 进入容器
# 在使用 -d 参数时，容器启动后会进入后台。此时想要进入容器，可以通过以下指令进入：
#   docker attach
#   docker exec：推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。
docker attach <容器 ID>
docker exec -it <容器 ID> /bin/bash

# 导出容器
docker export <容器 ID> > ubuntu.tar
# 导入容器
cat docker/ubuntu.tar | docker import - test/ubuntu:v1

# 删除容器
docker rm -f <容器 ID>
```

###### Docker Repository

Docker 镜像仓库可以通过注册官方镜像仓库 Docker Hub 免费体验使用，由于是国外网站，速度较慢，国内云提供商也提供免费的镜像仓库，注册云账号即可使用。

- [官方镜像仓库](https://registry.hub.docker.com/)

- [阿里云镜像仓库](https://cr.console.aliyun.com) 

- [腾讯云镜像仓库]()

- [华为云镜像仓库]()


###### Docker Network

我们使用docker run创建Docker容器时，可以用 --net 选项指定容器的网络模式，Docker 有以下4种网络模式：

- bridge模式，使用--net=bridge指定，**默认**设置
- host模式，使用--net=host指定，容器内部网络空间共享宿主机空间，效果类似于直接在宿主机上启动一个进程，端口信息和宿主机共用
- container模式，使用--net=container:NAME_or_ID指定，指定容器与特定容器共享网络命名空间
- none模式，使用--net=none指定，网络模式为空，即保留网络命名空间，但是不做任何网络相关的配置（网卡、IP、路由等）

###### Docker Command

如果以下常用命令，仍不能满足你的日常需求，请查看 [Docker 命令大全](https://www.runoob.com/docker/docker-command-manual.html)。

```sh
# 容器生命周期管理
docker run --name mynginx -p 80:80 -d nginx:latest
docker start mynginx
docker stop mynginx
docker restart mynginx
docker kill mynginx
docker rm mynginx
docker pause mynginx
docker unpause mynginx
docker create --name mynginx -p 80:80 nginx:latest
docker exec -it mynginx /bin/bash

# 容器操作
docker ps
docker inspect nginx:latest
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mynginx
dokcer top mynginx
docker attach mynginx
docker events -f "images"="nginx:latest" --since="2021-10-01"
docker logs --since="2016-07-01" --tail=10 mynginx
docker wait
docker export -o nginx-`date +%Y%m%d`.tar 96f7f14e99ab
docker port mynginx

# 容器rootfs命令
docker commit -a "commit user" -m "commit info" 96f7f14e99ab mynginx:v1
docker cp /www/nginx 96f7f14e99ab:/www/
docker diff mynginx

# 镜像仓库
docker login -u docker_user -p docker_passwd
docker logout
docker pull nginx
docker push mynginx:v1
docker search nginx

# 本地镜像管理
docker images
docker rmi 96f7f14e99ab
docker tag nginx:latest mynginx:v1
docker build -f /path/to/Dockerfile -t mynginx:v1 .
docker history mynginx:v1
docker save -o mynginx_v1.tar mynginx:v1
docker load < mynginx_v1.tar.gz
docker import mynginx_v1.tar mynginx :v1

# Info|Version
docker info
docker version
docker -v
```

##### 四、Dokcerfile

###### 常用指令

- FROM：构建镜像基于哪个镜像

- MAINTAINER：镜像维护者姓名或邮箱地址

- RUN：构建镜像时运行的指令

- CMD：运行容器时执行的shell环境

- VOLUME：指定容器挂载点到宿主机自动生成的目录或其他容器

- USER：为RUN、CMD、和 ENTRYPOINT 执行命令指定运行用户

- WORKDIR：为 RUN、CMD、ENTRYPOINT、COPY 和 ADD 设置工作目录，就是切换目录

- HEALTHCHECH：健康检查

- ARG：构建时指定的一些参数

- EXPOSE：声明容器的服务端口（仅仅是声明）

- ENV：设置容器环境变量

- ADD：拷贝文件或目录到容器中，如果是URL或压缩包便会自动下载或自动解压

- COPY：拷贝文件或目录到容器中，跟ADD类似，但不具备自动下载或解压的功能

- ENTRYPOINT：运行容器时执行的shell命令


<!-- endtab -->

<!-- tab k8s 集群部署 | CentOS -->

### k8s 集群部署 | CentOS


##### 安装 Kubeadm



###### 准备开始

- 一台兼容的 Linux 主机。Kubernetes 项目为基于 Debian 和 Red Hat 的 Linux 发行版以及一些不提供包管理器的发行版提供通用的指令
- 每台机器 2 GB 或更多的 RAM （如果少于这个数字将会影响你应用的运行内存)
- 2 CPU 核或更多
- 集群中的所有机器的网络彼此均能相互连接(公网和内网都可以)
- 节点之中不可以有重复的主机名、MAC 地址或 product_uuid。
- 开启机器上的某些端口。
- 禁用交换分区。为了保证 kubelet 正常工作，你 **必须** 禁用交换分区。

```sh
sudo swapoff -a
sudo sed -ri 's/.*swap.*/#&/' /etc/fstab
```



##### 确保每个节点上 MAC 地址和 product_uuid 的唯一性

- 你可以使用命令 `ip link` 或 `ifconfig -a` 来获取网络接口的 MAC 地址
- 可以使用 `sudo cat /sys/class/dmi/id/product_uuid` 命令对 product_uuid 校验

一般来讲，硬件设备会拥有唯一的地址，但是有些虚拟机的地址可能会重复。 Kubernetes 使用这些值来唯一确定集群中的节点。 如果这些值在每个节点上不唯一，可能会导致安装失败。


##### 检查网络适配器

如果你有一个以上的网络适配器，同时你的 Kubernetes 组件通过默认路由不可达，我们建议你预先添加 IP 路由规则，这样 Kubernetes 集群就可以通过对应的适配器完成连接。


##### 允许 iptables 检查桥接流量

确保 `br_netfilter` 模块被加载。这一操作可以通过运行 `lsmod | grep br_netfilter` 来完成。若要显式加载该模块，可执行 `sudo modprobe br_netfilter`。（如果使用该模块，请配置cgroup）

为了让你的 Linux 节点上的 iptables 能够正确地查看桥接流量，你需要确保在你的 `sysctl` 配置中将 `net.bridge.bridge-nf-call-iptables` 设置为 1。例如：

```bash
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system
```


##### 检查所需端口

启用这些必要的端口后才能使 Kubernetes 的各组件相互通信。可以使用 telnet 来检查端口是否启用，例如：

```shell
telnet 127.0.0.1 6443
```

你使用的 Pod 网络插件 (详见后续章节) 也可能需要开启某些特定端口。由于各个 Pod 网络插件的功能都有所不同， 请参阅他们各自文档中对端口的要求。


##### 安装 runtime

为了在 Pod 中运行容器，Kubernetes 使用 **容器运行时（Container Runtime）**。

- [Linux 节点](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#container-runtimes-0)
- [其它操作系统](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#container-runtimes-1)



默认情况下，Kubernetes 使用 **容器运行时接口（Container Runtime Interface，CRI）**来与你所选择的容器运行时交互。

如果你不指定运行时，则 kubeadm 会自动尝试检测到系统上已经安装的运行时， 方法是扫描一组众所周知的 Unix 域套接字。 下面的表格列举了一些容器运行时及其对应的套接字路径：

| 运行时     | 域套接字                        |
| ---------- | ------------------------------- |
| Docker     | /var/run/dockershim.sock        |
| containerd | /run/containerd/containerd.sock |
| CRI-O      | /var/run/crio/crio.sock         |


如果同时检测到 Docker 和 containerd，则优先选择 Docker。 这是必然的，因为 Docker 18.09 附带了 containerd 并且两者都是可以检测到的， 即使你仅安装了 Docker。 如果检测到其他两个或多个运行时，kubeadm 输出错误信息并退出。

kubelet 通过内置的 `dockershim` CRI 实现与 Docker 集成。



***使用官方脚本安装 docker***【Linux 通用】

```sh
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

也可以使用国内 daocloud 一键安装命令

```sh
curl -sSL https://get.daocloud.io/docker | sh
```



***使用 yum 安装 docker***【CentOS 推荐】

```sh
cat <<EOF | sudo tee /etc/yum.repos.d/docker.repo
[docker-ce-edge]
name=Docker CE Edge - \$basearch
baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\$basearch/edge
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg
EOF

sudo yum -y install docker-ce

# 启动 docker
sudo systemctl start docker
sudo systemctl enable docker
sudo systemctl status docker
```


##### 配置 Docker 守护程序

- 使用 systemd 来管理容器的 cgroup。

- 配置 docker 的镜像源（加速镜像拉取速度）。

```sh
cat <<EOF | sudo tee /etc/docker/daemon.json
{
  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```


##### 安装 kubeadm、kubelet 和 kubectl

你需要在每台机器上安装以下的软件包：

- `kubeadm`：用来初始化集群的指令。
- `kubelet`：在集群中的每个节点上用来启动 Pod 和容器等。
- `kubectl`：用来与集群通信的命令行工具。

> kubeadm **不能** 帮你安装或者管理 `kubelet` 或 `kubectl`，所以你需要 确保它们与通过 kubeadm 安装的控制平面的版本相匹配。 如果不这样做，则存在发生版本偏差的风险，可能会导致一些预料之外的错误和问题。 然而，控制平面与 kubelet 间的相差一个次要版本不一致是支持的，但 kubelet 的版本不可以超过 API 服务器的版本。 例如，1.7.0 版本的 kubelet 可以完全兼容 1.8.0 版本的 API 服务器，反之则不可以。



```sh
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

# 将 SELinux 设置为 permissive 模式（相当于将其禁用）
sudo setenforce 0
sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config


sudo yum install -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0

sudo systemctl enable --now kubelet
```


##### 配置 cgroup 驱动程序

容器运行时和 kubelet 都具有名字为 ["cgroup driver"](https://kubernetes.io/zh/docs/setup/production-environment/container-runtimes/) 的属性，该属性对于在 Linux 机器上管理 CGroups 而言非常重要。

默认 systemd

**警告：**

你需要确保容器运行时（docker）和 kubelet 所使用的是相同的 cgroup 驱动，否则 kubelet 进程会失败。

相关细节可参见[配置 cgroup 驱动](https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/configure-cgroup-driver/)。


##### Kubeadm 启动 k8s 集群



##### 初始化控制平面节点

请执行命令：

```sh
kubeadm init --apiserver-advertise-address=192.168.60.155 --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.18.0 --service-cidr=10.96.0.0/12  --pod-network-cidr=10.244.0.0/16
```

参数说明：

- `--apiserver-advertise-address`        当前主机 IP
- `--image-repository`                               指定镜像仓库
- `--kubernetes-version`                           指定当前版本
- `--service-cidr`                                        指定 service 网段
- `--pod-network-cidr`                                指定 pod 网段 

如果想要非 root 用户使用 k8s 集群，创建以下文件：

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```


##### 安装 CNI 网络插件

查看 节点 状态

```sh
kubectl get node
```

上面的状态还是NotReady，下面我们需要安装网络插件，来进行联网访问：

```sh
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# ........... 部署需要时间，还请耐心等待 ...........

kubectl get pods -n kube-system
```

运行后的结果为Ready状态

```sh
NAME                    STATUS   ROLES    AGE     VERSION
localhost.localdomain   Ready    master   3m18s   v1.18.0
```

##### Kubeadm 加入集群

```sh
kubeadm token create --print-join-command
```


##### Kubeadm 删除集群


删除 node 节点

```sh
kubectl delete node <node-name>
```

重置 master / node 节点

```sh
kubeadm reset 
rm -rf $HOME/.kube/config

mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```


##### 集群无法启动

报错信息：

```sh
[kubelet-check] It seems like the kubelet isn't running or healthy.
[kubelet-check] The HTTP call equal to 'curl -sSL http://localhost:10248/healthz' failed with error: Get "http://localhost:10248/healthz": dial tcp [::1]:10248: connect: connection refused.
## 查看原因
[root@localhost ~]# tail /var/log/messages 
Apr  7 09:45:26 localhost kubelet: E0407 09:45:26.086446   94649 server.go:302] "Failed to run kubelet" err="failed to run Kubelet: misconfiguration: kubelet cgroup driver: \"systemd\" is different from docker cgroup driver: \"cgroupfs\""
[root@localhost ~]# 

cat <<EOF | sudo tee /etc/docker/daemon.json
{
  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],			## 这里的问题，没有改
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF


```

<!-- endtab -->

<!-- tab k8s 集群部署 | Ubuntu -->

### k8s 集群部署 | Ubuntu



#### 安装 Kubeadm



##### 准备开始

- 一台兼容的 Linux 主机。Kubernetes 项目为基于 Debian 和 Red Hat 的 Linux 发行版以及一些不提供包管理器的发行版提供通用的指令
- 每台机器 2 GB 或更多的 RAM （如果少于这个数字将会影响你应用的运行内存)
- 2 CPU 核或更多
- 集群中的所有机器的网络彼此均能相互连接(公网和内网都可以)
- 节点之中不可以有重复的主机名、MAC 地址或 product_uuid。
- 开启机器上的某些端口。
- 禁用交换分区。为了保证 kubelet 正常工作，你 **必须** 禁用交换分区。

```sh
sudo swapoff -a
sudo sed -ri 's/.*swap.*/#&/' /etc/fstab
```



##### 确保每个节点上 MAC 地址和 product_uuid 的唯一性

- 你可以使用命令 `ip link` 或 `ifconfig -a` 来获取网络接口的 MAC 地址
- 可以使用 `sudo cat /sys/class/dmi/id/product_uuid` 命令对 product_uuid 校验

一般来讲，硬件设备会拥有唯一的地址，但是有些虚拟机的地址可能会重复。 Kubernetes 使用这些值来唯一确定集群中的节点。 如果这些值在每个节点上不唯一，可能会导致安装失败。



##### 检查网络适配器

如果你有一个以上的网络适配器，同时你的 Kubernetes 组件通过默认路由不可达，我们建议你预先添加 IP 路由规则，这样 Kubernetes 集群就可以通过对应的适配器完成连接。



##### 允许 iptables 检查桥接流量

确保 `br_netfilter` 模块被加载。这一操作可以通过运行 `lsmod | grep br_netfilter` 来完成。若要显式加载该模块，可执行 `sudo modprobe br_netfilter`。（如果使用该模块，请配置cgroup）

为了让你的 Linux 节点上的 iptables 能够正确地查看桥接流量，你需要确保在你的 `sysctl` 配置中将 `net.bridge.bridge-nf-call-iptables` 设置为 1。例如：

```bash
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sudo sysctl --system
```


##### 检查所需端口

启用这些必要的端口后才能使 Kubernetes 的各组件相互通信。可以使用 telnet 来检查端口是否启用，例如：

```shell
telnet 127.0.0.1 6443
```

你使用的 Pod 网络插件 (详见后续章节) 也可能需要开启某些特定端口。由于各个 Pod 网络插件的功能都有所不同， 请参阅他们各自文档中对端口的要求。


##### 安装 runtime

为了在 Pod 中运行容器，Kubernetes 使用 **容器运行时（Container Runtime）**。

- [Linux 节点](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#container-runtimes-0)
- [其它操作系统](https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#container-runtimes-1)



默认情况下，Kubernetes 使用 **容器运行时接口（Container Runtime Interface，CRI）**来与你所选择的容器运行时交互。

如果你不指定运行时，则 kubeadm 会自动尝试检测到系统上已经安装的运行时， 方法是扫描一组众所周知的 Unix 域套接字。 下面的表格列举了一些容器运行时及其对应的套接字路径：

| 运行时     | 域套接字                        |
| ---------- | ------------------------------- |
| Docker     | /var/run/dockershim.sock        |
| containerd | /run/containerd/containerd.sock |
| CRI-O      | /var/run/crio/crio.sock         |


如果同时检测到 Docker 和 containerd，则优先选择 Docker。 这是必然的，因为 Docker 18.09 附带了 containerd 并且两者都是可以检测到的， 即使你仅安装了 Docker。 如果检测到其他两个或多个运行时，kubeadm 输出错误信息并退出。

kubelet 通过内置的 `dockershim` CRI 实现与 Docker 集成。



***使用官方脚本安装 docker***【Linux 通用】

```sh
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

也可以使用国内 daocloud 一键安装命令

```sh
curl -sSL https://get.daocloud.io/docker | sh
```



***使用 apt 安装 docker***【Ubuntu 不推荐，太长了】

```sh
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
    
curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/ \
  $(lsb_release -cs) \
  stable"

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```


##### 配置 Docker 守护程序

- 使用 systemd 来管理容器的 cgroup。

- 配置 docker 的镜像源（加速镜像拉取速度）。

```sh
cat <<EOF | sudo tee /etc/docker/daemon.json
{
	"registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"],
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m"
  },
  "storage-driver": "overlay2"
}
EOF

sudo systemctl daemon-reload
sudo systemctl restart docker
```


##### 安装 kubeadm、kubelet 和 kubectl

你需要在每台机器上安装以下的软件包：

- `kubeadm`：用来初始化集群的指令。
- `kubelet`：在集群中的每个节点上用来启动 Pod 和容器等。
- `kubectl`：用来与集群通信的命令行工具。

> kubeadm **不能** 帮你安装或者管理 `kubelet` 或 `kubectl`，所以你需要 确保它们与通过 kubeadm 安装的控制平面的版本相匹配。 如果不这样做，则存在发生版本偏差的风险，可能会导致一些预料之外的错误和问题。 然而，控制平面与 kubelet 间的相差一个次要版本不一致是支持的，但 kubelet 的版本不可以超过 API 服务器的版本。 例如，1.7.0 版本的 kubelet 可以完全兼容 1.8.0 版本的 API 服务器，反之则不可以。



1、更新 `apt` 包索引并安装使用 Kubernetes `apt` 仓库所需要的包：

```shell
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
```

2、下载 Google Cloud 公开签名秘钥：（谷歌连不上，我们用阿里云的）

```shell
wget https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg && mv apt-key.gpg /usr/share/keyrings/kubernetes-archive-keyring.gpg
```

3、添加 Kubernetes `apt` 仓库：（同理，谷歌连不上，我们用阿里云的）

```shell
echo "deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```

因为使用阿里云的仓库，需要解决 public key 问题，执行下面命令：

```sh
cat /usr/share/keyrings/kubernetes-archive-keyring.gpg | sudo apt-key add -
```

4、更新 `apt` 包索引，安装 kubelet、kubeadm 和 kubectl，并锁定其版本：

```shell
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```


##### 配置 cgroup 驱动程序

容器运行时和 kubelet 都具有名字为 ["cgroup driver"](https://kubernetes.io/zh/docs/setup/production-environment/container-runtimes/) 的属性，该属性对于在 Linux 机器上管理 CGroups 而言非常重要。

默认 systemd

**警告：**

你需要确保容器运行时（docker）和 kubelet 所使用的是相同的 cgroup 驱动，否则 kubelet 进程会失败。

相关细节可参见[配置 cgroup 驱动](https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/configure-cgroup-driver/)。



#### Kubeadm 启动 k8s 集群


##### 初始化控制平面节点

请执行命令：

```sh
kubeadm init --apiserver-advertise-address=192.168.60.160 --image-repository registry.aliyuncs.com/google_containers  --service-cidr=10.96.0.0/12  --pod-network-cidr=10.244.0.0/16
```

参数说明：

- `--apiserver-advertise-address`        当前主机 IP
- `--image-repository`                               指定镜像仓库
- `--kubernetes-version`                           指定当前版本
- `--service-cidr`                                        指定 service 网段
- `--pod-network-cidr`                                指定 pod 网段 

如果想要非 root 用户使用 k8s 集群，创建以下文件：

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```


##### 安装 CNI 网络插件

查看 节点 状态

```sh
kubectl get node
```

上面的状态还是NotReady，下面我们需要安装网络插件，来进行联网访问：

```sh
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# ........... 部署需要时间，还请耐心等待 ...........

kubectl get pods -n kube-system
```

运行后的结果为Ready状态

```sh
NAME                     STATUS   ROLES                  AGE   VERSION
ubuntu-virtual-machine   Ready    control-plane,master   15h   v1.23.5
```


<!-- endtab -->

{% endtabs %}

## Kubernetes Study First

> B 站视频学习：【尚硅谷】Kubernetes（k8s）入门到实战教程丨全新升级完整版
> 时间：2023年4月28日
> 作者：BBigSun


这是一份关于 **B 站视频学习：【尚硅谷】Kubernetes（k8s）入门到实战教程丨全新升级完整版** 整理的笔记，记录一下个人的学习过程，完结后应该是用不更新了。

## 前置内容

如果有基础，跳过；如果没基础，快速过一遍。

1. [Linux 操作系统](linux-quick-learning.md)
2. [Docker](docker-quick-learning.md)


## 一、Kubernetes 概述和架构

### Kubernetes 简介

Kubernetes，首字母 K，尾字母 s，中间 8 个字母，简称 K8s。

### Kubernetes 功能

***自动装箱***

- 基于容器对应用运行环境的资源配置要求自动部署应用容器

***自我修复***

- 当容器失败时，会对容器进行重启

- 当所部署的 Node 节点有问题时，会对容器进行重新部署和重新调度

- 当容器未通过监控检查时，会关闭此容器直到容器正常运行时，才会对外提供服务

***水平扩展***

- 通过简单的命令、用户 UI 界面或基于 CPU 等资源使用情况，对应用容器进行规模扩大或规模剪裁

- 当我们有大量的请求来临时，我们可以增加副本数量，从而达到水平扩展的效果

***服务发现***

- 用户不需使用额外的服务发现机制，就能够基于 Kubernetes 自身能力实现服务发现和负载均衡

***滚动更新***

- 可以根据应用的变化，对应用容器运行的应用，进行一次性或批量式更新

***版本回退***

- 可以根据应用部署情况，对应用容器运行的应用，进行历史版本即时回退

***密钥和配置管理***

- 在不需要重新构建镜像的情况下，可以部署和更新密钥和应用配置，类似热部署。

***存储编排***

- 自动实现存储系统挂载及应用，特别对有状态应用实现数据持久化非常重要

- 存储系统可以来自于本地目录、网络存储 (NFS、Gluster、Ceph 等）、公共云存储服务

***批处理***

- 提供一次性任务，定时任务；满足批量数据处理和分析的场景

### Kubernetes 架构和组件

***Kuebrnetes 架构***

- Kubernetes 架构主要包含两部分：Master（主控节点）和 Work node（工作节点）。

![](https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/k8s-architecture01.png)

![](https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/k8s-architecture02.png)

![](https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/k8s-architecture03.png)



***Kubernetes 组件***

- **Master**：主控节点
  - API Server：集群统一入口，以 restful 风格进行操作，同时交给 etcd 存储。
    - 提供认证、授权、访问控制、API 注册和发现等机制。
  - scheduler：节点的调度，选择 node 节点应用部署。
  - controller-manager：处理集群中常规后台任务，一个资源对应一个控制器。
  - etcd：存储系统，用于保存集群中的相关数据。

- **Worker node**：工作节点
  - Kubelet：master 派到 node 节点代表，管理本机容器。
    - 一个集群中每个节点上运行的代理，它保证容器都运行在 Pod 中。
    - 负责维护容器的生命周期，同时也负责 Volume(CSI) 和 网络 (CNI) 的管理。
  - kube-proxy：提供网络代理，负载均衡等操作。
- **Container Runtime**：容器运行环境
  - 容器运行环境是负责运行容器的软件。
  - Kubernetes 支持多个容器运行环境：Docker、containerd、cri-o、rktlet 以及任何实现 Kubernetes CRI （容器运行环境接口） 的软件。
- fluentd：是一个守护进程，它有助于提升集群层面日志。

### Kubernetes 核心概念

***Pod***

- Pod 是 K8s 中最小的单元
- 一组容器的集合
- 共享网络【一个 Pod 中的所有容器共享同一网络】
- 生命周期是短暂的（服务器重启后，就找不到了）

***Volume***

- 声明在 Pod 容器中可访问的文件目录
- 可以被挂载到 Pod 中一个或多个容器指定路径下
- 支持多种后端存储抽象【本地存储、分布式存储、云存储】

***Controller***

- 确保预期的 pod 副本数量【ReplicaSet】
- 无状态应用部署【Deployment】
  - 无状态就是指，不需要依赖于网络或者 ip

- 有状态应用部署【StatefulSet】
  - 有状态需要特定的条件

- 确保所有的 node 运行同一个 pod 【DaemonSet】

- 一次性任务和定时任务【Job 和 CronJob】

***Deployment***

- 定义一组 Pod 副本数目，版本等
- 通过控制器【Controller】维持 Pod 数目【自动回复失败的 Pod】
- 通过控制器以指定的策略控制版本【滚动升级、回滚等】

***Service***

- 定义一组 pod 的访问规则
- Pod 的负载均衡，提供一个或多个 Pod 的稳定访问地址
- 支持多种方式【ClusterIP、NodePort、LoadBalancer】

***Label***

- label：标签，用于对象资源查询，筛选

***Namespace***

- 命名空间，逻辑隔离
- 一个集群内部的逻辑隔离机制【鉴权、资源】
- 每个资源都属于一个 namespace
- 同一个 namespace 所有资源不能重复
- 不同 namespace 可以资源名重复

***API***

- 我们通过 Kubernetes 的 API 来操作整个集群
- 同时我们可以通过 kubectl 、ui、curl 最终发送 http + json/yaml 方式的请求给 API Server，然后控制整个 K8S 集群，K8S 中所有的资源对象都可以采用 yaml 或 json 格式的文件定义或描述

### Kubernetes 工作原理

![](https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/k8s-principle01.png)



## 二、Kubernetes 集群部署

### 使用 kubeadm 部署

kubeadm 是官方社区推出的一个用于快速部署 kubernetes 集群的客户端工具。

这个工具能通过两条指令完成一个 kubernetes 集群的部署：

```sh
# 创建一个 Master 节点
kubeadm init

# 将一个 Worker node 节点加入到当前集群中
kubeadm join < Master 节点的 IP 和端口 >
```

####  *安装要求*

在开始之前，部署 Kubernetes 集群机器需要满足以下几个条件：

- 一台或多台机器，操作系统 CentOS7.9。
- 硬件配置：2GB 或更多 RAM，**2 个 CPU** 或更多 CPU，硬盘 20GB 或更多。
- 可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点。
- 禁止 swap 分区。

#### *安装步骤*

- **准备虚拟机**：准备三台虚拟机，并安装操作系统 CentOS 7.9。
- **系统初始化**：对三个刚安装好的操作系统进行初始化操作。
- **安装 k8s 组件**：在三台虚拟机上安装 `docker` `kubelet` `kubeadm` `kubectl`。
- **kubeadm init**：使用 `kubeadm init`命令，创建一个 Master 节点。
- **kubeadm join** ：使用 `kubeadm join`命令，将一个 Worker node 节点加入到当前集群中。
- **集群联网测试**：配置 CNI 网络插件，拉取 nginx 进行网络测试。

#### *准备虚拟机*

如果不会创建虚拟机，可以查看 [安装 VMware Workstation](https://www.bbigsun.com/300.html) 和 [使用 VMware Workstation 创建 CentOS 虚拟机](https://www.bbigsun.com/245.html)  这两篇文章。

| 主机名称   | 节点类型 | IP             | 配置      |
| ---------- | -------- | -------------- | --------- |
| k8smaster1 | master   | 192.168.60.151 | 2U 2G 20G |
| k8snode1   | node     | 192.168.60.152 | 2U 2G 20G |
| k8snode2   | node     | 192.168.60.153 | 2U 2G 20G |

```sh
# 根据规划设置主机名【k8smaster1 节点上操作】
hostnamectl set-hostname ks8master1
# 根据规划设置主机名【k8snode1 节点上操作】
hostnamectl set-hostname k8snode1
# 根据规划设置主机名【k8snode2 节点操作】
hostnamectl set-hostname k8snode2

# 在三台虚拟机上配置本地 hosts
cat >> /etc/hosts << EOF
192.168.60.151 k8smaster1
192.168.60.152 k8snode1
192.168.60.153 k8snode2
EOF
```

#### *系统初始化*

对三台虚拟机进行初始化操作：

```sh
# 关闭防火墙
systemctl stop firewalld
# 禁用防火墙
systemctl disable firewalld

# 关闭 selinux
# 临时关闭【立即生效】告警，不启用，Permissive，查看使用 getenforce 命令
setenforce 0  
# 永久关闭【重启生效】
sed -i 's/SELINUX=enforcing/\SELINUX=disabled/' /etc/selinux/config  

# 关闭 swap
# 临时关闭【立即生效】查看使用 free 命令
swapoff -a 
# 永久关闭【重启生效】
sed -ri 's/.*swap.*/#&/' /etc/fstab

# 将桥接的 IPv4 流量传递到 iptables 的链
cat > /etc/sysctl.d/k8s.conf << EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
# 使 k8s 配置生效
sysctl --system  

# 时间同步
yum install ntpdate -y
ntpdate time.windows.com
```

#### *安装 k8s 组件*

- **kubeadm**：k8s 集群部署客户端工具
- **kubelet**：k8s 集群核心组件
- **kubectl**：k8s 集群命令行工具
- **docker**：k8s 集群默认 CRI（容器运行时）

**1、安装 docker**

```sh
# 配置 docker 的 yum 源【阿里云】
cat >/etc/yum.repos.d/docker.repo<<EOF
[docker-ce-edge]
name=Docker CE Edge - \$basearch
baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\$basearch/edge
enabled=1
gpgcheck=1
gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg
EOF

# yum 方式安装 docker
yum -y install docker-ce
# 查看 docker 版本
docker --version

# 配置 docker 的镜像源【阿里云】
cat >> /etc/docker/daemon.json << EOF
{
  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"]
}
EOF

# 运行 docker 自启
systemctl enable docker
# 启动 docker
systemctl start docker
# 查看 docker 状态
systemctl status docker
```

**2、安装 kubeadm，kubelet 和 kubectl**

```sh
# 配置 k8s 的 yum 源【阿里云】
cat > /etc/yum.repos.d/kubernetes.repo << EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

# 安装 kubelet、kubeadm、kubectl，同时指定版本 1.18.0
yum install -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0
# 设置开机自启【这里暂时先不启动 kubelet】
systemctl enable kubelet
```

####  *kubeadm init*

在 `k8smaster1` 上执行 `kubeadm init` 命令：

```sh
kubeadm init --apiserver-advertise-address=192.168.60.151 --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.18.0 --service-cidr=10.96.0.0/12  --pod-network-cidr=10.244.0.0/16
```

参数说明：

- --apiserver-advertise-address：当前主机 IP
- --image-repository：指定镜像源仓库
- --kubernetes-version：指定安装版本
- --service-cidr：service 可用 IP 范围
- --pod-network-cidr：pod 可用 IP 范围

*由于默认拉取镜像地址 k8s.gcr.io 国内无法访问，这里指定阿里云镜像仓库地址，【执行上述命令会比较慢，因为后台其实已经在拉取镜像了】，我们 可以使用 docker images 命令查看已经拉取的镜像。*

部署成功后，系统提示运行以下命令使用 `kubectl`：

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

执行完成后，我们使用下面命令，查看我们正在运行的节点：

```sh
kubectl get nodes
```

#### *kubeadm join*

在 `k8snode1` 和 `k8snode2` 上，执行 `kubeadm join` 命令向集群中添加新节点：

*注意，以下的命令是在 `k8smaster1` 上执行 `kubeadm init` 命令后给出的，**需要复制自己机器上生成的***

```sh
kubeadm join 192.168.60.151:6443 --token 8j6ui9.gyr4i156u30y80xf \
    --discovery-token-ca-cert-hash sha256:eda1380256a62d8733f4bddf926f148e57cf9d1a3a58fb45dd6e80768af5a500
```

如果你未保存 join 命令或者 token 过期（默认 token 有效期为 24 小时）导致 node 节点无法加入集群。这时就需要在 ` k8smatser1` 上重新创建 token，命令如下：

```sh
kubeadm token create --print-join-command
```

当我们把两个 node 节点都加入集群后，在 `k8smaster1` 节点上执行下面命令查看 node 节点情况：

```sh
kubectl get nodes
```

#### *集群联网测试*

查看 node 节点状态后，发现 node 节点状态是 NotReady，因为此时集群还未联网，下面我们需要部署网络插件，来进行联网访问：

```sh
# 下载网络插件 flannel
wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 使用 yml 文件部署 flannel。执行命令后，需要耐心的等待一会儿...
kubectl apply -f kube-flannel.yml

# 查看 pods 状态。运行成功后的结果为 Ready 状态
kubectl get pods -n kube-system
```

【提示】如果上述操作完成后，还存在某个节点处于 NotReady 状态，可以在 Master 将该节点删除，重新加入集群。

```sh
### 将 k8snode1 删除后重新加入集群 ###
# 在 k8smaster1 节点上操作，删除 k8snode1 节点
kubectl delete node k8snode1

# 在 k8snode1 节点上操作，重置 k8snode1 节点
kubeadm reset
# 在 k8snode1 节点上操作，k8snode1 节点加入集群
kubeadm join 192.168.60.151:6443 --token 8j6ui9.gyr4i156u30y80xf     --discovery-token-ca-cert-hash sha256:eda1380256a62d8733f4bddf926f148e57cf9d1a3a58fb45dd6e80768af5a500
```

创建一个 nginx pod，测试网络是否联通：

```sh
# 使用 nginx 镜像创建一个 pod
kubectl create deployment nginx --image=nginx

# 查看 pod 状态，如果出现 Running 状态的时候，表示已经成功运行了
kubectl get pod

# 下面我们就需要将端口暴露出去，让其它外界能够访问
kubectl expose deployment nginx --port=80 --type=NodePort

# 查看容器对外映射的本地端口，容器的 80 端口映射到了本地的 30529 端口
kubectl get pod,svc

# 通过 curl 命令测试网络
curl http://192.168.60.151:30529/
```

使用宿主机浏览器，访问如下地址，查看 nginx 是否成功启动：

```sh
http://192.168.60.151:30529/
```

#### *错误汇总*

**错误一**

在执行 Kubernetes init 方法的时候，出现这个问题

```
error execution phase preflight: [preflight] Some fatal errors occurred:
	[ERROR NumCPU]: the number of available CPUs 1 is less than the required 2
```

是因为 VMware 设置的核数为 1，而 K8S 需要的最低核数应该是 2，调整核数重启系统即可

**错误二**

我们在给 k8snode1 节点使用 kubernetes join 命令的时候，出现以下错误

```
error execution phase preflight: [preflight] Some fatal errors occurred:
	[ERROR Swap]: running with swap on is not supported. Please disable swap
```

错误原因是我们需要关闭 swap【可能是永久关闭 swap 时没有重启生效】

```sh
# 关闭 swap
# 临时关闭【立即生效】
swapoff -a 
# 永久关闭【重启生效】
sed -ri 's/.*swap.*/#&/' /etc/fstab
```

**错误三**

在给 k8snode1 节点使用 kubernetes join 命令的时候，出现以下错误

```
The HTTP call equal to 'curl -sSL http://localhost:10248/healthz' failed with error: Get http://localhost:10248/healthz: dial tcp [::1]:10248: connect: connection refused
```

解决方法，首先需要到 k8smaster1 节点，创建一个文件

```sh
# 创建文件夹
mkdir /etc/systemd/system/kubelet.service.d

# 创建文件
vim /etc/systemd/system/kubelet.service.d/10-kubeadm.conf

# 添加如下内容
Environment="KUBELET_SYSTEM_PODS_ARGS=--pod-manifest-path=/etc/kubernetes/manifests --allow-privileged=true --fail-swap-on=false"

# 重置
kubeadm reset
```

接着删除刚刚创建的配置目录

```sh
rm -rf $HOME/.kube
```

然后在 k8smaster1 重新初始化

```sh
kubeadm init --apiserver-advertise-address=92.168.60.151:6443 --image-repository registry.aliyuncs.com/google_containers --kubernetes-version v1.18.0 --service-cidr=10.96.0.0/12  --pod-network-cidr=10.244.0.0/16
```

初始完成后，我们再到 k8snode1 节点，执行 kubeadm join 命令，加入到 k8smaster1【下面这条命令是 k8smaster1 初始化后自动生成的】

```sh
kubeadm join 192.168.60.151:6443 --token c7a7ou.z00fzlb01d76r37s \
    --discovery-token-ca-cert-hash sha256:9c3f3cc3f726c6ff8bdff14e46b1a856e3b8a4cbbe30cab185f6c5ee453aeea5
```

添加完成后，我们使用下面命令，查看节点是否成功添加

```sh
kubectl get nodes
```

**错误四**

我们再执行查看节点的时候， kubectl get nodes 会出现问题

```sh
Unable to connect to the server: x509: certificate signed by unknown authority (possibly because of "crypto/rsa: verification error" while trying to verify candidate authority certificate "kubernetes")
```

这是因为我们之前创建的配置文件还存在，也就是这些配置

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

我们需要做的就是把配置文件删除，然后重新执行一下

```sh
rm -rf $HOME/.kube
```

然后再次创建一下即可

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

这个问题主要是因为我们在执行 kubeadm reset 的时候，没有把 $HOME/.kube 给移除掉，再次创建时就会出现问题了

**错误五**

安装的时候，出现以下错误

```sh
Another app is currently holding the yum lock; waiting for it to exit...
```

是因为 yum 上锁占用，解决方法

```sh
yum -y install docker-ce
```

**错误六**

在使用下面命令，添加 k8snode1 节点到集群上的时候

```sh
kubeadm join 192.168.60.151:6443 --token jkcz0t.3c40t0bqqz5g8wsb  --discovery-token-ca-cert-hash sha256:bc494eeab6b7bac64c0861da16084504626e5a95ba7ede7b9c2dc7571ca4c9e5
```

然后出现了这个错误

```sh
[root@k8smaster1 ~]# kubeadm join 192.168.60.151:6443 --token jkcz0t.3c40t0bqqz5g8wsb     --discovery-token-ca-cert-hash sha256:bc494eeab6b7bac64c0861da16084504626e5a95ba7ede7b9c2dc7571ca4c9e5
W1117 06:55:11.220907   11230 join.go:346] [preflight] WARNING: JoinControlPane.controlPlane settings will be ignored when control-plane flag is not set.
[preflight] Running pre-flight checks
	[WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". Please follow the guide at https://kubernetes.io/docs/setup/cri/
error execution phase preflight: [preflight] Some fatal errors occurred:
	[ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```

出于安全考虑，Linux 系统**默认是禁止数据包转发**的。所谓**转发即当主机拥有多于一块的网卡时，其中一块收到数据包，根据数据包的目的 ip 地址将包发往本机另一网卡，该网卡根据路由表继续发送数据包**。这通常就是路由器所要实现的功能。也就是说 **/proc/sys/net/ipv4/ip_forward** 文件的值不支持转发

- 0：禁止
- 1：转发

所以我们需要将值修改成 1 即可

```sh
echo “1” > /proc/sys/net/ipv4/ip_forward
```

修改完成后，重新执行命令即可

### 使用源码部署

参考资料：https://blog.csdn.net/qq_40942490/article/details/114022294

> 源码部署这里，正在重构，写的不是很清楚。建议理解为主。

####  *安装要求*

在开始之前，部署 Kubernetes 集群机器需要满足以下几个条件：

- 一台或多台机器，操作系统 CentOS7.9。
- 硬件配置：2GB 或更多 RAM，**2 个 CPU** 或更多 CPU，硬盘 20GB 或更多.
- 可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点。
- 禁止 swap 分区。

#### *安装步骤*

- **准备虚拟机**：准备三台虚拟机，并安装操作系统 CentOS 7.9。
- **系统初始化**：对三个刚安装好的操作系统进行初始化操作。
- **部署 etcd 集群**：在三台虚拟机上部署 `etcd` 集群。
- **安装 docker**：在三台虚拟机上安装 `docker`（容器进行时）。
- **部署 mastber 组件**：在 master 节点上安装 `kube-apiserver`、`kube-controller-manager`、`kube-scheduler` 。
- **部署 node 组件**：在 node 节点上安装 `kubelet`、`kube-proxy` 。
- **部署 CNI 网络插件**：使用 master 节点部署 CNI 网络插件，用于节点之间的网络连通。
- **测试 kubernetes 集群**：通过创建一个 nginx pod，测试 k8s 集群是否能正常工作。

#### *准备虚拟机*

如果不会创建虚拟机，可以查看 [安装 CentOS 系统](linux-install-centos.md)  这篇文章。

| 主机名称   | 节点类型 | IP             | 配置      |
| ---------- | -------- | -------------- | --------- |
| k8smaster1 | master   | 192.168.60.151 | 2U 2G 20G |
| k8snode1   | node     | 192.168.60.152 | 2U 2G 20G |
| k8snode2   | node     | 192.168.60.153 | 2U 2G 20G |

```sh
# 根据规划设置主机名【k8smaster1 节点上操作】
hostnamectl set-hostname ks8master1
# 根据规划设置主机名【k8snode1 节点上操作】
hostnamectl set-hostname k8snode1
# 根据规划设置主机名【k8snode2 节点操作】
hostnamectl set-hostname k8snode2

# 在三台虚拟机上配置本地 hosts
cat >> /etc/hosts << EOF
192.168.60.151 k8smaster1
192.168.60.152 k8snode1
192.168.60.153 k8snode2
EOF
```

#### *系统初始化*

在每台机器上执行下面的命令：

```sh
# 关闭防火墙
systemctl stop firewalld
# 禁用防火墙
systemctl disable firewalld

# 关闭 selinux
# 临时关闭【立即生效】告警，不启用，Permissive，查看使用 getenforce 命令
setenforce 0  
# 永久关闭【重启生效】
sed -i 's/SELINUX=enforcing/\SELINUX=disabled/' /etc/selinux/config  

# 关闭 swap
# 临时关闭【立即生效】查看使用 free 命令
swapoff -a 
# 永久关闭【重启生效】
sed -ri 's/.*swap.*/#&/' /etc/fstab

# 将桥接的 IPv4 流量传递到 iptables 的链
cat > /etc/sysctl.d/k8s.conf << EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
# 使 k8s 配置生效
sysctl --system  

# 时间同步
yum install ntpdate -y
ntpdate time.windows.com
```

#### *部署 etcd 集群*

etcd 是一个分布式键值存储系统，Kubernetes 使用 etcd 进行数据存储，所以先准备一个 etcd 数据库，为了解决 Etcd 单点故障，采用集群方式部署，这里使用 3 台虚拟机组建集群，可容忍一台机器故障，当然也可以使用 5 台虚拟机组建集群，可以容忍 2 台机器故障。

**1、在 k8smaster1 上为 etcd 自签证书**

创建工作目录：

```sh
mkdir -p TLS/{etcd,k8s}
cd TLS/etcd/
```

准备 cfssl 证书生成工具：

```sh
wget https://pkg.cfssl.org/R1.2/cfssl_linux-amd64
wget https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64
wget https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64

chmod +x cfssl_linux-amd64 cfssljson_linux-amd64 cfssl-certinfo_linux-amd64

mv cfssl_linux-amd64 /usr/local/bin/cfssl
mv cfssljson_linux-amd64 /usr/local/bin/cfssljson
mv cfssl-certinfo_linux-amd64 /usr/local/bin/cfssl-certinfo
```

使用自签 CA 生成 etcd 证书：

```sh
### 创建自签 CA ###
cat > ca-config.json<<EOF
{
    "signing": {
        "default": {
            "expiry": "87600h"
        },
        "profiles": {
            "www": {
                "expiry": "87600h",
                "usages": [
                    "signing",
                    "key encipherment",
                    "server auth",
                    "client auth"
                ]
            }
        }
    }
}
EOF

cat > ca-csr.json<<EOF
{
    "CN": "etcd CA",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "Beijing",
            "BL": "Beijing"
        }
    ]
}
EOF

### 签发 etcd 证书 ###
cfssl gencert -initca ca-csr.json | cfssljson -bare ca - && ls *pem
```

使用自签 CA 签发 etcd HTTPS 证书：

> 创建证书申请文件：（文件 hosts 字段中 IP 为所有 etcd 节点的集群内部通信 IP，一个都不能少！为了 方便后期扩容可以多写几个预留的 IP）

```sh
### 创建自签 CA ###
cat > server-csr.json << EOF
{
    "CN": "etcd",
    "hosts": [
        "192.168.60.151",
        "192.168.60.152",
        "192.168.60.153"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "name": [
        {
            "C": "CN",
            "L": "Beijing",
            "SL": "Beijing"
        }
    ]
}
EOF

###  签发 etcd https 证书 ###
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=www server-csr.json | cfssljson -bare server && ls server*pem
```

**2、在 k8smaster1 上部署 etcd**

下载 etcd 二进制包：

```sh
wget https://github.com/etcd-io/etcd/releases/download/v3.4.9/etcd-v3.4.9-linux-amd64.tar.gz
```

安装 etcd：

```sh
mkdir -p /opt/etcd/{bin,cfg,ssl} 
tar -zxvf etcd-v3.4.9-linux-amd64.tar.gz
mv etcd-v3.4.9-linux-amd64/{etcd,etcdctl} /opt/etcd/bin/
cp ~/TLS/etcd/ca*pem ~/TLS/etcd/server*pem /opt/etcd/ssl/
```

创建配置文件：

```sh
##### k8smaster1 etcd-1 配置文件 #####
cat > /opt/etcd/cfg/etcd.conf << EOF
#[Member]
ETCD_NAME="etcd-1"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.60.151:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.60.151:2379"
#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.60.151:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.60.151:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.60.151:2380,etcd-2=https://192.168.60.152:2380,etcd-3=https://192.168.60.153:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF

# 名词解释
# ETCD_NAME：节点名称，集群中唯一
# ETCD_DATA_DIR：数据目录
# ETCD_LISTEN_PEER_URLS：集群通信监听地址
# ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址
# ETCD_INITIAL_ADVERTISE_PEER_URLS：集群通告地址
# ETCD_ADVERTISE_CLIENT_URLS：客户端通告地址
# ETCD_INITIAL_CLUSTER：集群节点地址
# ETCD_INITIAL_CLUSTER_TOKEN：集群 Token
# ETCD_INITIAL_CLUSTER_STATE：加入集群的当前状态，new 是新集群，existing 表示加入 已有集群
```

创建 etcd.service：

```sh
cat > /usr/lib/systemd/system/etcd.service << EOF
[Unit]
Description=Etcd Server
After=network.target
After=network-online.target
Wants=network-online.target
[Service]
Type=notify
EnvironmentFile=/opt/etcd/cfg/etcd.conf
ExecStart=/opt/etcd/bin/etcd \
--cert-file=/opt/etcd/ssl/server.pem \
--key-file=/opt/etcd/ssl/server-key.pem \
--peer-cert-file=/opt/etcd/ssl/server.pem \
--peer-key-file=/opt/etcd/ssl/server-key.pem \
--trusted-ca-file=/opt/etcd/ssl/ca.pem \
--peer-trusted-ca-file=/opt/etcd/ssl/ca.pem \
--logger=zap
Restart=on-failure
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
EOF
```

**3、在 k8smaster1 上转发 etcd 到 node 节点**

```sh
###### 转发到 k8snode1 ######
scp -r /opt/etcd/ root@192.168.60.152:/opt/
scp -r /usr/lib/systemd/system/etcd.service root@192.168.60.152:/usr/lib/systemd/system/
###### 转发到 k8snode2 ######
scp -r /opt/etcd/ root@192.168.60.153:/opt/
scp -r /usr/lib/systemd/system/etcd.service root@192.168.60.153:/usr/lib/systemd/system/
```

**4、修改 node 节点上 etcd 的配置文件：修改 IP 和名字**

```sh
##### k8sndoe1 etcd-2 配置文件 #####
cat > /opt/etcd/cfg/etcd.conf << EOF
#[Member]
ETCD_NAME="etcd-2"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.60.152:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.60.152:2379"
#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.60.152:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.60.152:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.60.151:2380,etcd-2=https://192.168.60.152:2380,etcd-3=https://192.168.60.153:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF

##### k8sndoe2 etcd-3 配置文件 #####
cat > /opt/etcd/cfg/etcd.conf << EOF
#[Member]
ETCD_NAME="etcd-3"
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"
ETCD_LISTEN_PEER_URLS="https://192.168.60.153:2380"
ETCD_LISTEN_CLIENT_URLS="https://192.168.60.153:2379"
#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.60.153:2380"
ETCD_ADVERTISE_CLIENT_URLS="https://192.168.60.153:2379"
ETCD_INITIAL_CLUSTER="etcd-1=https://192.168.60.151:2380,etcd-2=https://192.168.60.152:2380,etcd-3=https://192.168.60.153:2380"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
EOF
```

**5、启动 etcd 并设置开机启动**

在三台虚拟机上依次执行以下命令，启动 etcd：

```sh
systemctl daemon-reload
systemctl start etcd
systemctl enable etcd
```

启动 etcd 后，在 k8smatser1 上查看 etcd 集群状态：

```sh
/opt/etcd/bin/etcdctl --cacert=/opt/etcd/ssl/ca.pem --cert=/opt/etcd/ssl/server.pem --key=/opt/etcd/ssl/server-key.pem --endpoints="https://192.168.60.151:2379,https://192.168.60.152:2379,https://192.168.60.153:2379" endpoint status --write-out=table
```

#### *安装 docker*

docker 是 k8s 集群的容器进行时，所有 k8s 节点均要安装。这里使用源码包安装 docker，如果为了节约时间，也可以使用 yum 包管理工具来安装 docker。

**1、在 k8smaster1 上安装 docker**

```sh
wget https://download.docker.com/linux/static/stable/x86_64/docker-20.10.3.tgz
tar -zxvf docker-20.10.3.tgz
mv docker /usr/bin
```

使用 systemd 管理 docker：

```sh
cat > /usr/lib/systemd/system/docker.service << EOF
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target
[Service]
Type=notify
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP $MAINPID
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TimeoutStartSec=0
Delegate=yes
KillMode=process
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s
[Install]
WantedBy=multi-user.target
EOF
```

为 docker 镜像仓库配置阿里云加速：

```sh
mkdir /etc/docker
cat > /etc/docker/daemon.json << EOF
{
  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"]
}
EOF
```

**2、在 k8smaster1 上转发 docker 到 node 节点**

```sh
##### 转发到 k8snode1 #####
scp -r /usr/bin/docker/ root@192.168.60.152:/usr/bin/
scp -r /usr/lib/systemd/system/docker.service root@192.168.60.152:/usr/lib/systemd/system/
scp -r /etc/docker/ root@192.168.60.152:/etc/
##### 转发到 k8snode2 #####
scp -r /usr/bin/docker/ root@192.168.60.153:/usr/bin/
scp -r /usr/lib/systemd/system/docker.service root@192.168.60.153:/usr/lib/systemd/system/
scp -r /etc/docker/ root@192.168.60.153:/etc/
```

**3、启动 docker 并设置开机自启**

在三台虚拟机上依次执行以下命令：

```sh
systemctl daemon-reload
systemctl start docker
systemctl enable docker
systemctl status docker
```

#### *部署 master 组件*

master 节点核心组件为以下 3 个，以下操作均在 k8smatser1 上进行：

- kube-apiserver
- kuber-controller-manager
- kube-scheduler

下载 k8s 组件二进制包（包含 master 组件和 node 组件）：

```sh
# 下载地址：https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.20.md
# kubernetes-server-linux-amd64.tar.gz 包含了 master 和 node 的所有组件
# 这里提供两个网速较快的下载地址
wget https://storage.googleapis.com/kubernetes-release/release/v1.20.1/kubernetes-server-linux-amd64.tar.gz
wget https://dl.k8s.io/v1.19.0/kubernetes-server-linux-amd64.tar.gz
```

使用二进制包部署 k8s 组件：

```sh
mkdir -p /opt/kubernetes/{bin,cfg,ssl,logs}
tar -zxvf kubernetes-server-linux-amd64.tar.gz
cd kubernetes/server/bin
# master 节点所需组件
cp kube-apiserver kube-scheduler kube-controller-manager /opt/kubernetes/bin
# node 节点所需组件
cp kubelet kube-proxy /opt/kubernetes/bin
# master 与 node 节点都需要的组件
cp kubectl /usr/bin/

# 使用 scp 命令，转发到 node 节点
##### 转发到 k8snode1 #####
scp -r /opt/kubernetes root@192.168.60.152:/opt
scp -r /usr/bin/kubectl root@192.168.60.152:/usr/bin
##### 转发到 k8snode2 #####
scp -r /opt/kubernetes root@192.168.60.153:/opt
scp -r /usr/bin/kubectl root@192.168.60.153:/usr/bin
```

接下来只需要，配置一下相关组件即可。

**1、配置 kube-apiserver**

```sh
cd ~/TLS/k8s
```

使用自签 CA 签发 kube-apiserver 证书：

```sh
### 创建自签 CA ###
cat > ca-config.json << EOF
{
  "signing": {
    "default": {
      "expiry": "87600h"
    },
    "profiles": {
      "kubernetes": {
         "expiry": "87600h",
         "usages": [
            "signing",
            "key encipherment",
            "server auth",
            "client auth"
        ]
      }
    }
  }
}
EOF

cat > ca-csr.json << EOF
{
    "CN": "kubernetes",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "Beijing",
            "ST": "Beijing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}
EOF

###  签发 kube-apiserver 证书 ###
cfssl gencert -initca ca-csr.json | cfssljson -bare ca - && ls *pem
```

使用自签 CA 签发 kube-apiserver HTTPS 证书：

```sh
### 创建自签 CA ###
cat > server-csr.json << EOF
{
    "CN": "kubernetes",
    "hosts": [
      "10.0.0.1",
      "127.0.0.1",
      "192.168.60.151",
      "192.168.60.152",
      "192.168.60.153",
      "kubernetes",
      "kubernetes.default",
      "kubernetes.default.svc",
      "kubernetes.default.svc.cluster",
      "kubernetes.default.svc.cluster.local"
    ],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "L": "BeiJing",
            "ST": "BeiJing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}
EOF

### 签发 kube-apiserver https 证书 ###
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes server-csr.json | cfssljson -bare server && ls server*pem
```

把刚生成的证书拷贝到 /opt/kubernetes/ssl/ 下：

```sh
cp ~/TLS/k8s/ca*pem ~/TLS/k8s/server*pem /opt/kubernetes/ssl/

##### 转发到 k8snode1 #####
scp -r /opt/kubernetes/ssl root@192.168.60.152:/opt/kubernetes
##### 转发到 k8snode2 #####
scp -r /opt/kubernetes/ssl root@192.168.60.153:/opt/kubernetes
```

创建 token 文件：

```sh
cat > /opt/kubernetes/cfg/token.csv << EOF
c47ffb939f5ca36231d9e3121a252940,kubelet-bootstrap,10001,"system:node-bootstrapper"
EOF
```

>  格式：token，用户名，UID，用户组 token 也可自行生成替换【建议暂时不要替换，直接 copy 代码，熟练掌握后再自行创建】：

```sh
head -c 16 /dev/urandom | od -An -t x | tr -d ' '
```

生成 kube-apiserver 配置文件：

```sh
cat > /opt/kubernetes/cfg/kube-apiserver.conf << EOF
KUBE_APISERVER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--etcd-servers=https://192.168.60.151:2379,https://192.168.60.152:2379,https://192.168.60.153:2379 \\
--bind-address=192.168.60.151 \\
--secure-port=6443 \\
--advertise-address=192.168.60.151 \\
--allow-privileged=true \\
--service-cluster-ip-range=10.0.0.0/24 \\
--enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \\
--authorization-mode=RBAC,Node \\
--enable-bootstrap-token-auth=true \\
--token-auth-file=/opt/kubernetes/cfg/token.csv \\
--service-node-port-range=30000-32767 \\
--kubelet-client-certificate=/opt/kubernetes/ssl/server.pem \\
--kubelet-client-key=/opt/kubernetes/ssl/server-key.pem \\
--tls-cert-file=/opt/kubernetes/ssl/server.pem  \\
--tls-private-key-file=/opt/kubernetes/ssl/server-key.pem \\
--client-ca-file=/opt/kubernetes/ssl/ca.pem \\
--service-account-key-file=/opt/kubernetes/ssl/ca-key.pem \\
--etcd-cafile=/opt/etcd/ssl/ca.pem \\
--etcd-certfile=/opt/etcd/ssl/server.pem \\
--etcd-keyfile=/opt/etcd/ssl/server-key.pem \\
--audit-log-maxage=30 \\
--audit-log-maxbackup=3 \\
--audit-log-maxsize=100 \\
--audit-log-path=/opt/kubernetes/logs/k8s-audit.log"
EOF

# 注：上面两个、\ 第一个是转义符，第二个是换行符，使用转义符是为了使用 EOF 保留换 行符。
# –logtostderr：启用日志
# —v：日志等级
# –log-dir：日志目录
# –etcd-servers：etcd 集群地址
# –bind-address：监听地址
# –secure-port：https 安全端口
# –advertise-address：集群通告地址
# –allow-privileged：启用授权
# –service-cluster-ip-range：Service 虚拟 IP 地址段
# –enable-admission-plugins：准入控制模块
# –authorization-mode：认证授权，启用 RBAC 授权和节点自管理
# –enable-bootstrap-token-auth：启用 TLS bootstrap 机制
# –token-auth-file：bootstrap token 文件
# –service-node-port-range：Service nodeport 类型默认分配端口范围
# –kubelet-client-xxx：apiserver 访问 kubelet 客户端证书
# –tls-xxx-file：apiserver https 证书
# –etcd-xxxfile：连接 Etcd 集群证书
# –audit-log-xxx：审计日志
```

使用 systemd 管理 apiserver：

```sh
cat > /usr/lib/systemd/system/kube-apiserver.service << EOF
[Unit]
Description=Kubernetes API Server
Documentation=https://github.com/kubernetes/kubernetes
[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-apiserver.conf
ExecStart=/opt/kubernetes/bin/kube-apiserver \$KUBE_APISERVER_OPTS
Restart=on-failure
[Install]
WantedBy=multi-user.target
EOF
```

启动并设置开机启动：

```sh
systemctl daemon-reload
systemctl start kube-apiserver
systemctl enable kube-apiserver
systemctl status kube-apiserver 
```

授权 kubelet-bootstrap 用户允许请求证书：

```sh
kubectl create clusterrolebinding kubelet-bootstrap \
--clusterrole=system:node-bootstrapper \
--user=kubelet-bootstrap
```

**2、配置 kube-controller-manager**

生成 kube-controller-manager 配置文件：

```sh
cat > /opt/kubernetes/cfg/kube-controller-manager.conf << EOF
KUBE_CONTROLLER_MANAGER_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--leader-elect=true \\
--master=127.0.0.1:8080 \\
--bind-address=127.0.0.1 \\
--allocate-node-cidrs=true \\
--cluster-cidr=10.244.0.0/16 \\
--service-cluster-ip-range=10.0.0.0/24 \\
--cluster-signing-cert-file=/opt/kubernetes/ssl/ca.pem \\
--cluster-signing-key-file=/opt/kubernetes/ssl/ca-key.pem  \\
--root-ca-file=/opt/kubernetes/ssl/ca.pem \\
--service-account-private-key-file=/opt/kubernetes/ssl/ca-key.pem \\
--experimental-cluster-signing-duration=87600h0m0s"
EOF

# –master：通过本地非安全本地端口 8080 连接 apiserver。
# –leader-elect：当该组件启动多个时，自动选举（HA）
# –cluster-signing-cert-file/–cluster-signing-key-file：自动为 kubelet 颁发证书的 CA，与 apiserver 保持一致
```

使用 systemd 管理 kube-controller-manager：

```sh
cat > /usr/lib/systemd/system/kube-controller-manager.service << EOF
[Unit]
Description=Kubernetes Controller Manager
Documentation=https://github.com/kubernetes/kubernetes
[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-controller-manager.conf
ExecStart=/opt/kubernetes/bin/kube-controller-manager \$KUBE_CONTROLLER_MANAGER_OPTS
Restart=on-failure
[Install]
WantedBy=multi-user.target
EOF
```

启动并设置开机启动：

```sh
systemctl daemon-reload
systemctl start kube-controller-manager
systemctl enable kube-controller-manager
systemctl status kube-controller-manager
```

**3、部署 kube-scheduler**

生成 kube-scheduler 配置文件：

```sh
cat > /opt/kubernetes/cfg/kube-scheduler.conf << EOF
KUBE_SCHEDULER_OPTS="--logtostderr=false \
--v=2 \
--log-dir=/opt/kubernetes/logs \
--leader-elect \
--master=127.0.0.1:8080 \
--bind-address=127.0.0.1"
EOF

# 参数说明
# –master：通过本地非安全本地端口 8080 连接 apiserver。
# –leader-elect：当该组件启动多个时，自动选举（HA）
```

使用 systemd 管理 kube-scheduler：

```sh
cat > /usr/lib/systemd/system/kube-scheduler.service << EOF
[Unit]
Description=Kubernetes Scheduler
Documentation=https://github.com/kubernetes/kubernetes
[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-scheduler.conf
ExecStart=/opt/kubernetes/bin/kube-scheduler \$KUBE_SCHEDULER_OPTS
Restart=on-failure
[Install]
WantedBy=multi-user.target
EOF
```

启动并设置开机启动：

```sh
systemctl daemon-reload
systemctl start kube-scheduler
systemctl enable kube-scheduler
systemctl status kube-scheduler
```

**4、使用 kubectl 命令行工具查看集群状态**

所有组件都已经启动成功，通过 kubectl 工具查看当前集群组件状态：

```sh
kubectl get cs
```

#### *部署 node 组件*

node 核心组件主要为以下 2 个，以下操作主要在 k8snode1 上执行：

- kubelet
- kube-proxy

**1、安装 kubelet**

```sh
mkdir -p /opt/kubernetes/{bin,cfg,ssl,logs}
```

生成 kubelet.conf 配置文件：

```sh
cat > /opt/kubernetes/cfg/kubelet.conf << EOF
KUBELET_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--hostname-override=m1 \\
--network-plugin=cni \\
--kubeconfig=/opt/kubernetes/cfg/kubelet.kubeconfig \\
--bootstrap-kubeconfig=/opt/kubernetes/cfg/bootstrap.kubeconfig \\
--config=/opt/kubernetes/cfg/kubelet-config.yml \\
--cert-dir=/opt/kubernetes/ssl \\
--pod-infra-container-image=lizhenliang/pause-amd64:3.0"
EOF

# –hostname-override：显示名称，集群中唯一
# –network-plugin：启用 CNI
# –kubeconfig：空路径，会自动生成，后面用于连接 apiserver
# –bootstrap-kubeconfig：首次启动向 apiserver 申请证书
# –config：配置参数文件
# –cert-dir：kubelet 证书生成目录
# –pod-infra-container-image：管理 Pod 网络容器的镜像
```

生成 kubelet-config.yml 配置文件：

```sh
cat > /opt/kubernetes/cfg/kubelet-config.yml << EOF
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0
port: 10250
readOnlyPort: 10255
cgroupDriver: cgroupfs
clusterDNS:
- 10.0.0.2
clusterDomain: cluster.local 
failSwapOn: false
authentication:
  anonymous:
    enabled: false
  webhook:
    cacheTTL: 2m0s
    enabled: true
  x509:
    clientCAFile: /opt/kubernetes/ssl/ca.pem 
authorization:
  mode: Webhook
  webhook:
    cacheAuthorizedTTL: 5m0s
    cacheUnauthorizedTTL: 30s
evictionHard:
  imagefs.available: 15%
  memory.available: 100Mi
  nodefs.available: 10%
  nodefs.inodesFree: 5%
maxOpenFiles: 1000000
maxPods: 110
EOF
```

生成 bootstrap.kubeconfig 文件：
```sh
# apiserver IP:PORT
KUBE_APISERVER="https://192.168.60.151:6443" 
# 与 token.csv 里保持一致
TOKEN="c47ffb939f5ca36231d9e3121a252940" 
```

生成 kubelet bootstrap kubeconfig 配置文件：

```sh
kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=bootstrap.kubeconfig
kubectl config set-credentials "kubelet-bootstrap" \
  --token=${TOKEN} \
  --kubeconfig=bootstrap.kubeconfig
kubectl config set-context default \
  --cluster=kubernetes \
  --user="kubelet-bootstrap" \
  --kubeconfig=bootstrap.kubeconfig
kubectl config use-context default --kubeconfig=bootstrap.kubeconfig

mv bootstrap.kubeconfig /opt/kubernetes/cfg
```

systemd 管理 kubelet：

```sh
cat > /usr/lib/systemd/system/kubelet.service << EOF
[Unit]
Description=Kubernetes Kubelet
After=docker.service
[Service]
EnvironmentFile=/opt/kubernetes/cfg/kubelet.conf
ExecStart=/opt/kubernetes/bin/kubelet \$KUBELET_OPTS
Restart=on-failure
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
EOF
```

启动并设置开机启动：

```sh
systemctl daemon-reload
systemctl start kubelet
systemctl enable kubelet
systemctl status kubelet
```

在 k8smaster1 上批准 kubelet 证书申请并加入集群：

```sh
# 查看 kubelet 证书请求
kubectl get csr

###    输出结果
###    NAME                                                   AGE    SIGNERNAME                                    REQUESTOR           CONDITION
###    node-csr-uCEGPOIiDdlLODKts8J658HrFq9CZ--K6M4G7bjhk8A   6m3s   kubernetes.io/kube-apiserver-client-kubelet   kubelet-bootstrap   Pending

# 批准申请
kubectl certificate approve node-csr-uCEGPOIiDdlLODKts8J658HrFq9CZ--K6M4G7bjhk8A

# 查看节点
kubectl get node
```

注：由于网络插件还没有部署，节点会没有准备就绪 NotReady

**2、部署 kube-proxy**

```sh
cat > /opt/kubernetes/cfg/kube-proxy.conf << EOF
KUBE_PROXY_OPTS="--logtostderr=false \\
--v=2 \\
--log-dir=/opt/kubernetes/logs \\
--config=/opt/kubernetes/cfg/kube-proxy-config.yml"
EOF
```

```sh
cat > /opt/kubernetes/cfg/kube-proxy-config.yml << EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /opt/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: m1
clusterCIDR: 10.0.0.0/24
EOF
```

生成 kube-proxy.kubeconfig 文件【**k8smaster1 生成再传到 k8snode1 和 k8snode2**】：

```sh
# 切换工作目录
cd ~/TLS/k8s
```

```sh
# 创建证书请求文件
cat > kube-proxy-csr.json << EOF
{
  "CN": "system:kube-proxy",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "L": "BeiJing",
      "ST": "BeiJing",
      "O": "k8s",
      "OU": "System"
    }
  ]
}
EOF
```

```sh
# 生成证书
cfssl gencert -ca=ca.pem -ca-key=ca-key.pem -config=ca-config.json -profile=kubernetes kube-proxy-csr.json | cfssljson -bare kube-proxy
```

```sh
# 生成 kubeconfig 文件
KUBE_APISERVER="https://192.168.60.151:6443"
```

```sh
kubectl config set-cluster kubernetes \
  --certificate-authority=/opt/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=kube-proxy.kubeconfig
kubectl config set-credentials kube-proxy \
  --client-certificate=./kube-proxy.pem \
  --client-key=./kube-proxy-key.pem \
  --embed-certs=true \
  --kubeconfig=kube-proxy.kubeconfig
kubectl config set-context default \
  --cluster=kubernetes \
  --user=kube-proxy \
  --kubeconfig=kube-proxy.kubeconfig
kubectl config use-context default --kubeconfig=kube-proxy.kubeconfig

##### 转发到 k8snode1 #####
scp -r kube-proxy.kubeconfig root@192.168.60.152:/opt/kubernetes/cfg/
##### 转发到 k8snode2 #####
scp -r kube-proxy.kubeconfig root@192.168.60.153:/opt/kubernetes/cfg/
```

systemd 管理 kube-proxy：

```sh
cat > /usr/lib/systemd/system/kube-proxy.service << EOF
[Unit]
Description=Kubernetes Proxy
After=network.target
[Service]
EnvironmentFile=/opt/kubernetes/cfg/kube-proxy.conf
ExecStart=/opt/kubernetes/bin/kube-proxy \$KUBE_PROXY_OPTS
Restart=on-failure
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
EOF
```

启动并设置开机启动：

```sh
systemctl daemon-reload
systemctl start kube-proxy
systemctl enable kube-proxy
systemctl status kube-proxy
```

#### *部署 CNI 网络插件*

下载 CNI 网络插件：

```sh
wget https://github.com/containernetworking/plugins/releases/download/v0.8.6/cni-plugins-linux-amd64-v0.8.6.tgz
```

安装插件：

```sh
mkdir -p /opt/cni/bin
tar -zxvf cni-plugins-linux-amd64-v0.8.6.tgz -C /opt/cni/bin
```

【k8smaster1 节点操作】：

```sh
wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
kubectl apply -f kube-flannel.yml
```

#### *测试 kubernetes 集群*

在 Kubernetes 集群中创建一个 pod，验证是否正常运行【master 节点操作】：

```sh
# 下载 nginx 【会联网拉取 nginx 镜像】
kubectl create deployment nginx --image=nginx
# 查看状态
kubectl get pod
```

如果我们出现 Running 状态的时候，表示已经成功运行了

下面我们就需要将端口暴露出去，让其它外界能够访问

```sh
# 暴露端口
kubectl expose deployment nginx --port=80 --type=NodePort
# 查看一下对外的端口
kubectl get pod,svc
```

能够看到，我们已经成功暴露了 80 端口 到 30529 上

我们到我们的宿主机浏览器上，访问如下地址

```sh
http://192.168.177.130:30529/
```

发现我们的 nginx 已经成功启动了

## 三、Kubernetes 核心概念

### kubernetes 集群命令行工具 kubectl

####  kubectl 概述

kubectl 是 Kubernetes 集群的命令行工具，通过 kubectl 能够对集群本身进行管理，并能够在集群上进行容器化应用的安装和部署。

####  kubectl 命令格式

```
kubectl [command] [type] [name] [flags]
```

参数：

- command：指定要对资源执行的操作，例如 create、get、describe、delete

- type：指定资源类型，资源类型是大小写敏感的，开发者能够以单数 、复数 和 缩略的形式

  ```sh
  kubectl get pod pod1
  kubectl get pods pod1
  kubectl get po pod1
  ```

- name：指定资源的名称，名称也是大小写敏感的，如果省略名称，则会显示所有的资源，例如

  ```sh
  kubectl get pods
  ```

- flags：指定可选的参数，例如，可用 -s 或者 -server 参数指定 Kubernetes API server 的地址和端口

####  kubectl 帮助命令

```sh
# 获取 kubectl 的命令
kubectl --help

# 获取某个命令的介绍和使用
kubectl get --help
kubectl create --help
```

####  kubectl 基础命令

| 命令    | 介绍                                           |
| ------- | ---------------------------------------------- |
| create  | 通过文件名或标准输入创建资源                   |
| expose  | 将一个资源公开为一个新的 Service                |
| run     | 在集群中运行一个特定的镜像                     |
| set     | 在对象上设置特定的功能                         |
| get     | 显示一个或多个资源                             |
| explain | 文档参考资料                                   |
| edit    | 使用默认的编辑器编辑一个资源                   |
| delete  | 通过文件名，标准输入，资源名称或标签来删除资源 |

####  kubectl 部署命令

| 命令           | 介绍                                               |
| -------------- | -------------------------------------------------- |
| rollout        | 管理资源的发布                                     |
| rolling-update | 对给定的复制控制器滚动更新                         |
| scale          | 扩容或缩容 Pod 数量，Deployment、ReplicaSet、RC 或 Job |
| autoscale      | 创建一个自动选择扩容或缩容并设置 Pod 数量            |

#### kubectl 集群管理命令

| 命令         | 介绍                           |
| ------------ | ------------------------------ |
| certificate  | 修改证书资源                   |
| cluster-info | 显示集群信息                   |
| top          | 显示资源 (CPU/M)                |
| cordon       | 标记节点不可调度               |
| uncordon     | 标记节点可被调度               |
| drain        | 驱逐节点上的应用，准备下线维护 |
| taint        | 修改节点 taint 标记              |

#### kubectl 故障和调试命令

| 命令         | 介绍                                                         |
| ------------ | ------------------------------------------------------------ |
| describe     | 显示特定资源或资源组的详细信息                               |
| logs         | 在一个 Pod 中打印一个容器日志，如果 Pod 只有一个容器，容器名称是可选的 |
| attach       | 附加到一个运行的容器                                         |
| exec         | 执行命令到容器                                               |
| port-forward | 转发一个或多个                                               |
| proxy        | 运行一个 proxy 到 Kubernetes API Server                         |
| cp           | 拷贝文件或目录到容器中                                       |
| auth         | 检查授权                                                     |

####  kubectl 其它命令

| 命令         | 介绍                                                |
| ------------ | --------------------------------------------------- |
| apply        | 通过文件名或标准输入对资源应用配置                  |
| patch        | 使用补丁修改、更新资源的字段                        |
| replace      | 通过文件名或标准输入替换一个资源                    |
| convert      | 不同的 API 版本之间转换配置文件                       |
| label        | 更新资源上的标签                                    |
| annotate     | 更新资源上的注释                                    |
| completion   | 用于实现 kubectl 工具自动补全                         |
| api-versions | 打印受支持的 API 版本                                 |
| config       | 修改 kubeconfig 文件（用于访问 API，比如配置认证信息） |
| help         | 所有命令帮助                                        |
| plugin       | 运行一个命令行插件                                  |
| version      | 打印客户端和服务版本信息                            |

### Kubernetes 集群 YAML 文件详解

> 参考资料：[YAML 入门教程 | 菜鸟教程](https://www.runoob.com/w3cnote/yaml-intro.html)

#### YAML 概述

- YAML 文件 : 就是资源清单文件，用于资源编排。
- YAML : 仍是一种标记语言。为了强调这种语言以数据做为中心，而不是以标记语言为重点。
- YAML : 是一个可读性高，用来表达数据序列的格式。

#### YAML 基本语法

- 使用空格做为缩进
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
- 低版本缩进时不允许使用 Tab 键，只允许使用空格
- 使用#标识注释，从这个字符一直到行尾，都会被解释器忽略
- 使用 --- 表示新的 yaml 文件开始

####  YAML 数据结构

对象：键值对的集合，又称为映射 (mapping) / 哈希（hashes） / 字典（dictionary）

```
# 对象类型：对象的一组键值对，使用冒号结构表示
name: Tom
age: 18

# yaml 也允许另一种写法，将所有键值对写成一个行内对象
hash: {name: Tom, age: 18}
```

数组：

```
# 数组类型：一组连词线开头的行，构成一个数组
People
- Tom
- Jack

# 数组也可以采用行内表示法
People: [Tom, Jack]
```

####  YAML 组成部分

主要分为了两部分，一个是控制器的定义 和 被控制的对象。

在一个 YAML 文件的控制器定义中，有很多属性名称

| 属性名称   | 介绍       |
| ---------- | ---------- |
| apiVersion | API 版本    |
| kind       | 资源类型   |
| metadata   | 资源元数据 |
| spec       | 资源规格   |
| replicas   | 副本数量   |
| selector   | 标签选择器 |
| template   | Pod 模板    |
| metadata   | Pod 元数据  |
| spec       | Pod 规格    |
| containers | 容器配置   |

####  YAML 快速编写

一般来说，我们很少自己手写 YAML 文件，因为这里面涉及到了很多内容，我们一般都会借助工具来创建

**1、使用 kubectl create 命令**

这种方式一般用于资源没有部署的时候，我们可以直接创建一个 YAML 配置文件

```sh
# 尝试运行，并不会真正的创建镜像
kubectl create deployment web --image=nginx -o yaml --dry-run
```

或者我们可以输出到一个文件中

```sh
kubectl create deployment web --image=nginx -o yaml --dry-run > hello.yaml
```

然后我们就在文件中直接修改即可

**2、使用 kubectl get 命令导出 yaml 文件**

可以首先查看一个目前已经部署的镜像

```sh
kubectl get deploy
```

然后我们导出 nginx 的配置

```sh
kubectl get deploy nginx -o=yaml --export > nginx.yaml
```

然后会生成一个 `nginx.yaml` 的配置文件

### Pod

####  Pod 概述

**1、Pod 基本概念**

- 最小部署的单元
- Pod 里面是由一个或多个容器组成【一组容器的集合】
- 一个 pod 中的容器是共享网络命名空间
- Pod 是短暂的
- 每个 Pod 包含一个或多个紧密相关的用户业务容器

**2、Pod 存在的意义**

- 创建容器使用 docker，一个 docker 对应一个容器，一个容器运行一个应用进程
- Pod 是多进程设计，运用多个应用程序，也就是一个 Pod 里面有多个容器，而一个容器里面运行一个应用程序
- Pod 的存在是为了亲密性应用
  - 两个应用之间进行交互
  - 网络之间的调用【通过 127.0.0.1 或 socket】
  - 两个应用之间需要频繁调用

**3、k8s 业务类型**

>  Pod 是 K8S 集群中所有业务类型的基础，可以把 Pod 看作运行在 K8S 集群上的小机器人，不同类型的业务就需要不同类型的小机器人去执行。目前 K8S 的业务主要可以分为以下几种

- 长期伺服型：long-running
- 批处理型：batch
- 节点后台支撑型：node-daemon
- 有状态应用型：stateful application

上述的几种类型，分别对应的小机器人控制器为：Deployment、Job、DaemonSet 和 StatefulSet （后面将介绍控制器）

#### Pod 实现机制

> Pod 主要有以下两大机制：共享网络 和 共享存储。

**1、共享网络**【容器通过 **namespace** 和 **group** 进行隔离】

Pod 中容器通信 过程：

- 同一个 namespace 下
- 在 Pod 中创建一个根容器： `pause 容器`
- 在 Pod 中创建业务容器 【nginx，redis 等】【创建时会添加到 `info 容器` 中】
- 在 `info 容器` 中会独立出 ip 地址，mac 地址，port 等信息，然后实现网络的共享

**2、共享存储**【Pod 持久化数据，专门存储到某个地方中，使用 Volumn 数据卷进行共享存储】

#### Pod 镜像拉取策略

> 我们以具体实例来说，拉取策略就是 `imagePullPolicy`

拉取策略主要分为了以下几种：

- `IfNotPresent`：默认值，镜像在宿主机上不存在才拉取
- `Always`：每次创建 Pod 都会重新拉取一次镜像
- `Never`：Pod 永远不会主动拉取这个镜像

#### Pod 资源限制

> 也就是我们 Pod 在进行调度的时候，可以对调度的资源进行限制，例如我们限制 Pod 调度是使用的资源是 2C4G，那么在调度对应的 node 节点时，只会占用对应的资源，对于不满足资源的节点，将不会进行调度。

这里分了两个部分：

- `request`：表示调度所需的资源
- `limits`：表示最大所占用的资源

#### Pod 重启机制

> 因为 Pod 中包含了很多个容器，假设某个容器出现问题了，那么就会触发 Pod 重启机制

重启策略主要分为以下三种：

- `Always`：当容器终止退出后，总是重启容器，默认策略 【nginx 等，需要不断提供服务】
- `OnFailure`：当容器异常退出（退出状态码非 0）时，才重启容器。
- `Never`：当容器终止退出，从不重启容器 【批量任务】

####  Pod 健康检查

**1、通过容器检查**

```sh
kubectl get pod
```

**2、通过应用检查**

> 但是有的时候，程序可能出现了 **Java** 堆内存溢出，程序还在运行，但是不能对外提供服务了，这个时候就不能通过容器检查来判断服务是否可用了。需要通过应用检查。

```sh
# 存活检查，如果检查失败，将杀死容器，根据 Pod 的 restartPolicy【重启策略】来操作
livenessProbe

# 就绪检查，如果检查失败，Kubernetes 会把 Pod 从 Service endpoints 中剔除
readinessProbe
```

Probe 支持以下三种检查方式

- `http Get`：发送 HTTP 请求，返回 200 - 400 范围状态码为成功
- `exec`：执行 Shell 命令返回状态码是 0 为成功
- `tcpSocket`：发起 TCP Socket 建立成功

####  Pod 调度策略

 创建 Pod 流程：

- 首先创建一个 pod，然后创建一个 API Server 和 Etcd【把创建出来的信息存储在 etcd 中】
- 然后创建 Scheduler，监控 API Server 是否有新的 Pod，如果有的话，会通过调度算法，把 pod 调度某个 node 上
- 在 node 节点，会通过 `kubelet -- apiserver `读取 etcd 拿到分配在当前 node 节点上的 pod，然后通过 docker 创建容器

### Controller

####  Controller 内容简介

- 什么是 Controler
- Pod 和 Controller 的关系
- Deployment 控制器应用场景
- yaml 文件字段说明
- Deployment 控制器部署应用
- 升级回滚
- 弹性收缩

#### Controller 概述

> Controller 是集群上管理和运行容器的对象

- Controller 是实际存在的
- Pod 是虚拟机的

####  Pod 和 Controller 的关系

Pod 是通过 Controller 实现应用的运维，比如弹性收缩，滚动升级。

Pod 和 Controller 之间是通过 label 标签建立关系，同时 Controller 又被称为控制器工作负载。

- Controller【控制器】【工作负载】`selector: app:nginx`
- Pod【容器】`labels: app:nginx`

####  Deployment 控制器应用

> Deployment 表示用户对 K8S 集群的一次更新操作。

- Deployment 控制器可以部署无状态应用
- 管理 Pod 和 ReplicaSet
- 部署，滚动升级等功能
- 应用场景：web 服务，微服务

#### Deployment 部署应用

之前，使用 Deploment 部署应用，代码如下：【缺点：代码不好复用】

```sh
kubectrl create deployment web --image=nginx
```

现在，使用 YAML 文件进行配置：【快速编写 YAML 文件】

```sh
kubectl create deployment web --image=nginx -o yaml --dry-run > nginx.yaml
```

`nginx.yaml`  文件内容如下：【`selector `和 `label` 就是我们 Pod 和 Controller 之间建立关系的桥梁】

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  # Pod
  labels:
    app: web
  name: web
spec:
  replicas: 1
  # Controller
  selector:
    matchLabels:
      app: web
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: web
    spec:
      containers:
      - image: nginx
        name: nginx
        resources: {}
status: {}
```

现在，使用`nginx.yaml`文件创建镜像：

```sh
kubectl apply -f nginx.yaml
```

然后，对外暴露端口：

```sh
kubectl expose deployment web --port=80 --type=NodePort --target-port=80 --name=web1

# 参数说明
# --port：就是我们内部的端口号
# --target-port：就是暴露外面访问的端口号
# --name：名称
# --type：类型
```

同理，导出配置文件：

```sh
kubectl expose deployment web --port=80 --type=NodePort --target-port=80 --name=web1 -o yaml > web1.yaml
```

查看端口：

```sh
kubectl get pods,svc

# 输出结果
NAME                       READY   STATUS    RESTARTS   AGE
pod/web-5dcb957ccc-d89v9   1/1     Running   0          8m35s

NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
service/kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP        2d5h
service/web1         NodePort    10.111.61.143   <none>        80:30344/TCP   6s
```

然后我们访问对应的 url，即可看到 nginx 了 `http://192.168.60.151:30344/`

![](https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/k8s-nginx.png)

####  升级回滚和弹性收缩

- 升级： 假设从版本为 1.14 升级到 1.15 ，这就叫应用的升级【升级可以保证服务不中断】
- 回滚：从版本 1.15 变成 1.14，这就叫应用的回滚
- 弹性伸缩：我们根据不同的业务场景，来改变 Pod 的数量对外提供服务，这就是弹性伸缩

**1、创建一个 1.14 版本的 pod**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: web
  name: web
spec:
  replicas: 1
  selector:
    matchLabels:
      app: web
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: web
    spec:
      containers:
      # 修改 nginx 版本 1.14
      - image: nginx:1.14
        name: nginx
        resources: {}
status: {}
```

```sh
kubectl apply -f nginx.yaml
```

**2、应用升级**

```sh
kubectl set image deployment web nginx=nginx:1.15
```

升级过程：

```sh
[root@k8smaster ~]# kubectl set image deployment web nginx=nginx:1.15
deployment.apps/web image updated

# 首先是开始的 nginx 1.14 版本的 Pod 在运行，然后 1.15 版本的在创建
[root@k8smaster ~]# kubectl get pod
NAME                   READY   STATUS              RESTARTS   AGE
web-66bf4959f5-qhzsd   1/1     Running             0          52s
web-bbcf684cb-bbmqv    0/1     ContainerCreating   0          3s

# 然后在 1.15 版本创建完成后，就会暂停 1.14 版本
[root@k8smaster ~]# kubectl get pod
NAME                   READY   STATUS        RESTARTS   AGE
web-66bf4959f5-qhzsd   1/1     Terminating   0          67s
web-bbcf684cb-bbmqv    1/1     Running       0          18s

# 最后把 1.14 版本的 Pod 移除，完成我们的升级
[root@k8smaster ~]# kubectl get pod
NAME                  READY   STATUS    RESTARTS   AGE
web-bbcf684cb-bbmqv   1/1     Running   0          33s
```

> 我们在下载 1.15 版本，容器就处于 ContainerCreating 状态，然后下载完成后，就用 1.15 版本去替换 1.14 版本了，这么做的好处就是：升级可以保证服务不中断

**3、查看升级状态**

```sh
kubectl rollout status deployment web
```

**4、查看历史版本**

```sh
kubectl rollout history deployment web
```

**5、应用回滚**

```sh
# 回滚到上一版本
kubectl rollout undo deployment web

# 回滚到指定版本
kubectl rollout undo deployment web --to-revision=2
```

**6、弹性伸缩**

```sh
# 通过命令创建多个副本
kubectl scale deployment web --replicas=10

# 输出结果，等一会就会全部 Running
[root@k8smaster ~]# kubectl scale deployment web --replicas=10
deployment.apps/web scaled
[root@k8smaster ~]# kubectl get pod
NAME                  READY   STATUS              RESTARTS   AGE
web-bbcf684cb-2f2zl   0/1     ContainerCreating   0          4s
web-bbcf684cb-72pzr   0/1     ContainerCreating   0          4s
web-bbcf684cb-bbmqv   1/1     Running             0          3m9s
web-bbcf684cb-fgpgh   0/1     ContainerCreating   0          4s
web-bbcf684cb-fpk8d   0/1     ContainerCreating   0          4s
web-bbcf684cb-hqp4z   0/1     ContainerCreating   0          4s
web-bbcf684cb-htq2d   0/1     ContainerCreating   0          4s
web-bbcf684cb-lnkwx   0/1     ContainerCreating   0          4s
web-bbcf684cb-vmwb9   0/1     ContainerCreating   0          4s
web-bbcf684cb-vnk5w   0/1     ContainerCreating   0          4s
```

### Kubernetes 配置管理

####  Secret

> Secret 的主要作用就是加密数据

1、Secret 应用场景

​	对 用户名 和 密码 进行加密

2、Secret 三种类型

- `Opaque`：使用 base64 编码存储信息，可以通过 base64 --decode 解码获得原始数据，因此安全性弱。
- `kubernetes.io/dockerconfigjson`：用于存储 docker registry 的认证信息。
- `kubernetes.io/service-account-token`：用于被 serviceaccount 引用。serviceaccout 创建时 Kubernetes 会默认创建对应的 secret。Pod 如果使用了 serviceaccount，对应的 secret 会自动挂载到 Pod 的 /run/secrets/kubernetes.io/serviceaccount 目录中。

3、Secret 创建

（1）命令行方式创建 Secret

```sh
echo -n "admin" > ./username.txt
echo -n "1f1f1f1f1f" > ./password.txt

# 使用 kubectl create secret 命令创建 secret
kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt
#  secret/db-user-pass created

# 查看 secret
kubectl get secrets
#  NAME                  TYPE                                  DATA   AGE
#  db-user-pass          Opaque                                2      59s
```

（2）yaml 文件方式创建 Secret

```sh
echo -n 'admin' | base64
#  YWRtaW4=
echo -n '1f1f1f1f1f' | base64
#  MWYxZjFmMWYxZg==

# 创建 secret：创建 yaml 文件
cat > secret.yaml << EOF
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
  password: MWYxZjFmMWYxZg==
EOF

# 创建 secret：使用 yaml 文件创建 secret
kubectl create -f secret.yaml
#  secret/mysecret created

# 查看 secret
kubectl get secrets | grep mysecret
#  mysecret              Opaque                                2      32s

# 查看 secret 详细信息
kubectl describe secrets mysecret
# 查看 secret yaml 文件
kubectl get secrets mysecret -o yaml
```

4、Secret 使用【两种方式】

- 以 Volume 形式
- 以环境变量形式

（1）将 Secret 挂载到 Volume 中

```sh
cat > mypod1.yaml << EOF
apiVersion: v1
kind: Pod
metadata:
  name: mypod1
spec:
  containers:
  - name: mypod1
    image: redis
    volumeMounts:
    - name: foo
      mountPath: "/etc/foo"
      readOnly: true
  volumes:
  - name: foo
    secret:
      secretName: mysecret
EOF

kubectl create -f mypod1.yaml
#  pod/mypod1 created
kubectl get pods | grep mypod
#  mypod1                1/1     Running   0          48s
kubectl exec -it mypod1 /bin/bash

## 查看密码和用户名
root@mypod1:/data# cd /etc/foo/
root@mypod1:/etc/foo# ls
password  username
root@mypod1:/etc/foo# cat password 
1f1f1f1f1f
root@mypod1:/etc/foo# cat username 
admin
root@mypod1:/etc/foo# 
```

（2）将 Secret 设置为环境变量

```sh
cat > mypod2.yaml << EOF
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
spec:
  containers:
  - name: mypod2
    image: redis
    env:
      - name: SECRET_USERNAME
        valueFrom:
          secretKeyRef:
            name: mysecret
            key: username
      - name: SECRET_PASSWORD
        valueFrom:
          secretKeyRef:
            name: mysecret
            key: password
  restartPolicy: Never
EOF
  
kubectl create -f mypod2.yaml
#  pod/mypod2 created
kubectl get pods | grep mypod
#  mypod1                1/1     Running             0          4m39s
#  mypod2                0/1     ContainerCreating   0          6s
#  等   mypod2    running   之后在进入容器
kubectl exec -it mypod2 /bin/bash

## 查看环境变量
root@mypod2:/data# env | grep -E "USERNAME|PASSWORD"
SECRET_USERNAME=admin
SECRET_PASSWORD=1f1f1f1f1f
```

####  ConfigMap

> ConfigMap 作用是存储不加密的数据到 etcd 中

1、应用场景

​	配置文件

2、创建

（1）yaml 文件方式创建

```sh
cat > configmap-test01.yaml << EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: cm-test01
data:
  appconf01: value01
  appconf02: value02
EOF

kubectl create -f configmap-test01.yaml
```

（2）命令行方式创建

> 读取文件方式（也可以是目录）通过`--from-file`参数从文件中读取。可以指定 key 的名称，若不指定，则默认使用文件名为 key。

```sh
cat > test.properties << EOF
key01:value01
key02:value02
conf01: value03
EOF

kubectl create cm cm-test-file --from-file=test.properties
```

3、查询

```sh
# 查看 configmap 列表
kubectl get configmap
# 查看 configmap 详情
kubectl describe configmap cm-test01
kubectl describe configmap cm-test-file
kubectl describe cm cm-test-literal
# 查看 yaml 输出
kubectl get cm cm-test01 -o yaml
kubectl get configmap cm-test-file -o yaml
kubectl get cm cm-test-literal -o yaml
```

4、更新

```sh
# 方式一：edit
kubectl edit cm cm-test01
# 查看更新是否生效
kubectl describe cm cm-test01
# 方式二：apply
kubectl apply -f configmap-test01.yaml
```

5、删除

```sh
# 方式一：通过 yaml 文件删除
kubectl delete -f configmap-test01.yaml
# 方式二：直接删除资源
kubectl delete cm cm-test-file
```

6、使用 【yaml 文件有误，以下四种方式无误】

容器应用对 ConfigMap 的使用主要是两种：

- 通过环境变量获取 ConfigMap 的内容：`spec.env`和`spec.envFrom`
- 通过卷 volume 挂载的方式将 ConfigMap 的内容挂载到容器内部的文件或目录：`spec.volumes`

（1）`spec.env` 【环境变量】

```sh
vim pod-test01.yaml
apiVersion: v1
kind: Pod
metadata:
  name: cm-pod-test001
spec:
  containers:
  - name: cm-test
    image: tomcat:8
    command: [ "/bin/sh", "-c", "env | grep APP"]
    env:
    - name: APPCONF01 		# 定义环境变量的名称
      valueFrom:	  		# key “appconf01”的值获取
        configMapKeyRef:
          name: cm-test01	# 环境变量的值来自于 configmap cm-test01
          key: appconf01	# configmap 中的配置 key 为 appconf01
    - name: APPCONF02		# 定义环境变量的名称
      valueFrom:			# key “appconf02”的值获取
        configMapKeyRef: 
          name: cm-test01	# 环境变量的值来自于 configmap cm-test01
          key: appconf02	# configmap 中的配置 key 为 appconf02
  restartPolicy: Never		# 重启策略：从不。

kubectl create -f pod-test01.yaml
kubectl get pods | grep cm
kubectl logs cm-pod-test001
```

（2）`spec.envFrom` 【环境变量】

```sh
vim pod-test02.yaml
apiVersion: v1
kind: Pod
metadata:
  name: cm-pod-test002
spec:
  containers:
  - name: cm-test2
    image: tomcat:8
    command: [ "/bin/sh", "-c", "env"]
    envFrom:
    - configMapRef:
      name: cm-test01	# 根据 ConfigMap cm-test01 资源自动生成环境变量
  restartPolicy: Never

kubectl create -f pod-test02.yaml
kubectl get po
```

（3）指定 items【卷挂载方式】

```sh
vim pod-test03.yaml
apiVersion: v1
kind: Pod
metadata:
  name: cm-pod-test003
spec:
  containers:
  - name: cm-test3
    image: tomcat:8
    volumeMounts:
    - name: vm-01-1
      mountPath: /conf
  volumes:
  - name: vm-01-1
    configMap:
      name: cm-test-file
      items:
      - key: key-testproperties
        path: test.properties
  restartPolicy: Never

kubectl create -f pod-test03.yaml
kubectl get po
```

（4）不指定 items【卷挂载方式】

```sh
vim pod-test04.yaml
apiVersion: v1
kind: Pod
metadata:
  name: cm-pod-test004
spec:
  containers:
  - name: cm-test4
    image: tomcat:8
    volumeMounts:
    - name: vm-02-2
      mountPath: /conf
  volumes:
  - name: vm-02-2
    configMap:
      name: cm-test-file
  restartPolicy: Never

kubectl create -f pod-test04.yaml
kubectl get po

# 进入容器查看
kubectl exec -it cm-pod-test004 -c cm-test4 -- bash
root@cm-pod-test004:/usr/local/tomcat# ls /conf
```

### Kubernetes 集群安全机制

####  API-SERVER

> Kubernetes api-server 安全访问机制

当我们访问 K8S 集群时，都需要经过 apiserver【 apiserver 做统一协调】，每个请求到达 apiserver 需要经过三个安全关卡：`① 认证` `② 鉴权 ` `③ 准入控制`

- 访问过程中，需要证书、token、或者用户名和密码
- 如果访问 pod 需要 serviceAccount

![](https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/k8s-api-server.png)

**1、认证**

对外不暴露 8080 端口，只能内部访问，对外使用的端口 6443

客户端身份认证常用方式

- https 证书认证，基于 ca 证书
- http token 认证，通过 token 来识别用户
- http 基本认证，用户名 + 密码认证

**2、鉴权**

基于 RBAC 进行鉴权操作

基于角色访问控制

**3、准入控制**

就是准入控制器的列表，如果列表有请求内容就通过，没有的话 就拒绝

#### TLS

> Kubernetes 认证方式之客户端证书（TLS）

客户端证书（TLS）认证方式，也叫 HTTPS 双向认证。一般我们访问一个 https 网站，认证是单向的，只有客户端会验证服务端的身份，服务端不会管客户端身份如何。

####  RBAC 介绍

> Kubernetes 授权方式之 RBAC 
>
> 基于角色的访问控制，为某个角色设置访问内容，然后用户分配该角色后，就拥有该角色的访问权限

k8s 中有默认的几个角色

- role：特定命名空间访问权限
- ClusterRole：所有命名空间的访问权限

角色绑定

- roleBinding：角色绑定到主体
- ClusterRoleBinding：集群角色绑定到主体

主体

- user：用户
- group：用户组
- serviceAccount：服务账号

####  RBAC 鉴权

1、创建命名空间

```sh
# 查看已经存在的命名空间
kubectl get namespace
# 创建自己的命名空间
kubectl create ns mytest
```

2、命名空间内创建 Pod

> 如果不创建命名空间，Pod 默认在 default

```sh
kubectl run nginx --image=nginx -n mytest
```

3、创建角色

> 通过 rbac-role.yaml 进行创建
>
> tips: 这个角色只对 pod 有 get 和 list 权限

```sh
cat > rbac-role.yaml << EOF
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: mytest
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
EOF
```

通过 yaml 创建 role

```sh
# 创建
kubectl apply -f rbac-role.yaml
# 查看
kubectl get role -n mytest
```

4、创建角色绑定

通过 rbac-rolebinding.yaml 的方式，来创建我们的角色绑定

```sh
cat > rbac-rolebinding.yaml << EOF
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: mytest
  name: read-pods
subjects:
- kind: User
  name: lucy
  apiGroup: rbac.authorization.k8s.io
roleRef: 
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
EOF

kubectl apply -f rbac-rolebinding.yaml
kubectl get role,rolebinding -n mytest

#  NAME                                        CREATED AT
#  role.rbac.authorization.k8s.io/pod-reader   2022-01-04T03:05:57Z
#  NAME                                              ROLE              AGE
#  rolebinding.rbac.authorization.k8s.io/read-pods   Role/pod-reader   35s
```

## 四、Kubernetes 版本发布

>  接下来演示一下如何在 Kubernetes 集群中部署项目

### 容器交付流程

- 开发代码阶段
  - 编写代码
  - 编写 Dockerfile【打镜像做准备】
- 持续交付/集成
  - 代码编译打包
  - 制作镜像
  - 上传镜像仓库
- 应用部署
  - Pod
  - Service
  - Ingress
- 运维
  - 监控
  - 故障排查
  - 应用升级

###  k8s 部署 Python 项目流程

- 制作镜像【Dockerfile】
- 上传到镜像仓库【Dockerhub、阿里云、网易】
- 控制器部署镜像【Deployment】
- 对外暴露应用【Service、Ingress】
- 运维【监控、升级】

### k8s 部署 Python 项目

#### 下载 Python 项目

> 这里已经提前准备了一个 demo 项目
>
> git clone https://gitee.com/bbigsun/demo-python.git

```text
.
├── djangopro
│   ├── db.sqlite3
│   ├── djangopro
│   │   ├── asgi.py
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-310.pyc
│   │   │   ├── settings.cpython-310.pyc
│   │   │   ├── urls.cpython-310.pyc
│   │   │   └── wsgi.cpython-310.pyc
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── manage.py
├── Dockerfile
└── README.md
```

#### 制作镜像

> 这里已经写好了 Dockerfile

```dockerfile
FROM python:3.10
RUN pip install django -i https://pypi.tuna.tsinghua.edu.cn/simple
CMD mkdir -p /opt/demo-python
COPY  . /opt/demo-python
WORKDIR /opt/demo-python/djangopro
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

打包镜像：

```sh
cd demo-python
docker build . -t django:v1 -f Dockerfile
```

测试镜像：

```sh
docker run -d --name django -p 8000:8000 mydjango:v1
```

浏览器访问：http://<虚拟机IP>:8000

上传到镜像仓库：（本地仓库）

```sh
## 搭建私人仓库
mkdir -p /data/myregistry
docker pull registry:latest
docker run -d -p 5000:5000 --name my_registry --restart=always -v /data/myregistry:/var/lib/registry registry:latest

## 更改 docker 配置文件（在需要连接到私有仓库的机器上全部都执行一遍）
## 在 k8smaster k8snode1 k8snode2 上均执行一遍
cat > /etc/docker/daemon.json << EOF
{
  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"],
  "insecure-registries": ["192.168.60.151:5000"]
}
EOF
## 重启 docker，重启 registry（如果停止了的话）
systemctl restart docker  # 3 台机器上执行
docker start my_registry  # 主节点上执行（因为私人仓库在主节点上）
```

访问：`ip:5000/v2/_catalog`查看本地仓库镜像

<img src="https://img.onmicrosoft.cn/kubernetes-study-notes-master/_media/dockerregistry.png">

测试本地私有仓库：

```sh
docker tag mydjango:v1 192.168.60.151:5000/test/mydjango:v2
docker push 192.168.60.151:5000/test/mydjango:v2
```

访问：`ip:5000/v2/_catalog`查看本地仓库镜像

在 node 节点上测试：

```sh
docker pull 192.168.60.151:5000/test/mydjango:v2
```

#### 部署项目

```sh
kubectl create deployment test01 --image=192.168.60.151:5000/test/mydjango:v2 --dry-run -o yaml > test01.yaml
kubectl create -f test01.yaml
kubectl get pod -o wide
kubectl expose deployment test01 --port=8000 --target-port=8000 --type=NodePort

## 查看暴露的端口
[root@k8smaster test]# kubectl get svc
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
test01       NodePort    10.109.195.123   <none>        8000:31954/TCP   15s
kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP          6d

```

浏览器访问：`ip:31954`


## 写在最后

恭喜你完成了 Kubernetes 的学习，下一步是不是该考个证书验证一下？

1. [cka 考试指南](k8s-cka.md)
2. [cks 考试指南](k8s-cks.md)