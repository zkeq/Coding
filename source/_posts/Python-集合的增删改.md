---
title: Python 集合的增删改
date: 2021-10-04 20:51:06
tags: [集合]
description: 本节课主要学习了:<br>集合的add,update,remove,clear函数<br>和del的注意事项
categories: Python
cover: https://img.onmicrosoft.cn/2021-10-4/2.jpg
---

### 集合的增删改

#### 集合的`add函数`

##### 功能

- 用于集合中`添加一个元素`,如果集合中**已存在该元素**则该元素**不执行**

##### 用法

- `set.add(item)`

##### 参数

- `item` : 要**添加到集合中的元素**

##### 返回值

- 无返回值

----------------------------------

#### 集合的update函数

##### 功能

- 加入一个`新的集合(或列表, 元组, 字符串)`, 如新集合内的元素在原集合中**存在则无视**

##### 用法

- `set.update(iterable)`
- 传入字符串的时候会被拆开....

##### 参数

- `iterable` : 集合,列表元组字符串

##### 返回值

- `无`返回值 , **直接作用于原集合**

-------------------------

#### 集合的remove函数

##### 功能

- 将集合中的某个元素`删除` , 如元素`不存在`将会**报错**

##### 用法

- set.remove(item)  #   注意是元素不是索引

##### 参数

- `item` : 当前集合中的**一个元素**

##### 返回值

- **无返回值** , 直接作用于**原集合**

---------------------------

#### 集合的clear函数

##### 功能

- 清空**当前集合**中的`所有元素`

##### 用法

- `set.clear()`

##### 参数

- `无`

##### 返回值

- `无返回值` , 直接作用于**原集合**

-----------------------

#### 用del删除集合

- 只能直接删除集合对象自身

--------------------

#### 重要说明

- 集合无法通过索引获取元素
- 集合无获取元素的任何方法
- 集合只是用来处理列表或元组的一种临时类型 , 它不适合存储于运输

### 代码

```python
# coding:utf-8

a_list = ['python', 'django', 'django', 'flask']

a_set = set()

a_set.add(a_list[0])
a_set.add(a_list[1])
a_set.add(a_list[2])
a_set.add(a_list[-1])
print(a_set)

a_set.add(True)
a_set.add(None)
print(a_set)

a_tuple = ('a', 'b', 'c')
a_set.update(a_tuple)
print(a_set)
a_set.update('python')
print(a_set)

a_set.remove('python')
print(a_set)

a_set.clear()
print(a_set)
del a_set

# a_set.remove('flask')
# print(a_set)

```
