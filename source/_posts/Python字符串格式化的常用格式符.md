---
title: Python字符串格式化的常用格式符
date: 2021-09-27 19:35:44
tags: [字符串]
categories: Python
cover: https://img.onmicrosoft.cn/2021-9-27/4.jpg
description: 本节课主要学习了各种常用的格式符<br>以及不大常用的格式符.
---

### 字符串格式化的常用格式符

#### 字符串格式化的符号

- 定义:用于对应各种数据类型的格式化符号-----格式化符号

| 符号 |           说明            |
| :--: | :-----------------------: |
|  %s  | **格式化字符串,通用类型** |
|  %d  |        格式化整形         |
|  %f  |       格式化浮点型        |
|  %u  | 格式化无符号整型(正整型)  |
|  %c  |        格式化字符         |

#### 不太常用的格式化符号

| 符号 |          说明          |
| :--: | :--------------------: |
|  %u  |  格式化无符号八进制数  |
|  %x  |  格式化无符号16进制数  |
|  %e  | 科学计数法格式化浮点数 |

#### 代码

```python
# coding:utf-8

print('%c' % 1000)
#print('%c' % 'ab')
print('%c' % 999999)

print('%u' % -1)
print('%f' % 1.2)
print('%f' % 3.14)
print('%f' % 12)
print('%d' % 10)
print('%d' % -10)
print('%d' % 1.2)
print('%s' % '123')
print('%s' % 123)
# print('%f' % '1.2')

print('{:d}'.format(1))
print('{:f}'.format(1.2))
#print('{:s}'.format(12))

print('%o' % 24)
print('%x' % 32)
#print('%x' % 123ab)

number = int('123ab', 16)
print(number)
print('%x' % number)

print('%e' % 1.2)

par = "我喜欢{}，但是他需要{}, 可我只有{}。"
print(par.format("番茄",10.88,5))

par = "我喜欢%s，但是他需要%s, 可我只有%s。"
print(par % ("菠萝", 32.54, 23))

```
