---
title: Python 循环的继续与退出 continue and break
date: 2021-10-16 20:04:07
tags: [循环]
categories: Python
description: 本节课主要学习了<br>Python 循环的继续与退出<br> continue and break
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-16/3.jpg
---

### 循环的继续与退出 `continue and break`

#### continue语法

##### 功能

- 循环遇到`continue`将**停止本次数据循环** , 进入下一次循环

##### 用法

```python
while bool:
	continue 
for item in iterable:
	continue
	print(item)
```

##### 参数

- `continue`属于`语法`, **不需要加 ( )即可执行**
- `无`**参数**

##### 返回值

- `continue是语法`,**没有返回值**

-------------------------

#### break语法

##### 功能

- 使循环`正常停止`循环(遍历)
- 这时如果循环**配合了Else语句**,else语句将`不执行`

##### 用法

```python
while bool:
	break
for item in iterable:
	print(item)
	break
```

##### 参数

- `break属于语法`,**不需要加()即可执行**
- `无`**参数**

##### 返回值

- `break是语法`,**没有返回值**

#### 条件语句与countinue break 关系

- `continue与break`通常伴随**循环语句中的条件语句**,
  - `满足某些条件`可以**继续执行**,
  - `不满足`某些条件**提前结束循环**
- 在`while循环`中,`break语句`**优先于**`while逻辑体`的判断

#### 代码

```python
# coding:utf-8

users = [
    {'username': 'dewei', 'age': 33, 'top': 174, 'sex': '男'},
    {'username': '小慕', 'age': 10, 'top': 175, 'sex': '男'},
    {'username': 'xiaoyun', 'age': 18,'top': 165, 'sex': '女'},
    {'username': 'xiaogao', 'age': 18, 'top': 188, 'sex': '男'}
]

man = []
for user in users:
    if user.get('sex') == '女':
        continue
    man.append(user)
    print('%s 加入了帮忙的行列' % user.get('username'))

print(man)

l = range(100)

for i in l:
    if i == 80:
        print('-----')
        print('已经循环80次了,程序要退出啦')
        # break
    print(i)
else:
    print('循环正常退出了!')

print('start hello!')

```
