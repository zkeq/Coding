---
title: Python 初探异常
date: 2021-11-05 23:55:57
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>什么是异常以及相关的基础知识
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 初探异常

#### 什么是异常与异常处理

- 异常就是错误
- 异常会导致程序崩溃并停止运行
- 能监控并捕获异常，将异常部位的程序进行修理使得程序继续正常运行

#### 异常的语法结构

```python
try：
	<代码块1>  被try关键字检查并保护的业务代码
	
except <异常的类型>:
    <代码块2> # 代码块1 出现错误后执行的代码块
```

#### 捕获通用异常

- 无法确定是哪种异常的情况下使用的捕获方法

```python
try:
    <代码块>
except Exception as e:  # 单词首字母大写
    <异常代码块>
```

#### 捕获具体异常

- 确定是哪种异常的情况下使用的捕获方法
- except  <具体的异常类型>as e

#### 捕获多个异常(1)

```python
try:
    print('try start')
    res = 1/0
    print('try finish')
except ZeroDivisionError as e:
    print(e)
except Exception as e: #可以有多个except
    print(‘this is a public excpet , bug is: %s' % e)
```

- 当`except`代码块`有多个`的时候，**当**`捕获到第一个`后，`不会`继续向下捕获

#### 捕获多个异常(2)

```python
try:
    print('try start')
    res = 1/0
    print('try finish')
except (ZeroDivisionError, Exception) as e:
    print(e)
```

- 当`except`代码后边的异常类型使用`元组`包裹起来，**捕获到哪种抛出哪种**

### 代码

```python
# coding:utf-8

def upper(str_data):
    new_str = 'None'
    try:
        new_str = str_data.upper()
    except Exception as e:
        print('程序出错了:{}'.format(e))
    return new_str


result = upper(1)
print('result:', result)

def test():
    try:
        print('123')
        1 / 0
        print('hello')
    except ZeroDivisionError as e:
        print(e)


test()


def test1():
    try:
        print('hello')
        print(name)
    except (ZeroDivisionError, NameError) as e:
        print(e)
        print(type(e))
        print(dir(e))


test1()

```
