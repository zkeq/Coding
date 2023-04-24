---
title: Kubernetes | 资源清单 - ResourceList
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本文介绍了 Kubernetes 中的 ResourceList、Init 容器、容器探针、Pod hook、重启策略和 Pod phase 等概念。其中，Init 容器可以在应用程序容器启动之前运行，具有访问 Secret 的权限；容器探针可以定期诊断容器的状态；Pod hook 可以在容器启动前或终止后运行；Pod phase 描述了 Pod 在其生命周期中的简单宏观概述。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-22 14:27:56
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

## K8S 中的资源

### 资源集群分类

1. 名称空间级别: `kubeadm k8s kube-system`
   - `kubectl get pod -n default`
2. 集群级别: `role`
3. 元数据型: `HPA`

### 什么是资源?

- K8s 中所有的内容都抽象为资源， 资源`实例化之后`，叫做对象

### K8S 中存在哪些资源

#### 名称空间级别 

- 工作负载型资源 ( workload )： 
  - `Pod`、`ReplicaSet`、`Deployment`、`StatefulSet`、`DaemonSet`、`Job`、  `CronJob` ( ReplicationController 在 v1.11 版本被废弃 ) 

- 服务发现及负载均衡型资源 ( ServiceDiscovery LoadBalance ): 
  - `Service`、`Ingress`、... 

- 配置与存储型资源：
  - `Volume` ( 存储卷 )、`CSI` ( 容器存储接口,可以扩展各种各样的第三方存储卷 ) 

- 特殊类型的存储卷：
  - `ConfigMap `( 当配置中心来使用的资源类型 )、`Secret` (保存敏感数据)、 `DownwardAPI` (把外部环境中的信息输出给容器)

- 集群级资源：
  - `Namespace`、`Node`、`Role`、`ClusterRole`、`RoleBinding`、`ClusterRoleBinding` 
  
- 元数据型资源：`HPA`、`PodTemplate`、`LimitRange`

## 资源清单

#### 资源清单含义

- 在 k8s 中，一般使用 yaml 格式的文件来创建符合我们预期期望的 pod ，这样的 yaml 文件我们一般 称为资源清单

## YAML

YAML是一个可读性高，用来表达数据序列的格式。YAML的意思其实是：仍是一种标记语言，但为了强调这种语言以数据做为中心，而不是以标记语言为重点。

### 基本语法

- 缩进时不允许使用 `Tab` 键，只允许使用空格。
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可。
- `#` 标识注释，从这个字符一直到行尾，都会被解释器忽略。

### YAML支持的数据结构

- 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）。
- 数组：一组按次序排列的值，又称为序列（sequence） / 列表 （list）。
- 纯量（scalars）：单个的、不可再分的值。

#### 对象类型

- 对象的一组键值对，使用冒号结构表示。

```yaml
name: Steve
age: 18
```

- Yaml 也允许另一种写法，将所有键值对写成一个行内对象

```yaml
hash: { name: Steve, age: 18 }
```

#### 数组类型

- 一组连词线开头的行，构成一个数组。
- 数组也可以采用行内表示法。

```yaml
animal
- Cat
- Dog

animal: [Cat, Dog]
```

#### 复合结构

- 对象和数组可以结合使用，形成复合结构。

```yaml
languages:
- Ruby
- Perl
- Python
websites:
YAML: yaml.org
Ruby: ruby-lang.org
Python: python.org
Perl: use.perl.org
```

#### 纯量

纯量是最基本的、不可再分的值。以下数据类型都属于纯量。

- 字符串
  - 见后
- 布尔值
  - 布尔值用true和false表示。

```yaml
isSet: true
```

- 整数、浮点数
  - 数值直接以字面量的形式表示。

```yaml
number: 12.30
```

- Null
  - null 用 ~ 表示。

```yaml
parent: ~
```

- 时间、日期
  - 时间采用 ISO8601 格式。
  - 日期采用复合 iso8601 格式的年、月、日表示。

```yaml
iso8601: 2001-12-14t21:59:43.10-05:00
date: 1976-07-31
```

- 强制转换数据类型
  - YAML允许使用两个感叹号，强制转换数据类型。

```yaml
e: !!str 123
f: !!str true
```

- 字符串
  - 字符串默认不使用引号表示
  - 如果字符串之中包含空格或特殊字符，需要放在引号之中
  - 单引号和双引号都可以使用，双引号不会对特殊字符转义
  - 单引号之中如果还有单引号，必须连续使用两个单引号转义
  - 字符串可以写成多行，从第二行开始，必须有一个单空格缩进。换行符会被转为 空格。
  - 多行字符串可以使用|保留换行符，也可以使用>折叠换行
  - `+`表示保留文字块末尾的换行，`-` 表示删除字符串末尾的换行。

