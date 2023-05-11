---
title: Kubernetes | 概述部分 - Intro
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 该文档介绍了 Kubernetes，一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。文档包括 Kubernetes 的优势和与传统 PaaS 系统的不同之处，以及介绍了一些 Kubernetes 安装工具，如 kubectl、kind 和 minikube 等，以及 Kubernetes 的一些基础概念和相关的操作和技术。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-20 01:51:08
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

![Kubernetes.png (7634×5646) (onmicrosoft.cn)](https://img.onmicrosoft.cn/2023-04-20/Kubernetes.png)

- [Kubernetes 文档 | Kubernetes](https://kubernetes.io/zh-cn/docs/home/)

云计算比赛需要, 接下来一段时间学一下 Kubernetes .

**Kubernetes** 是一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。 Kubernetes 拥有一个庞大且快速增长的生态，其服务、支持和工具的使用范围相当广泛。

Kubernetes 不是传统的、包罗万象的 PaaS（平台即服务）系统。 由于 Kubernetes 是在容器级别运行，而非在硬件级别，它提供了 PaaS 产品共有的一些普遍适用的功能， 例如部署、扩展、负载均衡，允许用户集成他们的日志记录、监控和警报方案。 但是，Kubernetes 不是单体式（monolithic）系统，那些默认解决方案都是可选、可插拔的。 Kubernetes 为构建开发人员平台提供了基础，但是在重要的地方保留了用户选择权，能有更高的灵活性。


## **引子 - 安装工具**

### **kubectl**

Kubernetes 命令行工具 [kubectl](https://kubernetes.io/zh-cn/docs/reference/kubectl/kubectl/)， 让你可以对 Kubernetes 集群运行命令。 你可以使用 kubectl 来部署应用、监测和管理集群资源以及查看日志。

### **kind**

`[kind](<https://kind.sigs.k8s.io/>)` 让你能够在本地计算机上运行 Kubernetes。 `kind` 要求你安装并配置好 [Docker](https://docs.docker.com/get-docker/)。

kind 的 [Quick Start](https://kind.sigs.k8s.io/docs/user/quick-start/) 页面展示开始使用 `kind` 所需要完成的操作。

### **minikube**

与 `kind` 类似，`[minikube](<https://minikube.sigs.k8s.io/>)` 是一个工具， 能让你在本地运行 Kubernetes。 `minikube` 在你的个人计算机（包括 Windows、macOS 和 Linux PC）上运行一个一体化（all-in-one） 或多节点的本地 Kubernetes 集群，以便你来尝试 Kubernetes 或者开展每天的开发工作。

# **概述**

Kubernetes 是一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。 Kubernetes 拥有一个庞大且快速增长的生态，其服务、支持和工具的使用范围相当广泛。

**Kubernetes** 这个名字源于希腊语，意为 “舵手” 或 “飞行员”。k8s 这个缩写是因为 k 和 s 之间有八个字符的关系。 Google 在 2014 年开源了 Kubernetes 项目。 Kubernetes 建立在 [Google 大规模运行生产工作负载十几年经验](https://research.google/pubs/pub43438)的基础上， 结合了社区中最优秀的想法和实践。

容器因为其许多优势而变得流行，例如：

- 敏捷应用程序的创建和部署
- 持续开发、集成和部署
- 关注开发与运维的分离
- 可观察性
- 跨开发、测试和生产的环境一致性
- 跨云和操作系统发行版本的可移植性
- 以应用程序为中心的管理
- 松散耦合、分布式、弹性、解放的微服务
- 资源隔离
- 资源利用

Kubernetes 为你提供：

- **服务发现和负载均衡**
- **存储编排**
- **自动部署和回滚**
- **自动完成装箱计算**
- **自我修复**
- **密钥与配置管理**

## **Kubernetes 不是什么**

Kubernetes 不是传统的、包罗万象的 PaaS（平台即服务）系统。 由于 Kubernetes 是在容器级别运行，而非在硬件级别，它提供了 PaaS 产品共有的一些普遍适用的功能， 例如部署、扩展、负载均衡，允许用户集成他们的日志记录、监控和警报方案。 但是，Kubernetes 不是单体式（monolithic）系统，那些默认解决方案都是可选、可插拔的。 Kubernetes 为构建开发人员平台提供了基础，但是在重要的地方保留了用户选择权，能有更高的灵活性。

- Kubernetes：
  - 不限制支持的应用程序类型。
  - 不部署源代码，也不构建你的应用程序。
  - 不提供应用程序级别的服务作为内置服务。
  - 不是日志记录、监视或警报的解决方案。
  - 不提供也不要求配置用的语言、系统（例如 jsonnet）。
  - 不提供也不采用任何全面的机器配置、维护、管理或自我修复系统。
  - 此外，Kubernetes 不仅仅是一个编排系统，实际上它消除了编排的需要。

> SWARM 在大规模集群下也是可用的 但是功能并不强大
>
> 很多需要自己配置 Kubernetes 则弥补了这个缺点
>
> Kubernetes 功能全面 稳定 适合企业运行

> MESOS APACHE 分布式资源管理框架
>
> 2019-5 Twitter –> Kubernetes
>
> Docker Swarm 2019-07 阿里云宣布 Docker Swarm 剔除
>
> Kubernetes Google 10 年容器化基础架构 borg GO 语言 Borg特点：轻量级：消耗资源小开源弹性伸缩：平滑升级，可以随时释放无用资源负载均衡：IPVS

> 介绍说明： 前世今生 KUbernetes 框架 KUbernetes 关键字含义
>
> 基础概念： 什么是 Pod 控制器类型 K8S 网络通讯模式
>
> Kubernetes： 构建 K8S 集群
>
> 资源清单：资源 掌握资源清单的语法 编写 Pod 掌握 Pod 的生命周期 ***
>
> Pod 控制器：掌握各种控制器的特点以及使用定义方式
>
> 服务发现：掌握 SVC 原理及其构建方式
>
> 存储：掌握多种存储类型的特点 并且能够在不同环境中选择合适的存储方案（有自己的简介）
>
> 调度器：掌握调度器原理 能够根据要求把 Pod 定义到想要的节点运行
>
> 安全：集群的认证 鉴权 访问控制 原理及其流程
>
> HELM：Linux yum 掌握 HELM 原理 HELM 模板自定义 HELM 部署一些常用插件
>
> 运维：修改 Kubeadm 达到证书可用期限为 10 年 能够构建高可用的 Kubernetes 集群

> 服务分类有状态服务：DBMS无状态服务：LVS APACHE
>
> 高可用集群副本数据最好是 >= 3 奇数个

## 前世今生

## Borg 系统的架构

![image-20230421020015750](https://img.onmicrosoft.cn/k8s/202304210200775.png)

## K8s 系统的架构

![image-20230421021234486](https://img.onmicrosoft.cn/k8s/202304210212515.png)

### ETCD 数据库

> etcd 的官方将它定为成一个可信赖的分布式键值存储服务,它能够为整个分布式集群存储一些关键数据,协助分布式集群的正常运转.

![image-20230421021621376](https://img.onmicrosoft.cn/k8s/202304210216404.png)

#### Etcd 内部架构

![image-20230421034645405](https://img.onmicrosoft.cn/k8s/202304210346434.png)

- 完整 + 临时备份 // 防止增量备份太多, 造成费时费力
- 实时将数据库写入本地磁盘中就行优化

> CRI: Container Runtime Interface
>
> Kubernetes 基于容器技术，为容器化应用提供了一个高度自动化的部署、扩展和管理的平台。CRI（Container Runtime Interface）是 Kubernetes 中用于管理容器运行时的 API 接口，它定义了容器运行时应该实现的标准接口，使得 Kubernetes 中的容器运行时可以互换使用。Kubernetes 通过 CRI 接口与容器运行时进行通信，而容器运行时则负责管理容器的生命周期，包括创建、启动、停止和销毁等操作。目前，Kubernetes 常用的容器运行时包括 Docker、containerd 等，用户也可以自定义容器运行时来满足自己的需求。

### 各个服务的功能 

>APISERVER：所有服务访问统一入口
>CrontrollerManager：维持副本期望数目
>Scheduler：：负责介绍任务，选择合适的节点进行分配任务
>ETCD：键值对数据库  储存K8S集群所有重要信息（持久化）
>Kubelet：直接跟容器引擎交互实现容器的生命周期管理
>Kube-proxy：负责写入规则至 IPTABLES、IPVS 实现服务映射访问的
>COREDNS：可以为集群中的SVC创建一个域名IP的对应关系解析
>DASHBOARD：给 K8S 集群提供一个 B/S 结构访问体系
>INGRESS CONTROLLER：官方只能实现四层代理，INGRESS 可以实现七层代理
>FEDERATION：提供一个可以跨集群中心多K8S统一管理功能
>PROMETHEUS：提供K8S集群的监控能力
>ELK：提供 K8S 集群日志统一分析介入平台

#### Master 节点 核心组件

- **APISERVER**

  `API Server` 是 `Kubernetes` 的核心组件，所有服务访问都通过 `API Server` 进行统一入口。`Kubernetes` 的所有组件和应用程序都通过API服务器进行通信和交互。`API` 服务器提供了一个 `RESTful API`，可以通过 `HTTP` 或 `HTTPS` 进行访问，支持多种认证和授权方式。

- **CrontrollerManager**

  控制器管理器是 `Kubernetes` 的一个核心组件，用于维持副本期望数目。 `Kubernetes` 中的副本控制器（ `Replication Controller` ）、水平自动伸缩器（ `Horizontal Pod Autoscaler` ）、状态副本集（ `Stateful Set` ）等控制器都由控制器管理器维护，控制器管理器保证集群中的副本数量始终满足用户定义的期望值。

- **Scheduler**

  `Scheduler` 是 `Kubernetes` 的一个独立组件，负责介绍任务并选择合适的节点进行任务分配。`Kubernetes` 中的调度器（ `Scheduler` ）是一个独立的组件，它根据 `Pod` 的需求和节点的资源情况，将 `Pod` 分配给集群中最合适的节点。

- **ETCD**

  `ETCD` 是 `Kubernetes` 的一个核心组件，它是一个键值对数据库，储存 `Kubernetes` 集群所有重要信息（持久化）。`Kubernetes` 集群中的所有组件和应用程序都需要使用 `ETCD` ，来存储和共享集群中的各种配置信息和状态信息。

#### Node 节点 核心组件

- **Kubelet**

  `Kubelet` 是 `Kubernetes` 的一个核心组件，运行在每个节点上的代理进程，直接跟容器引擎交互实现容器的生命周期管理。它负责管理节点上的容器，并与其他组件协作，确保集群中的所有容器都按照用户的期望正确运行。

- **Kube-proxy**

  `Kube-proxy` 是 `Kubernetes` 的一个核心组件，运行在每个节点上的代理进程，负责管理节点上的网络代理和负载均衡，为`Kubernetes`集群中的服务提供稳定、可靠和高效的访问方式。`Kube-proxy` 负责写入规则至 `IPTABLES`、`IPVS` 实现服务映射访问。

#### 其他插件

- **COREDNS**

  `CoreDNS` 是 `Kubernetes` 的一个核心组件，是一个高性能的域名系统（ `DNS` ）服务器，它负责将 `Kubernetes` 集群中各种名称解析为对应的IP地址，从而实现各种服务之间的通信和交互。它可以为集群中的 `SVC` 创建一个域名IP的对应关系解析。

  是实现负载均衡的一个很重要的功能.

- **DASHBOARD**

  `Dashboard` 是 `Kubernetes` 的一个核心组件，是一个 `Web` 界面，可以让用户通过浏览器直接管理和操作 `Kubernetes` 集群中的各种资源和配置信息。它为`Kubernetes`集群提供了一个`B/S`结构访问体系。

  `B/S`结构访问体系是指 `Browser/Server` 结构，也就是 `浏览器/服务器` 体系。在这种体系下，客户端通过 `Web` 浏览器向服务器发起请求，服务器处理请求并返回响应，客户端再通过浏览器展示响应结果。这种体系下，客户端只需要一个浏览器，而服务器则可以是任何能够提供网页服务的计算机。这种体系下，客户端`无需安装任何软件`，只需要通过浏览器即可访问服务器上的各种应用程序和资源。

- **INGRESS CONTROLLER**

  `Ingress Controller` 是 `Kubernetes` 的一个核心组件，是一个资源对象，它定义了集群中的一个 `HTTP` 路由器。官方只能实现 `四层代理` ，而 `Ingress` 可以实现 `七层代理` 。 `Ingress` 资源可以通过配置各种规则和策略，将外部的 `HTTP` 请求路由到集群中的各种服务上。

- **FEDERATION**

  `Federation` 是 `Kubernetes` 的一个核心组件，提供一个可以 `跨集群中心多Kubernetes统一管理` 功能。它可以将多个`Kubernetes`集群组合成一个逻辑整体，并提供一致性的管理和操作方式。通过`Federation`，用户可以轻松地在`多个Kubernetes集群`之间进行`资源共享`和`负载均衡`。

- **PROMETHEUS**

  `Prometheus`是`Kubernetes`的一个核心组件，是一个开源的监控系统，可以帮助用户对`Kubernetes`集群中的各种组件和应用程序进行监控和告警。它提供了灵活的查询语言和可视化界面，支持多种数据源和告警方式，可以帮助用户快速发现和解决`Kubernetes`集群中的各种监控问题。

- **ELK**

  `ELK`是`Kubernetes`的一个核心组件，是一个开源的日志分析平台，可以帮助用户对`Kubernetes`集群中的各种日志进行收集、存储、分析和可视化。它提供了灵活的查询语言和可视化界面，支持多种数据源和告警方式，可以帮助用户快速发现和解决`Kubernetes`集群中的各种日志问题。

以上是Kubernetes概述部分的各个服务功能的详细说明。这些服务组件构成了一个完整的Kubernetes集群，为云原生应用程序的部署和管理提供了完整的解决方案。


#### 参考资料:
- https://blog.csdn.net/cloudUncle/article/details/82891510
- 
