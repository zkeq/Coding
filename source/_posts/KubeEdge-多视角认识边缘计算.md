---
title: KubeEdge | 多视角认识边缘计算
tags:
  - Kubernetes
  - KubeEdge
categories:
  - KubeEdge
cover: https://img.onmicrosoft.cn/ke/202305180000661.png
date: 2023-05-18 00:14:07
description: 本文深入介绍了边缘计算，包括其技术背景、应用案例以及与物联网和云原生的关系。此外，本文还讨论了与边缘计算相关的不同开源项目以及该领域中可用的各种工作角色和薪资。
---

```
本套课程: 云原生+边缘计算+KubeEdge，打造智能边缘管理平台.
链接：https://pan.baidu.com/s/133xD_Athr5dXYYNaUtBMRw
提取码：zkeq 
```

## 快速了解边缘计算

### 技术诞生背景

![image-20230518003850516](https://img.onmicrosoft.cn/ke/202305180038596.png)

#### 物联网

- 物联网设备地理位置非常分散、响应时间、海量设备管理、数据安全性难以保证.

#### 人工智能

- 人工智能应用需要大量的逻辑运算资源, 当对运算速度有更高的要求时候, 数据传输带来的性能消耗问题, 将会让 AI 应用响应延迟.

#### 边缘计算解决思路

- 让计算更贴近数据的源头

![image-20230518004233450](https://img.onmicrosoft.cn/ke/202305180042494.png)

#### 总结

- 引入边缘计算, 在边缘侧直接完成运算, 从而减轻数据传输的压力!
- 边缘计算, 让计算更贴近数据的源头! 从而解决海量设备管理、数据传输等问题

### 边缘计算应用案例

- 文章地址: [What edge computing means for hardware companies | McKinsey](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/new-demand-new-markets-what-edge-computing-means-for-hardware-companies)

![image-20230518004814035](https://img.onmicrosoft.cn/ke/202305180048064.png)

#### 交通、运输和物流行业

- 自动驾驶: 如果路况处理全部在云端, 那么如果信号不好或者网络延迟会造成很大的危险系数
- 交通大数据: 如果将采集到的所有数据都上报云端, 会造成很多无价值的数据上报

#### 垂直交叉行业

- 无人机+安防: 自动处理数据 在不该有人的地方看到人自动上报数据 无需人工处理.
- 无人机+工地: 在危险区域自动触发报警系统.

#### 零售业

- 自动检测人流量, 检测大家的购物需求, 进行相关的促销活动.

#### 边缘计算应用场景

- 不稳定连接和数据移动性
- 需要实时决策
- 本地化计算能力
- 新的存储和安全需求
- 不定时供电

### 边缘计算 VS 物联网

#### 物联网+边缘计算架构图

![image-20230518010159839](https://img.onmicrosoft.cn/ke/202305180101871.png)

### 边缘计算 VS 云原生

#### 边缘计算的发展趋势

![image-20230518010328942](https://img.onmicrosoft.cn/ke/202305180103966.png)

#### 边缘计算容器化

##### 容器化的优点

- 解耦运行依赖
- 标准的应用分发
- 扩展应用类型

> 容器化能够解决边缘计算产品的运行环境问题, 但是随着生产环境的增多, 也暴露出来很多不足之处.

##### 边缘计算容器化的不足之处

- 单机限制: 缺乏多机通信网络, 限制边缘总算力规模
- 编排限制: 缺乏多实例和拓展主机的连接能力, 限制了对复杂业务的描述能力
- 更新限制: 需要安装业务之外的应用才能对容器进行更新
- 管理限制: 边缘应用的定义和管理模式与应用分离, 限制了业务的敏捷性

#### 边缘计算由容器向云原生演进

![image-20230518011141990](https://img.onmicrosoft.cn/ke/202305180111039.png)

### 边缘计算 VS 开源社区

#### KubeEdge

- KubeEdge架构设计图

![image-20230518011814414](https://img.onmicrosoft.cn/ke/202305180118456.png)

- 边缘设备端是通过 `MQTT` 协议进行交互的, 从而完成从云到边到端的架构设计.

![image-20230518012030916](https://img.onmicrosoft.cn/ke/202305180120955.png)

#### OpenYurt

- 阿里开源

KubeEdge架构设计图

![image-20230518012344322](https://img.onmicrosoft.cn/ke/202305180123381.png)

#### Baetyl

![image-20230518012812359](https://img.onmicrosoft.cn/ke/202305180128406.png)

成员

![image-20230518012847921](https://img.onmicrosoft.cn/ke/202305180128965.png)

项目架构

![image-20230518012902779](https://img.onmicrosoft.cn/ke/202305180129816.png)

架构设计图

![image-20230518012957856](https://img.onmicrosoft.cn/ke/202305180129903.png)

![image-20230518013024625](https://img.onmicrosoft.cn/ke/202305180130672.png)

#### 总结

- 底层基于 `Kubernetes`, 将边缘节点抽象为 `Node` 节点
- 边缘应用以容器 ( `K8S Pod` ) 方式运行
- 通过数据缓存和同步保证离线计算
- 云端管理, 边缘计算, 云边协同

### 边缘计算 VS 一线大厂

#### 边缘计算岗位

![image-20230518013804586](https://img.onmicrosoft.cn/ke/202305180138645.png)

#### 云原生项目生态图

![image-20230518013944188](https://img.onmicrosoft.cn/ke/202305180139277.png)

#### 垂直交叉工作岗位

- `Kubernetes` 相关岗位
- 云原生相关岗位

#### Kubernetes 运维、开发、架构

![image-20230518014047316](https://img.onmicrosoft.cn/ke/202305180140393.png)

#### 云原生研发、架构

![image-20230518014113795](https://img.onmicrosoft.cn/ke/202305180141847.png)

### 本章小结

- 边缘计算的技术背景
  - 物联网+AI 的痛点与举例
- 边缘计算的应用案例
  - 麦肯锡数据 在各行各业的应用 总结出共性
    - 不稳定连接和数据移动性
    - 需要实时决策
    - 本地化计算的能力
    - 新的存储和安全需求
    - 不定时供电
- 边缘计算与物联网的联系
  - 物联网架构 `-->` 边缘计算+物联网架构
- 边缘计算与云原生的联系
  - 发展趋势 `-->` 容器化 `-->` 云原生
- 边缘计算在开源社区的项目情况
  - `KubeEdge --> OpenYurt --> Beatyl`
- 边缘计算在一线大厂的岗位和薪酬情况
  - 边缘计算 `-->` K8S `-->` 云原生
