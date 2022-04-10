---
title: Python 列表的extend函数
date: 2021-10-01 22:42:55
tags: [列表]
categories: Python
description: 本节课主要学习了:<br>列表的extend函数以及相关的注意事项
cover: https://ik.imagekit.io/zkeq/2021-10-1/4.png
---

### 列表的extend函数

#### 功能

- 将其他**列表**或**元组**中的`元素`导入`当前列表`中

#### 用法

- `list.extend(iterable)` 

#### 参数

- `iterable`代表列表或元组 , 该函数无返回值

#### 注意事项

- 传入的必须是`iterable`
- 直接传入字符串的话会被拆分成很多个单个字符
- 不可传入整形或者布尔类型之类的(不是`iterable`**就不行**)
- **传入`字典`的话只会保留`key`的值**

#### 代码

```python
# coding:utf-8

manhua = []
history = []
code = []

new_manhua = ('a', 'b', 'c')
new_history = ('中国历史', '日本历史', '韩国历史')
new_code = ('python', 'django', 'flask')

manhua.extend(new_manhua)
history.extend(new_history)
code.extend(new_code)

print(manhua, history, code)

history.extend(manhua)
del manhua
print(history)

test = []
# test.extend('abcd')
test.extend({'name': 'dewei', 'age': 33})
# test.extend(True)
print(test)

```
