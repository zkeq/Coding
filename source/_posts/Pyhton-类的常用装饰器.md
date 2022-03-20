---
title: Python 类的常用装饰器
date: 2021-10-30 23:57:27
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中类的常用装饰器
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的常用装饰器

#### classmethod

##### 功能

- 将类函数可以不经过实例化而直接被调用

##### 用法

```python
@classmethod
def func(cls, ...):
	do
```

##### 参数介绍

- `cls`替代普通类函数中的`self`,
- `变为cls`,代表当前操作的是类

----------------------------------

#### staticmethod

##### 功能

- 将类函数可以不经过实例化而直接被调用,
  被改装饰器调用的函数不许传递self或cls函数,
  且无法在该函数内调用其他类函数或类变量

##### 用法

```python
@staticmethod
def func(...):
	do
```

##### 参数介绍

- 函数体内无cls或self参数

-------------------

#### property

##### 用法

```python
@property
def func(self):
	do
```

##### 参数介绍

- 无重要参数说明

#### 代码

```python
# coding:utf-8

class Test(object):
    def __init__(self, a):
        self.a = a

    def run(self):
        print('run')
        self.dump()
        self.sleep()

    @classmethod
    def dump(cls):
       print('dump')
       # cls.run()
       # 无法在一个classmethod函数中调用self函数
    @staticmethod
    def sleep():
        # self.dump()
        print('i want sleep')

t = Test('a')
t.run()
# Test.dump()
# print('------')
# Test.sleep()
# t.sleep()
# t.dump()

class Test1(object):
    def __init__(self, name):
        self.__name = name

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        self.__name = value

t1 = Test1(name='dewei')
print(t1.name)
# t1.name = '小慕'
# print(t1.name)
t1.name = '小慕'
print(t1.name)
```