```yaml
str: 这是一行字符串

str: '内容： 字符串'

s1: '内容\n字符串'
s2: "内容\n字符串"

str: 'labor''s day'

str: 这是一段
	多行
	字符串

this: |
Foo
Bar
that: >
Foo
Bar

s1: |
	Foo

s2: |+
	Foo

s3: |-
	Foo
```

- 若无法正常加载, 请点击查看 PDF 网页版本: [Yaml 语法.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/1%E3%80%81Yaml%20%E8%AF%AD%E6%B3%95.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81Yaml%20%E8%AF%AD%E6%B3%95.pdf" type="application/pdf" width="100%" height="500" />



## 常用字段解释说明

### 必须存在的属性

![](https://img.onmicrosoft.cn/k8s/202304232307424.png)

### 主要对象

![](https://img.onmicrosoft.cn/k8s/202304232308529.png)

![image-20230423230836304](https://img.onmicrosoft.cn/k8s/202304232308330.png)

![image-20230423230846001](https://img.onmicrosoft.cn/k8s/202304232308036.png)

### 额外的参数项

![image-20230423230859465](https://img.onmicrosoft.cn/k8s/202304232308507.png)

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes 资源清单.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubernetes%20%E8%B5%84%E6%BA%90%E6%B8%85%E5%8D%95.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubernetes%20%E8%B5%84%E6%BA%90%E6%B8%85%E5%8D%95.pdf" type="application/pdf" width="100%" height="500" />

## 容器生命周期

![image-20230423233510512](https://img.onmicrosoft.cn/k8s/202304232335547.png)

- `readiness` 就绪检测
- `Liveness` 生存检测
- Pause 负责 `网络 / 存储卷` 的共享

![image-20230423233722240](https://img.onmicrosoft.cn/k8s/202304232337273.png)

### Init 容器

`Pod` 能够具有多个容器，应用运行在容器里面，但是它也可能有一个或多个先于应用容器启动的 `Init` 容器

`Init` 容器与普通的容器非常像，除了如下两点：

- `Init` 容器总是运行到成功完成为止
- 每个 `Init` 容器都必须在下一个 `Init` 容器启动之前成功完成

如果 `Pod` 的 `Init` 容器失败， `Kubernetes` 会不断地重启该 `Pod` ，直到 `Init` 容器成功为止。然而，

如果 `Pod` 对应的 `restartPolicy` 为 `Never` ，它不会重新启动

### Init 容器的作用

因为 `Init` 容器具有与应用程序容器分离的单独镜像，所以它们的启动相关代码具有如下优势：

- 它们可以包含并运行实用工具，但是出于安全考虑，是不建议在应用程序容器镜像中包含这些实用工具的
- 它们可以包含使用工具和定制化代码来安装，但是不能出现在应用程序镜像中。例如，创建镜像没必要 `FROM` 另一个镜像，只需要在安装过程中使用类似 `sed` 、 `awk` 、 `python` 或 `dig` 这样的工具。
- 应用程序镜像可以分离出创建和部署的角色，而没有必要联合它们构建一个单独的镜像。
- `Init` 容器使用 `Linux Namespace`，所以相对应用程序容器来说具有不同的文件系统视图。因此，它们能够具有访问 `Secret` 的权限，而应用程序容器则不能。
- 它们必须在应用程序容器启动之前运行完成，而应用程序容器是并行运行的，所以 `Init` 容器能够提供了一种简单的阻塞或延迟应用容器的启动的方法，直到满足了一组先决条件。

![image-20230423235600967](https://img.onmicrosoft.cn/k8s/202304232356086.png)

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes pod 探测.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/3%E3%80%81Kubernetes%20pod%20%E6%8E%A2%E6%B5%8B.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/3%E3%80%81Kubernetes%20pod%20%E6%8E%A2%E6%B5%8B.pdf" type="application/pdf" width="100%" height="500" />

### 特殊说明

- 在 `Pod` 启动过程中， `Init` 容器会按顺序在`网络和数据卷初始化 `[Pause] 之后启动。每个容器必须在下一个容器启动之前成功退出
- 如果由于运行时或失败退出，将导致容器启动失败，它会根据 `Pod` 的 `restartPolicy` 指定的策略进行重试。然而，如果 `Pod` 的 `restartPolicy` 设置为 `Always` ， `Init` 容器失败时会使用 `RestartPolicy` 策略
- 在所有的 `Init` 容器没有成功之前， `Pod` 将不会变成 `Ready` 状态。 `Init` 容器的端口将不会在 `Service` 中进行聚集。 正在初始化中的 `Pod` 处于 `Pending` 状态，但应该会将 `Initializing` 状态设置为 `true`
- 如果 `Pod` 重启，所有 `Init` 容器必须重新执行 [幂的状态]
- `#` 对 `Init` 容器 `spec` 的修改被限制在容器 `image` 字段，修改其他字段都不会生效。更改 `Init` 容器的 `image` 字段，等价于重启该 `Pod`

- `Init` 容器具有应用容器的所有字段。除了 `readinessProbe` ，因为 `Init` 容器无法定义不同于完成 （ `completion` ）的就绪（ `readiness` ）之外的其他状态。这会在验证过程中强制执行
- 在 `Pod` 中的每个 `app` 和 `Init` 容器的名称必须唯一；与任何其它容器共享同一个名称，会在验证时抛出错误

### 容器探针

探针是由 `kubelet` 对容器执行的定期诊断。要执行诊断， `kubelet` 调用由容器实现的 `Handler` 。有三种类型的处理程序：

- `ExecAction` ：在容器内执行指定命令。如果命令退出时返回码为 `0` 则认为诊断成功。
- `TCPSocketAction` ：对指定端口上的容器的 `IP` 地址进行 `TCP` 检查。如果端口打开，则诊断被认为是成功的。
- `HTTPGetAction` ：对指定的端口和路径上的容器的 `IP` 地址执行 `HTTP Get` 请求。如果响应的状态码大于等于 `200` 且小于 `400` ，则诊断被认为是成功的

每次探测都将获得以下三种结果之一：

- 成功：容器通过了诊断。
- 失败：容器未通过诊断。
- 未知：诊断失败，因此不会采取任何行动

### 探测方式

- `livenessProbe` ：指示容器是否正在运行。如果存活探测失败，则 `kubelet` 会杀死容器，并且容器将受到其 重启策略 的影响。如果容器不提供存活探针，则默认状态为 `Success`
- `readinessProbe` ：指示容器是否准备好服务请求。如果就绪探测失败，端点控制器将从与 `Pod` 匹配的所有 `Service` 的端点中删除该 `Pod` 的 `IP` 地址。初始延迟之前的就绪状态默认为 `Failure` 。如果容器不提供就绪探针，则默认状态为  `Success`

![image-20230424001524978](https://img.onmicrosoft.cn/k8s/202304240015007.png)

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes pod 探测.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/3%E3%80%81Kubernetes%20pod%20%E6%8E%A2%E6%B5%8B.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/3%E3%80%81Kubernetes%20pod%20%E6%8E%A2%E6%B5%8B.pdf" type="application/pdf" width="100%" height="500" />

### Pod hook

`Pod hook`（钩子）是由 `Kubernetes` 管理的 `kubelet` 发起的，当容器中的进程启动前或者容器中的进程终止之前运行，这是包含在容器的生命周期之中。可以同时为 `Pod` 中的所有容器都配置 `hook`

`Hook` 的类型包括两种：

- `exec` ：执行一段命令
- `HTTP` ：发送HTTP请求

### 重启策略

- `PodSpec` 中有一个 `restartPolicy` 字段，可能的值为 `Always` 、 `OnFailure` 和 `Never` 。默认为  `Always` 。 `restartPolicy` 适用于 `Pod` 中的所有容器。 `restartPolicy` 仅指通过同一节点上的  `kubelet` 重新启动容器。失败的容器由 `kubelet` 以五分钟为上限的指数退避延迟（10秒，20秒，40 秒...）重新启动，并在成功执行十分钟后重置。如 `Pod` 文档 中所述，一旦绑定到一个节点， `Pod` 将 永远不会重新绑定到另一个节点。

### Pod p hase

- `Pod` 的 `status` 字段是一个 `PodStatus` 对象， `PodStatus` 中有一个 `phase` 字段。
- `Pod` 的相位（ `phase` ）是 `Pod` 在其生命周期中的简单宏观概述。该阶段并不是对容器或 `Pod` 的综合汇总，也不是为了做为综合状态机
- `Pod` 相位的数量和含义是严格指定的。除了本文档中列举的状态外，不应该再假定 `Pod` 有其他的 `phase` 值

### Pod  phase 可能存在的值

- 挂起（ `Pending` ）： `Pod` 已被 `Kubernetes` 系统接受，但有一个或者多个容器镜像尚未创建。等待时间包括调度 `Pod` 的时间和通过网络下载镜像的时间，这可能需要花点时间
- 运行中（ `Running` ）：该 `Pod` 已经绑定到了一个节点上， `Pod` 中所有的容器都已被创建。至少有一个容器正在运行，或者正处于启动或重启状态
- 成功（ `Succeeded` ）： `Pod` 中的所有容器都被成功终止，并且不会再重启
- 失败（ `Failed` ）： `Pod` 中的所有容器都已终止了，并且至少有一个容器是因为失败终止。也就是说，容器以非 `0` 状态退出或者被系统终止
- 未知（ `Unknown` ）：因为某些原因无法取得 `Pod` 的状态，通常是因为与 `Pod` 所在主机通信失败

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes 状态示例.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/4%E3%80%81Kubernetes%20%E7%8A%B6%E6%80%81%E7%A4%BA%E4%BE%8B.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/4%E3%80%81Kubernetes%20%E7%8A%B6%E6%80%81%E7%A4%BA%E4%BE%8B.pdf" type="application/pdf" width="100%" height="500" />
