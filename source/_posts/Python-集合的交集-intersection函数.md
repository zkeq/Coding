---
title: Python 集合的交集--intersection函数
date: 2021-10-04 20:51:48
tags: [集合]
description: 本节课主要学习了:<br>intersection函数<br>交集的使用方法
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-4/2.jpg
---

### 集合的交集--`intersection函数`

#### 什么是交集

- a , b两个集合分别拥有的`相同`的元素集 , 称为a与b的交集
- ![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-4/1.png)

#### 功能

- 返回**两个或更多集合**中`都包含`的元素,即交集

#### 用法

- `a_set.intersection(b_set...)`

#### 参数

`b_set...`:  与当前集合对比的**1或多个集合**

#### 返回值

- 返回**原始集合**与**对比集合**的`交集`

#### 代码

```python
# coding:utf-8

a = ['dewei', 'xiaomu', 'xiaohua', 'xiaoguo']
b = ['xiaohua', 'dewei', 'xiaoman', 'xiaolin']
c = ['xiaoguang', 'xiaobai', 'dewei', 'xiaoyuan']

a_set = set(a)
b_set = set(b)
c_set = set(c)

print(a_set, b_set, c_set)

result = a_set.intersection(b_set, c_set)
xiaotou = list(result)
print('{} 是 这个小偷'.format(xiaotou[0]))

```

