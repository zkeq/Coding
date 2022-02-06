---
title: Python 循环与for循环
date: 2021-10-14 21:47:07
tags: [循环]
categories: Python
description: 本节课主要学习了<br>循环与for循环,即在for循环的基础用法
cover: https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-14/1.png
---

### 循环与for循环

#### 什么是循环

- `周而复始`地**运动**或**变化**
- **遍历**

#### for循环的功能与用法

- 通过`for关键字`将`列表, 元组, 字符串, 字典`中的`每个元素`按照`列顺序`进行**遍历(循环)**

#### 字典的for循环

##### 用法

```python
for item in iterable :  # for循环语法块
	print(item)			# 每次循环对应的代码块
						代码块需要缩进
```

##### 参数

- `iterable`: 一切可循环的数据类型 如列表 元组 字符串 字典
- `item` : iterable中的每一个元素(成员)

##### 返回值

- for循环是语句,`没有`返回值,但在特定情况下**有返回值**

#### 字典利用`items内置函数`进行**for循环**

##### 功能

- 将字典转成`伪列表` , 每个`key` , `value`转成`元组`

##### 用法

```python
for key, value in dict.items():
	print(key, value)
```

##### 参数

- `items`无参数
- `key` : `for循环体`中获取的**字典当前元素的key**
- `value` : `for循环体`中**对应当前key的value值**

##### 返回值

- `for循环`是语句, **没有返回值**, `items`**返回一个伪列表**

#### python的内置函数--range

##### 功能

- 返回的是一个一定范围的可迭代对象, 元素为整形, 它不是列表 ,无法打印信息,但可循环.

##### 用法

```
for item in range(start, stop, step=1):

	print(item)
```

##### 参数

- `start`:**开始的数字**,类似索引的左边(左含)
- `stop`:**结束的数字**,类似索引的右边(右不含)

- `step`:**跳步**,类似于索引中的第三个参数

##### 返回值

- 返回一个可迭代(循环的)以整形为主的对象

#### else在for循环中使用

- `else语句`只有在**for循环正常退出**后执行
- 循环`没有报错`, `没有中途停止`

### 代码

```python
# coding:utf-8

l = ['dewei', 'xiaomu', 'xiaoman', 'xiaoming']

for i in l:
    print(i)

print('finish')

for i in 'python':
    print(i)

users = ('dewei', 'xiaoman', 'xiaomu', 'xiaoming')

for name in users:
    if name == 'xiaomu':
        print('你好 小慕')
    else:
        print('hello {}, 欢迎学习python'.format(name))
    print('------------')

print('finish---')

users = {'name': 'dewei', 'age': 33}
for i in users:
    print(i, users[i])

items = users.items()
print(items)

for key, value in users.items():
    print(key, value)

users_list = [
    {'username': 'dewei'},
    {'username': 'xiaomu'}
]
for user in users_list:
    print(user.get('username'))
    print(user.get('age'))

l = range(6)
print(l, type(l))

for i in l:
    print(i)
else:
    print('for循环结束了')

```

