---
title: Python 字符串的大小写(一)
date: 2021-09-18 19:37:59
tags: [字符串]
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-18/3.png
description: 本节课主要学习了 capitalize lower  casefold 的用法
---

### 字符串capitalize用法

`str.capitalize()`

首字母大写 其余字母小写

```python
# coding:utf-8

name = 'xiao mu'
info = 'hello 小慕'
_info = '小慕 hello'
number_str = '1314'


new_info = info.capitalize()
_new_info = _info.capitalize()
new_number_str = number_str.capitalize()


print(name)
print(new_info)
print(_new_info)
print(new_number_str)

print('abc'.capitalize())
print(name.capitalize())

```

-----------------------------

### 字符串lower &  casefold用法

`str.lower()`

`str.casefold()`

用法相同均为小写字符串中字母

注意:若字符串为空也不会报错

```python
# coding:utf-8

message_en = 'How do you do? Xiaomu'
message_ch = '你好呀, XiaoMu'
message_mix = '你好呀, Xiaomu, 今天是星期三!'

message_en_lower = message_en.lower()
message_en_casefold = message_en.casefold()

message_ch_lower = message_ch.lower()
message_ch_casefold = message_ch.casefold()

message_mix_lower =message_mix.lower()
message_mix_casefold = message_mix.casefold()

print(message_en_lower, message_en_casefold)
print(message_ch_lower, message_ch_casefold)
print(message_mix_lower, message_mix_casefold)

empty = ''
empty_lower = empty.lower()
empty_casefold = empty.casefold()

print('.' + empty_lower + '.', '.' + empty_casefold + '.')
```

