---
title: 饥人谷前端 | HTTP 入门
tags: [HTTP]
description: 本节课主要学习了<br>
date: 2022-06-20 10:02:18
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---

`protocol`
- 协议、礼节、约定

李爵士发明的三样东西
- `WWW` = `URL + HTTP + HTML`

先从 IP 讲起
- 什么是 IP ？

`Internet Protocal`
主要约定了两件事
1. 如何定位一台设备
2. 如何封装数据报文，以跟其他设备交流
   - 具体内容我们不关心

![2](https://img.onmicrosoft.cn/2022-06-20/2.png)
![3](https://img.onmicrosoft.cn/2022-06-20/3.png)
![4](https://img.onmicrosoft.cn/2022-06-20/4.png)
![5](https://img.onmicrosoft.cn/2022-06-20/5.png)
![6](https://img.onmicrosoft.cn/2022-06-20/6.png)

IP 有了，还需要什么？
- 端口

一台机器可以提供很多服务
- 每个服务一个号码，这个号码就叫端口 `port`

我应该用什么端口
- wiki 百科：[TCP/UDP端口列表](https://zh.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8#0.E5.88.B01023.E5.8F.B7.E7.AB.AF.E5.8F.A3)

![8](https://img.onmicrosoft.cn/2022-06-20/8.png)
![7](https://img.onmicrosoft.cn/2022-06-20/7.png)

总而言之，IP 和 端口 缺一不可

域名就是对 IP 的别称
知识点
- 一个域名可以对应不同 IP
- 这个叫做负载均衡，防止一台服务器扛不住
- 一个 IP 可以对应不同域名
- 这个叫做共享主机，穷的开发者会这么做

域名 和 IP 是怎么对应起来的
- 通过 DNS
![9](https://img.onmicrosoft.cn/2022-06-20/9.png)

![10](https://img.onmicrosoft.cn/2022-06-20/10.png)

![11](https://img.onmicrosoft.cn/2022-06-20/11.png)

![12](https://img.onmicrosoft.cn/2022-06-20/12.png)

![13](https://img.onmicrosoft.cn/2022-06-20/13.png)


URL
- 协议 + 域名或 IP + 端口号 + 路径 + 查询字符串 + 锚点

![14](https://img.onmicrosoft.cn/2022-06-20/14.png)

HTTP（协议）
- 基于 TCP 和 IP 两个协议

![15](https://img.onmicrosoft.cn/2022-06-20/15.png)

#### Curl 命令
- 用 curl 可以发 HTTP 请求
  - curl -v https://baidu.com
  - curl -s -v -- https://baidu.com
- 理解以下概念
  - url 会被 curl 工具重写，先请求 DNS 获得 IP
  - 先进行 TCP 链接，TCP 连接成功后，开始发送 HTTP 请求
  - 请求内容看一眼
  - 响应内容看一眼
  - 响应结束后，关闭 TCP 连接（看不出来）
  - 真正结束
- HTTP
  - 规定请求的格式是什么，响应的格式是什么

> nslookup 命令用于查询DNS的记录，查看域名解析是否正常，在网络故障的时候用来诊断网络问题。能够看到域名对应了几个IP。

- `nslookup http://baidu.com`