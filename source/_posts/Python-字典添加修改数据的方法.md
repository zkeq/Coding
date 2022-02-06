---
title: Python 字典添加修改数据的方法
date: 2021-10-04 08:43:22
tags: [字典]
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/5.png
description: 本节课主要学习了:<br>字典添加修改数据的方法<br>[] 、 update 以及 setdefault 
categories: Python
---

### 字典添加修改数据的方法

#### `[]`处理法

> 字符串,列表, `list[0] = 10`

- 字典**无**索引
- `dict[ 'name' ] =  'dewei'`
- 添加或修改 ,  根据key是否存在所决定

#### 字典的内置函数`update`

##### 功能

- 添加新的字典,如**新字典**中有和原字典相同的`key` , 则该`key`的`value`会被**新字典**的`value`覆盖

##### 用法

- `dict.update(new_dict)` -- 该函数无返回值

##### 参数

- `new_dict` : 新的字典

#### 字典的内置函数`setdefault`

##### 功能

- 获取某个`key`的`value` , 如`key`**不存在**于字典中 , 将会`添加key`并将**value**设为**默认值**

##### 用法

- dict.setdefault(key, value)

##### 参数

- `key` : 需要获取的**key**
- `value` : 如果**key**不存在 , 对应这个**key**存入字典的默认值

#### 注意事项再强调

- 字典中每一个`key`一定是**唯一**的
- 字典中的数据量**没有限制**
- 字典中的`value`可以是**任何python的内置数据类型的对象和自定义的对象**

#### 代码

```python
# coding:utf-8

user = {'username': 'dewei', 'age': 33}
xiaomu = {'username': '小慕', 'age': 10, 'top': 175, 'sex': '男'}
user.update(xiaomu)
print(user)

value = user.setdefault('username', 'xiaoyun')
value = user.setdefault('birthday', '2021-1-1')
print(user, value)

# user['top'] = 174
#
# print(user)
# user['username'] = '小慕'
# print(user)
# user['top'] = 175
# user['age'] = 10
# print(user)

```

