---
title: Python 匿名函数lambda
date: 2021-10-20 23:15:00
tags: [函数]
categories: Python
description: 本节课主要学习了<br>匿名函数lambda
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 匿名函数lambda

#### 功能

- 定义一个轻量化的函数
- `即用即删除`, 很适合需要完成一项功能 , 但是此功能`只在此一处使用`

#### 用法

```python
# 无参数
f = lambda :value

f()
# 有参数
f = lambda x,y: x*y
f(3, 4)
```

#### 代码

```python
# coding:utf-8

f = lambda: print(1)
# result = f()
# print(result)
f()

# f1 = lambda x, y=2: x + y
f1 = lambda x, y=2: x > y
# print(f1(1, 2))
print(f1(1))

users = [
    {'name': 'dewei'},
    {'name': 'xiaomu'},
    {'name': 'asan'},
]
users.sort(key=lambda x: x['name'])
print(users)

```
