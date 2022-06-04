---
title: Python 字符串与bytes的转换
date: 2021-10-05 18:24:34
tags: [类型转换]
description: 本节课主要学习了:<br>字符串与bytes的转换<br>bytes比特类型和 encode与decode函数
categories: Python
cover: https://img.onmicrosoft.cn/2021-10-5/1.png
---

### 字符串与bytes的转换

#### 什么是bytes(比特类型)

- 二进制的数据流--bytes

- 一种特殊的字符串
- 字符串前 + b  标记

> 内置函数dir可以查到该数据类型的相关说明

---------------

#### 字符串转bytes的函数--encode

##### 功能

- 将`字符串`转成`比特(bytes)类型`

##### 用法

`sring.encode(endocing='utf-8', errors= 'strict')`

##### 参数

- `encoding`:转换的**编码格式** ,如`ascii` , `gbk` , 默认 `utf-8`

- `errors` : **出错**时的处理方法 , 默认`strict` 
  - 直接抛错误 , 也可以选择 `ignore` 忽略错误

##### 返回值

- 返回一个比特(bytes)类型

----------------------

#### bytes转字符串的函数--decode

##### 功能

- 将`比特(bytes)类型`转成`字符串`

##### 用法

- `bytes.decode(encoding='utf-8', errors='strict')`

##### 参数

- `encoding`:  转换成的**编码格式**, 如 `ascii`, `gbk`, 默认 `utf-8`

- `errors`: 出错时的**处理方法** , 默认`strict` ,直接**抛错误** , 也可以选择`ignore`忽略错误

##### 返回值

- 返回一个`字符串类型`

##### 代码

```python
# coding:utf-8

a = 'hello xiaomu'
print(a, type(a))

b = b'hello xiaomu'
print(b, type(b))

print(b.capitalize())
print(b.replace(b'xiaomu', b'dewei'))
print(b[:3])
print(b.find(b'x'))

print(dir(b))

c = 'hello 小慕'
d = c.encode('utf-8')
print(d, type(d))
print(d.decode('utf-8'))

```
