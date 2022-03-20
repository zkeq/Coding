---
title: Python 函数的参数类型定义
date: 2021-10-20 23:14:09
tags: [函数]
categories: Python
description: 本节课主要学习了<br>函数的参数类型定义
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 函数的参数类型定义

#### 参数定义类型的方法

- `def person(name:str, age:int=33):`
 `print(name, age)`


  - 函数定义在python3.7之后可用
  - 函数不会对参数类型进行验证

#### 代码

```python
# coding:utf-8

def add(a: int, b: int = 3):
    print(a + b)


add(1, 2)
# add('hello', 'xiaomu')


def test(a: int, b: int = 3, *args: int, **kwargs: str):
    print(a, b, args, kwargs)


test(1, 2, 3, 4, name='小慕')


def test2(a: int, b, c=3):
    print(a, b, c)


test2(1, 3, 4)

```

