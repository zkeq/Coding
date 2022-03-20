---
title: Python 类的高级函数(双下横线)
date: 2021-11-03 23:15:37
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中类的高级函数(双下横线)
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 类的高级函数(双下横线)

#### `__str__`

##### 介绍

- 如果定义了该函数, 当`print`当前实例化对象的时候, 会返回改函数的`return`信息

##### 用法


```python
  def __str__(self):
  	return str_type
```

##### 参数

- 无

##### 返回值

- 一般返回对于该类的描述信息

----------------------------------------

#### `__gatattr__`

##### 介绍

- 当调用的属性或方法不存在时,会返回该方法定义的信息

##### 用法

```python
def __gatattr__(self, key):
	print(something...)
```

##### 参数

- `key` : 调用任意不存在的属性名

##### 返回值

- 可以是任意类型也可以不进行返回

### 代码片段1

```python
# coding:utf-8

class Test(object):

    def __str__(self):
        return 'this is a test class'

    def __getattr__(self, key):
        # print('这个key:{}并不存在'.format(key))
        return '这个key:{}并不存在'.format(key)


t = Test()
print(t)
# print(t.a)
print(t.a)
print(t.b)
```

---------------------------

#### `__setattr__`

##### 功能

- 拦截当前类中不存在的属性与值

##### 用法

```python
def __settattr__(self, key, value):
	self.__dict__[key] = value
```

##### 参数

- `key` 当前的属性名
- `value` 当前的参数对应的值

##### 返回值

- 无

--------------------------------

#### `__call__`

##### 功能

- 本质是将一个类变成一个函数

##### 用法

```python
def __call__(self, *args, **kwargs):
	print('call will start')
```

##### 参数

- 可传任意参数

##### 返回值

- 与函数情况相同 可有可无

#### 代码片段2

```python

# coding:utf-8

class Test(object):

    def __str__(self):
        return 'this is a test class'

    def __getattr__(self, key):
        # print('这个key:{}并不存在'.format(key))
        return '这个key:{}并不存在'.format(key)

    def __setattr__(self, key, value):
        # print(key, value)
        # if key not in self.__dict__:
        self.__dict__[key] = value
        print(self.__dict__)

    def __call__(self, a):
        print('call func will start')
        print(a)


t = Test()
print(t)
# print(t.a)
print(t.a)
print(t.b)
t.name = '小慕'
print(t.name)
t('dewei')
# t.a.b.c 链式操作


class Test2(object):
    def __init__(self, attr=''):
        self.__attr = attr

    def __call__(self, name):
        # print('key is {}'.format(self.__attr))
        return name

    def __getattr__(self, key):
        if self.__attr:
            key = '{}.{}'.format(self.__attr, key)
        else:
            key = key
        print(key)
        return Test2(key)


t2 = Test2()
name = t2.a.b.c('dewei')
print(name)


result = t2.name.age.sex('ok')
print(result)
```

