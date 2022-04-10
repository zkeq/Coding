---
title: Python 字典的values函数
date: 2021-10-04 08:44:17
tags: [字典]
cover: https://ik.imagekit.io/zkeq/2021-10-3/5.png
description: 本节课主要学习了:<br>字典的values函数的功能和用法
categories: Python
---

### 字典的values函数

#### 功能

- 获取**当前字典**中所有`键值对`中的`值(value)`

#### 用法

- `dict.values()`  -> **无需传参**, 返回一个`value集合`的`伪列表`
  - 依旧是伪列表,不具有列表的所有功能

#### 代码

```python
# coding:utf-8

project = {'id': 1, 'name': 'ipad', 'price': 2200, 'count': 50}

keys = list(project.keys())
values = list(project.values())
print(keys)
print(values)

print('{} | {}  | {} | {}'.format(keys[0], keys[1], keys[2], keys[3]))
print('{}  | {}  | {}  | {}'.format(values[0], values[1], values[2], values[3]))
print('2  | iphone | 3000 | 50')

```
