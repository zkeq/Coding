---
title: Python while循环
date: 2021-10-16 20:03:12
tags: [循环]
categories: Python
description: 本节课主要学习了<br>while循环
cover: https://img.onmicrosoft.cn/2021-10-16/3.jpg
---

### while循环

#### 什么是while循环

- 以`一定条件`为**基础**的循环,条件`满足`则**无限循环**,条件`不满足`**退出循环**
- `不依赖`可迭代的数据类型,而`for循环依赖`

#### 功能

- 在**满足条件**下会`无限循环`,**不满足条件**后将`停止循环`

#### while用法

```python
while bool_result:
	do
```

#### 参数

- `bool_result`: **布尔类型**,此处与`If语法完全一致`

- `do`: while循环体的**代码块**    **#需要缩进**

#### 返回值

- `while循环`是`语句`,**没有返回值**

#### 代码

```python
# coding:utf-8

count = 0
total = 0

while count <= 100:
    total += count
    count += 1

    if count == 10:
        print('count 已经到10了')
    elif count == 50:
        print('count 已经到50了')
    elif count == 99:
        print('count 马上就要到100了!')

print(total)

users = ['dewei', 'xiaomu', 'xiaogang', 'xiaoming']
index = 0
length = len(users)

while index <= length - 1:
    print(users[index])
    index += 1

while True:
    print('xx')

```
