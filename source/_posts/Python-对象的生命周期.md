---
title: Python 对象的生命周期
date: 2021-10-28 22:23:43
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>对象的生命周期的基础知识
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 对象的生命周期

- 对象的生命周期

|                        |                                 |
| ---------------------- | ------------------------------- |
| 内存中分配一个内存块   | 实例化`__init__:`对象生命的开始 |
|                        |                                 |
| 从内存中释放这个内存块 | `__del__`: 删除对象             |

