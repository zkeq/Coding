---
title: Python 函数的传参
date: 2021-10-18 23:58:19
tags: [函数]
categories: Python
description: 本节课主要学习了<br>函数的传参
cover: https://img.onmicrosoft.cn/2021-10-18/2.png
---

### 函数的传参

#### 必传参数

- 函数中定义的参数`没有默认值`,在**调用函数时**如果`不传入则报错`
- 在定义函数的时候,参数后边没有等号与默认值
- **错误:def add (a=1, b=1)** `x`
  - 在定义函数的时候,没有默认值且必须在函数执行的时候传递进去的参数,且顺序与参数顺序相同,就是必传参数

#### 默认参数(非必传参数)

- 在定义函数的时候,定义的参数含有默认值,通过赋值语句给他设一个默认的值
- 如果默认参数在调用函数的时候给予了新的值,函数将优先使用后传入的值进行工作

#### 不确定参数-可变参数

- 没有固定的参数名和数量(不知道要传的参数名具体是什么)
- `*args` 代表 :**将无参数的值合并成元组**
- `**kwargs` 代表**将有参数与默认值的赋值语句合并成字典**

#### 参数规则

- 参数的定义从左到右依次是

  1. 必传参数

  2. 默认参数

  3. 可变元组参数 `?`

     - `# 如果赋值的形式传参,则需要将可变的元组类型放在第一位`

  4. 可变字典参数
- 函数的参数传递`非常灵活`
- `必传参数`与`默认参数`的传参**多样化**
- 函数体内**不可**加`*`号

#### 代码

```python
# coding:utf-8

def add(a, b, c=3):
    return a + b + c


result = add(1, 2)
print(result)

result = add(1, 2, 6)
print(result)


def test_args(*args, **kwargs):
    print(args, type(args))
    print(kwargs, type(args))


test_args(1, 2, 3, 4, 5, 6, 7, 8, 9, name='dewei', age=33, top=174)


def test_args_supre(*args, **kwargs):
    if len(args) >= 1:
        print(args[0])

    if 'name' in kwargs:
        print(kwargs['name'])
    else:
        print('no name')
    print(args, len(args))
    print(kwargs, len(kwargs))


test_args_supre(1, name='dewei')
a = ('python', 'django')
b = {'name': 'dewei'}
test_args_supre(*a, **b)


def add(a, b=1):
    print(a + b)


add(1, 2)
add(1)
add(a=1, b=2)
add(b=2, a=1)  # 仅限于当前形式
# add(b=2)  # 会报错


def test(a, b=1, *args):
    print(a, b, args)


s = (1, 2)
test(1, 2, *s)
# test(a=1, b=2, *s)  # 如果赋值的形式传参,则需要将可变的元组类型放在第一位


def test2(*args, a, b=1):
    print(a, b, args)


test2(a=1,b=2, *s)


def test3(a, b=1, **kwargs):
    print(a, b, kwargs)


test3(1, 2, name='dewei')
test3(a=1, b=2, name='dewei')
test3(name='dewei', age=33, a=1, b=2)

d = {'name': '小慕'}
test3(a=1, b=2, **d)
test3(**d, a=1, b=2)
test3(**d, a=1, b=2)

```
