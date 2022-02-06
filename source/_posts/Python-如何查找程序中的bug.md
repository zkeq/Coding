---
title: Python 如何查找程序中的bug
date: 2021-11-05 23:57:43
tags: [对象和异常]
categories: Python
description: 本节课主要学习了<br>Python中如何debug
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 什么是bug

#### bug定义

- 程序中出现的`错误`，但又**没有**通过异常去`捕获`，以至于`直接抛出`，导致`程序的崩溃`

#### bug一词的由来

- **bug**指的是 `小虫`
- 飞入计算机中导致机器停止

#### 代码

```python
# coding:utf-8
print('test1')
a = 1
print(a)
print('test2')
b = 2
print(b)
print('test3')
c = 3
print(c)
print('test4')
d = 4
print(d)

print('test5')
def test1():
    print(5)


test1()

```
