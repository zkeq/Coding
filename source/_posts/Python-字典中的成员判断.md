---
title: Python 字典中的成员判断
date: 2021-10-04 08:45:25
tags: [字典]
cover: https://img.onmicrosoft.cn/2021-10-3/5.png
description: 本节课主要学习了:<br>in 与 not in<br>[]以及get的用法
categories: Python
---

### 字典中的成员判断

#### `in` 与 `not in`在字典中的用法

- 只能判断`key`是否存在

#### `get`用于判断成员存在

- `bool(test_dict.get('name'))`
- 字典中的类型可能为`False类型`...**有待商榷**

#### 代码

```python
# coding:utf-8

default_dict = {'a': None, 'b': 1, 'c': 0, 'd': ''}

print('a' in default_dict)
print(default_dict['a'])
print(bool(default_dict.get('a')))
print(bool(default_dict.get('b')))
print('f' in default_dict)
print('f' not in default_dict)

```
