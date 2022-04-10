---
title: Python 嵌套for循环
date: 2021-10-14 21:47:56
tags: [循环]
categories: Python
description: 本节课主要学习了<br>循环与for循环,即在for循环中再写一个for循环
cover: https://ik.imagekit.io/zkeq/2021-10-14/1.png
---

#### 嵌套for循环

- `for循环`中的`for循环`

##### 代码

```python
# coding:utf-8

a = [1, 2, 3]
b = [4, 5, 6]

for i in a:
    print(i)
    print('------')
    for j in b:
        print(i + j)
    print('=======')

print(i, j)
```
