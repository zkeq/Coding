---
title: Python 字典的复制--copy函数
date: 2021-10-04 08:45:10
tags: [字典]
cover: https://img.onmicrosoft.cn/2021-10-3/5.png
description: 本节课主要学习了:<br>copy函数的功能和用法
categories: Python
---

### 字典的复制--copy函数

#### 功能

- 将当前字典复制一个新的字典

#### 用法

- `dict.copy()`  -> 该函数**无参数**, 返回一个一模一样的`内存地址不同的字典`
  - != 可以判断两个成员是否相同

#### 代码

```python
# coding:utf-8

fruits = {
    'apple': 30,
    'banana': 50,
    'pear': 100
}

real_fruits = fruits.copy()
fruits['apple'] = 60
print(real_fruits)

real_fruits['orange'] = 50
real_fruits.update({'cherry': 100})

print(real_fruits)
# print(fruits)
real_fruits['apple'] = real_fruits['apple'] - 5
print(real_fruits)
real_fruits['pear'] -= 3
print(real_fruits)

real_fruits.clear()
print(real_fruits)
print('第二天......')
real_fruits = fruits.copy()
print(real_fruits)

```
