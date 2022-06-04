---
title: Python Python中的高级函数(魔法函数)
tags: [常用函数,高级函数]
description: 本节课主要学习了<br>3个 Python中的高级函数(魔法函数) 分别是 filter,map,reduce
date: 2021-11-12 02:08:36
categories: Python
cover: https://img.onmicrosoft.cn/2021-11-11/6.png
---

### Python中的高级函数(魔法函数)

- filter(内置函数)
- map(内置函数)
- reduce(曾经是内置函数)

#### `filter`

##### 功能

- 对循环根据过滤条件进行过滤

##### 用法

- `filter(func, list)`

##### 参数介绍

- `func`: 对list每个item进行条件过滤的定义
- `list` : 需要过滤的列表

##### 举例

- `res = filter(lambda x:x > 1, [0,1,2])`

##### 返回值

- `<filter at 0x4f3af70> -> [1,2]`

--------------------------

#### `map`

##### 功能

- 对列表中的每个成员`是否满足条件`返回对应的**True**与**False**

##### 用法

- `map(func, list)`

##### 参数介绍

- `func`: 对List每个item进行条件满足的判断
- `list`: 需要过滤的列表

##### 举例

- `res = map(lambda x:x > 1, [0,1,2])`

##### 返回值

- `<map at 0x4f3af70> -> [False, False, True]`

---------------

#### `reduce`

##### 功能

- 对循环前后两个数据进行累加

##### 用法

- `reduce(func, list)`

##### 参数介绍

- `func` : 对 数据累加的函数
- `list` : 需要处理的列表

##### 举例

- `res = reduce(lambda x,y: x + y, [0,1,2])`

##### 返回值

- 数字  `->` 3

##### reduce的导入

- `from functools import reduce`

#### 代码

```python
# coding:utf-8

from functools import reduce

frunts = ['apple', 'banana', 'orange']

result = filter(lambda x: 'e' in x, frunts)
print(list(result))
print(frunts)


def filter_func(item):
    if 'e' in item:
        return True


print('--------')
filter_result = filter(filter_func, frunts)
print(list(filter_result))

map_result = map(filter_func, frunts)  # > all
print(list(map_result))


reduce_result = reduce(lambda x, y: x + y, [2, 1, 2, 100])
print(reduce_result)

reduce_result_str = reduce(lambda x, y: x + y, frunts)
print(reduce_result_str)

```
