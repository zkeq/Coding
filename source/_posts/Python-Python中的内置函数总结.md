---
title: Python Python中的内置函数总结
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>很多常用的内置函数
date: 2021-11-12 02:07:43
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

### Python中的内置函数总结

- 总结python的常用内置函数

#### 常用函数1

| 函数名      | 参数         | 介绍                     | 返回值 | 举例                                 |
| ----------- | ------------ | ------------------------ | ------ | ------------------------------------ |
| `abs`       | **Number**   | 返回数字绝对值           | 正数字 | `abs(-10)`                           |
| `all`       | **List**     | 判断列表内容是否全是true | Bool   | `all(['', '123'])`                   |
| `help`      | **object**   | 打印对象的用法           | 无     | `help(list)`                         |
| `enumerate` | **iterable** | 迭代时记录索引           | 无     | `for index, item in enumerate(list)` |
| `input`     | **Str**      | 命令行输入消息           | Str    | `input('请输入信息:')`               |

#### 常用函数2

| 函数名       | 参数         | 介绍                         | 返回值 | 举例                    |
| ------------ | ------------ | ---------------------------- | ------ | ----------------------- |
| `isinstance` | Object, type | 判断对象是否是某种类型       | Bool   | `isinstance('a', str)`  |
| `type`       | Object       | 判断对象的类型               | Str    | `type(10)`              |
| `vars`       | instance     | 返回实例化的字典信息         | dict   |                         |
| `dir`        | object       | 返回对象中所有可用方法和属性 | List   | `dir('asd')`            |
| `hasattr`    | Obj, key     | 判断对象中是否有某个属性     | Bool   | `hasattr('1', 'upper')` |

#### 常用函数3

| 函数名    | 参数          | 介绍                     | 返回值   | 举例                             |
| --------- | ------------- | ------------------------ | -------- | -------------------------------- |
| `setattr` | Obj,key,value | 为实例化对象添加属性与值 | 无       | `setattr(instance, 'run', 'jo')` |
| `gatattr` | obj, key      | 通过对象获取属性         | 任何类型 | `getattr(obj, key)`              |
| `any`     | Iterable      | 判断内容是否有True值     | Bool     | `any([1, 0, ''])`                |

#### 代码

```python
# coding:utf-8

# food = input('你想吃什么呢:')
# print(food)
#
# # help(input)
# help(list)

class Test(object):
    a = 1
    b = 2

    def __init__(self):
        self.a = self.a
        self.b = self.b


test = Test()
print(test.a)
result = vars(test)
print(result)

print(hasattr(test, 'a'))
print(hasattr(test, 'c'))
print(hasattr(list, 'append'))
print(hasattr(list, 'appends'))

setattr(test, 'c', 3)
print(test.c)  # 若存在, 会覆盖
print(vars(test))

# setattr((list, 'c', 1))  # 内置的类不可自定义属性
if hasattr(list, 'appends'):
    print(getattr(list, 'appends'))
else:
    print('不存在')

a = ['', None, True, 0]
print(any(a))  # '或' 的关系
# all - > and
# any - > or
```
