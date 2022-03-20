---
title: Python 所有数据类型与布尔值的关系
date: 2021-10-04 08:46:07
tags: [字典]
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/5.png
description: 本节课主要学习了:<br>所有数据类型与布尔值的关系
categories: Python
---

### 所有数据类型与布尔值的关系

- 字符串, 数字, 列表, 元组, 字典, 空类型 与 布尔值 的关系总结

#### 明确两点

1. 每一种数据类型,自身的值都有表示True与False
2. not对于一切结果取反
3. 非0 非空都为True 其他都为False

![4](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/4.jpg)

#### 代码

```python
# coding:utf-8

a_1 = 1
a_2 = 0

print(bool(a_1))
print(bool(a_2))

print(bool(not a_1))
print(bool(not a_2))

b_1 = '1'
b_2 = ''
print('----------')
print(bool(b_1))
print(bool(b_2))
print(bool(not b_1))
print(bool(not b_2))

c_1 = True
c_2 = False
print('-----------')
print(c_1)
print(c_2)

print(not c_1)
print(not c_2)

```
