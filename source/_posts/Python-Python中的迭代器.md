---
title: Python Python中的迭代器
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>Python中迭代器的用法 
date: 2021-11-12 02:08:16
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

### Python中的迭代器

#### 什么是迭代器

- 同步进行(不需要等待所有数据都写入内存即可使用)

#### 如何生成迭代器  - `iter`

##### 介绍

- 生成一个迭代对象

##### 用法

- `iter(iterable)`

##### 参数介绍

- `iterable` :  可迭代的数据类型

#### 迭代器的用法   - ` next`

##### 介绍

- 返回迭代器中的数据

##### 用法

- `next(iterator)`

##### 参数介绍

- `iterator`: 迭代器对象

#### 迭代器常用方法之生成迭代器

- for循环生成法---`yield`

- for循环一行生成迭代器

#### 迭代器常用方法之for循环获取

- (i for i range(10))
- 用完再用不会报错.

#### 代码

```python
# coding:utf-8

iter_obj = iter((1, 2, 3))
# print(next(iter_obj))
# print(next(iter_obj))
# print(next(iter_obj))

# print(next(iter_obj))


def _next(iter_obj):
    try:
        return next(iter_obj)
    except StopIteration:
        return None


# print(_next(iter_obj))
# print(_next(iter_obj))
# print(_next(iter_obj))
# print(_next(iter_obj))
# print(_next(iter_obj))

def make_iter():
    for i in range(10):
        yield i


iter_obj = make_iter()
# print(type(iter_obj))

for i in iter_obj:
    print(i)
print('--------')
for i in iter_obj:
    print(i)  # 执行后程序会空 , 拿不到数据

iter_obj = (i for i in range(10))

for i in iter_obj:
    print(i)
print('========')
for i in iter_obj:
    print(i)
    
```
