---
title: Python 集合的差集--difference函数
date: 2021-10-04 20:51:28
tags: [集合]
description: 本节课主要学习了:<br>difference函数<br>差集的使用方法
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-4/2.jpg
---

### 集合的差集--`difference函数`

#### 什么是差集

- a, b两个集合 , 由所有属于a且不属于b的元素组成的集合叫做a与b的差集
- ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-4/1.png)

#### 功能

- `返回集合的差集` , 即**返回的集合元素**`包含在第一个集合中`, 但`不包含在第二个集合`(方法的参数)中

#### 用法

- `a_set.difference(b_set)`

#### 参数

- `b_set` : 当前集合**需要对比的集合**

#### 返回值

- **返回**`原始集合`于`对比集合`的`差集`
- (即a_set与b_set的差集)

#### 代码

```python
# coding:utf-8

drivers = ['dewei', 'xiaomu', 'xiaoming', 'xiaoman']
testers = ['xiaomu', 'xiaoman', 'xiaogang', 'xiaotao']

driver_set = set(drivers)
test_set = set(testers)

sample_drives = driver_set.difference(test_set)
print(sample_drives)

```

