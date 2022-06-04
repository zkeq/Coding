---
title: Python 列表元组的操作符
date: 2021-09-29 22:52:02
tags: [列表,元组]
categories: Python
cover: https://img.onmicrosoft.cn/2021-9-29/4.png
description: len函数<br>列表(元组)之间的累加与乘法<br>in 和 not in 在列表(元组)中的用法
---

### 列表元组的操作符

#### 列表(元组)之间的累加与乘法

- len 函数可以计算出除了数字类型意外,其他所有数据类型的长度

###### 加法

- new_names = names +names

###### 乘法

- new_names = names * 2

#### `in` 和  `not in` 在列表(元组)中的用法

- in判断某个成员(元素)是否在该数据结构中

- not in 就是判断某个成员(元素)是否不在该数据类型中

##### 示例

- `bool('xiaomu' in names)`

- `bool('xiaowang' not in names)`

##### 注意

**`+=`不可以`直接打印`**

#### 代码

```python
# coding:utf-8

names = ('dewei', 'xiaomu', 'xiaowang')

names_add = names + names
names_c = names * 10

print(names_add)
print(names_c)
print('names_c length is', len(names_c))

names += ('abc', )
print(names)
names *= 10
print(names)

names_list = ['dewei', 'xiaomu']
names_list += ['xiaowang']
print(names_list)
names_list *= 5
print(names_list)

print('dewei' in names_list)
print('dewei' not in names_list)

```

#### 小结:列表与元组的总结与应用

1. len函数可以计算出除了数字类型以外，其他所有数据类型的长度。

   ![1](https://img.onmicrosoft.cn/2021-9-29/1.jpg)

2. in判断某个元素是否在列表（元组中）

3. not in判断某个元素u是否不在列表（元组中）两者返回结果是bool值即True或False。

   ![2](https://img.onmicrosoft.cn/2021-9-29/2.jpg)
