---
title: Python 字符串与数字类型的转换
date: 2021-10-05 18:23:53
tags: [类型转换]
description: 本节课主要学习了:<br>字符串与数字类型的转换<br>其中包含的原理和要求
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-5/1.png
---

### 字符串与数字类型的转换

#### 什么是类型转换, 为什么做类型转换

- 将自身数据类型变成`新的数据类型` , 并拥有新的数据类型的所有功能的过程即为类型转换
- `a = '1'`  **#无法做数字操作**
- 为方便更好的帮助处理业务, 将类型变更为更适合业务场景的类型

#### 字符串与数字之间转换的要求

- `str  -->  number`: 数字组成的字符串
- `number  --->  str`  :  无要求

#### 字符串与数字之间的转换函数

| 原始类型 | 目标函数 | 函数  |           举例           |
| :------: | :------: | :---: | :----------------------: |
|   整形   |  字符串  |  str  |  new_str = str(123456)   |
|  浮点型  |  字符串  |  str  |   new_str = str(3.14)    |
|  字符串  |   整形   |  int  |   new_int = int('12')    |
|  字符串  |  浮点型  | float | new_float = float('1.2') |

#### 代码

```python
# coding:utf-8

int_data = 12
float_date =3.14

str_int_data = str(int_data)
str_float_data = str(float_date)
print(str_int_data, str_float_data, type(str_int_data), type(str_float_data))

zero_number = 0
_number = -1

str_zero_number = str(zero_number)
str_number = str(_number)
print(str_zero_number, str_number, type(str_zero_number), type(str_number))

str_float = '3.14'
str_int = '123456'

real_float = float(str_float)
real_int = int(str_int)

print(real_float, real_int, type(real_float), type(real_int))

mix_Str = '123a'
# print(float(mix_Str))
float_data_str = '3.14'
test_data = float(float_data_str)
print(test_data, type(test_data))

int_data_str = '123'
test_data = float(int_data_str)
print(test_data, type(test_data))

```
