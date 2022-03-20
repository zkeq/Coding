---
title: 笔记|使用WSL安装Linux系统并搭建本地局域网网盘
tags: [笔记]
description: 使用win11的wsl功能安装了linux系统ubuntn.<br>实现在win11下使用linux系统搭建的本地网盘来访问Windows的文件看电影的需求。
date: 2021-11-26 22:56:25
categories: [CMD]
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-26/1.png
---
#### 事情起因

- 发现自己的win11已经安装了一个wsl,就想折腾一下..
- 但是明明zfile有win版的,为啥还要多此一举呢?
  - `害, 就是瞎折腾呗....`


#### 安装软件

1. 应用商店搜索WSL选择安装的系统
2. 安装zfile: https://docs.zfile.vip
3. 安装之后发现只能通过虚拟机ip在本机访问
4. 但是想要实现其他设备访问网盘的需求,于是需要 `端口转发`

#### liunx zfile常用命令

```
 ~/zfile/bin/start.sh       # 启动项目
 ~/zfile/bin/stop.sh        # 停止项目
 ~/zfile/bin/restart.sh     # 重启项目
```



#### Powershell设置端口转发

##### liunx查看ip 

1. `ip a`
2. 记录下虚拟机的ip以及对应的端口

##### 设置端口转发

```cmd
netsh interface portproxy add v4tov4 listenport=81 listenaddress=0.0.0.0 connectport=8080 connectaddress=172.19.235.47 protocol=tcp
```



```cmd
netsh interface portproxy add v4tov4 listenport=【宿主机windows平台监听端口】 listenaddress=0.0.0.0 connectport=【wsl2平台监听端口】 connectaddress=【wsl2平台ip】protocol=tcp
```

##### 查看转发状态

```cmd
netsh interface portproxy show all
```

##### 删除端口转发

```cmd
netsh interface portproxy delete v4tov4 listenport=【宿主机windows平台监听端口】 listenaddress=0.0.0.0
```

可以了.
