---
title: Python 中的异常类型
date: 2021-11-05 23:56:16
tags: [对象和异常]
categories: Python
description: 本节课总结了<br>Python中常见的异常类型
cover: https://ik.imagekit.io/zkeq/2021-10-28/2.jpg
---

### Python中的异常类型

- `异常类型`**集合**

| 异常名称        | 说明                 |
| --------------- | -------------------- |
| Exception       | 通用异常类型（基类） |
| ZeroDivionError | 不能整除0            |
| AttributeError  | 对象没有这个属性     |
| IOError         | 输出输出操作失败     |
| IndexError      | 没有当前索引         |

| 异常名称    | 说明                         |
| ----------- | ---------------------------- |
| KeyError    | 没有这个键值（Key）          |
| NameError   | 没有这个变量（未初始化对象） |
| SyntaxError | Python语法错误               |
| SystemError | 解释器的系统错误             |
| ValueError  | 传入的参数错误               |

#### 代码

```python
# coding:utf-8

class Test(object):
    pass


t = Test()
try:
    t.name
except AttributeError as e:
    print(e)

d = {'name': '小慕'}
try:
    d['age']
except KeyError as e:
    print('没有对应的键:', e)

l = [1, 2, 3]
try:
    l[5]
except IndexError as e:
    print(e)

name = 'dewei'
try:
    int(name)
except ValueError as e:
    print(e)

def test(a):
    return a

try:
    test()
except TypeError as e:
    print(e)
    
```
