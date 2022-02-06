---
title: Python 字符串中返回bool类型的函数集合
date: 2021-09-25 21:33:37
tags: [字符串]
categories: Python
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-9-25/1.jpg
---

### 字符串中返回bool类型的函数集合

#### isspace

##### 功能:

- 判断字符串是否是由一个空格组成的字符串

##### 用法:

- `booltype = string.isspace()`  -> 无参数可传 ,返回一个`布尔类型`

##### 注意:

- 由空格组成的字符串,不是空字符串 : “'!=‘’'

-------------------------

#### istitile

##### 功能:

- 判断字符串是否是一个标题类型

##### 用法

- `booltype = String.istitle()`  -> 无参数可传, 返回一个`布尔类型`

##### 注意:

- **该函数只能用于英文**

------------------

#### isupper与islower

##### 功能:

- `isupper`判断字符串中的字母是否都是大写
- `islower`判断字符串中的字母是否都是小写

##### 用法:

- `booltype = string.isupper()`  -> 无参数可传 , 返回一个`布尔类型`
- `booltype = string,islower()`   ->无参数可传 ,返回一个`布尔类型`

##### 注意:

- 只检测字符串里的字母,对其他字符不做判断

----------------------------------

#### join与split 稍后见

- 我们数据类型转换的时候见

#### 代码

```python
# coding:utf-8

title = 'Back Of China'
upper_str = 'PYTHON IS A GOOD CODE 哈哈!'
upper_str_02 = 'Python Is A Good Code'
lower_str = ' i love python 哈哈!'
not_empty = '                  '

print(title.istitle())
print(upper_str.istitle())
print(upper_str_02.istitle())

print('isuppr', upper_str.isupper())
print(lower_str.isupper())
print('islower', lower_str.islower())

print(not_empty.isspace())

```

