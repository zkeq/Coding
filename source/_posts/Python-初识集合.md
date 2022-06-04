---
title: Python 初识集合
date: 2021-10-04 20:46:30
tags: [集合]
description: 本节课主要学习了:<br>集合的定义以及与列表的区别<br>和创建方法的注意事项
categories: Python
cover: https://img.onmicrosoft.cn/2021-10-4/2.jpg
---

### 初识集合

####  什么是集合

- `集合(set)`是一个无序的不重复元素序列
- 常用来对两个列表进行交并差的处理
- 集合与列表一样, 支持所有的数据类型(**所有不可变的数据类型**)

#### 集合与列表的区别

| 功能 |      列表      |             集合             |
| :--: | :------------: | :--------------------------: |
| 顺序 |      有序      |             无序             |
| 内容 |     可重复     |           不可重复           |
| 功能 | 用于数据的使用 | 用于数据的交集并集差集的获取 |
| 索引 |     有索引     |            无索引            |
| 符号 |   [] [1,2,3]   |          {} {1,2,3}          |

#### 集合的创建方法

- 通过`set函数`来创建集合,`不能使用{}` 来创建**空集合**

#### 代码

```python
# coding:utf-8

a = set()
print(a)
print(type(a))

b = set(['python', 'django', 'flask'])
print(b)

c = {(1, 2, 3), '123', 1}
print(c)

d = {}
print(d, type(d))

a_list = ['python', 'django', 'python', 'flask']
b_set = set(a_list)
print(b_set)

```
