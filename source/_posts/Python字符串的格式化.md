---
title: Python字符串的格式化
date: 2021-09-27 19:35:19
tags: [字符串]
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-27/4.jpg
description: 本节课初步认识了格式化<br>以及相关的使用方法.
---

### 字符串的格式化

#### 什么是格式化

`一个固定的字符串中有部分元素是根据变量的值而改变的字符串`

#### 使用格式化场景和目的

- 发送邮件的时候
- 发送短信的时候
- App上发推送的时候
- 对于重复性很多的信息,通过格式化的形式,可以减少代码的书写量

#### 格式化的三种方式

- 字符串格式化使用操作符 `%` 来实现

  ![图片1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-27/1.jpg)

- 字符串格式化函数 - `format`(官方比较推荐)
  - `string.format`函数用来格式化字符串
  - 使用 `format` 的字符串主体使用 `{}` 大括号来代替格式符
  - `string.format(date,date,date...)`
- **Python3.6加入的新格式化方案----f-strings**
  - 定义一个变量
  - 字符串前加 f 符号
  - 需要格式化的位置使用 (变量名)
  - 一定要先定义好变量名

#### 代码

```python
# coding: utf-8

info = 'my name is %s, my age is %s'

name_01 = '小慕'
age_01 = 10
name_02 = 'dewei'
age_02 = 33
print(info % (name_01, age_01))
print(info % (name_02, age_02))

message = '您好, 今天是%s, 您的手机号码 : %s 已经欠费了, 请尽快充值'
print(message % ('星期一', 123456789))

print(message % (1234567, '星期二'))
print(message)

books = ['python', 'django', 'flask']
info_2 = 'my name is %s, my age is %s, my book is %s'
print(info_2 % (name_01, age_01, books))

dict_01 = {'a': 'a', 'b': 'b'}
print('dict is %s' % dict_01)

info_03 = 'my name is {0}, my age is {1}, my book is {2}'
print(info_03.format(name_02, age_02, books))

info_04 = f'my name is {name_01}, my name is {age_02}'
print(info_04)

print(info_03.format('dewei', 33, ['python']))

```

