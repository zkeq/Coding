---
title: Python 列表的reverse函数
date: 2021-10-01 22:41:06
tags: [列表]
categories: Python
description: 本节课主要学习了:<br>列表的reverse函数以及相关的注意事项
cover: https://img.onmicrosoft.cn/2021-10-1/4.png
---

### 列表的reverse函数

#### 功能

- 对当前的列表顺序进行反转

#### 用法

- `list.reverse()`

#### 参数

- **无参数传递**

#### 代码

```python
# coding:utf-8

students = [
    {'name': 'dewei', 'age': 33, 'top': 174},
    {'name': '小慕', 'age': 10, 'top': 175},
    {'name': '小高', 'age': 18, 'top': 188},
    {'name': 'Xiaoyun', 'age': 18, 'top': 165}
]

print('当前同学的顺序是{}'.format(students))
students.reverse()
print('座位更换之后的顺序是{}'.format(students))

```
