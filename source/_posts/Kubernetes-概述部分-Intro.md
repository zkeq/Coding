---
title: Kubernetes | 概述部分 - Intro
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 这是一系列关于 Kubernetes 的文章，主要介绍 Kubernetes 的概念、原理、使用方法等方面的内容。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-20 01:51:08
---

![Kubernetes.png (7634×5646) (onmicrosoft.cn)](https://img.onmicrosoft.cn/2023-04-20/Kubernetes.png)

- [Kubernetes 文档 | Kubernetes](https://kubernetes.io/zh-cn/docs/home/)

云计算比赛需要, 接下来一段时间学一下 Kubernetes .

**Kubernetes** 是一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。 Kubernetes 拥有一个庞大且快速增长的生态，其服务、支持和工具的使用范围相当广泛。

Kubernetes 不是传统的、包罗万象的 PaaS（平台即服务）系统。 由于 Kubernetes 是在容器级别运行，而非在硬件级别，它提供了 PaaS 产品共有的一些普遍适用的功能， 例如部署、扩展、负载均衡，允许用户集成他们的日志记录、监控和警报方案。 但是，Kubernetes 不是单体式（monolithic）系统，那些默认解决方案都是可选、可插拔的。 Kubernetes 为构建开发人员平台提供了基础，但是在重要的地方保留了用户选择权，能有更高的灵活性。



## 引子 - 安装工具

### kubectl

Kubernetes 命令行工具 [kubectl](https://kubernetes.io/zh-cn/docs/reference/kubectl/kubectl/)， 让你可以对 Kubernetes 集群运行命令。 你可以使用 kubectl 来部署应用、监测和管理集群资源以及查看日志。

### kind

[`kind`](https://kind.sigs.k8s.io/) 让你能够在本地计算机上运行 Kubernetes。 `kind` 要求你安装并配置好 [Docker](https://docs.docker.com/get-docker/)。

kind 的 [Quick Start](https://kind.sigs.k8s.io/docs/user/quick-start/) 页面展示开始使用 `kind` 所需要完成的操作。

### minikube

与 `kind` 类似，[`minikube`](https://minikube.sigs.k8s.io/) 是一个工具， 能让你在本地运行 Kubernetes。 `minikube` 在你的个人计算机（包括 Windows、macOS 和 Linux PC）上运行一个一体化（all-in-one） 或多节点的本地 Kubernetes 集群，以便你来尝试 Kubernetes 或者开展每天的开发工作。

# 概述

Kubernetes 是一个可移植、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。 Kubernetes 拥有一个庞大且快速增长的生态，其服务、支持和工具的使用范围相当广泛。

**Kubernetes** 这个名字源于希腊语，意为“舵手”或“飞行员”。k8s 这个缩写是因为 k 和 s 之间有八个字符的关系。 Google 在 2014 年开源了 Kubernetes 项目。 Kubernetes 建立在 [Google 大规模运行生产工作负载十几年经验](https://research.google/pubs/pub43438)的基础上， 结合了社区中最优秀的想法和实践。



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



## Kubernetes 不是什么

Kubernetes 不是传统的、包罗万象的 PaaS（平台即服务）系统。 由于 Kubernetes 是在容器级别运行，而非在硬件级别，它提供了 PaaS 产品共有的一些普遍适用的功能， 例如部署、扩展、负载均衡，允许用户集成他们的日志记录、监控和警报方案。 但是，Kubernetes 不是单体式（monolithic）系统，那些默认解决方案都是可选、可插拔的。 Kubernetes 为构建开发人员平台提供了基础，但是在重要的地方保留了用户选择权，能有更高的灵活性。

- Kubernetes：
  - 不限制支持的应用程序类型。
  - 不部署源代码，也不构建你的应用程序。
  - 不提供应用程序级别的服务作为内置服务。
  - 不是日志记录、监视或警报的解决方案。
  - 不提供也不要求配置用的语言、系统（例如 jsonnet）。
  - 不提供也不采用任何全面的机器配置、维护、管理或自我修复系统。
  - 此外，Kubernetes 不仅仅是一个编排系统，实际上它消除了编排的需要。

