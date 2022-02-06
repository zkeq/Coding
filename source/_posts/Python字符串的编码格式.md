---
title: Python字符串的编码格式
date: 2021-09-27 19:34:43
tags: [字符串]
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-27/4.jpg
description: 本节课主要认识了字符串的编码格式
---

### 字符串的编码格式

#### 什么是编码格式

- 有一定规则的规则
- 使用了这种规则,我们就能知道传输的信息是什么意思

#### 常见的编码格式

- gbk中文编码
- ascii英文编码

#### 通用的编码格式

- **utf-8是一种国际通用的编码格式**

- (还有一些指定的编码格式)

#### 代码

```python
#### coding: gbk
#### coding: a
# coding: utf-8
name = '小慕'
print(name)
age = 10
heart = 'love'
print(age, heart)

```
