---
title: Python 列表的clear函数
date: 2021-10-01 22:41:33
tags: [列表]
categories: Python
description: 本节课主要学习了:<br>列表的clear函数以及相关的注意事项
cover: https://img.onmicrosoft.cn/2021-10-1/4.png
---

### 列表的clear函数

#### 功能

- 将当前列表中的数据`清空`

#### 用法

- `list.clear()` -> 该函数**无参数** , **无返回值**

#### 注意

- `比空列表节省性能`

#### 代码

```python
# coding:utf-8

mix = ['python', 1, (1,), {'name': 'dewei'}]
print(mix, len(mix))
mix.clear()
print(mix, len(mix))

mixs = []

```
