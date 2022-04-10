---
title: Python 字符串的find与index函数
date: 2021-09-25 21:32:37
tags: [字符串]
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-9-25/1.jpg
---

### 字符串的find与index函数

#### 功能

- `find`与`index`都是返回你想寻找的成员的位置

#### 用法

- `string.find(item)` -> `item`: 你想查询的元素,返回一个整形

- `string.index(item)` -> `item`: 你想查询的元素,返回一个整形`或者报错`

  **Ps:字符串里的位置是从左向右,以0开始的.**

#### 区别

- 如果`find`找不到元素,会返回`-1`
- 如果`index`找不到元素,会导致程序`报错`

#### 代码

```python
# coding:utf-8

info = 'python is a good code'

result = info.find('a')
print(result)
result = info.find('ok')
print(result)

result = info.index('a')
print(result)
result = info.index('o')
print(result)

str1 = "tomorrow is sunny day"

print(str1.find("is", 2, 10))
print(str1.find("is"))
print(str1.find("is", 10, 15))
print(str1.find("is", 9))# coding:utf-8

info = 'python is a good code'

result = info.find('a')
print(result)
result = info.find('ok')
print(result)

result = info.index('a')
print(result)
result = info.index('ok')
print(result)

```

