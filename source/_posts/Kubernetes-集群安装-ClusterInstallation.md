---
title: Kubernetes | 集群安装 - ClusterInstallation
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本系列文章将会记录寒假期间的学习计划，主要是知识点和同学们当前进度的检查。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-04-22 01:36:24
---

## 前期准备

![image-20230422033943863](https://img.onmicrosoft.cn/k8s/202304220339885.png)

- 使用 KubeAdm 安装集群
- 使用 Centos 7 来安装(内核 4.4 以上)
- 需要4台 Centos7 + 1台软路由
- 软路由使用 KoolShare 来构建

### Harbor - 企业级 Docker 私有仓库

<embed src="https://media.onmicrosoft.cn/k8s/Harbor%20-%20%E4%BC%81%E4%B8%9A%E7%BA%A7%20Docker%20%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93.pdf" type="application/pdf" width="100%" height="500" />

### 1、系统初始化

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E5%8C%96.pdf" type="application/pdf" width="100%" height="500" />

### 2、Kubeadm 部署安装

<embed src="https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubeadm%20%E9%83%A8%E7%BD%B2%E5%AE%89%E8%A3%85.pdf" type="application/pdf" width="100%" height="500" />
