---
title: Kubernetes | 资源控制器 - ResourceController
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-24 22:20:51
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

## 什么是控制器

在 Kubernetes 中，控制器是一种状态机，用于控制 `Pod` 的具体状态和行为。Kubernetes 中内置了很多种控制器类型，包括：

- `ReplicationController` 和 `ReplicaSet`
- `Deployment`
- `DaemonSet`
- `StatefulSet`
- `Job`/`CronJob`
- `Horizontal Pod Autoscaling`

## 控制器类型

### ReplicationController 和 ReplicaSet

`ReplicationController`（RC）用于确保容器应用的副本数始终保持在用户定义的副本数。如果有容器异常退出，RC 会自动创建新的 `Pod` 来替代；如果异常多出的容器，RC 也会自动回收。

在新版本的 Kubernetes 中建议使用 `ReplicaSet` 来取代 `ReplicationController`。`ReplicaSet` 跟 `ReplicationController` 没有本质的不同，只是名字不一样，并且 `ReplicaSet` 支持集合式的 selector。[通过标签 Labels  选择]

### Deployment

`Deployment` 为 `Pod` 和 `ReplicaSet` 提供了一个声明式定义（declarative）方法，用来替代以前的 `ReplicationController`，方便管理应用。典型的应用场景包括：

- 定义 `Deployment` 来创建 `Pod` 和 `ReplicaSet`
- 滚动升级和回滚应用
- 扩容和缩容
- 暂停和继续 `Deployment`

![image-20230426195416994](https://img.onmicrosoft.cn/k8s/202304261954076.png)

- 滚动更新与回滚操作

### DaemonSet

`DaemonSet` 确保全部（或者一些）`Node` 上运行一个 `Pod` 的副本。当有 `Node` 加入集群时，也会为它们新增一个 `Pod`；当有 `Node` 从集群移除时，这些 `Pod` 也会被回收。删除 `DaemonSet` 将会删除它创建的所有 `Pod`。

使用 `DaemonSet` 的一些典型用法：

- 运行集群存储 daemon，例如在每个 `Node` 上运行 `glusterd` 、 `ceph`
- 在每个 `Node` 上运行日志收集 daemon，例如 `fluentd` 、 `logstash`
- 在每个 `Node` 上运行监控 daemon，例如 `Prometheus Node Exporter`、`collectd`、`Datadog` 代理、`New Relic` 代理或 `Ganglia gmond`

### Job

`Job` 负责批处理任务，即仅执行一次的任务，它保证批处理任务的一个或多个 `Pod` 成功结束。

### CronJob 在特定的时间循环创建 Job

`Cron Job` 管理基于时间的 `Job`，即： `* * * * * `

- 在给定时间点只运行一次
- 周期性地在给定时间点运行

使用前提条件：**当前使用的 Kubernetes 集群，版本 >= 1.8（对 `CronJob`）。对于先前版本的集群，版本 <1.8，启动 `API Server` 时，通过传递选项 `--runtime-config=batch/v2alpha1=true` 可以开启 `batch/v2alpha1 API`**

典型的用法如下所示：

- 在给定的时间点调度 `Job` 运行
- 创建周期性运行的 `Job`，例如：数据库备份、发送邮件

### StatefulSet

> 有状态服务

`StatefulSet` 作为 Controller 为 `Pod` 提供唯一的标识。它可以保证部署和 scale 的顺序。

`StatefulSet` 是为了解决有状态服务的问题（对应 `Deployments` 和 `ReplicaSets` 是为无状态服务而设计），其应用场景包括：

- 稳定的持久化存储，即 `Pod` 重新调度后还是能访问到相同的持久化数据，基于 `PVC` 来实现
- 稳定的网络标志，即 `Pod` 重新调度后其 `PodName` 和 `HostName` 不变，基于 `Headless Service`（即没有 `Cluster IP` 的 `Service`）来实现
- 有序部署，有序扩展，即 `Pod` 是有顺序的，在部署或者扩展的时候要依据定义的顺序依次依次进行（即从 0 到 N-1，在下一个 `Pod` 运行之前所有之前的 `Pod` 必须都是 `Running` 和 `Ready` 状态），基于 `init containers` 来实现
- 有序收缩，有序删除（即从 N-1 到 0）

![image-20230428163055859](https://img.onmicrosoft.cn/k8s/202304281630094.png)

- 部署顺序和终止顺序是相反的

### Horizontal Pod Autoscaling

应用的资源使用率通常都有高峰和低谷的时候，如何削减或增加 `Pod` 的数量？这就需要 `Horizontal Pod Autoscaling`。

`Horizontal Pod Autoscaler` 根据 `CPU` 使用率或者应用自定义的 metric（指标）来自动扩展或缩减 `Pod` 的数量，从而保持应用的资源使用率在一个可控制的范围内。

**注意：** `Horizontal Pod Autoscaler` 可以用于 `Deployment`、`ReplicaSet` 和 `StatefulSet`。但是，通常情况下，对于有状态的应用程序，不建议使用 `Horizontal Pod Autoscaler`。

## Pod 的分类

### 自主式 Pod

- `Pod` 退出了，此类型的 `Pod` 不会被创建

### 控制器管理的 Pod

- 在控制器的生命周期里，始终要维持 `Pod` 的副本数目

### 声明式编程 （`Deployment`）

- `create`

- `apply`（优）

### 命令式（`rs`）

- `create`（优） 
- `apply`

> 命令式编程的特点：
>
> - 通过写出一系列的命令来实现目标
> - 需要指定每一步的具体操作，才能达到想要的结果
> - 常见的编程语言是 `C、Java、Python` 等
>
> 声明式编程的特点：
>
> - 告诉计算机我们想要的结果是什么，而不是告诉计算机如何去实现
> - 常见的应用场景是配置文件、模板文件、`DSL`（领域特定语言）等
> - 常见的声明式编程语言是 `SQL、HTML、CSS` 等
> - 在 `Kubernetes` 中使用 `YAML` 文件来声明需要部署的应用，就是一种声明式编程方式

