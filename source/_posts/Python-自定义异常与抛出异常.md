---
title: Python 自定义异常与抛出异常
date: 2021-11-05 23:56:51
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中如何自定义异常以及抛出
cover: https://ik.imagekit.io/zkeq/2021-10-28/2.jpg
---

### 自定义异常与抛出异常

#### 自定义抛出异常`raise`

- 将信息以报错的形式抛出

##### 用法

- `rais 异常类型（message)`

##### 参数

- `message`：错误信息

##### 返回值

- 无返回值

#### 自定义异常类

- 继承基类——`Exception`
- 在`构造函数`中**定义错误信息**

#### 代码

```python
# coding:utf-8

def test(number):
    if number == 100:
        raise ValueError('number 不可以是100')
    return number


# result = test(100)
# print(result)


def test2(number):
    try:
        return test(number)
    except ValueError as e:
        return e


result = test2(100)
print(result)


def test3():
    raise '错误了'


# test3()

def test4(name):
    if name == 'dewei':
        raise Exception('dewei不可以被填写')
    return name


# test4('dewei')


class NumberLimitError(Exception):
    def __init__(self, message):
        self.message = message


class NameLimitError(Exception):
    def __init__(self,message):
        self.message = message


def test5(name):
    if name == 'dewei':
        raise NameLimitError('dewei不可以被填写')
    return name


def test6(number):
    if number > 100:
        raise NumberLimitError('数字不可以大于100')
    return number


print('----------')
try:
    test5('dewei')
except NameLimitError as e:
    print(e)

try:
    test6(1000)
except NumberLimitError as e:
    print(e)

# test5('dewei')
```

