---
title: Python 索引与切片之字符串
date: 2021-10-01 22:43:45
tags: [字符串]
categories: Python
description: 本节课主要学习了:<br>索引与切片在字符串中的运用<br>以及字符串的find与index函数
cover: https://ik.imagekit.io/zkeq/2021-10-1/4.png
---

## 索引与切片之字符串

#### 字符串的索引 , 获取

- 索引规则与列表相同
- 切片与索引的获取与列表相同
- **无法**通过索引修改与**删除**
- 字符串**不可修改**

#### 字符串的`find`与`index`函数

##### 功能

- **获取**元素的**索引位置**

##### 用法

- `string.index(item)`  -> `item`:查询个数的元素,返回索引位置
- `string.find(item)`     -> `item`:查询个数的元素,返回索引位置
- 返回的是第一个字母的位置

##### 区别

- `find`如果获取不到,返回`-1`
- `index`如果获取不到,直接`报错`

##### 好题

- `list1 = [1, 2, 3, 4, 2]`
- `print(list1.index(2))`

#### 代码

```python
# coding:utf-8

name = 'dewei'

temp = []
temp.extend(name)
# temp.append(name[0])
# temp.append(name[1])
# temp.append(name[2])
# temp.append(name[3])
# temp.append(name[4])
print(temp)
temp.reverse()
print(temp)
# new_name = '%s%s%s%s%s' % (temp[0], temp[1], temp[2], temp[3], temp[4])
new_name = name[::-1]
print(new_name)

print(new_name)
result = new_name.find('iew')
# result = new_name.index('iew')
print(result)

```
