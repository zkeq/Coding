---
title: Python 条件语句中的elif
date: 2021-10-06 18:05:07
tags: [条件语句]
description: 本节课主要学习了:<br>条件语句中的elif
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/5.jpg
---

### 条件语句中的`elif`

#### 什么是`elif`

- `elif`(或者如果)对于命题的**非第一次的多种判断** , **每一种判断条件**`对应一组业务代码`

#### 条件语句的说明

- 对于首次if判断不满足后 , 其他条件的判断语句

#### 用法

```python
if bool_result :
	do
elif bool_result:
	elifdo # 当前elif语句对应的语法块
elif bool_result:
	elifdo # 缩进等级与do语法块一致
else:
	elsedo
```

![2](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/2.jpg)

![3](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-6/3.png)

#### 参数

- `elifdo` : 当前`elif语句`**对应**的`python`代码

#### 返回值

-  `elif属于语法` , **没有返回值**

#### 说明

- 条件语句中`满足一个条件`后 , 将`退出`**当前条件语句**
- 每个条件语句中仅`有且必须有`一个`if语句` 
  - 可以有`0个或多个`  `elif语句`
  - 可以有`0个或1个` `else语句`
- 每个`条件语句`      `if`  **必须是第一个条件语句**

#### 练习

- 有一个班级,班级有很多同学,每个同学有如下信息: `名字 年龄 分数` , 现在来了一个插班生,将这个小明放到成绩单里,这里要做判断,如果班级里有小明,就说明重名了,那么要给新的小明的后面加个新字并存入
- 用列表与字典两种类型, 用两种方法做题

##### 代码

```python
# coding:utf-8

number = 10

if number > 10:
    print('number的值大于10')
elif 5 < number <= 10:
    print('number的值在5和10之间')
elif 5 >= number > 0:
    print('number的值是1~5')
else:
    print('number的值是0或者复数')

print('finish')

users = [
    ('dewei', 30, 90),
    ('xiaomu', 10, 99),
    ('xiaoming', 18, 100)
]

xiaoming = ['xiaoming', 19, 90]

if users[0][0] == xiaoming[0]:
    xiaoming[0] = '%s_new' % xiaoming[0]
    users.append(xiaoming)
elif users[1][0] == xiaoming[0]:
    xiaoming[0] = '%s_new' % xiaoming[0]
    users.append(xiaoming)
elif users[2][0] == xiaoming[0]:
    xiaoming[0] = '%s_new' % xiaoming[0]
    users.append(xiaoming)
else:
    users.append(xiaoming)

print(users)


users = {
    'dewei': {'age': 33, 'count': 90},
    'xiaomu': {'age': 10, 'count': 99},
    'xiaoming': {'age': 18, 'count': 100}
}

if xiaoming[0] in users:
    xiaoming[0] = '%s_new' % xiaoming[0]
else:
    users[xiaoming[0]] = {'age': xiaoming[1], 'count': xiaoming[2]}
print(users)

```
