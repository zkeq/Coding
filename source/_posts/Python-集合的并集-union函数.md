---
title: Python 集合的并集--union函数
date: 2021-10-04 20:52:03
tags: [集合]
description: 本节课主要学习了:<br>union函数<br>并集的使用方法
categories: Python
cover: https://img.onmicrosoft.cn/2021-10-4/2.jpg
---

### 集合的并集--`union函数`

#### 什么是并集

- `a , b 两个集合`中所有的**元素**(去除重复)即为a与b的`并集`
- ![1](https://img.onmicrosoft.cn/2021-10-4/1.png)

#### 功能

- 返回**多个集合**的`并集`,即包含了**所有集合**的元素,**重复的元素**`只会出现一次`

#### 用法

- a_set.union(b_set...)

#### 参数

- `b_set...`: 与`当前集合`对比的**1或多个集合**

#### 返回值

- 返回**原始集合**与**对比集合**的`并集`

#### 代码

```python
# coding:utf-8

a_school = ['周五半天', '免费周末培训', '周五休息']
b_school = ['放学时间从6点改为5点', '作业少留点', '换舒服的座椅']
c_school = ['作业少留点', '周五半天', '伙食改善']

a_set = set(a_school)
b_set = set(b_school)
c_set = set(c_school)

print(a_set)
print(b_set)
print(c_set)

# help_date = a_set.union(b_set, c_set)
help_date = a_set.union(b_school, c_school)
print(help_date)
print(len(help_date))

```
