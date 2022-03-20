---
title: 'Python 元组 ,列表, 集合间的转换'
date: 2021-10-05 18:24:50
tags: [类型转换]
description: 本节课主要学习了:<br>元组 ,列表, 集合间的转换<br>其中涉及到的相关函数
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-5/1.png
---

### 元组 ,列表, 集合间的转换

- 列表元组集合间隔转换的函数

| 原始类型 | 目标函数 | 函数  | 举例                                  |
| :------: | :------: | :---: | ------------------------------------- |
|   列表   |   集合   |  set  | `new_set = set([1,  2,  3, 4, 5])`    |
|   列表   |   元组   | tuple | `new_tutple = tuple([1, 2, 3, 4, 5])` |
|   元组   |   集合   |  set  | `new_set = set((1, 2, 3, 4, 5))`      |
|   元组   |   列表   | list  | `new_list = list(1, 2, 3, 4, 5)`      |
|   集合   |   列表   | list  | `new_list = list({1, 2, 3, 4, 5})`    |
|   集合   |   元组   | tuple | `new_tuple = tuple({1, 2, 3, 4, 5})`  |

#### 代码

```python
# coding:utf-8

a = [1, 2, 3]
b = (1, 2, 3)
c = {1, 2, 3}

print(tuple(a), set(a))
print(type(tuple(a)), type(set(a)))
print(tuple(a) is b)
print(set(a) == c)

print(list(b), set(b))
print(list(c), tuple(c))

print(list(a))

print(str(a), type(str(a)))  # '[1, 2, 3]'
print(str(b), type(str(b)))
print(str(c), type(str(c)))

# 转换不可逆...
print(list(str(a)))
print(tuple(str(b)))
print(set(str(c)))

```
