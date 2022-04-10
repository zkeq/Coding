---
title: Python 索引与切片之列表
date: 2021-10-01 22:43:04
tags: [列表]
categories: Python
description: 本节课主要学习了:<br>索引与切片在列表和元组中的运用<br>以及pop和del的用法
cover: https://ik.imagekit.io/zkeq/2021-10-1/4.png
---

### 索引与切片之列表

#### 什么是索引

- `字符串`,`列表`和`元组`

- 从最左边记录的位置就是`索引`
- `索引`用**数字**表示,起始从`0`开始
- 字符串,列表(元组)的`最大索引`是他们的**长度-1**

#### 什么是切片

- 索引用来对`单个元素`进行访问,切片则对`一定范围`内的元素进行访问
- 切片通过`冒号`在`中括号`内把相隔的两个索引查找出来  [0:10]
- **切片规则**为: `左含右不含`

#### 列表的索引,获取与修改

- `list[index] = new_item`为索引更改变量
  - **数据的修改只能在存在的索引范围内**
  - 列表无法通过添加新的索引的方式赋值
- `list.index(item)`查找元素的位置

#### 通过pop删除索引

##### 功能

- 通过索引删除并获取列表的元素

##### 用法

- `list.pop(index)`

##### 参数

- `index` : 删除列表的第几个索引
- **函数会删除该索引的元素并返回**
- **如果传入的index索引不存在则报错**

#### 通过del删除索引

- `del list[index]`

- **直接删除  无返回值**

- **如果index(索引)不存在则报错**

#### 索引在元组中的特殊性

- 可以和列表一样获取索引与切片索引
- 元组函数index和列表用法完全一致
- 无法通过索引修改与删除元素

#### 代码

```python
# coding:utf-8

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(len(numbers) - 1)
print(numbers[9])

print(id(numbers))

print('获取列表完整数据:', numbers[:])
print('另一种获取完整列表的方法', numbers[0:])
print('第三种获取列表的方法', numbers[:-1])
print('列表的反序:', numbers[::-1])
print('列表的反向获取(不完美,少一个最后元素):', numbers[-3:-1])
print('列表的反序获取(自己想的,好像很成功):', numbers[::-1][:3])
print('步长获取切片:', numbers[0: 8: 2])
print('切片生成空列表', numbers[0:0])
new_numbers = numbers[:4]
print(new_numbers)

numbers[3] = 'code'
print(numbers)
# numbers[10] = 1
# print(numbers)
numbers[2: 5] =  'a', 'b', 'c'
numbers[2: 5] = [ 'a', 'b', 'c']
print(numbers)

print(numbers.index('c'))

item = numbers.pop(4)
print(item, numbers, len(numbers))

del numbers[4]
print(numbers)

tuple_test = (1, 2, 3)
del tuple_test

```
