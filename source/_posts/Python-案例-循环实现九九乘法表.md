---
title: 'Python [案例]循环实现九九乘法表'
date: 2021-10-16 20:04:26
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成自己的任务
cover: https://ik.imagekit.io/zkeq/2021-10-16/3.jpg
---

### [案例]循环实现九九乘法表

```python
# coding:utf-8

for i in range(1, 10):
    for j in range(1, i + 1):
        print('{} * {} = {}'.format(i, j, i *j), end=' ')
    print('')


i = 0
j = 0

while i < 9:
    i += 1
    while j < 9:
        j += 1
        print('{} * {} = {}'.format(j, i, i * j), end=' ')
        if i == j:
            j = 0
            print('')
            break

```

