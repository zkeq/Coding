---
title: Python 局部变量与全局变量
date: 2021-10-20 23:14:34
tags: [函数]
categories: Python
description: 本节课主要学习了<br>局部变量与全局变量
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-20/4.png
---

### 局部变量与全局变量

#### 全局变量

- 在python脚本最上层代码块的变量
- 全局变量可以在函数内被读取使用

#### 局部变量

- 在函数体内定义的变量
- 局部变量无法在自身函数以外使用

#### global

- `将全局变量可以在函数体内进行修改`

  1. 定义一个全局变量

  2. 定义函数

     `global + 全局变量名`

  3. 函数体内给全局变量重新赋值

- 工作中, `不建议`使用`global`对**全局变量**进行修改

- 仅支持 `数字` `字符串` `空类型` `布尔类型` 的声明

- `列表和字典`的全局变量**不需要global进行声明**

#### 代码

```python
# coding:utf-8

name = 'dewei'
age = 33


def test():
    print(name)


test()


def test1():
    name = '小慕'
    print('函数体内', name)


test1()
print('函数体外', name)


def test3():
    age = 33
    print(age)


test3()
# print(age)


def test4(a):
    a = 10


test4(name)
print(name)


def test5():
    global name
    global age
    name = 10
    age = 10

test5()
print(name)
print(age)


test_dict = {'a': 1, 'b': 2}


def test6():
    test_dict['c'] = 3
    test_dict.pop('a')


test6()
print(test_dict)

```
