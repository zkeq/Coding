---
title: Python字符串的转义字符
date: 2021-09-27 19:36:05
tags: [字符串]
categories: Python
cover: https://ik.imagekit.io/zkeq/2021-9-27/4.jpg
description: 本节课主要学习了python字符串的转义字符的用法和意义.<br>并进行了相关练习.
---

### 字符串的转义字符

#### 什么是转义字符

- 字符要转成其他含义的功能,所以我们叫他转义字符
- `\`    `+`    字符

#### Python中的转义字符

| 符号  |                说明                 |
| :---: | :---------------------------------: |
| `\n`  | 换行,一般用于末尾,`strip`对其也有效 |
| `\t`  |  横向制表符(可以认为是一个间隔符)   |
| `\v`  |    纵向制表符(会有一个男性符号)     |
| `\a`  |                响铃                 |
| `\b`  | 退格符,将光标前移,覆盖(删除前一个)  |
| `\r`  |                回车                 |
| `\f`  | 翻页(几乎用不到,会出现一个女性符号) |
| `\'`  |        转义字符串中的单引号         |
| `\''` |         转义字符中的双引号          |
| `\\`  |              转义斜杠               |

#### 转义无效符

- 在**python**中 在字符串前加 `r` 来将当前字符串的转义字符无效化
  - `print(r'hello \f')`
- `r`对`格式化`无影响

#### 代码

```python
# coding: utf-8

info_n = ('my name \nis %s\n' % 'dewei')
print(info_n)

info_t = 'my name \tis dewei'
print(info_t)

info_v = 'my name \v is dewei'
print(info_v)

info_a = 'my name \a is dewei'
print(info_a)

info_b = 'my name is dewei\b'
print(info_b)

info_r = 'my name is dewei\r'
print(info_r, info_b)

info_f = 'my name is dewei\f'
print('f', info_f)

print('my name is \'dewei\'')
print("my name is \"dewei\"")
print('my name is \"Dewei\"')

print('my name is \\ dewei')

print(r'my name is \\ dewei\n')

print(r'my name is %s' % 'dewei')

```

