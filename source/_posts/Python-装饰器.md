---
title: Python 装饰器
date: 2021-10-28 22:25:10
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中的装饰器
cover: https://img.onmicrosoft.cn/2021-10-28/2.jpg
---

### 装饰器

#### 什么是装饰器

- 也是一种函数
- 可以接受函数作为参数
- 可以返回函数
- 接收一个函数,内部对其处理,然后返回一个新函数,动态的增强函数功能
- 将`c函数`在`a函数`中执行,在`a函数`中可以**选择执行**或**不执行**`c函数`,也可以对`c函数`的**结果**进行**二次加工处理**

#### 装饰器的定义

```python
def out(func_args): 外围函数
	def inter(*args, **kwargs): 内嵌函数
		reture func_args(*args, **kwargs)
    return inter   外围函数返回内嵌函数
```

#### 装饰器的用法

- 将`被调用的函数`直接作为`参数`**传入**`装饰器`的`外围函数括弧`

- 将装饰器与被调用函数绑定在一起
- `@符号 + 装饰器函数`放在被调用函数的上一行 , `被调用的函数`**正常定义** , `只需要直接调用`**被执行函数**即可

#### 代码

```python
# coding:utf-8

def check_str(func):
    print('func:', func)
    def inner(*args, **kwargs):
        print('args:', args, kwargs)
        result = func(*args, **kwargs)
        if result == 'ok':
            return 'result is %s' % result
        else:
            return 'result is failed:%s' % result
    return inner

@check_str
def test(data):
    return data

result = test(data='no')
print(result)

result = test('ok')
print(result)

```

