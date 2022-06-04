---
title: Python 字典key的获取
date: 2021-10-04 08:44:34
tags: [字典]
cover: https://img.onmicrosoft.cn/2021-10-3/5.png
description: 本节课主要学习了:<br>内置函数get获取方法<br>[]的获取方法以及他们的区别
categories: Python
---

### 字典key的获取

#### []的获取方法

- 字典+中括号内传key , 不进行赋值操作` 即为获取
- 返回key对应的value值

#### 内置函数get获取方法

##### 功能

- 获取当前字典中指定key对应的value

##### 用法

- `dict.get(key, default=None)`

##### 参数

- `key` : 需要获取**value**的**key**
- `default` : key**不存在**则返回此默认值 ,  默认是`None` , 我们也可以自定义(可以是任意类型)

#### []与get的区别

- `[]`如果获取的**key不存在**, 则**`直接报错`**
- `get`如果获取的**key不存在** ,  则**返回默认值**
- 所以**开发中** , **优先使用**`get函数`

#### 代码

```python
# coding:utf-8

user_info = {
    'id': 1,
    'username': 'dewei',
    'password': 'abcdefg',
    'created_time': '2020-01-01 11:11:11',
    'birthday': None
}

values = []
values.append(user_info['id'])
values.append(user_info['username'])
values.append(user_info['password'])
# values.append(user_info['created_time'])
values.append(user_info.get('created_time', '2020-02-02'))
# values.append(user_info['birthday'])
values.append(user_info.get('birthday', '2020-03-03'))

print(values)
# values.append(user_info['birthday'])

# values.append(user_info.get('birthday', '1986-01-01'))
# print(values)

```
