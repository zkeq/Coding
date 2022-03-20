---
title: Python 字典的keys函数
date: 2021-10-04 08:43:53
tags: [字典]
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-3/5.png
description: 本节课主要学习了:<br>字典的keys函数<br>以及相关的注意事项
categories: Python
---

### 字典的keys函数

#### 功能

- 获取当前字典中所有的`键(key)`

#### 用法

- `dict.keys()`  -> **无需传参**,返回一个**key**集合的`伪列表`
  - `伪列表`不具备列表的所有功能

#### 注意

- 使用`list()函数`可以将`伪列表`转换为`列表`
- 转换之后的列表具有`无重复成员`的特点

#### 代码

```python
# coding:utf-8

project = {'id': 1, 'project_name': 'ipad', 'price': 2200, 'count': 30}

# project_title = project.keys()
project_title = list(project.keys())
print(project_title)
# print(project_title[0])
# project_title.append('user')
print(type(project_title))

print(project_title[0])
print(project_title[3])
print(project_title[2: 6])
project_title.append('user')
print(project_title)

```
