---
title: Python 异常中的finally
date: 2021-11-05 23:56:37
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中finally函数的基本用法
cover: https://img.onmicrosoft.cn/2021-10-28/2.jpg
---

### 异常中的`finally`

- finally的功能和用法

#### 功能

- 无论是否发生异常 ， 一定会执行的代码块
- 在函数中， 即便在`try`或`except`中进行了`return`也依然会执行`finally`语法块
- `try`语法**至少**要伴随`except`或`finally`中的一个

#### 用法

```python
try:
    <代码块1>
except:
    <代码块2>
finally:
    <代码块3>
```

#### 历史

- 在`python 2.5` 之前的版本， `finally`需要**独立使用**，`不可以`和**try配合**，之后**才演变成现在的模式**

#### 代码

```python
# coding:utf-8

def test1():
    try:
        1 / 0
    except Exception as e:
        print(e)
    finally:
        return 'finally'


result = test1()
print(result)


def test2():
    try:
        1 / 0
    except Exception as e:
        print('111')
        return e
    finally:
        print('finally')


print('-------')
result = test2()
print(result)


def test3():
    try:
        print('try test 11')
        return 'try'
    except Exception as e:
        print('e')
    finally:
        print('finally test')


print('------')
result = test3()
print(result)


def test4():
    try:
        1 / 0
    except Exception as e:
        print('1')
        return e
    finally:
        print('2')
        return 'finally'


print('----------')
result = test4()
print(result)


def test5():
    try:
        print('1try')
        return 'try'
    except Exception as e:
        print('e')
    finally:
        print('2finally')
        return 'finally'


print('========')
result = test5()
print(result)


def test6():
    try:
        print('try1')
        1 / 0
        print('try3')
    finally:
        # print('i am finally')
        return 'i am finally'


print('-------')
result = test6()
print(result)

```
