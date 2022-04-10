---
title: Python 列表的添加-append函数
date: 2021-09-29 22:52:30
tags: [列表]
categories: Python
description: append函数
cover: https://ik.imagekit.io/zkeq/2021-9-29/4.png
---

### 列表的添加-append函数

#### 功能

- 将**一个**`元素`添加到当前`列表`中

#### 用法

- `list.append(new_item)`

#### 参数

- `new_item`:添加进列表的新的元素(成员)

#### 注意事项

- 被添加的元素只会被添加到末尾
- `append`函数是在`原有`列表的基础上添加,不需要额外添加新的变量

#### 代码

```python
# coding:utf-8

books = []
print(id(books))
books.append('python入门课程')
print(books)
print(id(books))

number = 1.1
tuple_test = (1, )
dict_test = {'name': 'dewei'}

books.append(number)
books.append(tuple_test)
books.append(dict_test)
books.append('diango')
books.append(1)

books.append('')
books.append(True)

print(books)
print(id(books))

book_1 = ['西游记', '红楼梦']
book_2 = ['三国演义', '水浒传']
print(id(book_1))
book_1 = book_1 + book_2  # id改变
book_1 += book_2  # id不变
print(book_1)
print(id(book_1))

```

